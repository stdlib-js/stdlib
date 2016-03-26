'use strict';

var setReadOnly = require( './../lib' );

class Foo {
	constructor( name ) {
		setReadOnly( this, 'name', name );
	}
}

var foo = new Foo( 'beep' );

try {
	foo.name = 'boop';
} catch ( err ) {
	console.error( err.message );
}
