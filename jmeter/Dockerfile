# Base JMeter image
#FROM justb4/jmeter:latest

# Set working directory
#WORKDIR /tests

# Copy JMeter test plan
#COPY form_test.jmx /tests/

# Create results folder
#RUN mkdir -p /tests/results

# Default command (keep container running)
#ENTRYPOINT ["jmeter","-n", "-t", "/tests/form_test.jmx", "-l", "/tests/results/results.jtl", "-e", "-o", "/tests/results/html-report"]
#FROM justb4/jmeter:latest

#WORKDIR /tests

#COPY form_test.jmx /tests/form_test.jmx
#RUN mkdir -p /tests/results

#ENV TARGET_URL=http://form-backend:5000

# Clear old results before running JMeter
# Using ENTRYPOINT with a small wrapper shell
#ENTRYPOINT ["bash", "-c", "rm -rf /tests/results/*; jmeter -n -t /tests/form_test.jmx -l /tests/results/results.jtl -e -o /tests/results/html-report -Jserver.url=$TARGET_URL"]# Dockerfile inside ./jmeter
#FROM justb4/jmeter:latest

#COPY form_test.jmx /tests/form_test.jmx

#ENTRYPOINT ["bash","-c","\
  #rm -rf /tests/results/*; \
#  echo '🧪 Running JMeter test on backend: $TARGET_HOST:$TARGET_PORT'; \
#  jmeter -n -t /tests/form_test.jmx \
 #        -l /tests/results/results.jtl \
  #       -e -o /tests/results/html-report \
   #      -Jserver.url=$TARGET_HOST \
    #     -Jserver.port=$TARGET_PORT; \
  #echo '✅ Test completed! HTML report saved in /tests/results/html-report' \
#"]


# ------------------------------------------------------------
# ✅ Base JMeter image
# ------------------------------------------------------------
FROM justb4/jmeter:latest

# ------------------------------------------------------------
# ✅ Set working directory
# ------------------------------------------------------------
WORKDIR /tests

# ------------------------------------------------------------
# ✅ Copy test plan and wait script
# ------------------------------------------------------------
COPY form_test.jmx /tests/form_test.jmx
COPY wait-for-backend.sh /tests/wait-for-backend.sh

# ------------------------------------------------------------
# ✅ Install curl (needed by wait script)
# ------------------------------------------------------------
USER root
RUN apk add --no-cache curl \
    && chmod +x /tests/wait-for-backend.sh \
    && mkdir -p /tests/results

# ------------------------------------------------------------
# ✅ Environment variables (override in docker-compose.yml)
# ------------------------------------------------------------
ENV TARGET_HOST=backend
ENV TARGET_PORT=5000

# ------------------------------------------------------------
# ✅ Entry point: wait for backend → run JMeter test → report
# ------------------------------------------------------------
ENTRYPOINT ["/bin/bash", "-c", "\
  echo '⏳ Waiting for backend ($TARGET_HOST:$TARGET_PORT)...'; \
  /tests/wait-for-backend.sh; \
  echo '✅ Backend ready! Starting JMeter test...'; \
  mkdir -p /shared && touch /shared/jmeter_started.flag; \
  echo '🧪 Running JMeter test on backend: $TARGET_HOST:$TARGET_PORT'; \
  rm -rf /tests/results/*; \
  jmeter -n -t /tests/form_test.jmx \
         -l /tests/results/results.jtl \
         -e -o /tests/results/html-report \
         -Jserver.url=$TARGET_HOST \
         -Jserver.port=$TARGET_PORT; \
  echo '✅ Test completed! HTML report saved in /tests/results/html-report'; \
  "]
