FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /
COPY ./package.json ./package-lock.json 
# ENV PATH ./node_modules/.bin:$PATH
RUN npm install
WORKDIR /
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "run", "develop"]