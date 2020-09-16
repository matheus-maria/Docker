# Use an existing docker image as a base
FROM alpine

# Download and install the dependencies
RUN apk add --update redis

# Tell the image whats to do when it starts as a container
CMD [ "redis-server" ]