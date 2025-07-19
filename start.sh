#!/bin/bash

# Countdown Timer Webapp Startup Script
# =====================================

echo "🚀 Starting Countdown Timer Webapp..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed (try both docker-compose and docker compose)
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Set the docker compose command to use
if command -v docker-compose &> /dev/null; then
    DOCKER_COMPOSE="docker-compose"
else
    DOCKER_COMPOSE="docker compose"
fi

# Check if required files exist
required_files=("index.html" "countdown.css" "countdown.js" "default.jpg" "Dockerfile" "docker-compose.yml" "nginx.conf")
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Missing required file: $file"
        exit 1
    fi
done

echo "✅ All required files found"

# Create logs directory if it doesn't exist
mkdir -p logs

# Stop any existing containers
echo "🛑 Stopping any existing containers..."
$DOCKER_COMPOSE down

# Build and start the container
echo "🔨 Building and starting the container..."
$DOCKER_COMPOSE up --build -d

# Wait a moment for the container to start
sleep 3

# Check if the container is running
if $DOCKER_COMPOSE ps | grep -q "Up"; then
    echo "✅ Countdown Timer Webapp is now running!"
    echo "🌐 Open your browser and go to: http://localhost:8080"
    echo ""
    echo "📋 Useful commands:"
    echo "  - View logs: $DOCKER_COMPOSE logs -f"
    echo "  - Stop app: $DOCKER_COMPOSE down"
    echo "  - Restart app: $DOCKER_COMPOSE restart"
else
    echo "❌ Failed to start the container. Check the logs:"
    $DOCKER_COMPOSE logs
    exit 1
fi 