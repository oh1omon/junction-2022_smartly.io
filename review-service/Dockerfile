FROM node:16 as builder

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production

# Copy built assets from `builder` image
COPY --from=builder /usr/src/app /

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 8080

# Start nginx and node application
CMD ["nginx", "-g", "daemon off;", "node", "index.js"]
