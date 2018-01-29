'use strict';

// MODULES //

var transformer = require( './transformer.js' );


// MAIN //

/**
* Attaches a plugin to a remark processor in order to insert SVG equations.
*
* @returns {Function} transformer
*
* @example
* var remark = require( 'remark' );
*
* var transform = remark().use( attacher ).processSync;
*/
function attacher() {
	return transformer;
}


// EXPORTS //

module.exports = attacher;
