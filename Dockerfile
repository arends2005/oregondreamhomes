# Use nginx alpine for a lightweight web server
FROM nginx:alpine

# Copy the webapp files to nginx's default serving directory
COPY index.html /usr/share/nginx/html/
COPY countdown.css /usr/share/nginx/html/
COPY countdown.js /usr/share/nginx/html/
COPY default.jpg /usr/share/nginx/html/
COPY test-countdown.html /usr/share/nginx/html/

# Copy a custom nginx configuration for better performance
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 