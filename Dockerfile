FROM node:16-alpine as builder

RUN mkdir /app

# Copying Application file to app directory
COPY .  /app

# Making the app directory the working directory
WORKDIR /app

# Install npm dependencies.
RUN npm install

# adding the downloaded module to system path
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine 

WORKDIR /usr/share/nginx/html/

RUN rm -rf ./*

# Copy built assets from `builder` image
COPY --from=builder /app/dist/  .

EXPOSE 5173 80

CMD ["nginx", "-g", "daemon off;"]
