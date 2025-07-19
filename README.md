# Countdown Timer Webapp

A beautiful, responsive countdown timer webapp with a custom background image. The timer counts down from 1 hour (59:59.99) to 00:00.00 with smooth CSS animations.

## Features

- ⏰ 1-hour countdown timer with minutes, seconds, and hundredths
- 🎨 Beautiful CSS animations with smooth transitions
- 📱 Fully responsive design for mobile devices
- 🖼️ Custom background image support
- 🐳 Docker containerized for easy deployment
- ⚡ Optimized with nginx for performance

## Quick Start

### Using Docker Compose (Recommended)

1. **Clone or download the project files**
   ```bash
   # Make sure you have these files in your directory:
   # - index.html
   # - countdown.css
   # - countdown.js
   # - default.jpg
   # - Dockerfile
   # - docker-compose.yml
   # - nginx.conf
   ```

2. **Build and run the container**
   ```bash
   docker-compose up --build
   ```

3. **Access the webapp**
   Open your browser and navigate to: `http://localhost:8080`

### Manual Docker Build

```bash
# Build the image
docker build -t countdown-timer .

# Run the container
docker run -p 8080:80 countdown-timer
```

## Project Structure

```
.
├── index.html          # Main HTML file with responsive design
├── countdown.css       # CSS animations and styling
├── countdown.js        # JavaScript functionality
├── default.jpg         # Background image
├── test-countdown.html # Test file for development (not included in production)
├── Dockerfile          # Docker container configuration
├── docker-compose.yml  # Docker Compose orchestration
├── nginx.conf          # Nginx server configuration
├── start.sh            # Startup script for local development
├── GITHUB_HELP.md      # Git workflow documentation
└── README.md           # This file
```

## Customization

### Changing the Timer Duration

The timer is currently set to 1 hour (3600 seconds). To modify the duration:

1. Edit `countdown.js` and update the `duration` value in `TIMER_CONFIG`
2. Adjust the CSS animations in `countdown.css` accordingly
3. Rebuild the Docker container

### Changing the Background Image

1. Replace `default.jpg` with your own image
2. Rebuild the Docker container: `docker-compose up --build`

### Styling Modifications

- Edit `countdown.css` for animation and visual changes
- Modify the inline styles in `index.html` for responsive adjustments

## Mobile Responsiveness

The webapp is fully responsive and optimized for:
- Desktop screens (1000px+)
- Tablet screens (768px - 999px)
- Mobile screens (480px - 767px)
- Small mobile screens (< 480px)

## Performance Features

- Gzip compression enabled
- Static asset caching (1 year for CSS/JS/images)
- Optimized nginx configuration
- Health check endpoint at `/health`

## Troubleshooting

### Log Files
The application generates log files in the `logs/` directory. These files are automatically excluded from Git via `.gitignore` to prevent committing sensitive information like IP addresses and user agent strings.

### Container won't start
```bash
# Check container logs
docker-compose logs countdown-timer

# Check if port 8080 is available
netstat -tulpn | grep 8080
```

### Timer not animating
- Ensure JavaScript is enabled in your browser
- Check browser console for any errors
- Verify all files are properly copied to the container

### Mobile display issues
- Clear browser cache
- Ensure viewport meta tag is present
- Test on different devices/browsers

## Development

### Test File
The `test-countdown.html` file is included for development and testing purposes. It provides a simple countdown implementation for debugging and testing the countdown logic. This file is not served in the production Docker container.

### Local Development (without Docker)

1. Install a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

2. Open `http://localhost:8000` in your browser

### Building for Production

```bash
# Build optimized production image
docker build -t countdown-timer:production .

# Run with production settings
docker run -d -p 80:80 --name countdown-prod countdown-timer:production
```

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!
