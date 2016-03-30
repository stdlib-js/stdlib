'use strict';

var isJSON = require( './../lib' );

console.log( isJSON( '{"a":5}' ) );
// returns true

console.log( isJSON( '{a":5}' ) );
// returns false
