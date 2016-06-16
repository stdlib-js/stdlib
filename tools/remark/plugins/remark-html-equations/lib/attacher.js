'use strict';

// MODULES //

var transformer = require( './transformer.js' );


// ATTACHER //

/**
* Attach a plugin to a remark processor in order to insert HTML equation elements.
*
* @return {Function} transformer
*/
function attacher() {
	return transformer;
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
