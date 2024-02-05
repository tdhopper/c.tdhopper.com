---
title: Automating Python with Ansible
date: Thu, 23 Mar 2017 15:11:00 +0000
categories:
  - tutorial
tags:
    - python
---
I wrote [a few months back](/blog/data-scientists-need-more-automation/) about how data scientists need more automation. In
particular, I suggested that data scientists would be wise to learn more about
automated system configuration and automated deployments.

In an attempt to take my own advice, I've finally been making myself learn
[Ansible](https://www.ansible.com/). It turns out that a great way to learn it
is to sit down and read through the docs, front to back; I commend that tactic
to you. I also put together this tutorial to walk through a practical example
of how a working data scientist might use this powerful tool.

What follows is an Ansible guide that will take you from installing Ansible to
automatically deploying a long-running Python to a remote machine and running
it in a [Conda environment](https://conda.io/docs/using/envs.html) using
[supervisord](http://supervisord.org/). It presumes your development machine
is on OS X and the remote machine is Debian-like; however, it shouldn't
require too many changes to run it on other systems.

I wrote this post in a Jupyter notebook with a Bash kernel. You can find the
notebook, Ansible files, and installation directions on [my
Github](https://github.com/tdhopper/automating_python).

## Ansible

Ansible provides "human readable automation" for "app deployment" and
"configuration management". Unlike tools like Chef, it doesn't require an
agent to be running on remote machines. In short, it translates declarative
YAML files into shell commands and runs them on your machines over SSH.

Ansible is backed by Red Hat and has a great
[website](https://www.ansible.com/).

## Installing Ansible with Homebrew

First, you'll need to [install
Ansible](http://docs.ansible.com/ansible/intro_installation.html). On a Mac, I
recommend doing this with [Homebrew](https://brew.sh/).

    
    
    brew install ansible
    
    
    
    Warning: ansible-2.1.0.0 already installed
    Warning: You are using OS X 10.12.
    We do not provide support for this pre-release version.
    You may encounter build failures or other breakages.
    

## Quickstart

Soon, I'll show you how to put write an Ansible YAML file. However, Ansible
also allows you specify tasks from the command line.

Here's how we could use Ansible ping our local host:

    
    
    ansible -i 'localhost,' -c local -m ping all
    
    
    
    ansible -i 'localhost,' -c local -m ping all
    localhost | SUCCESS => {
        "changed": false,
        "ping": "pong"
    }
    

This command calls ansible and tells it:

  * To use `localhost` as it's inventory (`-i`). Inventory is Ansible speak for machine or machines you want to be able to run commands on. 
  * To connect (`-c`) locally (`local`) instead of over SSH. 
  * To run the [`ping` module](http://docs.ansible.com/ansible/ping_module.html) (`-m`) to test the connection.
  * To run the command on `all` hosts in the inventory (in this case, our inventory is just the `localhost`).

[Michael Booth](https://web.archive.org/web/20170330023127/http://www.mechanicalfish.net/start-learning-ansible-with-one-line-and-no-files/) has a
[post](https://web.archive.org/web/20170330023127/http://www.mechanicalfish.net/start-learning-ansible-with-one-line-and-no-files/) that goes into more detail about
this command.

Behind the scenes, Ansible is turning this `-m ping` command into shell
commands. (Try running with the `-vvv` flag to see what's happening behind the
scenes.) It can also execute arbitrary commands; by default, it'll use the
Bourne shell `sh`.

    
    
    ansible all -i 'localhost, ' -c local -a "/bin/echo hello"
    

## Setting up an Ansible Inventory

Instead of specifying our inventory with the `-i` flag each time, we should
specify an Ansible inventory file. This file is a text file specifying
machines you have SSH access to; you can also group machines under bracketed
headings. For example:

    
    
    mail.example.com
    
    [webservers]
    foo.example.com
    bar.example.com
    
    [dbservers]
    one.example.com
    two.example.com
    three.example.com

Ansible has to be able to connect to these machines over SSH, so you will
likely need to have relevant entries in your [`.ssh/config` file](http://nerderati.com/2011/03/17/simplify-your-life-with-an-ssh-config-file/).

By default, the Ansible CLI will look for a system-wide Ansible inventory file
in `/etc/ansible/hosts`. You can also specify an alternative path for an
intentory file with the `-i` flag.

For this tutorial, I'd like to have an inventory file specific to the project
directory without having to specify it each time we call Ansible. We can do
this by creating a file called `./ansible.cfg` and set the name of our local
inventory file:

    
    
    cat ./ansible.cfg
    
    
    
    cat ./ansible.cfg
    [defaults]
    inventory = ./hosts

You can check that Ansible is picking up your config file by running `ansible
--version`.

    
    
    ansible --version
    
    
    
    ansible --version
    ansible 2.1.0.0
      config file = /Users/tdhopper/repos/automating_python/ansible.cfg
      configured module search path = Default w/o overrides
    

For this example, I just have one host, a [Digital Ocean
VPS](https://www.digitalocean.com/). To run the examples below, you should
create a VPS instance on Digital Ocean, [Amazon](https://amazonlightsail.com),
or elsewhere; you'll want to configure it for [passwordless authentication](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2). I have an entry like this in my `~/.ssh/hosts` file:

    
    
    Host digitalocean
      HostName 45.55.395.23
      User root
      Port 22
      IdentityFile /Users/tdhopper/.ssh/id_rsa
      ForwardAgent yes

and my intentory file (`~/hosts`) is just

    
    
    digitalocean

Before trying ansible, you should ensure that you can connect to this host:

    
    
    ssh digitalocean echo 1
    
    
    
    ssh digitalocean echo 1
    1
    

Now I can verify that Ansible can connect to my machine by running the ping
command.

    
    
    ansible all -m ping
    
    
    
    ansible all -m ping
    digitalocean | SUCCESS => {
        "changed": false,
        "ping": "pong"
    }
    

We told Ansible to run this command on `all` specified hosts in the inventory.
It found our inventory by loading the `ansible.cfg` which specified `./hosts`
as the inventory file.

It's possible that this will fail for you even if you can SSH into the
machine. If the error is something like `/bin/sh: 1: /usr/bin/python: not
found`, this is because your VPS doesn't have Python installed on it. You can
[install it with Ansible](http://stackoverflow.com/questions/32429259/ansible-fails-with-bin-sh-1-usr-bin-python-not-found), but you may just want to
manually run `sudo apt-get -y install python` on the VPS to get started.

## Writing our first Playbook

While adhoc commands will often be useful, the real power of Ansible comes
from creating repeatable sets of instructions called
[Playbooks](http://docs.ansible.com/ansible/playbooks.html).

A playbook contains a list of "plays". Each play specifies a set of tasks to
be run and which hosts to run them on. A "task" is a call to an Ansible
module, like the "ping" module we've already seen. Ansible [comes packaged
with about 1000
modules](http://docs.ansible.com/ansible/list_of_all_modules.html) for all
sorts of use cases. You can also extend it with your own
[modules](http://docs.ansible.com/ansible/dev_guide/developing_modules.html)
and [roles](http://docs.ansible.com/ansible/playbooks_roles.html#roles).

Our first playbook will just execute the ping module on all our hosts. It's a
playbook with a single play comprised of a single task.

    
    
    cat ping.yml
    
    
    
    cat ping.yml
    ---
    - hosts: all
      tasks:
      - name: ping all hosts
        ping:

We can run our playbook with the `ansible-playbook` command.

    
    
    ansible-playbook ping.yml
    
    
    
    ansible-playbook ping.yml
     ____________
    < PLAY [all] >
     ------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    
     ______________
    < TASK [setup] >
     --------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    
    ok: [digitalocean]
     _______________________
    < TASK [ping all hosts] >
     -----------------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    
    ok: [digitalocean]
     ____________
    < PLAY RECAP >
     ------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    
    digitalocean               : ok=2    changed=0    unreachable=0    failed=0
    
    

You might wonder why there are cows on your screen. You can find out
[here](https://michaelheap.com/cowsay-and-ansible/). However, the important
thing is that our task was executed and returned successfully.

We can override the hosts list for the play with the `-i` flag to see what the
output looks like when Ansible fails to run the play because it can't find the
host.

Let's work now on installing the dependencies for our Python project.

## Installing supervisord

"Supervisor is a client/server system that allows its users to monitor and
control a number of processes on UNIX-like operating systems." We'll use it to
run and monitor our Python process.

On a Debian-like system, we can install it with APT. In the Ansible DSL that's
just:

    
    
    - name: Install supervisord
      sudo: yes
      apt:
        name: supervisor
        state: present
        update_cache: yes

You can read more about the [apt module
here](http://docs.ansible.com/ansible/apt_module.html).

Once we have it installed, we can start it with this task:

    
    
    - name: Start supervisord
      sudo: yes
      service:
        name: "supervisor"
        state: running
        enabled: yes

This uses the [service](http://docs.ansible.com/ansible/service_module.html)
module.

We could add these these tasks to a playbook file (like ping.yml), but what
maybe we will want to share it among multiple playbooks? For this, Ansible has
a construct called
[Roles](http://docs.ansible.com/ansible/playbooks_roles.html). A role is a
collection of "variable values, certain tasks, and certain handlers – or just
one or more of these things". (You can learn more about variables and handlers
in the Ansible docs.)

Roles are organized as subfolders of a folder called "Roles" in the working
directory. The rapid proliferation of folders in Ansible organization can be
overwhelming, but a very simple rule is just a file called `main.yml` nestled
several folders deep. In our case, it's in
`./roles/supervisor/tasks/main.yml`.

Check out [the
docs](http://docs.ansible.com/ansible/playbooks_roles.html#roles) to learn
more about role organization.

Here's what our role looks like:

    
    
    cat ./roles/supervisor/tasks/main.yml
    
    
    
    cat ./roles/supervisor/tasks/main.yml
    ---
    
    - name: Install supervisord
      become: true
      apt:
        name: supervisor
        state: present
        update_cache: yes
      tags:
        supervisor
    - name: Start supervisord
      become: true
      service:
        name: "supervisor"
        state: running
        enabled: yes
      tags:
        supervisor
    
    

Note that I added `tags:` to the task definitions.
[Tags](http://docs.ansible.com/ansible/playbooks_tags.html) just allow you to
run a portion of a playbook instead of the whole thing with the `--tags` flag
for `ansible-playbook`.

Now that we have the supervisor install encapsulated in a role, we can write a
simple playbook to run the role.

    
    
    cat supervisor.yml
    
    
    
    cat supervisor.yml
    ---
    - hosts: digitalocean
      roles:
        - role: supervisor
    
    
    
    ansible-playbook supervisor.yml
    
    
    
    ansible-playbook supervisor.yml
     _____________________
    < PLAY [digitalocean] >
     ---------------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    
     ______________
    < TASK [setup] >
     --------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    
    ok: [digitalocean]
     _________________________________________
    < TASK [supervisor : Install supervisord] >
     -----------------------------------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    
    changed: [digitalocean]
     _______________________________________
    < TASK [supervisor : Start supervisord] >
     ---------------------------------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    
    changed: [digitalocean]
     ____________
    < PLAY RECAP >
     ------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||
    
    digitalocean               : ok=3    changed=2    unreachable=0    failed=0
    
    

## Installing Conda with Ansible Galaxy

Next we want to ensure that Conda installed on our system. We could write our
own role to follow the [recommended
process](https://www.continuum.io/downloads). However, Ansible has a helpful
tool to help us avoid reinventing the wheel by allowing users to share roles;
this is called [Ansible Galaxy](https://galaxy.ansible.com/).

You can search the Galaxy website for
[miniconda](https://galaxy.ansible.com/list#/roles?page=1&page_size=10&autocomplete=miniconda)
and see that a handful of roles for installing Miniconda exist. I liked [this
one](https://galaxy.ansible.com/andrewrothstein/miniconda/).

We can install the role locally using the `ansible-galaxy` command line tool.

    
    
    ansible-galaxy install -f andrewrothstein.miniconda
    

You can have the role installed wherever you want (run `ansible-galaxy install
--help` to see how, but by default they'll go to
`/usr/local/etc/ansible/roles/`.

    
    
    ls -lh /usr/local/etc/ansible/roles/andrewrothstein.miniconda
    
    
    
    ls -lh /usr/local/etc/ansible/roles/andrewrothstein.miniconda
    total 32
    -rw-rw-r--  1 tdhopper  admin   1.1K Jan 16 16:52 LICENSE
    -rw-rw-r--  1 tdhopper  admin   666B Jan 16 16:52 README.md
    -rw-rw-r--  1 tdhopper  admin   973B Jan 16 16:52 circle.yml
    drwxrwxr-x  3 tdhopper  admin   102B Mar 21 11:33 defaults
    drwxrwxr-x  3 tdhopper  admin   102B Mar 21 11:33 handlers
    drwxrwxr-x  4 tdhopper  admin   136B Mar 21 11:33 meta
    drwxrwxr-x  3 tdhopper  admin   102B Mar 21 11:33 tasks
    drwxrwxr-x  3 tdhopper  admin   102B Mar 21 11:33 templates
    -rw-rw-r--  1 tdhopper  admin    57B Jan 16 16:52 test.yml
    drwxrwxr-x  3 tdhopper  admin   102B Mar 21 11:33 vars
    

You can look at the `tasks/main.yml` to see the core logic of installing
Miniconda. It has tasks to download the installer, run the installer, delete
the installer, run `conda update conda`, and make `conda` the default system
Python.

    
    
    cat /usr/local/etc/ansible/roles/andrewrothstein.miniconda/tasks/main.yml
    
    
    
    /main.ymllocal/etc/ansible/roles/andrewrothstein.miniconda/tasks
    ---
    # tasks file for miniconda
    - name: download installer...
      become: yes
      become_user: root
      get_url:
        url: '{{miniconda_installer_url}}'
        dest: /tmp/{{miniconda_installer_sh}}
        timeout: '{{miniconda_timeout_seconds}}'
        checksum: '{{miniconda_checksum}}'
        mode: '0755'
    
    - name: installing....
      become: yes
      become_user: root
      command: /tmp/{{miniconda_installer_sh}} -b -p {{miniconda_parent_dir}}/{{miniconda_name}}
      args:
        creates: '{{miniconda_parent_dir}}/{{miniconda_name}}'
    
    - name: deleting installer...
      become: yes
      become_user: root
      when: miniconda_cleanup
      file:
        path: /tmp/{{miniconda_installer_sh}}
        state: absent
    
    - name: link miniconda...
      become: yes
      become_user: root
      file:
        dest: '{{miniconda_parent_dir}}/miniconda'
        src: '{{miniconda_parent_dir}}/{{miniconda_name}}'
        state: link
    
    - name: conda updates
      become: yes
      become_user: root
      command: '{{miniconda_parent_dir}}/miniconda/bin/conda update -y --all'
    
    - name: make system default python etc...
      when: miniconda_make_sys_default
      become: yes
      become_user: root
      with_items:
        - etc/profile.d/miniconda.sh
      template:
        src: '{{item}}.j2'
        dest: /{{item}}
        mode: 0644
    
    

### Overriding Ansible Variables

Once a role is installed locally, you can add it to a play just like you can
with roles you wrote. Installing Miniconda is now as simple as:

    
    
      roles:
        - role: andrewrothstein.miniconda

Before we add that to a playbook, I want to customize _where_ miniconda is
installed. If you look back at the `main.yml` file above, you see a bunch of
things surrounded in double brackets. These are variables (in the [Jinja2
template language](http://jinja.pocoo.org/docs/2.9/)). From the play, we can
see that Miniconda will be installed at
`{{miniconda_parent_dir}}/{{miniconda_name}}`. The role defines these
variables in `/andrewrothstein.miniconda/defaults/main.yml`. We can override
the default variables by specifying them in our play.

A play to install miniconda could look like this:

    
    
    ---
    - hosts: digitalocean
      vars:
        conda_folder_name: miniconda
        conda_root: /root
      roles:
        - role: andrewrothstein.miniconda
          miniconda_parent_dir: "{{ conda_root }}"
          miniconda_name: "{{ conda_folder_name }}"

I added this to
[`playbook.yml`](https://github.com/tdhopper/automating_python/blob/master/playbook.yml).

We now know how to use Ansible to start and run supervisord and to install
Miniconda. Let's see how to use it to deploy and start our application.

## Deploy Python Application

There are countless ways to deploy a Python application. We're going to see
how to use Ansible to deploy from Github.

I created a little project called
[long_running_python_application](https://github.com/tdhopper/long_running_python_process).
It has a
[`main.py`](https://github.com/tdhopper/long_running_python_process/blob/master/main.py)
that writes a log line to stdout every 30 seconds; that's it. It also includes
a [Conda environment
file](https://github.com/tdhopper/long_running_python_process/blob/master/environment.yml)
specifying the dependencies and [a shell
script](https://github.com/tdhopper/long_running_python_process/blob/master/run.sh)
that activates the environment and runs the program.

We're going to use Ansible to

  1. Clone the repository into our remote machine.
  2. Create a Conda environment based on the environment.yml file. 
  3. Create a supervisord file for running the program.
  4. Start the supervisord job.

### Clone the repository

Cloning a repository with Ansible is easy. We just use the [`git`
module](http://docs.ansible.com/ansible/git_module.html). This play will clone
the repo into the specified directory. The `update: yes` flag tells Ansible to
update the repository from the remote if it has already been cloned.

    
    
    ---
    - hosts: digitalocean
      vars:
        project_repo: git://github.com/tdhopper/long_running_python_process.git
        project_location: /srv/long_running_python_process
      tasks:
        - name: Clone project code.
          git:
            repo: "{{ project_repo }}"
            dest: "{{ project_location }}"
            update: yes

### Creating the Conda Environment

Since we've now installed conda and cloned the repository with an
`environment.yml` file, we just need to run `conda env update` from the
directory containing the environment spec. Here's a play to do that:

    
    
    ---
    - hosts: digitalocean
      vars:
        project_location: /srv/long_running_python_process
      tasks:
        - name: Create Conda environment from project environment file.
          command: "{{conda_root}}/{{conda_folder_name}}/bin/conda env update"
          args:
            chdir: "{{ project_location }}"

It uses the [`command`
module](http://docs.ansible.com/ansible/command_module.html) which just
executes a shell command in the desired directory.

### Create a Supervisord File

By default, supervisord will [look in `/etc/supervisor/conf.d/` for
configuration](http://supervisord.org/configuration.html) on which programs to
run.

We need to put a file in there that tells supervisord to run our `run.sh`
script. Ansible has an integrated way of setting up templates which can be
placed on remote machines.

I put a supervisord job template in the `./templates` folder.

    
    
    cat ./templates/run_process.j2
    
    
    
    cat ./templates/run_process.j2
    [program:{{ program_name }}]
    command=sh run.sh
    autostart=true
    directory={{ project_location }}
    stderr_logfile=/var/log/{{ program_name }}.err.log
    stdout_logfile=/var/log/{{ program_name }}.out.log
    

This is a is normal INI-style config file, except it includes Jinja2
variables. We can use the Ansible [`template`
module](http://docs.ansible.com/ansible/template_module.html) to create a task
which fills in the variables with information about our program and copies it
into the `conf.d` folder on the remote machine.

The play for this would look like:

    
    
    - hosts: digitalocean
      vars:
        project_location: /srv/long_running_python_process
        program_name: long_running_process
        supervisord_configs_path: /etc/supervisor/conf.d
      tasks:
        - name: Copy supervisord job file to remote
          template:
            src: ./templates/run_process.j2
            dest: "{{ supervisord_configs_path }}/run_process.conf"
            owner: root

### Start the supevisord job

Finally, we just need to tell supervisord on our remote machine to start the
job described by `run_process.conf`.

Instead of issuing our own shell commands via Ansible, we can use the
[`supervisorctl`
module](http://docs.ansible.com/ansible/supervisorctl_module.html). The task
is just:

    
    
        - name: Start job
          supervisorctl:
            name: "{{ program_name }}"
            state: present

`state: present` ensures that Ansible calls `supervisorctl reread` to load a
new config. Because our config has `autostart=true`, supervisor will start it
as soon as the task is added.

## The Big Playbook!

We can take everything we've described above and put it in one playbook.

This playbook will:

  * Install Miniconda using the role from Ansible Galaxy.
  * Install and start Supervisor using the role we created. 
  * Clone the Github project we want to run. 
  * Create a Conda environment based on the environment.yml file. 
  * Create a supervisord file for running the program.
  * Start the supervisord job.

All of this will be done on the host we specify (`digitalocean`).

    
    
    cat playbook.yml
    
    
    
    cat playbook.yml
    ---
    - hosts: digitalocean
      vars:
        project_repo: git://github.com/tdhopper/long_running_python_process.git
        project_location: /srv/long_running_python_process
        program_name: long_running_process
        conda_folder_name: miniconda
        conda_root: /root
        supervisord_configs_path: /etc/supervisor/conf.d
      roles:
        - role: andrewrothstein.miniconda
          miniconda_parent_dir: "{{ conda_root }}"
          miniconda_name: "{{ conda_folder_name }}"
          tags:
            miniconda
        - role: supervisor
      tasks:
        - name: Clone project code.
          git:
            repo: "{{ project_repo }}"
            dest: "{{ project_location }}"
            update: yes
          tags:
            git
        - name: Create Conda environment from project environment file.
          command: "{{conda_root}}/{{conda_folder_name}}/bin/conda env update"
          args:
            chdir: "{{ project_location }}"
          tags:
            conda
        - name: Copy supervisord job file to remote
          template:
            src: ./templates/run_process.j2
            dest: "{{ supervisord_configs_path }}/run_process.conf"
            owner: root
          tags:
            conf
        - name: Start job
          supervisorctl:
            name: "{{ program_name }}"
            state: present
          tags:
            conf

To configure our machine, we just have to run `ansible-playbook playbook.yml`.

    
    
    ANSIBLE_NOCOWS=1 ansible-playbook playbook.yml
    
    
    
    ANSIBLE_NOCOWS=1 ansible-playbook playbook.yml
    
    PLAY [digitalocean] ************************************************************
    
    TASK [setup] *******************************************************************
    ok: [digitalocean]
    
    TASK [andrewrothstein.unarchive-deps : resolve platform specific vars] *********
    
    TASK [andrewrothstein.unarchive-deps : install common pkgs...] *****************
    changed: [digitalocean] => (item=[u'tar', u'unzip', u'gzip', u'bzip2'])
    
    TASK [andrewrothstein.bash : install bash] *************************************
    ok: [digitalocean]
    
    TASK [andrewrothstein.alpine-glibc-shim : fix alpine] **************************
    skipping: [digitalocean]
    
    TASK [andrewrothstein.miniconda : download installer...] ***********************
    changed: [digitalocean]
    
    TASK [andrewrothstein.miniconda : installing....] ******************************
    changed: [digitalocean]
    
    TASK [andrewrothstein.miniconda : deleting installer...] ***********************
    skipping: [digitalocean]
    
    TASK [andrewrothstein.miniconda : link miniconda...] ***************************
    changed: [digitalocean]
    
    TASK [andrewrothstein.miniconda : conda updates] *******************************
    changed: [digitalocean]
    
    TASK [andrewrothstein.miniconda : make system default python etc...] ***********
    skipping: [digitalocean] => (item=etc/profile.d/miniconda.sh) 
    
    TASK [supervisor : Install supervisord] ****************************************
    ok: [digitalocean]
    
    TASK [supervisor : Start supervisord] ******************************************
    ok: [digitalocean]
    
    TASK [Clone project code.] *****************************************************
    changed: [digitalocean]
    
    TASK [Create Conda environment from project environment file.] *****************
    changed: [digitalocean]
    
    TASK [Copy supervisord job file to remote] *************************************
    changed: [digitalocean]
    
    TASK [Start job] ***************************************************************
    changed: [digitalocean]
    
    PLAY RECAP *********************************************************************
    digitalocean               : ok=13   changed=9    unreachable=0    failed=0
    
    

See that the `PLAY RECAP` shows that everything was OK, no systems were
unreachable, and no tasks failed.

We can verify that the program is running without error:

    
    
    ssh digitalocean sudo supervisorctl status
    
    
    
    ssh digitalocean sudo supervisorctl status
    long_running_process             RUNNING   pid 4618, uptime 0:01:34
    
    
    
    ssh digitalocean cat /var/log/long_running_process.out.log
    
    
    
    ssh digitalocean cat /var/log/long_running_process.out.log
    INFO:root:Process ran for the 1th time
    INFO:root:Process ran for the 2th time
    INFO:root:Process ran for the 3th time
    INFO:root:Process ran for the 4th time
    

If your lucky (i.e. your systems and networks were setup sufficiently similar
to mine), you can run this exact same command to configure and start a process
on your own system. Moreover, you could use this exact same command to start
this program on an arbitrary number of machines by simply adding more hosts to
your inventory and play spec!

## Conclusion

Ansible is a powerful, customizable tool. Unlike some similar tools, it
requires very little setup to start using it. As I've learned more about it,
I've seen more and more ways in which I could've used it in copious projects
in the past; I intend to make it a regular part of my toolkit. (Historically
I've done this kind of thing with hacky combinations of shell scripts and
[Fabric](http://www.fabfile.org/); Ansible would often be better.)

This tutorial just scratches the surface of the Ansible functionality. If you
want to learn more, I again recommend reading through the
[docs](http://docs.ansible.com/ansible/index.html); they're very good. Of
course, you should start writing and running your own playbooks as soon as
possible! I also liked [this tutorial from Server Admin for
Programmers](https://serversforhackers.com/an-ansible-tutorial). If you want
to compare Ansible to alternatives, the [Taste Test book](https://valdhaus.co/books/taste-test-puppet-chef-salt-stack-ansible.html) by Matt Jaynes looks promising. For more on Supervisor,
[serversforhackers.com](https://serversforhackers.com/monitoring-processes-with-supervisord) has a nice tutorial, and [its docs are
thorough](http://supervisord.org/).

> I wrote a tutorial on using [@ansible](https://twitter.com/ansible) and
> supervisor to deploy a long running Python process to a
> [@digitalocean](https://twitter.com/digitalocean)
> VPS.<https://t.co/uPC8bY5haD>
>
> — Tim Hopper 🔭 (@tdhopper) [March 24,
> 2017](https://twitter.com/tdhopper/status/845256769429483520)
