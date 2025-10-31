#!/bin/bash
set -e

echo "⏳ Waiting for backend + Kafka to be ready on $TARGET_HOST:$TARGET_PORT..."

until [ "$(curl -s -o /dev/null -w '%{http_code}' http://$TARGET_HOST:$TARGET_PORT/health)" == "200" ]; do
  echo "Backend or Kafka not ready yet... retrying in 5s"
  sleep 5
done

echo "✅ Backend + Kafka are ready! Starting JMeter test..."

