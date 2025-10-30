#!/bin/bash
set -e
echo "â³ Waiting for Kafka to be ready..."
until nc -z kafka 9092; do
  sleep 2
done
echo "âœ… Kafka is ready! Starting backend..."
exec "$@"
