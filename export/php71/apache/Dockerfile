###
## tommynovember7/php71-apache
###

FROM php:7.1-apache-stretch

RUN a2enmod rewrite \
    && a2enmod headers \
    && a2enmod ssl

RUN usermod -u 1000 www-data
ENV HTTPDUSER=www-data

## only for java installation compatibility
# https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=863199
RUN mkdir -p /usr/share/man/man1

RUN apt-get update && apt-get install -y \
    acl \
    build-essential \
    default-jdk \
    default-jre \
    fonts-ipafont \
    g++ \
    ghostscript \
    git \
    gnupg \
    groff-base \
    imagemagick \
    libexif-dev \
    libffi-dev \
    libfreetype6-dev \
    libgd-dev  \
    libgs-dev \
    libicu-dev \
    libjpeg-dev \
    libjpeg62-turbo-dev \
    libmagic-dev  \
    libmagickwand-dev \
    libpng++-dev \
    libpng-dev \
    libssl-dev \
    libvpx-dev  \
    make \
    mysql-client \
    openssh-client \
    openssl \
    python-pip \
    python3-dev \
    python3-pip \
    ssmtp \
    wget \
    zlib1g-dev


# nodejs
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get update \
    && apt-get install -y nodejs \
    && npm install -g npm-check-updates \
    && npm install -g yarn \
    && yarn global add prettier

# aws cli
RUN pip install --upgrade awscli

# install php modules
ADD https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/master/install-php-extensions /usr/local/bin/
RUN chmod uga+x /usr/local/bin/install-php-extensions && sync && \
    install-php-extensions \
    apcu \
    exif \
    gd \
    gettext \
    imagick \
    intl \
    mcrypt \
    mysqli \
    opcache \
    pcntl \
    pdo_mysql \
    redis \
    sockets \
    xdebug \
    zip

## add ini
RUN printf "[date]\ndate.timezone=Etc/UTC" > /usr/local/etc/php/conf.d/date.ini \
    && echo "memory_limit=512M" > /usr/local/etc/php/conf.d/memory-limit.ini \
    && echo "output_buffering = On" > /usr/local/etc/php/conf.d/output-buffering.ini \
    && echo 'sendmail_path = "/usr/sbin/ssmtp -t"' > /usr/local/etc/php/conf.d/mail.ini \
    && printf "[mbstring]\nmbstring.internal_encoding = %s\nmbstring.language = %s\n" 'UTF-8' 'Japanese' > /usr/local/etc/php/conf.d/mbstring.ini \
    && printf "upload_max_filesize = %s\npost_max_size = %s\n" '500M' '100M' > /usr/local/etc/php/conf.d/upload.ini \
    && printf "phar.readonly = %s\nphar.require_hash = %s\n" 'Off' 'OFF' > /usr/local/etc/php/conf.d/phar-conf.ini \
    && printf "\nxdebug.remote_enable = %s\nxdebug.remote_autostart = %s" 'On' 'On' >> /usr/local/etc/php/conf.d/xdebug.ini \
    && printf "\nxdebug.remote_connect_back = %s\nxdebug.remote_host = docker.for.mac.localhost" 'Off' >> /usr/local/etc/php/conf.d/xdebug.ini

# composer
RUN wget https://raw.githubusercontent.com/composer/getcomposer.org/76a7060ccb93902cd7576b67264ad91c8a2700e2/web/installer -O - -q | php -- --quiet \
    && cp composer.phar /usr/local/bin/composer

# clean up
RUN apt-get clean \
    && rm -rf /var/lib/apt/lists/*

ADD ./run_tests.sh /var/run_tests.sh