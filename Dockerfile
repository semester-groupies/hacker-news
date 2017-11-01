# Building image from:
FROM node:boron

# Ensures your Dockerfile installs the latest package versions. This technique is known as “cache busting”
RUN apt-get update && apt-get install -y && rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

# Install app dependencies
RUN npm install -g @angular/cli
RUN npm install

# Bundle app source:
COPY . .

# Your app binds to port 4200 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 4200

# Starting up the image after container has been created:
CMD ["npm", "start"]
