Camera Man
==========

A web app for my raspberry pi that takes a picture every time the home
page is loaded and displays that picture. Why? Because I am too lazy to
climb into the crawl space to fine out how much oil is left in the tank.

Setup
-----

1. ssh into your raspberry pi
2. Install [nvm](https://github.com/creationix/nvm)
3. Install the latest node: nvm install 0.10.28
4. Set it as the default: nvm alias default 0.10
5. Install forever: npm install forever -g
6. Clone this repo
6. Start the app: forever start bin/www
