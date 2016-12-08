'use strict';

// MODULES //

var tape = require( 'tape' );
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var proxyquire = require( 'proxyquire' );
var validate = require( './../lib/sync.js' );


// VARIABLES //

var dir = resolve( __dirname, '..', '..' );
var bad = join( __dirname, 'fixtures', 'bad.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		validate( opts );
	}
});

tape( 'the function returns an error if unable to parse a `package.json` file as JSON', function test( t ) {
	var validate;
	var err;

	validate = proxyquire( './../lib/sync.js', {
		'@stdlib/fs/read-json': {
			'sync': readJSON
		}
	});

	err = validate({
		'dir': dir
	});
	t.strictEqual( err instanceof Error, true, 'returns an error: '+err.message );
	t.end();

	function readJSON() {
		return new Error( 'beep' );
	}
});

tape( 'the function returns an error if a `package.json` file is invalid', function test( t ) {
	var validate;
	var err;

	validate = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		}
	});

	err = validate();
	t.strictEqual( err instanceof Error, true, 'returns an error: '+err.message );
	t.end();

	function glob() {
		return [ bad ];
	}
});

tape( 'the function returns `null` if all `package.json` files are valid', function test( t ) {
	var opts;
	var err;

	opts = {
		'dir': dir
	};
	err = validate( opts );

	t.strictEqual( err, null, 'returns `null`' );

	t.end();
});
