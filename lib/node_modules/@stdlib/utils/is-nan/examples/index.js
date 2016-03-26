'use strict';

var isnan = require( './../lib' );

console.log( isnan( NaN ) );
// returns true

console.log( isnan( '5' ) );
// returns false

console.log( isnan( 5 ) );
// returns false
