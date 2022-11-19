#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

cd /app

yarn dev
