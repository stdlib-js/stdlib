'use strict';

// MODULES //

var tape = require( 'tape' );
var join = require( 'path' ).join;
var proxyquire = require( 'proxyquire' );
var prefix = require( './../lib/stdlib.js' );
var noop = require( prefix+'@stdlib/utils/noop' );
var ls = require( './../lib/async.js' );


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
			ls( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (no options)', function test( t ) {
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
			ls( value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options)', function test( t ) {
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
			ls( {}, value );
		};
	}
});

tape( 'the function returns an empty array if unable to find matching files', function test( t ) {
	var expected;
	var opts;
	var dir;

	dir = join( __dirname, 'fixtures' );
	opts = {
		'dir': dir,
		'pattern': '**/*.beep'
	};
	expected = [];
	ls( opts, onList );

	function onList( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( actual, expected, 'returns an empty array' );
		t.end();
	}
});

tape( 'the function returns an error if an error is encountered while searching for modules', function test( t ) {
	var ls = proxyquire( './../lib/async.js', {
		'glob': glob
	});

	ls( onList );

	function onList( error ) {
		if ( error ) {
			t.equal( error.message, 'beep', 'returns expected error' );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}

	function glob( pattern, opts, clbk ) {
		// Non-existent file...
		clbk( new Error( 'beep' ) );
	}
});

tape( 'the function returns an error if unable to read file contents', function test( t ) {
	var ls = proxyquire( './../lib/async.js', {
		'glob': glob
	});

	ls( onList );

	function onList( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}

	function glob( pattern, opts, clbk ) {
		// Non-existent file...
		clbk( null, [ 'djafjdlfjskls.lakjdflkasj' ] );
	}
});

tape( 'the function returns module dependencies', function test( t ) {
	var expected;
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
	ls( opts, onList );

	function onList( error, actual ) {
		if ( error ) {
			t.ok( false, error.message );
		}
		t.deepEqual( actual, expected, 'returns module dependencies' );
		t.end();
	}
});
