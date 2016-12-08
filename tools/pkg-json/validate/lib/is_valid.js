'use strict';

// MODULES //

var Ajv = require( 'ajv' );
var schema = require( './../../schema' );


// MAIN //

/**
* Returns a function to validate `package.json`.
*
* @private
* @returns {Function} validation function
*
* @example
* var isValid = validator();
*/
function validator() {
	return ( new Ajv() ).compile( schema() );
} // end FUNCTION validator()


// EXPORTS //

module.exports = validator();
