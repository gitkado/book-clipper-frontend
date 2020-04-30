#!/bin/bash

printenv > $APP_PATH"/.env"

exec "$@"
