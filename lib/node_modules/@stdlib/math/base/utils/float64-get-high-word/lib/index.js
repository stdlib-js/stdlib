'use strict';

// MODULES //

var HIGH = require( './high.js' );


// NOTES //

/**
* float64 (64 bits)
* f := fraction (significand/mantissa) (52 bits)
* e := exponent (11 bits)
* s := sign bit (1 bit)
*
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |                                Float64                                |
* |-------- -------- -------- -------- -------- -------- -------- --------|
* |              Uint32               |               Uint32              |
* |-------- -------- -------- -------- -------- -------- -------- --------|
*
* If little endian (more significant bits last):
*                         <-- lower      higher -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
*
* If big endian (more significant bits first):
*                         <-- higher      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
*
*
* Note: in which Uint32 can we find the higher order bits? If LE, the second; if BE, the first.
* Refs: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*/


// VARIABLES //

var FLOAT64_VIEW = new Float64Array( 1 );
var UINT32_VIEW = new Uint32Array( FLOAT64_VIEW.buffer );


// HIGH WORD //

/**
* FUNCTION: highWord( x )
*	Returns an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.
*
* @param {Number} x - input value
* @returns {Number} higher order word
*/
function highWord( x ) {
	FLOAT64_VIEW[ 0 ] = x;
	return UINT32_VIEW[ HIGH ];
} // end FUNCTION highWord()


// EXPORTS //

module.exports = highWord;
