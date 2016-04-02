'use strict';

var areGeneratorsSupported = require( './../lib' );

var bool = areGeneratorsSupported();
if ( bool ) {
	console.log( 'Environment has native generator support.' );
} else {
	console.log( 'Environment lacks native generator support.' );
}
