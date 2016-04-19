'use strict';

// MODULES //

var tape = require( 'tape' );
var fcn = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof fcn, 'function', 'main export is a function' );
	t.end();
});

// TODO: add tests
