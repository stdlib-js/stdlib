'use strict';

// MODULES //

var tape = require( 'tape' );
var prefix = require( './../lib/stdlib.js' );
var isStringArray = require( prefix+'@stdlib/utils/is-string' ).isPrimitiveStringArray;
var findPkgs = require( './../lib/sync.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof findPkgs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		findPkgs( opts );
	}
});

tape( 'the function returns a string array', function test( t ) {
	var pkgs;
	var opts;

	opts = {
		'dir': './../'
	};
	pkgs = findPkgs( opts );

	t.equal( isStringArray( pkgs ), true, 'returns a string array' );

	t.end();
});



