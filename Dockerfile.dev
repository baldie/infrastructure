# get the smallest base image that has npm on it
FROM node:alpine

# copy project contents to container hd
WORKDIR /usr/app

# copy over what is needed to install dependencies
COPY ./package.json ./

# install dependencies for the project
RUN npm i

# copy over any other changes in the codebase
COPY ./ ./

# launch
CMD ["npm", "start"]