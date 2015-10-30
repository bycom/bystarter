# BY Starter
Front-end boilerplate for faster and easier web development.

## Components
* Normalize 2.1.0
* BY Grid 1.1.0 (based on v3.1.1 of Twitter's Bootstrap)
* Modernizr 2.6.2
* jQuery 1.9.1
* Grunt 0.4.1  
  * [postcss](https://github.com/nDmitry/grunt-postcss)
  * [grunt-browser-sync](https://github.com/BrowserSync/grunt-browser-sync)
  * [grunt-combine-media-queries](https://github.com/buildingblocks/grunt-combine-media-queries)
  * [grunt-compile-handlebars](https://github.com/gruntjs/grunt-contrib-handlebars)  
  * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) 
  * [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) 
  * [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)  
  * [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)  
  * [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)  
  * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)  
  * [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)  
  * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)  
  * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)  
  * [grunt-prettify](https://github.com/jonschlinkert/grunt-prettify)
  * [grunt-spritesmith](https://github.com/Ensighten/grunt-spritesmith)  
  * [load-grunt-configs](https://github.com/creynders/load-grunt-configs)
  * [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks)
  * [time-grunt](https://github.com/sindresorhus/time-grunt)

## Installation
```
git clone https://github.com/bycom/bystarter.git YOUR-SITE-NAME  
npm install
```

## Usage

Create a static server at port 3001 (for user interface, read [browser-sync official page for more info](http://www.browsersync.io/)) that watches for file changes and enables live reload:
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

### Updating Autoprefix prefixes database
```
$ npm update caniuse-db
```
[Disabeling some prefixers](https://www.npmjs.com/package/autoprefixer#disabling)  
[Autoprefixer Playground](http://simevidas.jsbin.com/gufoko/quiet)  

### BrowserSync Features
1. **Scroll** - I can keep your pages in sync when scrolling.
2. **Forms** - You fill out a form in one browser, I'll copy the data to all the others.
3. **Links** - I'll watch your clicks and make all the other browsers follow you.
4. **CSS injecting** - I can even watch your CSS files & inject them when they change.
5. **Live Reload** - I can also watch files like HTML and PHP & when they change I can reload all browsers for you.
6. **Built-in Server** - Yep, I can serve static files too if you need me to (uses Connect).
7. **Use with any back-end setup** - I even have a proxy option so that I can be used with existing PHP, Rails, Python, Node or ASP.net setup.
8. **Public URL** - View your website via a URL that any internet connected device can access & maintain all BrowserSync features.
9. **Browser Stack support** - Use the all of my features when viewing your site through Browser Stack.

##Access URLs
e.g.:
```
 --------------------------------------
       Local: http://localhost:3000
    External: http://192.168.4.212:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://192.168.4.212:3001
 --------------------------------------
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
Mário Silva (@Marocas)  

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
