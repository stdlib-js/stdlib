'use strict';

var isWindows = require( './../lib' );

if ( isWindows ) {
	console.log( 'Running on Windows...' );
} else {
	console.log( 'Running on %s...', process.platform );
}
