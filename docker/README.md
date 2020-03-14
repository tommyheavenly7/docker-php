# Basic Usage

## Setup

```shell
source docker/.bashrc
```

## Gulp

### Run build task

```shell
npx gulp build
```

## Node

### Version

```shell
$ node --version
v10.18.1 
```

### Install dependencies

```shell
$ npm install
$ npm dedupe
$ npm ls --depth=0
  docker-php@0.0.1 /var/project
  +-- @babel/core@7.8.7
  +-- @babel/preset-env@7.8.7
  +-- @babel/register@7.8.6
  +-- del@5.1.0
  +-- dep@0.18.2
  +-- eslint@6.8.0
  +-- eslint-config-prettier@6.10.0
  +-- gulp@4.0.2
  +-- gulp-ejs@5.0.0
  +-- gulp-rename@2.0.0
  `-- prettier@1.19.1
```

### Update dependencies

```shell
ncu
ncu -a
npm install
```

## Appendix

### Builder
+ [gulp.js](https://gulpjs.com/)
+ [Use latest JavaScript version in your gulpfile](https://github.com/gulpjs/gulp#use-latest-javascript-version-in-your-gulpfile)
+ [babel-preset-es2015 -> babel-preset-env](http://babeljs.io/docs/en/env/)