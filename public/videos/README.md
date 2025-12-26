# Hero Background Video

## Required Files

Place your hero background video files in this directory:

- `hero-background.mp4` (Primary - better compatibility)
- `hero-background.webm` (Optional - better compression, modern browsers)

## Video Specifications

### Format & Codec
- **MP4:** H.264 codec, AAC audio (muted anyway)
- **WebM:** VP9 codec (optional but recommended for smaller file size)

### Recommended Settings
- **Duration:** 10-15 seconds (will loop)
- **Resolution:** 1920x1080 (1080p) - will be scaled down on smaller screens
- **Frame Rate:** 24-30 fps
- **Bitrate:** 2-5 Mbps for MP4 (balance quality vs file size)
- **File Size:** Aim for 5-10MB maximum
- **Aspect Ratio:** 16:9 (landscape)

### Compression Tips
- Use tools like HandBrake or FFmpeg for compression
- Remove audio track (video is muted)
- Use constant quality (CRF) encoding: CRF 23-28 for H.264

### Example FFmpeg Commands

**Convert to optimized MP4:**
```bash
ffmpeg -i input.mov -c:v libx264 -crf 24 -preset medium -vf scale=1920:1080 -an -movflags +faststart hero-background.mp4
```

**Convert to WebM:**
```bash
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 -vf scale=1920:1080 -an hero-background.webm
```

### Notes
- Video will only display on tablet/desktop (hidden on mobile for performance)
- Video fades out at 40% scroll of hero section
- Dark gradient overlay is applied automatically
- Video is muted and autoplays
