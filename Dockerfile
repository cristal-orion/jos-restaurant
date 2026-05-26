# ---- Stage 1: build statico di Astro con Node 22 ----
FROM node:22-alpine AS build
WORKDIR /app
# Solo package.json: install fresco per ottenere i binari nativi Linux corretti
# (no package-lock.json, vedi regole Coolify)
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- Stage 2: serve i file statici con Nginx ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 4321
CMD ["nginx", "-g", "daemon off;"]
