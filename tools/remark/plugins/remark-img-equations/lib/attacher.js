'use strict';

// MODULES //

var transformer = require( './transformer.js' );


// MAIN //

/**
* Attaches a plugin to a remark processor in order to insert image equation elements.
*
* @returns {Function} transformer
*/
function attacher() {
	return transformer;
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
