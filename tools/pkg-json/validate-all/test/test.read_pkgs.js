'use strict';

// MODULES //

var tape = require( 'tape' );
var join = require( 'path' ).join;
var resolve = require( 'path' ).resolve;
var readPkgs = require( './../lib/read_pkgs.js' );


// FIXTURES //

var bad = join( __dirname, 'fixtures', 'bad.json' );
var invalid = join( __dirname, 'fixtures', 'invalid.json' );
var good = resolve( __dirname, '..', 'package.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof readPkgs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error to a provided callback if an error is encountered while reading packages', function test( t ) {
	readPkgs( [ invalid ], clbk );

	function clbk( error ) {
		t.ok( error, 'returns an error' );
		t.end();
	}
});

tape( 'the function returns an error to a provided callback if a package is invalid', function test( t ) {
	readPkgs( [ bad ], clbk );

	function clbk( error ) {
		t.ok( error, 'returns an error' );
		t.end();
	}
});

tape( 'the function successfully validates valid packages', function test( t ) {
	readPkgs( [ good, good ], clbk );

	function clbk( error ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.ok( true, 'did not return an error' );
		}
		t.end();
	}
});
