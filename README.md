# traveler-front-end-challenge

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Docker Build and tag the Docker image
```
docker build -t my-app:dev .
```

### Docker spin up the Build container
```
docker run -v ${PWD}:/app -v /app/node_modules -p 8081:8080 --rm my-app:dev
```

### Docker Prod and tag the Docker image
```
docker build -f Dockerfile-prod -t my-app:prod .
```

### Docker spin up the Prod container
```
docker run -it -p 80:80 --rm my-app:prod
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
