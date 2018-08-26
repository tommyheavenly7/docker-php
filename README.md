# docker-php
Dockerfiles for php application development.

## Purpose
This repository provides Dockerfiles as base images for php application development. 
**Please don't think to use them in production environment.** You might face with 
various kind of issues in production use. 

Dockerfiles in here are based on [official PHP images](https://hub.docker.com/_/php/), 
but they also contain *AWS CLI*, *Ghostscript* and *ImageMagick*. If you intend to 
handle image or PDF files, one of Dockerfiles could be a shortcut to build your own 
docker images for application development. 


## PHP Information

### Version
```php
# php --version
PHP 7.1.21 (cli) (built: Aug 23 2018 00:59:23) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.1.0, Copyright (c) 1998-2018 Zend Technologies
    with Zend OPcache v7.1.21, Copyright (c) 1999-2018, by Zend Technologies
    with Xdebug v2.6.1, Copyright (c) 2002-2018, by Derick Rethans
```

### Extensions
```php
# php -m
[PHP Modules]
Core
ctype
curl
date
dom
exif
fileinfo
filter
ftp
gd
hash
iconv
imagick
intl
json
libxml
mbstring
mcrypt
mysqli
mysqlnd
openssl
pcntl
pcre
PDO
pdo_mysql
pdo_sqlite
Phar
posix
readline
Reflection
session
SimpleXML
SPL
sqlite3
standard
tokenizer
xdebug
xml
xmlreader
xmlwriter
Zend OPcache
zip
zlib

[Zend Modules]
Xdebug
Zend OPcache
```

## Installed Software
### AWS-CLI
```shell
# which aws
/usr/local/bin/aws

# aws --version
aws-cli/1.15.85 Python/2.7.9 Linux/4.9.93-linuxkit-aufs botocore/1.10.84
```
### Ghostscript
```shell
# which gs
/usr/bin/gs

# gs -v
GPL Ghostscript 9.23 (2018-03-21)
Copyright (C) 2018 Artifex Software, Inc.  All rights reserved.
```
### ImageMagick
```shell
# which convert
/usr/bin/convert

# convert -version
Version: ImageMagick 7.0.8-10 Q16 x86_64 2018-08-24 https://www.imagemagick.org
Copyright: © 1999-2018 ImageMagick Studio LLC
License: https://www.imagemagick.org/script/license.php
Features: Cipher DPC HDRI OpenMP
Delegates (built-in): bzlib djvu fontconfig freetype gvc jbig jng jpeg lcms lqr lzma openexr png tiff wmf x xml zlib
```
## Appendix
### References
#### Builder
+ [gulp.js](https://gulpjs.com/)
+ [Use latest JavaScript version in your gulpfile](https://github.com/gulpjs/gulp#use-latest-javascript-version-in-your-gulpfile)
+ [babel-preset-es2015 -> babel-preset-env](http://babeljs.io/docs/en/env/)

### Build Command Snippets
#### Basic usage
```shell
$ var/bin/node.sh node --version
v8.11.4 

$ var/bin/node.sh npm dedupe
$ var/bin/node.sh npm ls --depth=0
docker-php@0.0.1 /var/project
+-- babel-preset-env@1.7.0
+-- babel-register@6.26.0
+-- del@3.0.0
+-- gulp@4.0.0
`-- gulp-ejs@3.1.3
```
#### Update dependencies
```shell
$ var/bin/node.sh npm install
$ var/bin/node.sh ncu
$ var/bin/node.sh ncu -u
```
### Run gulp task
```shell
$ var/bin/node.sh npx gulp php71
```