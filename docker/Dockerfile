# Step 1: Build React app
FROM node:24-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY ../package*.json ./

RUN npm ci

# Copy the rest of the React app source code
COPY ../ ./

RUN npm run build

# Confirm build output exists
RUN ls -l /app/dist  

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config from root/nginx folder
COPY ../nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy entrypoint script
COPY ../entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
