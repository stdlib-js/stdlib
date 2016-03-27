'use strict';

var isInteger = require( './../lib' );

console.log( isInteger( 5 ) );
// returns true

console.log( isInteger( 0 ) );
// returns true

console.log( isInteger( 5.256 ) );
// returns false

console.log( isInteger( 1/0 ) );
// returns false
