// Import both http & https for handling different uris
var http = require('http');  
var https = require('https');  
// in order to write to the filesystem we need the `fs` lib
var fs = require('fs');  
// import the lib
var sharp = require('sharp');

var imageUri = 'http://localhost:3700/images/vasoCastanho.jpg';

resizeImage(imageUri, 200, 200)  
.then((thumbnailPath) => console.log('DONE', thumbnailPath))
.catch((err) => console.log(err));

function resizeImage(imageUri, width, height) {  
  // create the resize transform
  var resizeTransform = sharp().resize(width, height).max();
  return new Promise((resolve, reject) => {
    // determine wether we need to use `http` or `https` libs
    var httpLib = http;
    if ( /^https/.test(imageUri) ) {
      httpLib = https;
    }
    // begin reading the image
    httpLib.get(imageUri, function(downloadStream) {
      var outPath = `./public/images/vasoCastanho${ width }x${ height }.jpg`;
      var writeStream = fs.createWriteStream(outPath);
      downloadStream.pipe(resizeTransform).pipe(writeStream);
      downloadStream.on('end', () => resolve(outPath));
      writeStream.on('error', reject);
      downloadStream.on('error', reject);
      resizeTransform.on('error', reject);
    });
  });
}