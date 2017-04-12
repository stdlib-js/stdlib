'use strict';

// MODULES //

var tape = require( 'tape' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var ls = require( './../lib/sync.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof ls, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		ls( opts );
	}
});

tape( 'the function returns a string array', function test( t ) {
	var names = ls();
	t.equal( isStringArray( names ), true, 'returns a string array' );
	t.end();
});

tape( 'the function returns a string array (dir option)', function test( t ) {
	var names;
	var opts;

	opts = {
		'dir': './@stdlib/math/base'
	};
	names = ls( opts );

	t.equal( isStringArray( names ), true, 'returns a string array' );

	t.end();
});



