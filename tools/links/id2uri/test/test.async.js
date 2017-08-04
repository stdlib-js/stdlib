'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils/noop' );
var id2uri = require( './../lib/async.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof id2uri, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not a string primitive', function test( t ) {
	var values;
	var i;
	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			id2uri( value, function clbk() {} );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;
	values = [
		5,
		'abc',
		NaN,
		null,
		void 0,
		true,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			id2uri( 'sublime-text', value, noop );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var i;
	values = [
		5,
		'abc',
		NaN,
		null,
		void 0,
		true,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			id2uri( 'sublime-text', value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (options object)', function test( t ) {
	var values;
	var i;
	values = [
		5,
		'abc',
		NaN,
		null,
		void 0,
		true,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			id2uri( 'sublime-text', {}, value );
		};
	}
});

tape( 'if the function encounters an error when attempting to read a database, the function returns the error', function test( t ) {
	id2uri( 'sublime-text', {
		'database': './nonexisting.json'
	}, onRead );

	function onRead( error ) {
		if ( error ) {
			t.ok( true, error.message );
		} else {
			t.ok( false, 'expected an error' );
		}
		t.end();
	}
});

tape( 'the function returns the URI corresponding to a given id', function test( t ) {
	id2uri( 'sublime-text', onRead );

	function onRead( error, uri ) {
		if ( error ) {
			t.ok( false, 'did not expect an error' );
		}
		t.strictEqual( uri, 'https://www.sublimetext.com/', 'returns correct URI' );
		t.end();
	}
});

tape( 'the function returns `null` if the id is not found in the database', function test( t ) {
	id2uri( 'not-there', onRead );

	function onRead( error, uri ) {
		if ( error ) {
			t.ok( false, 'did not expect an error' );
		}
		t.strictEqual( uri, null, 'returns null' );
		t.end();
	}
});

tape( 'the function returns the URI corresponding to a given id', function test( t ) {
	id2uri( 'sublime-text', {
		'database': './test/fixtures/database.json'
	}, onRead );

	function onRead( error, uri ) {
		if ( error ) {
			t.ok( false, 'did not expect an error' );
		}
		t.strictEqual( uri, 'https://www.sublimetext.com/', 'returns correct URI' );
		t.end();
	}
});
