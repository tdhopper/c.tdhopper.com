---
title: Accessing my home server around the world with custom domain names
date: 2024-12-20T11:47:00.000Z
description: Using Tailscale, Caddy, and Cloudflare to access my Synology home
  server from anywhere in the world
categories: Article
image: /images/network.png
---
Last year, I invested in a [Synology NAS](https://www.synology.com/) as a home server and backup drive. Like many Synology users, I've quickly found it has many more uses than I initially expected. Beyond the usual file storage and Time Machine backups, my Synology has become the backbone of my home technology.

On my NAS, I use [Pihole](https://https://pi-hole.net) for network-wide ad blocking. A Webdav server syncs my [Devonthink](https://devonthink.com) databases to manage my research and documents. I back up my Apple Photos library on [Synology Photos](https://www.synology.com/en-us/dsm/feature/photos). I'm transitioning my home camera setup to [Surveillance Station](https://www.synology.com/en-global/surveillance) (so all my footage is now local). Using Synology's Docker support, I run [OpenAudible](https://openaudible.org) to manage my audiobook collection. I run [Synology MailPlus](https://www.synology.com/en-us/dsm/feature/mailplus) to back up my email. And there's more!

Of course, now that I have all these services running, I want to access them from anywhere.
Synology offers the [QuickConnect](https://kb.synology.com/en-us/DSM/help/DSM/AdminCenter/connection_quickconnect?version=7) service, but I wanted something more secure and independent.

While browsing Synology's subreddit and Facebook Groups, I discovered Tailscale, a mesh VPN service for solving my exact problem. After (easily) installing Tailscale on my Synology, personal computers, and phone, my devices are securely connected from anywhere in the world as if they were on the same local network. With Tailscale, my NAS has a private, static IP address through which I can access the services via their dedicated ports.

To make my services more accessible, I purchased a domain name through [Cloudflare](https://cloudflare.com). I created a subdomain with an A record pointing to my always-on Mac Mini's Tailscale IP address for each of my services. This IP address is accessible from anywhere but only through my devices authenticated with Tailscale.

I run a [Caddy server](https://caddyserver.com) on my Mac Mini as a reverse proxy to map the subdomains to my Synology services. The magic of Caddy is that it automatically manages SSL certificates through Let's Encrypt, giving me https access to my services.

Caddy was painless to install with Homebrew and easy to configure with a Caddyfile. Here's an example of my Caddyfile:

```
cat Caddyfile
{
	email <MY_EMAIL>
}
*.mydomain.com mydomain.com {
	tls {
		dns cloudflare <CLOUDFLARE_API_TOKEN>
	}
}
pihole.mydomain.com {
	reverse_proxy 192.168.68.21:8765
}
webdav.mydomain.com {
	reverse_proxy https://192.168.68.21:5006 {
		transport http {
			tls_insecure_skip_verify
		}
	}
}
```

The last piece of the puzzle involved configuring the Synology to know these subdomains. In the DSM Control Panel, under the Login Portal's Applications tab, I set up the specific subdomains that tell Synology how to launch applications like MailPlus and Synology Photos. With this final step complete, I don't need to remember IP addresses and ports. I can access all my services through simple, memorable domain names from anywhere in the world.

This setup has transformed how I interact with my home server, making it both more powerful and more convenient to use. The combination of Tailscale's security, Cloudflare's domain management, and Caddy's reverse proxy capabilities has created a easy to configure and user-friendly system that serves all my home server needs.
