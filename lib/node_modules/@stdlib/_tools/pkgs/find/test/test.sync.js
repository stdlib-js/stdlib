'use strict';

// MODULES //

var tape = require( 'tape' );
var resolve = require( 'path' ).resolve;
var proxyquire = require( 'proxyquire' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isArray = require( '@stdlib/assert/is-array' );
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

tape( 'the function returns a string array (if able to resolve packages)', function test( t ) {
	var pkgs;
	var opts;

	opts = {
		'dir': dir
	};
	pkgs = findPkgs( opts );

	t.equal( isStringArray( pkgs ), true, 'returns a string array' );

	t.end();
});

tape( 'the function returns an empty array (if unable to resolve packages)', function test( t ) {
	var findPkgs;
	var pkgs;

	findPkgs = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		}
	});
	pkgs = findPkgs();

	t.equal( isArray( pkgs ), true, 'returns an array' );
	t.equal( pkgs.length, 0, 'returns an empty array' );

	t.end();

	function glob() {
		return [];
	}
});



