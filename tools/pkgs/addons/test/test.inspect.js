'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isArray = require( '@stdlib/assert/is-array' );
var inspect = require( './../lib/inspect.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof inspect, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a string array if able to detect at least one add-on', function test( t ) {
	var inspect;
	var count;

	inspect = proxyquire( './../lib/inspect.js', {
		'@stdlib/fs/exists': exists
	});

	count = 0;

	inspect( [ '/beep/boop/package.json', '/a/b/c/d/e/f/g/h/beep/boop/bop/package.json' ], clbk );

	function exists( fpath, clbk ) {
		count += 1;
		if ( count < 2 ) {
			return clbk( null, true );
		}
		clbk( null, false );
	}

	function clbk( error, pkgs ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isStringArray( pkgs ), true, 'returns a string array' );
		t.strictEqual( pkgs.length, 1, 'expected length' );
		t.end();
	}
});

tape( 'the function returns an empty array if unable to detect at least one add-on', function test( t ) {
	inspect( [ '/a/b/c/d/e/f/g/h/beep/boop/bop/package.json' ], clbk );

	function clbk( error, pkgs ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.strictEqual( isArray( pkgs ), true, 'returns an array' );
		t.strictEqual( pkgs.length, 0, 'returns an empty array' );
		t.end();
	}
});

tape( 'the function returns an empty array if unable to detect at least one add-on (error)', function test( t ) {
	var inspect = proxyquire( './../lib/inspect.js', {
		'@stdlib/fs/exists': exists
	});

	inspect( [ '/a/b/c/d/e/f/g/h/beep/boop/bop/package.json' ], clbk );

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

tape( 'the function returns an empty array if unable to detect at least one add-on (no error)', function test( t ) {
	var inspect = proxyquire( './../lib/inspect.js', {
		'@stdlib/fs/exists': exists
	});

	inspect( [ '/a/b/c/d/e/f/g/h/beep/boop/bop/package.json' ], clbk );

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
