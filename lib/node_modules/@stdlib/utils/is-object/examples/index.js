'use strict';

var isObject = require( './../lib' );

console.log( isObject( {} ) );
// returns true

console.log( isObject( [] ) );
// returns false

console.log( isObject( null ) );
// returns false
