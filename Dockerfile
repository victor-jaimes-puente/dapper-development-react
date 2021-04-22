# pull base image
FROM ubuntu:18.04
RUN apt update -y 
RUN apt install git-all -y
COPY ./package.json ./package-lock.json ./
RUN npm install

# copy in our source code last, as it changes the most
WORKDIR /opt/react_native_app/app
# for development, we bind mount volumes; comment out for production
# COPY ./react_native_app .

ENTRYPOINT ["npm", "run"]
CMD ["web"]