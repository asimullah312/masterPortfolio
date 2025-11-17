FROM node:20.11-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# add app
COPY . ./

# Expose port
EXPOSE 3000

# Set environment variables for development
ENV CHOKIDAR_USEPOLLING=true
ENV WATCHPACK_POLLING=true

# start app
CMD ["npm", "start"]
