'use strict';

// MODULES //

var tape = require( 'tape' );
var resolve = require( 'path' ).resolve;
var isStringArray = require( '@stdlib/utils/is-string-array' ).primitives;
var findPkgs = require( './../lib/sync.js' );


// VARIABLES //

var dir = resolve( __dirname, '..', '..' );


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
		'dir': dir
	};
	pkgs = findPkgs( opts );

	t.equal( isStringArray( pkgs ), true, 'returns a string array' );

	t.end();
});



