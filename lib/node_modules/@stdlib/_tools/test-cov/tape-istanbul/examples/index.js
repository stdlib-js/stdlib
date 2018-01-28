'use strict';

var runner = require( './../lib' );

var pattern;
var opts;

/**
* Callback invoked once finished.
*
* @private
* @param {Error} [error] - error object
* @param {Object} coverage - coverage information
*/
function done( error, coverage ) {
	if ( error ) {
		throw error;
	}
	console.log( JSON.stringify( coverage ) );
}

// Specify a glob pattern:
pattern = __dirname+'/fixtures/**/test*.js'; // eslint-disable-line no-path-concat

// Set the runner options:
opts = {
	'dir': __dirname
};

// Run the instrumented source code:
runner( pattern, opts, done );
