'use strict';

// MODULES //

var tape = require( 'tape' );
var join = require( 'path' ).join;
var prefix = require( './../lib/stdlib.js' );
var readFile = require( prefix+'@stdlib/fs/read-file' ).sync;
var ls = require( './../lib' );


// FIXTURES //

var REQUIRES = readFile( join( __dirname, './fixtures/requires.txt' ) );
var IMPORTS = readFile( join( __dirname, './fixtures/imports.txt' ) );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof ls, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string or Buffer', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		undefined,
		{},
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ls( value );
		};
	}
});

tape( 'the function returns a list of import and require paths (requires; src string)', function test( t ) {
	var expected;
	var actual;

	expected = {
		'literals': [
			'beep',
			'./boop.js',
			'b',
			'bar',
			'foobar'
		],
		'expressions': [
			'\'./../b\'+\'op.js\''
		]
	};
	actual = ls( REQUIRES.toString() );

	t.deepEqual( actual, expected, 'returns list' );
	t.end();
});

tape( 'the function returns a list of import and require paths (requires; src Buffer)', function test( t ) {
	var expected;
	var actual;

	expected = {
		'literals': [
			'beep',
			'./boop.js',
			'b',
			'bar',
			'foobar'
		],
		'expressions': [
			'\'./../b\'+\'op.js\''
		]
	};
	actual = ls( REQUIRES );

	t.deepEqual( actual, expected, 'returns list' );
	t.end();
});

tape( 'the function returns a list of import and require paths (imports; src string)', function test( t ) {
	var expected;
	var actual;

	expected = {
		'literals': [
			'beep',
			'./boop.js'
		],
		'expressions': []
	};
	actual = ls( IMPORTS.toString() );

	t.deepEqual( actual, expected, 'returns list' );
	t.end();
});

tape( 'the function returns a list of import and require paths (imports; src Buffer)', function test( t ) {
	var expected;
	var actual;

	expected = {
		'literals': [
			'beep',
			'./boop.js'
		],
		'expressions': []
	};
	actual = ls( IMPORTS );

	t.deepEqual( actual, expected, 'returns list' );
	t.end();
});
