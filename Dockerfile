FROM registry.access.redhat.com/ubi9/nodejs-20-minimal

ENV TZ="Europe/Helsinki"

WORKDIR /opt/app-root

ARG BASE_PATH
ENV PUBLIC_URL=$BASE_PATH

ARG GIT_SHA
ENV REACT_APP_GIT_SHA=$GIT_SHA

ENV REACT_APP_E2E="true"
ENV REACT_APP_STAGING=

ENV DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
ENV REDIS_HOST=localhost

# HACK: We give the files xrw rights as vite can't read it's config.
COPY --chmod=776 . .
RUN npm ci 
RUN node_modules/.bin/vite build src/client/

EXPOSE 8000
ENTRYPOINT ["npm", "run", "start:test"]
