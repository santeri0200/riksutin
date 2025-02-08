FROM registry.access.redhat.com/ubi9/nodejs-20-minimal

ENV TZ="Europe/Helsinki"

WORKDIR /opt/app-root

ARG GIT_SHA
ENV REACT_APP_GIT_SHA=${GIT_SHA}

ARG BASE_PATH
ENV PUBLIC_URL=${BASE_PATH}

ARG E2E
ENV REACT_APP_E2E=${E2E}

ARG STAGING
ENV REACT_APP_STAGING=${STAGING}

ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

ARG REDIS_HOST
ENV REDIS_HOST=${REDIS_HOST}

# HACK: We give the files xrw rights as vite can't read it's config.
COPY --chmod=776 . .
RUN npm ci 
RUN node_modules/.bin/vite build src/client/

EXPOSE 3000
EXPOSE 8000
ENTRYPOINT ["npm", "run", "start:test"]
