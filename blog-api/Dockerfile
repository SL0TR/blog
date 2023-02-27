FROM node:14-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install

# add app files
COPY . .

# seed database
# RUN npm run seed

# expose port
EXPOSE 4000

# start command
CMD ["npm", "run", "start:prod"]