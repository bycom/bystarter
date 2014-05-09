# BY Starter
Front-end boilerplate for faster and easier web development.

## Components
* Normalize 2.1.0
* BY Grid 1.1.0 (based on v3.1.1 of Twitter's Bootstrap)
* Modernizr 2.6.2
* jQuery 1.9.1
* Grunt 0.4.1  
  * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)  
  * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)  
  * [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)  
  * [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)  
  * [grunt-combine-media-queries](https://github.com/buildingblocks/grunt-combine-media-queries)  
  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)  
  * [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)  
  * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)  
  * [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)  

### LiveReload
You can use livereload on your page by installing a browser extension or script:
* [Chrome Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
* ```<script src="//localhost:35729/livereload.js"></script>```

## Installation
```
git clone https://github.com/bycom/bystarter.git YOUR-SITE-NAME
npm install
grunt server
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

Minify PNG and JPEG images:
```
grunt images
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
* Internet Explorer 8+

## Authors and Contributors
Sérgio Santos (@s3rgiosan)  
Luís Hebbelinck (@bylhebbelinck)  
Ana Silva (@yana-vertigo)
