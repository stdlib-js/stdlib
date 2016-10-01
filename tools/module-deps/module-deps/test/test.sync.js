'use strict';

// MODULES //

var tape = require( 'tape' );
var join = require( 'path' ).join;
var proxyquire = require( 'proxyquire' );
var ls = require( './../lib/sync.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof ls, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
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

tape( 'the function returns an empty array if unable to find matching files', function test( t ) {
	var expected;
	var actual;
	var opts;
	var dir;

	dir = join( __dirname, 'fixtures' );
	opts = {
		'dir': dir,
		'pattern': '**/*.beep'
	};
	expected = [];
	actual = ls( opts );

	t.deepEqual( actual, expected, 'returns an empty array' );
	t.end();
});

tape( 'the function throws an error if unable to read file contents', function test( t ) {
	var ls = proxyquire( './../lib/sync.js', {
		'glob': {
			'sync': glob
		}
	});

	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		ls();
	}

	function glob() {
		// Non-existent file...
		return [ 'djafjdlfjskls.lakjdflkasj' ];
	}
});

tape( 'the function returns module dependencies', function test( t ) {
	var expected;
	var actual;
	var fpath;
	var opts;
	var dir;

	dir = join( __dirname, 'fixtures' );
	fpath = join( dir, 'a.js' );

	expected = new Array( 1 );
	expected[ 0 ] = {
		'file': fpath,
		'literals': [
			'beep',
			'./boop.js',
			'b',
			'foo',
			'bar'
		],
		'expressions': [
			'\'./../b\'+\'op.js\''
		]
	};

	opts = {
		'dir': dir,
		'pattern': '**/*.js'
	};
	actual = ls( opts );

	t.deepEqual( actual, expected, 'returns module dependencies' );
	t.end();
});
