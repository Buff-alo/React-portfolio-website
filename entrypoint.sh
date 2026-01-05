#!/bin/sh

# Path to the config file
CONFIG_FILE="/usr/share/nginx/html/env-config.js"

# Recreate the config file
echo "window._env_ = {" > "$CONFIG_FILE"

# Loop through environment variables starting with VITE_
# and add them to the config file
for var in $(env | grep "^VITE_"); do
  key=$(echo "$var" | cut -d '=' -f 1)
  value=$(echo "$var" | cut -d '=' -f 2-)
  
  # Append to config file
  echo "  $key: \"$value\"," >> "$CONFIG_FILE"
done

echo "};" >> "$CONFIG_FILE"

# Execute the CMD passed to the docker container (likely nginx)
exec "$@"
