class HTTPS {
  
    constructor( url ) {
        this.axios = require( 'axios' );
        this.url = url; 
    }

    request( ) {
               
   this.axios.get( this.url )
            .then( res => {
                return "entro 1";
            } )
            .catch( error => {
                return "entro 2";                
            } );     
                     
       }

}

module.exports = HTTPS;
