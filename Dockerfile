# Use the official Nginx Alpine image as base
FROM nginx:alpine

# Prepare the container and place app files in Nginx's html directory
RUN rm /usr/share/nginx/html/*
COPY src/ /usr/share/nginx/html/

# Expose port 80 for HTTP traffic (optionnal)
EXPOSE 80

# Start Nginx in the foreground (prevents container from exiting)
CMD ["nginx", "-g", "daemon off;"]
