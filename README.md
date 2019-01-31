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
  PHP 7.1.26 (cli) (built: Jan 22 2019 22:53:17) ( NTS )
  Copyright (c) 1997-2018 The PHP Group
  Zend Engine v3.1.0, Copyright (c) 1998-2018 Zend Technologies
      with Zend OPcache v7.1.26, Copyright (c) 1999-2018, by Zend Technologies
      with Xdebug v2.6.1, Copyright (c) 2002-2018, by Derick Rethans
```

```php
# php --version
  PHP 7.2.14 (cli) (built: Jan 22 2019 22:25:43) ( NTS )
  Copyright (c) 1997-2018 The PHP Group
  Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies
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
aws-cli/1.16.96 Python/2.7.13 Linux/4.9.125-linuxkit botocore/1.12.86
```

### Ghostscript

```shell
# which gs
/usr/bin/gs

# gs -v
GPL Ghostscript 9.26 (2018-11-20)
Copyright (C) 2018 Artifex Software, Inc.  All rights reserved.
```

### ImageMagick

```shell
# which convert
/usr/bin/convert

# convert -version
Version: ImageMagick 7.0.8-25 Q16 x86_64 2019-01-31 https://imagemagick.org
Copyright: © 1999-2019 ImageMagick Studio LLC
License: https://imagemagick.org/script/license.php
Features: Cipher DPC HDRI OpenMP
Delegates (built-in): bzlib djvu fontconfig freetype gvc jbig jng jp2 jpeg lcms lqr lzma openexr png tiff wmf x xml zlib
```