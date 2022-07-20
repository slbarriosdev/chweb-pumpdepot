const File = require('./files');
const HTTPS = require('./https')
const url = 'https://pumpdepot.us';

var log = new File();
var https = new HTTPS(url);

console.log(https.request());

// if(https.request() == "202"){
//   log.write(` ${url} is DOWN `);
// }

// log.write( url+' site is DOWN' );