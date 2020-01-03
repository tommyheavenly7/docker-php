# docker-php

Dockerfiles for php application development.

## Purpose

This repository provides Dockerfiles as base images for php application development. 
**Please don't think to use them in production.** You might face with 
various kind of issues in production use. 

Dockerfiles in here are based on [official PHP images](https://hub.docker.com/_/php/), 
and they additionally contain *AWS CLI*, *Ghostscript* and *ImageMagick*. 
If you intend to handle image or PDF files, they might help you build your own docker 
image.

## PHP Information

### Version

```php
# php --version
PHP 7.1.33 (cli) (built: Nov 22 2019 18:48:38) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.1.0, Copyright (c) 1998-2018 Zend Technologies
    with Zend OPcache v7.1.33, Copyright (c) 1999-2018, by Zend Technologies
    with Xdebug v2.9.0, Copyright (c) 2002-2019, by Derick Rethans
```

```php
# php --version
PHP 7.2.26 (cli) (built: Dec 28 2019 22:31:30) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies
    with Zend OPcache v7.2.26, Copyright (c) 1999-2018, by Zend Technologies
    with Xdebug v2.9.0, Copyright (c) 2002-2019, by Derick Rethans
```

### Extensions

#### PHP 7.1

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

#### PHP 7.2

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
sodium
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
aws-cli/1.16.309 Python/2.7.13 Linux/4.9.184-linuxkit botocore/1.13.45
```

### Ghostscript

```shell
# which gs
/usr/bin/gs

# gs -v
GPL Ghostscript 9.50 (2019-10-15)
Copyright (C) 2019 Artifex Software, Inc.  All rights reserved.
```

### ImageMagick

```shell
# which convert
/usr/bin/convert

# convert -version
Version: ImageMagick 7.0.9-13 Q16 x86_64 2019-12-31 https://imagemagick.org
Copyright: © 1999-2020 ImageMagick Studio LLC
License: https://imagemagick.org/script/license.php
Features: Cipher DPC HDRI OpenMP(4.5)
Delegates (built-in): bzlib djvu fontconfig freetype gvc jbig jng jp2 jpeg lcms lqr lzma openexr png tiff wmf x xml zlib
```