'use strict';

// MODULES //

var tape = require( 'tape' );
var join = require( 'path' ).join;
var proxyquire = require( 'proxyquire' );
var isStringArray = require( '@stdlib/utils/is-string-array' ).primitives;
var isArray = require( '@stdlib/utils/is-array' );
var readPkgs = require( './../lib/read_pkgs.js' );


// FIXTURES //

var GYPFILE = join( __dirname, 'fixtures', 'gypfile.json' );
var NO_GYPFILE = join( __dirname, 'fixtures', 'no_gypfile.json' );


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

	readPkgs( [ GYPFILE, NO_GYPFILE ], clbk );

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
	var readPkgs = proxyquire( './../lib/read_pkgs.js', {
		'@stdlib/fs/exists': exists
	});

	readPkgs( [ GYPFILE, NO_GYPFILE ], clbk );

	function exists( fpath, clbk ) {
		clbk( null, true );
	}

	function clbk( error, pkgs ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isStringArray( pkgs ), true, 'returns a string array' );
		t.end();
	}
});

tape( 'the function returns an empty array if unable to detect at least one add-on', function test( t ) {
	readPkgs( [ NO_GYPFILE ], clbk );

	function clbk( error, pkgs ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isArray( pkgs ), true, 'returns an array' );
		t.strictEqual( pkgs.length, 0, 'returns an empty array' );
		t.end();
	}
});

tape( 'the function returns an empty array if unable to detect at least one add-on (no gypfile)', function test( t ) {
	readPkgs( [ GYPFILE ], clbk );

	function clbk( error, pkgs ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isArray( pkgs ), true, 'returns an array' );
		t.strictEqual( pkgs.length, 0, 'returns an empty array' );
		t.end();
	}
});

tape( 'the function returns an empty array if unable to detect at least one add-on (error when checking for gypfile)', function test( t ) {
	var readPkgs = proxyquire( './../lib/read_pkgs.js', {
		'@stdlib/fs/exists': exists
	});

	readPkgs( [ GYPFILE ], clbk );

	function exists( fpath, clbk ) {
		clbk( new Error( 'beep' ) );
	}

	function clbk( error, pkgs ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isArray( pkgs ), true, 'returns an array' );
		t.strictEqual( pkgs.length, 0, 'returns an empty array' );
		t.end();
	}
});

tape( 'the function returns an empty array if unable to detect at least one add-on (gypfile does not exist)', function test( t ) {
	var readPkgs = proxyquire( './../lib/read_pkgs.js', {
		'@stdlib/fs/exists': exists
	});

	readPkgs( [ GYPFILE ], clbk );

	function exists( fpath, clbk ) {
		clbk( null, false );
	}

	function clbk( error, pkgs ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isArray( pkgs ), true, 'returns an array' );
		t.strictEqual( pkgs.length, 0, 'returns an empty array' );
		t.end();
	}
});
