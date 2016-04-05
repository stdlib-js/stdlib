'use strict';

var SMALLEST_FLOAT32 = require( './../lib' );

console.log( SMALLEST_FLOAT32.VALUE );
// returns 1.1754943508222875e-38

console.log( SMALLEST_FLOAT32.DENORMALIZED );
// returns 1.401298464324817e-45
