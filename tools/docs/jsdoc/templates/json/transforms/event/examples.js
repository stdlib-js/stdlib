'use strict';

/**
* Transforms `examples` doclet elements.
*
* @param {Object[]} nodes - doclet elements
* @returns {Object[]} filtered objects
*/
function transform( nodes ) {
	var out;
	var i;
	out = new Array( nodes.length );
	for ( i = 0; i < nodes.length; i++ ) {
		out[ i ] = nodes[ i ];
	}
	return out;
}


// EXPORTS //

module.exports = transform;
