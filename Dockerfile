FROM node:12.13.0-stretch-slim

ENV LANG C.UTF-8
ENV APP_PATH /opt/app/book-clipper
WORKDIR $APP_PATH

ADD . $APP_PATH
ADD ./start.sh /

RUN npm install -g yarn && \
    yarn global add @vue/cli && \
    yarn add vee-validate && \
    chmod +x /start.sh && \
    yarn install && \
    yarn build

CMD ["/start.sh"]

EXPOSE 3000
