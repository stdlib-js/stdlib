'use strict';

/**
* Wraps a citation identifier.
*
* @private
* @param {string} id - citation identifier
* @returns {string} wrapped identifier
*
* @example
* var id = '@press:1992';
*
* var out = wrap( id );
* // returns '[@press:1992]'
*/
function wrap( id ) {
	return '[' + id + ']';
} // end FUNCTION wrap()


// EXPORTS //

module.exports = wrap;
