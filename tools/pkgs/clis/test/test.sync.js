'use strict';

// MODULES //

var tape = require( 'tape' );
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var proxyquire = require( 'proxyquire' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isArray = require( '@stdlib/assert/is-array' );
var findCLIs = require( './../lib/sync.js' );


// VARIABLES //

var dir = resolve( __dirname, '..', '..' );


// FIXTURES //

var NO_CLI = join( __dirname, 'fixtures', 'no_cli.json' );
var BIN_STR =  join( __dirname, 'fixtures', 'bin_str.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof findCLIs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		findCLIs( opts );
	}
});

tape( 'the function throws an error if unable to parse a `package.json` file as JSON', function test( t ) {
	var findCLIs = proxyquire( './../lib/sync.js', {
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
		findCLIs( opts );
	}

	function readJSON() {
		return new Error( 'beep' );
	}
});

tape( 'the function returns a string array (if at least one `package.json` references a CLI)', function test( t ) {
	var files;
	var opts;

	opts = {
		'dir': dir
	};
	files = findCLIs( opts );

	t.strictEqual( isStringArray( files ), true, 'returns a string array' );

	t.end();
});

tape( 'the function supports `package.json` files having `bin` fields with string values', function test( t ) {
	var findCLIs;
	var files;

	findCLIs = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		}
	});

	files = findCLIs();

	t.strictEqual( isStringArray( files ), true, 'returns a string array' );

	t.end();

	function glob() {
		return [ BIN_STR ];
	}
});

tape( 'the function returns an empty array if unable to resolve any CLIs', function test( t ) {
	var findCLIs;
	var files;

	findCLIs = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		}
	});

	files = findCLIs();

	t.strictEqual( isArray( files ), true, 'returns an array' );
	t.strictEqual( files.length, 0, 'returns an empty array' );

	t.end();

	function glob() {
		return [ NO_CLI ];
	}
});



