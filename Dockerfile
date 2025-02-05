FROM registry.access.redhat.com/ubi9/nodejs-20-minimal

ENV TZ="Europe/Helsinki"

WORKDIR /opt/app-root/src

ARG GIT_SHA
ENV REACT_APP_GIT_SHA=$GIT_SHA

ARG BASE_PATH
ENV PUBLIC_URL=$BASE_PATH

ARG E2E
ENV REACT_APP_E2E=$E2E

ARG STAGING
ENV REACT_APP_STAGING=$STAGING

# Setup
COPY --chmod=776 . .
RUN npm ci 
RUN node_modules/.bin/vite build src/client/

EXPOSE 8000
ENTRYPOINT ["npm", "run", "start:test"]
