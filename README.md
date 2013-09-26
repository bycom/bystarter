# BY Starter
Front-end boilerplate for faster and easier web development.

## Components
* Normalize 2.1.0
* Modernizr 2.6.2
* jQuery 1.9.1
* Grunt 0.4.1  

## Installation
  git clone https://github.com/s3rgiosan/bystarter.git YOUR-SITE-NAME  
  npm install  
  grunt server

## Usage

### Development
`grunt server` creates a static server at port 9001 that watches for file changes and enables the livereload snippet.  
`grunt` is the same that running `grunt styles` and `grunt scripts` individually.  
`grunt styles` compiles LESS files to CSS and lints all the generated files.  
`grunt scripts` validates JS files with JSHint and concatenates different files into one.  
`grunt images` minifies PNG and JPEG images.  

### Production
`grunt dist` cleans the dist folder, compiles LESS, validates and minifies CSS and JS, compresses images and copies selected files to dist folder.  

## Browser Support
* Mozilla Firefox 5+
* Google Chrome 14+
* Safari 5+
* Opera 11+
* Internet Explorer 8+

## Authors and Contributors
Sérgio Santos (@s3rgiosan)