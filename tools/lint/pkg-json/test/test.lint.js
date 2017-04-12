'use strict';

// MODULES //

var tape = require( 'tape' );
var join = require( 'path' ).join;
var resolve = require( 'path' ).resolve;
var isObjectArray = require( '@stdlib/assert/is-object-array' );
var lint = require( './../lib/lint.js' );


// FIXTURES //

var bad = join( __dirname, 'fixtures', 'bad.json' );
var invalid = join( __dirname, 'fixtures', 'invalid.json' );
var good = resolve( __dirname, '..', 'package.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lint, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of errors to a provided callback if one or more errors are encountered while reading packages', function test( t ) {
	lint( [ invalid ], clbk );

	function clbk( error, errs ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.strictEqual( isObjectArray( errs ), true, 'returns an array of errors' );
		}
		t.end();
	}
});

tape( 'the function returns an array of errors to a provided callback if one or more packages are invalid', function test( t ) {
	lint( [ bad ], clbk );

	function clbk( error, errs ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.strictEqual( isObjectArray( errs ), true, 'returns an array of errors' );
		}
		t.end();
	}
});

tape( 'the function successfully lints valid packages', function test( t ) {
	lint( [ good, good ], clbk );

	function clbk( error, errs ) {
		if ( error ) {
			t.ok( false, error.message );
		} else {
			t.strictEqual( errs, null, 'returns `null`' );
		}
		t.end();
	}
});
