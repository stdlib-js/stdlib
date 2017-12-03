'use strict';

// MODULES //

var tape = require( 'tape' );
var join = require( 'path' ).join;
var proxyquire = require( 'proxyquire' );
var noop = require( '@stdlib/utils/noop' );
var isArray = require( '@stdlib/assert/is-array' );
var isObjectArray = require( '@stdlib/assert/is-plain-object' ).isPlainObjectArray;
var lint = require( './../lib/async.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof lint, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		lint( opts, noop );
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
			lint( value );
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
			lint( {}, value );
		};
	}
});

tape( 'the function returns an error to a provided callback if an error is encountered while searching a directory', function test( t ) {
	var lint = proxyquire( './../lib/async.js', {
		'glob': glob
	});

	lint( clbk );

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

tape( 'the function returns an empty array if all filenames are valid', function test( t ) {
	var opts = {
		'dir': join( __dirname, 'fixtures', 'good' )
	};
	lint( opts, clbk );
	function clbk( error, names ) {
		var bool;
		if ( error ) {
			t.ok( false, error.message );
		}
		bool = ( isArray( names ) && names.length === 0 );
		t.equal( bool, true, 'returns an empty array' );
		t.end();
	}
});

tape( 'the function returns an object array if filenames are not valid', function test( t ) {
	var opts = {
		'dir': join( __dirname, 'fixtures', 'bad' )
	};
	lint( opts, clbk );
	function clbk( error, names ) {
		var bool;
		if ( error ) {
			t.ok( false, error.message );
		}
		bool = isObjectArray( names );
		t.equal( bool, true, 'returns an object array' );
		t.end();
	}
});
