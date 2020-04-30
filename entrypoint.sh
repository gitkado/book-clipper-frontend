#!/bin/bash

printenv > $APP_PATH"/.env"
chmod 777 $APP_PATH"/.env"

exec "$@"
