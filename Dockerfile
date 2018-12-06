FROM nginx:alpine
# RUN npm run build
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./build/ /usr/share/nginx/html