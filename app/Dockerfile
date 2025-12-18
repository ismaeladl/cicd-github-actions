# Image Nginx
FROM nginx:alpine

# Préparer et placer les fichiers app dans le dossier Nginx
RUN rm /usr/share/nginx/html/*
COPY . /usr/share/nginx/html

# Expose le port 80
EXPOSE 80

# Commande de lancement Nginx (optionnelle)
CMD ["nginx", "-g", "daemon off;"]
