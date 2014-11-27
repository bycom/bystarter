# BY Starter
Front-end boilerplate for faster and easier web development.

## Components
* Normalize 2.1.0
* BY Grid 1.1.0 (based on v3.1.1 of Twitter's Bootstrap)
* Modernizr 2.6.2
* jQuery 1.9.1
* Grunt 0.4.1  
  * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)  
  * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)  
  * [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)  
  * [grunt-combine-media-queries](https://github.com/buildingblocks/grunt-combine-media-queries)  
  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)  
  * [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)  
  * [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)  
  * [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)  
  * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)  
  * [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)  
  * [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)  
  * [grunt-compile-handlebars](https://github.com/gruntjs/grunt-contrib-handlebars)
  * [grunt-prettify](https://github.com/jonschlinkert/grunt-prettify)
  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)

### LiveReload
You can use livereload on your project by installing a browser extension or including the JavaSript snippet:
* [Chrome Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
* ```<script src="//localhost:35729/livereload.js"></script>```

## Installation
```
git clone https://github.com/bycom/bystarter.git YOUR-SITE-NAME  
npm install
```

## Usage

Create a static server at port 9001 that watches for file changes and enables livereload:
```
grunt server  
```

Compile LESS to CSS and lint all the generated files:
```
grunt styles  
```

Validate JS with JSHint and concatenates different files to one:
```
grunt scripts  
```

Convert a set of images into a spritesheet and corresponding CSS variables:
```
grunt sprites  
```

Minify PNG and JPEG images:
```
grunt images  
```

Compile [Handlebars](http://handlebarsjs.com) templates and outputs static HTML:
```
grunt html  
```

Development build:
```
grunt  
```

Production build:
```
grunt dist  
``` 

## Browser Support
* Mozilla Firefox 5+
* Google Chrome 14+
* Safari 5+
* Opera 11+
* Internet Explorer 9+

## Authors and Contributors
Sérgio Santos (@s3rgiosan)  
Luís Hebbelinck (@bylhebbelinck)  
Ana Silva (@yana-vertigo)  
Rodrigo Alves (@Rodrigo96)  
