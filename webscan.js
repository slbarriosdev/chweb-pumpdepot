const File = require('./files');
const HTTPS = require('./https')
const url = 'https://pumpmarket.us/';

var log = new File();
var https = new HTTPS(url);
var result = "";

 const doSomething = async () => {
     result = await https.request();


     
     if(result == "200"){
          log.write(` ${url} is online `);
      }
      else{
          log.write(` ${url} is DOWN!!!!!`);
      }
   
 }
  
 doSomething();