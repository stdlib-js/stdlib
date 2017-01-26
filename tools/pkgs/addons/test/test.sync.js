'use strict';

// MODULES //

var tape = require( 'tape' );
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var proxyquire = require( 'proxyquire' );
var isStringArray = require( '@stdlib/utils/is-string-array' ).primitives;
var isArray = require( '@stdlib/utils/is-array' );
var findAddons = require( './../lib/sync.js' );


// VARIABLES //

var dir = resolve( __dirname, '..', '..' );


// FIXTURES //

var NO_GYPFILE = join( __dirname, 'fixtures', 'no_gypfile.json' );
var GYPFILE = join( __dirname, 'fixtures', 'gypfile.json' );


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

tape( 'the function throws an error if unable to parse a `package.json` file as JSON', function test( t ) {
	var findAddons = proxyquire( './../lib/sync.js', {
		'@stdlib/fs/read-json': {
			'sync': readJSON
		}
	});

	t.throws( foo, Error, 'throws error' );
	t.end();

	function foo() {
		var opts = {
			'dir': dir
		};
		findAddons( opts );
	}

	function readJSON() {
		return new Error( 'beep' );
	}
});

tape( 'the function returns a string array (if at least one add-on is detected)', function test( t ) {
	var findAddons;
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

	opts = {
		'dir': dir
	};
	pkgs = findAddons( opts );

	t.strictEqual( isStringArray( pkgs ), true, 'returns a string array' );

	t.end();

	function glob() {
		return [ GYPFILE ];
	}

	function exists() {
		return true;
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
		return [ NO_GYPFILE ];
	}
});

tape( 'the function returns an empty array if unable to resolve any add-ons (no gypfile)', function test( t ) {
	var findAddons;
	var pkgs;

	findAddons = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		},
		'@stdlib/fs/exists': {
			'sync': exists
		}
	});

	pkgs = findAddons();

	t.strictEqual( isArray( pkgs ), true, 'returns an array' );
	t.strictEqual( pkgs.length, 0, 'returns an empty array' );

	t.end();

	function glob() {
		return [ GYPFILE ];
	}

	function exists() {
		return false;
	}
});
