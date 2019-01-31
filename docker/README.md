# Basic Usage

## Setup

```shell
source docker/.bashrc
```

## Gulp

### Run build task

```shell
run npx gulp build
```

## Node

### Version

```shell
$ run node --version
v10.15.0 
```

### Install dependencies

```shell
$ run npm install
$ run npm dedupe
$ run npm ls --depth=0
docker-php@0.0.1 /var/project
+-- @babel/core@7.2.2
+-- @babel/preset-env@7.3.1
+-- @babel/register@7.0.0
+-- del@3.0.0
+-- gulp@4.0.0
`-- gulp-ejs@3.3.0
```

### Update dependencies

```shell
run ncu
run ncu -a
run npm install
```

## Appendix

### Builder
+ [gulp.js](https://gulpjs.com/)
+ [Use latest JavaScript version in your gulpfile](https://github.com/gulpjs/gulp#use-latest-javascript-version-in-your-gulpfile)
+ [babel-preset-es2015 -> babel-preset-env](http://babeljs.io/docs/en/env/)