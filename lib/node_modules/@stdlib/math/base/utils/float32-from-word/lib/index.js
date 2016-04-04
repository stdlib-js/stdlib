'use strict';

// VARIABLES //

var UINT32_VIEW = new Uint32Array( 1 );
var FLOAT32_VIEW = new Float32Array( UINT32_VIEW.buffer );


// FLOAT32-FROM-WORD //

/**
* FUNCTION: fromWord( x )
*	Creates a single-precision floating-point number from an unsigned integer corresponding to an IEEE 754 binary representation.
*
* @param {Number} x - unsigned integer
* @returns {Number} single-precision floating-point number
*/
function fromWord( x ) {
	UINT32_VIEW[ 0 ] = x;
	return FLOAT32_VIEW[ 0 ];
} // end FUNCTION fromWord()


// EXPORTS //

module.exports = fromWord;
