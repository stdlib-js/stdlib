'use strict';

var isClassSupported = require( './../lib' );

var bool = isClassSupported();
if ( bool ) {
	console.log( 'Environment has native class support.' );
} else {
	console.log( 'Environment lacks native class support.' );
}
