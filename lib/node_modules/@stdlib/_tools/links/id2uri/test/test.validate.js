'use strict';

// MODULES //

var tape = require( 'tape' );
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[ i ] );
		t.equals( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `database` option which is not a string', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		void 0,
		null,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'database': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns null if all options are valid', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'database': '/foo/bar/baz.json'
	};
	opts = {};
	err = validate( opts, options );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, options, 'sets option values' );

	t.end();
});

tape( 'the function ignores unrecognized/unsupported options', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'beep': true, // misc options
		'boop': 'bop'
	};
	opts = {};
	err = validate( opts, options );

	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'does not set any option values' );
	t.end();
});
