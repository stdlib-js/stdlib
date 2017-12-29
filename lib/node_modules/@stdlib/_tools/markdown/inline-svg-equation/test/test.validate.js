'use strict';

// MODULES //

var tape = require( 'tape' );
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof validate, 'function', 'main export is a function' );
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
		null,
		true,
		false,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[i] );
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided a `className` option which is not an string primitive, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		false,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'className': values[i]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided an `align` option which is not an string primitive, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		false,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'align': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided a `raw` option which is not an string primitive, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		false,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'raw': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided a `label` option which is not an string primitive, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		false,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': values[i]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var opts;
	var err;
	var obj;

	obj = {};

	opts = {
		'className': 'eqn',
		'align': 'left',
		'raw': 'y=x',
		'label': 'eq'
	};

	err = validate( obj, opts );

	t.equal( err, null, 'returns null' );

	t.deepEqual( obj, opts, 'updates destination object' );
	t.end();
});

tape( 'the function ignores unrecognized options', function test( t ) {
	var opts;
	var err;

	opts = {};
	err = validate( opts, {
		'beep': 'boop',
		'a': {
			'b': 'c'
		}
	});
	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'destination object is empty' );
	t.end();
});
