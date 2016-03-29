'use strict';

// VARIABLES //

var FLOAT32_VIEW = new Float32Array( 1 );
var UINT32_VIEW = new Uint32Array( FLOAT32_VIEW.buffer );

// 0 11111111 00000000000000000000000 => 2139095040 => 0x7f800000 (see IEEE 754-2008)
var PINF = 0x7f800000;

// Set the ArrayBuffer bit sequence:
UINT32_VIEW[ 0 ] = PINF;


// EXPORTS //

module.exports = FLOAT32_VIEW[ 0 ];
