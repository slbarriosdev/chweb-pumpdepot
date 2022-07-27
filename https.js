class HTTPS {
  
    constructor( url ) {
        this.axios = require( 'axios' );
        this.url = url; 
    }

    request( ) {
           
        return new Promise(resolve => {
           this.axios.get( this.url )
            .then( res => {
                resolve(res.status);
            } ).catch( error => {
                resolve("-1");                
            } );  

          });          
                     
    }

}

module.exports = HTTPS;
