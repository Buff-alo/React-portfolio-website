# Step 1: Build React app
FROM node:24-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY ../package*.json ./

RUN npm install

# Copy the rest of the React app source code
COPY ../ ./

RUN npm run build
RUN ls -l /app/dist  # Confirm build output exists

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config from root/nginx folder
COPY ../nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
