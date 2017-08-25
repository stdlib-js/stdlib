'use strict';

// MODULES //

var tape = require( 'tape' );
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.strictEqual( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an `options` argument which is not an object, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[i] );
		t.ok( err instanceof TypeError, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided a `width` option which is not a positive integer, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		Math.PI,
		-1,
		0,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'width': values[i]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided an `ex` option which is not a positive integer, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		Math.PI,
		-1,
		0,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'ex': values[i]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided an `inline` option which is not a boolean primitive, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'inline': values[i]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'if provided a `linebreaks` option which is not a boolean primitive, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'linebreaks': values[i]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if provided valid options', function test( t ) {
	var opts;
	var obj;
	var err;

	opts = {
		'width': 200,
		'ex': 2,
		'inline': true,
		'linebreaks': false
	};
	obj = {};
	err = validate( obj, opts );

	t.strictEqual( err, null, 'returns null' );
	t.strictEqual( obj.width, 200, 'sets width' );
	t.strictEqual( obj.ex, 2, 'sets ex' );
	t.strictEqual( obj.inline, true, 'sets inline' );
	t.strictEqual( obj.linebreaks, false, 'sets linebreaks' );

	t.end();
});

tape( 'the function ignores unrecognized options', function test( t ) {
	var opts;
	var err;

	opts = {
		'beep': 'boop',
		'a': null,
		'b': 5,
		'c': 'What?!'
	};
	err = validate( {}, opts );
	t.strictEqual( err, null, 'returns null' );
	t.end();
});
