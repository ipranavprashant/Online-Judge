FROM node:20-alpine
WORKDIR /app
RUN apk update && apk add --no-cache g++
#this is an improvement to our dockerfile, meaning npm i will now run only if the package.json isnt the same, increasing the efficiency
COPY package.json .
RUN npm i 

COPY . .
EXPOSE 8080
CMD ["node","index.js"]

# ENTRYPOINT ["npm","run","start"]
# CMD and ENTRYPOINT are one and the same thing

# what is volume in docker and how can we utilise it?
