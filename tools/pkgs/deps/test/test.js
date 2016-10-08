'use strict';

// MODULES //

var tape = require( 'tape' );
var resolveDeps = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof resolveDeps, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to synchronously resolve package dependencies', function test( t ) {
	t.equal( typeof resolveDeps.sync, 'function', 'has sync method' );
	t.end();
});
