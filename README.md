## Description

That's a simple solution to start APIs in nodejs if you don't want to download all dependencies every time when you start some new project.

You can implement any architecture on this template and it already comes with prettier, vitest, eslint, docker and suport for circleci if you wanna implement CI/CD in that platform.

## Basics

The template comes by default with some basic commands, for example:

### To build project and add husky configuration

(to know more about husky: https://typicode.github.io/husky/#/)

```
$ npm run build
```

### Or if you wanna just create .husky folder with pre-push and pre-commit files

```
$ npm run prepare
```

### To start project from dist folder

```
$ npm start
```

### To start project from src folder with tsx

```
$ npm run dev
```

### Run all the test suits

```
$ npm test
```

### Select wich suit you wanna run in watch mode or related files uncommited by git

(know more in: https://vitest.dev/guide/

```
$ npm run test:watch
```

### Run all the tests and generate bunch of informations about project test coverage

```
$ npm run test:coverage
```

### To start project from docker container

(know more in: https://docs.docker.com/get-started/ and https://docs.docker.com/compose/gettingstarted/)

```
$ docker-compose up
```

To build a container and then start automatically

```
$ docker-compose build
```

To build a container with dockerfile configs, you can start manually with the command

```
$ docker run template-template
```

## Project folders schema

```
├─ .circleci
│  └─ config.yml
├─ .dockerignore
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc.json
├─ Dockerfile
├─ README.md
├─ docker-compose.yml
├─ vitest.config.js
├─ package.json
├─ src
│  ├─ common
│  │  └─ environment-consts.ts
│  ├─ index.ts
│  └─ routes.ts
├─ tests
│  ├─ example.int.spec.ts
│  └─ example.spec.ts
├─ tsconfig-build.json
├─ tsconfig.json
├─ yarn-error.log
└─ yarn.lock
```
