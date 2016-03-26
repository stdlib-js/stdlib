'use strict';

var exists = require( './../lib' );

// Sync:
console.log( exists.sync( __dirname ) );
// returns true

console.log( exists.sync( 'beepboop' ) );
// returns false


// Async:
exists( __dirname, done );
exists( 'beepboop', done );

function done( error, bool ) {
	if ( error ) {
		console.error( error.message );
	} else {
		console.log( bool );
	}
}



