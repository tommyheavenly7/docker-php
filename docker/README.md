# Basic Usage

## Gulp
### Run build task
```shell
$ var/bin/node.sh npx gulp build
```

## Node
### Version
```shell
$ var/bin/node.sh node --version
v8.11.4 
```

### Install dependencies
```shell
$ var/bin/node.sh npm install
$ var/bin/node.sh npm dedupe
$ var/bin/node.sh npm ls --depth=0
docker-php@0.0.1 /var/project
+-- babel-preset-env@1.7.0
+-- babel-register@6.26.0
+-- del@3.0.0
+-- gulp@4.0.0
`-- gulp-ejs@3.1.3
```

### Update dependencies
```shell
$ var/bin/node.sh npm install
$ var/bin/node.sh ncu
$ var/bin/node.sh ncu -u
```

## References
### Builder
+ [gulp.js](https://gulpjs.com/)
+ [Use latest JavaScript version in your gulpfile](https://github.com/gulpjs/gulp#use-latest-javascript-version-in-your-gulpfile)
+ [babel-preset-es2015 -> babel-preset-env](http://babeljs.io/docs/en/env/)