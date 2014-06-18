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
* Gulp 3.7.0
  * [gulp-connect](https://github.com/avevlad/gulp-connect)
  * [gulp-less](https://github.com/plus3network/gulp-less)
  * [gulp-combine-media-queries](https://github.com/konitter/gulp-combine-media-queries)
  * [gulp-jshint](https://github.com/spenceralger/gulp-jshint)
  * [gulp-concat](https://github.com/wearefractal/gulp-concat)
  * [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)
  * [gulp-cssmin](https://github.com/chilijung/gulp-cssmin/)
  * [gulp-uglify](https://github.com/terinjokes/gulp-uglify)

### LiveReload
You can use livereload on your project by installing a browser extension or including the JavaSript snippet:
* [Chrome Extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
* ```<script src="//localhost:35729/livereload.js"></script>```

### Grunt or Gulp
It's your call. If you prefer configuration over code, use Grunt, or use Gulp if you prefer code over configuration.
Both are included and both have the same configuration and the same tasks.  
The only thing you have to do is delete the default `package.json` and rename the `package.gulp.json` to `package.json` before doing `npm install`.

## Installation
```
git clone https://github.com/bycom/bystarter.git YOUR-SITE-NAME  
npm install
```

## Usage

Create a static server at port 9001 that watches for file changes and enables livereload:
```
grunt server  
gulp server
```

Compile LESS to CSS and lint all the generated files:
```
grunt styles  
gulp styles
```

Validate JS with JSHint and concatenates different files to one:
```
grunt scripts  
gulp scripts
```

Convert a set of images into a spritesheet and corresponding CSS variables:
```
grunt sprites  
```

Minify PNG and JPEG images:
```
grunt images  
gulp images
```

Development build:
```
grunt  
gulp
```

Production build:
```
grunt dist  
gulp dist
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
Rodrigo Alves (@Rodrigo96)  
