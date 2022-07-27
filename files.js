class File{
    
    constructor() {
        this.fs = require('fs');
        this.url = 'log.txt';   
        this.date = new Date(); 
    }


    deleteFile(){

       
        this.fs.stat(this.url, (err, stats) => {
            if (err) {
                console.log(`File doesn't exist.`);
                return;
            }              
           
            
                if( stats.size >= 500000){
                    this.fs.unlink(this.url, (err => {
                        if (err) 
                            console.log(`Error deleting file.`);                    
                    }));
                }

        });     
      

    }   

    write( content ) {

    this.deleteFile();     

       content  = this.date.toISOString()+' '+content+' \n';
       this.fs.appendFile(this.url, content, err => {
            if ( err ) {
                console.error(err);
            }        
        });

    }

}

module.exports = File;