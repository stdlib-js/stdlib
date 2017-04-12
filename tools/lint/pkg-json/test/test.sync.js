'use strict';

// MODULES //

var tape = require( 'tape' );
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var proxyquire = require( 'proxyquire' );
var isObjectArray = require( '@stdlib/assert/is-object-array' );
var lint = require( './../lib/sync.js' );


// VARIABLES //

var dir = resolve( __dirname, '..', '..' );
var bad = join( __dirname, 'fixtures', 'bad.json' );
var invalid = join( __dirname, 'fixtures', 'invalid.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lint, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		lint( opts );
	}
});

tape( 'the function returns an array of lint errors if unable to parse one or more files as JSON', function test( t ) {
	var lint;
	var errs;

	lint = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		}
	});

	errs = lint({
		'dir': dir
	});
	t.strictEqual( isObjectArray( errs ), true, 'returns lint errors' );
	t.end();

	function glob() {
		return [ invalid ];
	}
});

tape( 'the function returns an array of lint errors if one or more files fail lint tests', function test( t ) {
	var lint;
	var errs;

	lint = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		}
	});

	errs = lint();
	t.strictEqual( isObjectArray( errs ), true, 'returns lint errors' );
	t.end();

	function glob() {
		return [ bad, bad ];
	}
});

tape( 'the function returns `null` if all `package.json` files are valid', function test( t ) {
	var opts;
	var err;

	opts = {
		'dir': dir
	};
	err = lint( opts );

	t.strictEqual( err, null, 'returns `null`' );

	t.end();
});

tape( 'the function returns `null` if unable to resolve any `package.json` files', function test( t ) {
	var lint;
	var errs;

	lint = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		}
	});

	errs = lint();
	t.strictEqual( errs, null, 'returns null' );
	t.end();

	function glob() {
		return [];
	}
});
