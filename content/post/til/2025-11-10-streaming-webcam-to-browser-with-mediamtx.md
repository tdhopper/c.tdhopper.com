---
title: Streaming Webcam to Browser with MediaMTX
slug: streaming-webcam-to-browser-with-mediamtx
categories:
    - Today I Learned
image: /images/til.png
date: 2025-11-10
description: How to make your webcam accessible via browser on your local network using ffmpeg and MediaMTX
---

I wanted to view my webcam feed from a browser on my local network. This turns out to be useful for testing video conferencing setups, monitoring a room, or checking camera angles before a recording. The challenge is that browsers can't directly access webcam RTSP streams, but they do support WebRTC.

After some tinkering, I found a clean solution: [ffmpeg](https://ffmpeg.org/) captures the webcam and streams it via RTSP, while [MediaMTX](https://github.com/bluenviron/mediamtx) converts that RTSP feed to WebRTC that browsers can consume.

## Installation

```bash
brew install ffmpeg mediamtx
```

## Setup

You need to run two processes in parallel.

### 1. Start MediaMTX server

```bash
mediamtx
```

This starts the MediaMTX server which will handle the protocol conversion and serve the web interface.

### 2. Stream webcam with ffmpeg

In a separate terminal:

```bash
ffmpeg -f avfoundation -framerate 30 -i "0" \
       -vcodec libx264 -preset ultrafast -tune zerolatency \
       -f rtsp rtsp://127.0.0.1:8554/webcam
```

The `-f avfoundation` flag is macOS-specific for capturing video devices. On Linux, you'd use `-f v4l2` instead. The `"0"` refers to the first video device (your default webcam). The `ultrafast` preset and `zerolatency` tuning minimize encoding overhead for real-time streaming.

## Viewing the Stream

Once both processes are running, open your browser and navigate to:

```
http://127.0.0.1:8889/webcam/
```

The feed should appear in your browser. You can access this URL from any device on your local network by replacing `127.0.0.1` with your machine's IP address.

MediaMTX handles all the WebRTC negotiation and serves a basic web player interface. If you need to customize the player or embed it elsewhere, MediaMTX also exposes a [WebRTC API](https://github.com/bluenviron/mediamtx#webrtc-api) you can integrate with.
