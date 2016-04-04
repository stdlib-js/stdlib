'use strict';

// VARIABLES //

var FLOAT32_VIEW = new Float32Array( 1 );


// FLOAT64-TO-FLOAT32 //

/**
* FUNCTION: float64ToFloat32( x )
*	Converts a double-precision floating-point number to the nearest single-precision floating-point number.
*
* @param {Number} x - double-precision floating-point number
* @returns {Number} nearest single-precision floating-point number
*/
function float64ToFloat32( x ) {
	FLOAT32_VIEW[ 0 ] = x;
	return FLOAT32_VIEW[ 0 ];
} // end FUNCTION float64ToFloat32()


// EXPORTS //

module.exports = float64ToFloat32;
