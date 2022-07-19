class HTTPS {
  
    constructor( ) {
        this.axios = require( 'axios' );
        this.url = 'https://pumpsupermarket.com/'; 
    }

    request( ) {
       
        this.axios.get( this.url )
            .then( res => {
                console.log(`statusCode: ${res.status}` );
                //console.log(res);
            } )
            .catch( error => {
                console.log(`statusCode: DOWN`);
                // console.error(error);
            } );     
               
    }

}

module.exports = HTTPS;
