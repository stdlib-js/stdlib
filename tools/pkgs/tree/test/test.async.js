'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var noop = require( '@stdlib/utils/noop' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var pkgTree = require( './../lib/async.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof pkgTree, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws error' );
	t.end();
	function foo() {
		var opts = {
			'dir': null
		};
		pkgTree( opts, noop );
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
			pkgTree( value );
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
			pkgTree( {}, value );
		};
	}
});

tape( 'the function returns an error to a provided callback if an error is encountered while searching a directory', function test( t ) {
	var pkgTree = proxyquire( './../lib/async.js', {
		'./../../names': pkgNames
	});

	pkgTree( clbk );

	function pkgNames() {
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

tape( 'the function returns an object', function test( t ) {
	pkgTree( clbk );
	function clbk( error, tree ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isObject( tree ), true, 'returns an object' );
		t.end();
	}
});

tape( 'the function returns an object (dir option)', function test( t ) {
	var opts = {
		'dir': './@stdlib/math/base'
	};
	pkgTree( opts, clbk );
	function clbk( error, tree ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.equal( isObject( tree ), true, 'returns an object' );
		t.end();
	}
});
