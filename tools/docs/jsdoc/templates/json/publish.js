'use strict';

// MODULES //

var transform = require( './transform.js' );


// VARIABLES //

var opts = {
	'undocumented': true
};


// MAIN //

/**
* Transforms an array of raw `doclet` objects and writes to `stdout`.
*
* @param {TAFFY} data - TAFFY database
*/
function publish( data ) {
	var root;
	var docs;

	// Remove undocumented doclets:
	data( opts ).remove();

	// Retrieve an array of raw doclet objects:
	docs = data().get();

	// Transform the raw doclet array:
	root = {};
	transform( root, docs );

	// Write to stdout:
	console.log( JSON.stringify( root ) );
}


// EXPORTS //

module.exports = {};
module.exports.publish = publish;
