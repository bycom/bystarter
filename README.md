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

## Versioning
This project uses MAJOR.MINOR.PATCH [Semantic Versioning](http://semver.org/).

## Licensing
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
