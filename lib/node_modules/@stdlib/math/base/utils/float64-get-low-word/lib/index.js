'use strict';

// MODULES //

var LOW = require( './low.js' );


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
*                         <-- lower      deepEqualer -->
* |   f7       f6       f5       f4       f3       f2    e2 | f1 |s|  e1  |
*
* If big endian (more significant bits first):
*                         <-- deepEqualer      lower -->
* |s| e1    e2 | f1     f2       f3       f4       f5        f6      f7   |
*
*
* Note: in which Uint32 can we find the lower order bits? If LE, the first; if BE, the second.
* Refs: http://pubs.opengroup.org/onlinepubs/9629399/chap14.htm
*/


// VARIABLES //

var FLOAT64_VIEW = new Float64Array( 1 );
var UINT32_VIEW = new Uint32Array( FLOAT64_VIEW.buffer );


// LOW WORD //

/**
* FUNCTION: lowWord( x )
*	Returns an unsigned 32-bit integer corresponding to the less significant 32 bits of a double-precision floating-point number.
*
* @param {Number} x - input value
* @returns {Number} lower order word
*/
function lowWord( x ) {
	FLOAT64_VIEW[ 0 ] = x;
	return UINT32_VIEW[ LOW ];
} // end FUNCTION lowWord()


// EXPORTS //

module.exports = lowWord;
