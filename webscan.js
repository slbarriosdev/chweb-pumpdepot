const File = require('./files');
const HTTPS = require('./https')
const url = 'https://pumpdepot.us';

var log = new File();
var https = new HTTPS(url);




 const doSomething = async () => {
     console.log(await https.request());
   }
    
  doSomething();

// if(https.request() == "202"){
//   log.write(` ${url} is DOWN `);
// }

// log.write( url+' site is DOWN' );