'use strict';

// MODULES //

var tape = require( 'tape' );
var entryPoints = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof entryPoints, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to synchronously resolve package entry points', function test( t ) {
	t.equal( typeof entryPoints.sync, 'function', 'has sync method' );
	t.end();
});
