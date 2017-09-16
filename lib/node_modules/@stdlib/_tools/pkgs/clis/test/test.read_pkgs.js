'use strict';

// MODULES //

var tape = require( 'tape' );
var join = require( 'path' ).join;
var proxyquire = require( 'proxyquire' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isArray = require( '@stdlib/assert/is-array' );
var readPkgs = require( './../lib/read_pkgs.js' );


// FIXTURES //

var CLI = join( __dirname, 'fixtures', 'cli.json' );
var BIN_STR = join( __dirname, 'fixtures', 'bin_str.json' );
var NO_CLI = join( __dirname, 'fixtures', 'no_cli.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof readPkgs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error to a provided callback if an error is encountered while reading packages', function test( t ) {
	var readPkgs = proxyquire( './../lib/read_pkgs.js', {
		'@stdlib/fs/read-json': readJSON
	});

	readPkgs( [ CLI, NO_CLI, BIN_STR ], clbk );

	function readJSON() {
		var cb = arguments[ arguments.length-1 ];
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			cb( new Error( 'beep' ) );
		}
	}

	function clbk( error ) {
		t.ok( error, 'returns an error' );
		t.end();
	}
});

tape( 'the function returns a string array', function test( t ) {
	readPkgs( [ CLI, NO_CLI, BIN_STR ], clbk );

	function clbk( error, files ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isStringArray( files ), true, 'returns a string array' );
		t.end();
	}
});

tape( 'the function returns an empty array if no `package.json` files reference command-line interfaces', function test( t ) {
	readPkgs( [ NO_CLI ], clbk );

	function clbk( error, files ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isArray( files ), true, 'returns an array' );
		t.strictEqual( files.length, 0, 'returns an empty array' );
		t.end();
	}
});
