FROM node:18

# Install netcat for wait script
RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Copy wait script and make it executable
COPY wait-for-kafka.sh .
RUN chmod +x wait-for-kafka.sh

EXPOSE 5000

ENTRYPOINT ["./wait-for-kafka.sh", "npm", "start"]
