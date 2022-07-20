class File{
    
    constructor() {
        this.fs = require('fs');
        this.url = 'log.txt';   
        this.date = new Date(); 
    }

    write( content ) {

       content  = this.date+' '+content+' \n';
       this.fs.appendFile(this.url, content, err => {
            if ( err ) {
                console.error(err);
            }        
        });

    }

}

module.exports = File;