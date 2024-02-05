---
title: No Silver Bullet
date: Fri, 18 Nov 2022 20:15:17 +0000
---

In 1986, Fred Brooks published "No Silver Bullet—Essence and Accident in Software Engineering" where he argues that there is no silver bullet that "to make software costs drop as rapidly as computer hardware costs do".

Software progress doesn't follow Moore's Law.

Managers characterize software projects as "usually innocent and straightforward, but... capable of becoming a monster of missed schedules, blown budgets, and flawed products." 

Ouch.

The beginning of hope [in creating software], however, is realizing "that progress would be made stepwise, at great effort, and that a persistent, unremitting care."

Software's difficulty has two aspects "essence, the difficulties inherent in the nature of software, and accidents, those difficulties that today attend its production but are not inherent."

⚠️Brooks' central thesis:

> I ʙᴇʟɪᴇᴠᴇ ᴛʜᴇ ʜᴀʀᴅ ᴘᴀʀᴛ ᴏғ ʙᴜɪʟᴅɪɴɢ sᴏғᴛᴡᴀʀᴇ to be the specification, design, and testing of this conceptual construct, not the labor of representing it and testing the fidelity of the representation.

▶ Essential challenges of software have 4 aspects: complexity, conformity, changeability, and invisibility.

1. Complexity: "Software entities are more complex for their size than perhaps any other human construct because no two parts are alike." Because complexity is essential to software, in trying to abstract away complexity, you "often abstract away its essence."
2. Conformity: Our software is often forced to conform to other interfaces (perhaps because it comes after hardware, or perhaps simply because its "perceived as the most conformable"). "This complexity cannot be simplified out by any redesign of the software alone."
3. Changeability: "Aʟʟ sᴜᴄᴄᴇssғᴜʟ sᴏғᴛᴡᴀʀᴇ ɢᴇᴛs ᴄʜᴀɴɢᴇᴅ." When software succeeds, people push the boundaries of what it was designed for. And the physical world around software changes, so software must adapted (e.g. a new model of hardware is released).
4. Invisibility: "The reality of software is not inherently embedded in space." Representations like directed graphs generally prove inadequate for fully representing software.

Progress has been made in removing 𝑎𝑐𝑐𝑖𝑑𝑒𝑛𝑡𝑎𝑙 difficulties of software: 

1. High-level languages
2. Time sharing systems
3. Unified programming environments

Brooks saw other things coming that could improve software building, but he
was skeptical about how monumental they would be: artificial intelligence,
graphical programming, better code editors (e.g. language specific features),
faster workstations.

Some means of attacking the 𝑒𝑠𝑠𝑒𝑛𝑡𝑖𝑎𝑙 complexity

* Buy vs. build: "The cost of software has always been development cost, not
replication cost." Thus, if we 𝑐𝑎𝑛 buy it, we probably should.

* Requirements refinement and rapid prototyping: "Tʜᴇ ʜᴀʀᴅᴇsᴛ sɪɴɢʟᴇ ᴘᴀʀᴛ ᴏғ
ʙᴜɪʟᴅɪɴɢ ᴀ sᴏғᴛᴡᴀʀᴇ sʏsᴛᴇᴍ ɪs ᴅᴇᴄɪᴅɪɴɢ ᴘʀᴇᴄɪsᴇʟʏ ᴡʜᴀᴛ ᴛᴏ ʙᴜɪʟᴅ." "Therefore,
the most important function that the software builder performs for the client
is the 𝑖𝑡𝑒𝑟𝑎𝑡𝑖𝑣𝑒 𝑒𝑥𝑡𝑟𝑎𝑐𝑡𝑖𝑜𝑛 𝑎𝑛𝑑 𝑟𝑒𝑓𝑖𝑛𝑒𝑚𝑒𝑛𝑡 𝑜𝑓 𝑡ℎ𝑒 𝑝𝑟𝑜𝑑𝑢𝑐𝑡 𝑟𝑒𝑞𝑢𝑖𝑟𝑒𝑚𝑒𝑛𝑡𝑠."

Brooks again: 

> I would go a step further and assert that it is really impossible for a
client, even working with a software engineer, to specify completely,
precisely, and correctly the exact requirements of a modern software product
before trying some versions of the product.

To serve iterative requirements gathering, a goal should be getting something
working as quickly as possible.

(A side benefit of this is it improves morale for developers. "Enthusiasm
jumps when there is a running system, even a simple one.")

Great software design comes from great designers. Software is a creative
process. "Sound methodology can empower and liberate the creative mind; it
cannot inflame or inspire the drudge." Organizations would do well to focus on
identifying great software designers and working hard to "grow great
designers".

Brooks:

> Skepticism is not pessimism, however. ... A disciplined, consistent effort to
develop, propagate, and exploit these innovations should indeed yield an
order-of-magnitude improvement. There is no royal road, but there is a road.

[Read all of Brooks' "No Silver Bullet"
here](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf).
