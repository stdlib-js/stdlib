'use strict';

// VARIABLES //

var FLOAT32_VIEW = new Float32Array( 1 );
var UINT32_VIEW = new Uint32Array( FLOAT32_VIEW.buffer );


// FLOAT32-TO-WORD //

/**
* FUNCTION: toWord( x )
*	Returns an unsigned 32-bit integer corresponding to the IEEE 754 binary representation of a single-precision floating-point number.
*
* @param {Number} x - floating-point number
* @returns {Number} 32-bit integer
*/
function toWord( x ) {
	FLOAT32_VIEW[ 0 ] = x;
	return UINT32_VIEW[ 0 ];
} // end FUNCTION toWord()


// EXPORTS //

module.exports = toWord;
