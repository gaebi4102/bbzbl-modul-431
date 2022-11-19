FROM node:lts-slim
LABEL maintainer "Lukas Hodel"

COPY . /app
WORKDIR /app

RUN mv entrypoint.sh /entrypoint.sh \
  && chmod +x /entrypoint.sh \
  && chmod 755 /app

RUN apt-get -y update \
  && apt-get -y install git curl vim \
  && corepack enable \
  && yarn set version stable \
  && yarn install 

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 3000
EXPOSE 3003
