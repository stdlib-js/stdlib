'use strict';

// VARIABLES //

var FLOAT32_VIEW = new Float32Array( 1 );
var UINT32_VIEW = new Uint32Array( FLOAT32_VIEW.buffer );

// 1 11111111 00000000000000000000000 => 4286578688 => 0xff800000 (see IEEE 754-2008)
var NINF = 0xff800000;

// Set the ArrayBuffer bit sequence:
UINT32_VIEW[ 0 ] = NINF;


// EXPORTS //

module.exports = FLOAT32_VIEW[ 0 ];
