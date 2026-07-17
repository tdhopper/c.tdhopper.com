---
title: "How Do U Sound?"
date: 2026-07-17T09:00:00.000-04:00
description: A little side project for figuring out which of your microphones actually sounds best.
categories:
  - Personal Update
tags:
  - side-projects
  - audio
---
I spend a lot of my life on video calls, and I own more microphones than any reasonable person should. What I never actually knew was which one sounded *best*—my laptop mic, my webcam, the fancy USB thing, the headset. Your coworkers aren't going to tell you. So I built something that will.

[**How Do U Sound?**](https://howdousound.com) is a free microphone test that runs entirely in your browser. It walks you through a short guided recording—talk for a bit, whisper, then clap—and records every input on your computer at the same time. Then it scores each one on signal-to-noise, noise floor, room echo, plosives, and a few other things, ranks them, and lets you play them back side by side.

The part I'm happiest about: your audio never leaves your machine. There's no backend. All the recording and analysis happen client-side, and nothing gets uploaded anywhere.

It started as a Python script for my own curiosity and turned into a little single-page app. Go find out [how you sound](https://howdousound.com), and maybe retire that microphone you've been unknowingly subjecting everyone to.
