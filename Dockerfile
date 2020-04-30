FROM node:12.13.0-stretch-slim

ENV LANG C.UTF-8
ENV APP_PATH /opt/app/book-clipper
WORKDIR $APP_PATH

ADD . /opt/app
ADD ./build.sh /
ADD ./entrypoint.sh /
ADD ./start.sh /

RUN npm install -g yarn && \
    yarn global add @vue/cli && \
    yarn add vee-validate && \
    yarn add @nuxtjs/axios && \
    yarn add @nuxtjs/dotenv && \
    yarn add @nuxtjs/proxy && \
    chmod +x /build.sh && \
    chmod +x /entrypoint.sh && \
    chmod +x /start.sh && \
    yarn install && \
    yarn run build

ENTRYPOINT ["/entrypoint.sh"]

CMD ["/start.sh"]

EXPOSE 3000
