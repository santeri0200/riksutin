FROM registry.access.redhat.com/ubi9/nodejs-20-minimal

ENV TZ="Europe/Helsinki"

WORKDIR /opt/app-root

# HACK: We give the files xrw rights as vite can't read it's config.
COPY --chmod=776 . .
RUN npm ci 
RUN node_modules/.bin/vite build src/client/

EXPOSE 8000
ENTRYPOINT ["npm", "run", "start:test"]
