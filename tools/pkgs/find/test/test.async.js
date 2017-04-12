'use strict';

// MODULES //

var tape = require( 'tape' );
var resolve = require( 'path' ).resolve;
var proxyquire = require( 'proxyquire' );
var noop = require( '@stdlib/utils/noop' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isArray = require( '@stdlib/assert/is-array' );
var findPkgs = require( './../lib/async.js' );


// VARIABLES //

var dir = resolve( __dirname, '..', '..' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof findPkgs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		findPkgs( opts, noop );
	}
});

tape( 'if provided a callback argument which is not a function, the function throws an error (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findPkgs( value );
		};
	}
});

tape( 'if provided a callback argument which is not a function, the function throws an error (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		undefined,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			findPkgs( {}, value );
		};
	}
});

tape( 'the function returns an error to a provided callback if an error is encountered while searching a directory', function test( t ) {
	var findPkgs = proxyquire( './../lib/async.js', {
		'glob': glob
	});

	findPkgs( clbk );

	function glob() {
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

tape( 'the function returns a string array (if able to resolve packages)', function test( t ) {
	var opts = {
		'dir': dir
	};
	findPkgs( opts, clbk );
	function clbk( error, pkgs ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isStringArray( pkgs ), true, 'returns a string array' );
		t.end();
	}
});

tape( 'the function returns an empty array (if unable to resolve packages)', function test( t ) {
	var findPkgs = proxyquire( './../lib/async.js', {
		'glob': glob
	});

	findPkgs( clbk );

	function glob() {
		var cb = arguments[ arguments.length-1 ];
		setTimeout( onTimeout, 0 );
		function onTimeout() {
			cb( null, [] );
		}
	}

	function clbk( error, pkgs ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isArray( pkgs ), true, 'returns an array' );
		t.equal( pkgs.length, 0, 'returns an empty array' );
		t.end();
	}
});
