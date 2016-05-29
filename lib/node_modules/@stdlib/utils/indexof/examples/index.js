'use strict';

var indexOf = require( './../lib' );

var arr;
var obj;
var str;
var idx;
var i;

// Arrays...
arr = new Array( 10 );
for ( i = 0; i < arr.length; i++ ) {
	arr[ i ] = i * 10;
}
idx = indexOf( arr, 40 );

console.log( idx );
// returns 4


// Array-like objects...
obj = {
	'0': 'beep',
	'1': 'boop',
	'2': 'bap',
	'3': 'bop',
	'length': 4
};

idx = indexOf( obj, 'bap' );

console.log( idx );
// returns 2


// Strings...
str = 'beepboopbop';

idx = indexOf( str, 'o' );

console.log( idx );
// returns 5
