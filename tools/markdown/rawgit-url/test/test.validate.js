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

tape( 'if provided a `slug` option which is not an string primitive, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'slug': values[i],
			'file': 'README.md'
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided a `file` option which is not an string primitive, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'slug': 'kgryte/utils-copy/master',
			'file': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'a `slug` option is required', function test( t ) {
	var err;

	err = validate( {}, {
		'file': 'README.md'
	});
	t.ok( err instanceof TypeError, 'returns a type error' );
	t.end();
});

tape( 'a `file` option is required', function test( t ) {
	var err;

	err = validate( {}, {
		'slug': 'stdlib-js/stdlib/master'
	});
	t.ok( err instanceof TypeError, 'returns a type error' );
	t.end();
});

tape( 'if provided a `cdn` option which is not a boolean primitive, the function returns a type error', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'slug': 'kgryte/utils-deep-get/master',
			'file': 'README.md',
			'cdn': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var err;
	var obj;

	obj = {};
	err = validate( obj, {
		'slug': 'stdlib-js/stdlib/develop',
		'file': 'lib/index.js',
		'cdn': false
	});
	t.equal( err, null, 'returns null' );
	t.equal( obj.slug, 'stdlib-js/stdlib/develop', 'sets slug option' );
	t.equal( obj.file, 'lib/index.js', 'sets file option' );
	t.equal( obj.cdn, false, 'sets cdn option' );

	t.end();
});

tape( 'the function ignores unrecognized options', function test( t ) {
	var err;
	var obj;

	obj = {};
	err = validate( obj, {
		'slug': 'stdlib-js/stdlib/develop',
		'file': 'lib/index.js',
		'beep': 'boop',
		'a': {
			'b': 'c'
		}
	});
	t.equal( err, null, 'returns null' );
	t.end();
});
