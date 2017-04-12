'use strict';

// MODULES //

var tape = require( 'tape' );
var resolve = require( 'path' ).resolve;
var proxyquire = require( 'proxyquire' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isArray = require( '@stdlib/assert/is-array' );
var findAddons = require( './../lib/sync.js' );


// VARIABLES //

var dir = resolve( __dirname, '..', '..' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof findAddons, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		findAddons( opts );
	}
});

tape( 'the function returns a string array (if at least one add-on is detected)', function test( t ) {
	var findAddons;
	var count;
	var pkgs;
	var opts;

	findAddons = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		},
		'@stdlib/fs/exists': {
			'sync': exists
		}
	});

	count = 0;

	opts = {
		'dir': dir
	};
	pkgs = findAddons( opts );

	t.strictEqual( isStringArray( pkgs ), true, 'returns a string array' );
	t.strictEqual( pkgs.length, 1, 'expected length' );

	t.end();

	function glob() {
		return [ '/beep/boop/package.json', '/a/b/c/d/e/f/g/h/beep/boop/bop/package.json' ];
	}

	function exists() {
		count += 1;
		if ( count < 2 ) {
			return true;
		}
		return false;
	}
});

tape( 'the function returns an empty array if unable to resolve any add-ons', function test( t ) {
	var findAddons;
	var pkgs;

	findAddons = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		}
	});

	pkgs = findAddons();

	t.strictEqual( isArray( pkgs ), true, 'returns an array' );
	t.strictEqual( pkgs.length, 0, 'returns an empty array' );

	t.end();

	function glob() {
		return [ '/beep/boop/package.json' ];
	}
});

tape( 'the function returns an empty array if unable to resolve any packages', function test( t ) {
	var findAddons;
	var pkgs;

	findAddons = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		}
	});

	pkgs = findAddons();

	t.strictEqual( isArray( pkgs ), true, 'returns an array' );
	t.strictEqual( pkgs.length, 0, 'returns an empty array' );

	t.end();

	function glob() {
		return [];
	}
});
