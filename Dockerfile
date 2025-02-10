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

COPY package* ./
RUN npm ci -f --omit-dev --ignore-scripts --workspaces
COPY . .

EXPOSE 8000
CMD ["npm", "run", "start:prod"]
