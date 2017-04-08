var express = require('express')
  , app = express();

module.exports = function( path, port, options ){
  app.use( express.static( path, options ) );
  app.listen( port, function( err ){
    console.log( 'express static server listening at ' + port );
  })
}
