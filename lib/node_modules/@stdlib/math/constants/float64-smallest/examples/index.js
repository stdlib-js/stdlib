'use strict';

var SMALLEST_FLOAT64 = require( './../lib' );

console.log( SMALLEST_FLOAT64.VALUE );
// returns 2.2250738585072014e-308

console.log( SMALLEST_FLOAT64.DENORMALIZED );
// returns 5e-324
