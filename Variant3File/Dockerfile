# Use an official lightweight Node.js image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the HTML file from the host to the container
COPY WEB3-FUMI/Variant3File/Variant2.html /app

# Expose the port the app runs on
EXPOSE 8000

# Install http-server globally via npm
RUN npm install -g http-server

# Start the server
CMD ["http-server", "-p", "8000"]
