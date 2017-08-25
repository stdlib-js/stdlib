'use strict';

var beep = require( 'beep' );
var boop = require( './boop.js' );
var bop = require( './../b'+'op.js' );

function bap() {
	var a = require( 'b' );
	if ( a ) {
		throw new Error( 'Oh no!' );
	}
}

var b;
if ( bop ) {
	b = require( 'foo' );
} else {
	b = require( 'bar' );
}

module.exports = beep( boop( bop( bap() ) ) );
