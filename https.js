class HTTPS {
  
    constructor( url ) {
        this.axios = require( 'axios' );
        this.url = url; 
    }

    request( ) {
           
        return new Promise(resolve => {
           this.axios.get( this.url )
            .then( res => {
                resolve("entro 11");
            } ).catch( error => {
                resolve("entro 2");                
            } );  

          })   
          
                     
    }

}

module.exports = HTTPS;
