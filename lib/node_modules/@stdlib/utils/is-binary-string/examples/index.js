'use strict';

var isBinaryString = require( './../lib' );

console.log( isBinaryString( '1' ) );
// returns true

console.log( isBinaryString( '0' ) );
// returns true

console.log( isBinaryString( '101010101001' ) );
// returns true

console.log( isBinaryString( '' ) );
// returns false

console.log( isBinaryString( 'beep' ) );
// returns false

console.log( isBinaryString( null ) );
// returns false
