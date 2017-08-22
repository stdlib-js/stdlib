'use strict';

// MODULES //

var tape = require( 'tape' );
var instanceOf = require( '@stdlib/assert/instance-of' );
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
		null,
		true,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[i] );
		t.strictEqual( instanceOf( err, TypeError ), true, 'returns a type error when provided ' + values[i] );
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
		false,
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
		t.strictEqual( instanceOf( err, TypeError ), true, 'returns a type error when provided ' + values[i] );
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
		false,
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
		t.strictEqual( instanceOf( err, TypeError ), true, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'a `slug` option is required', function test( t ) {
	var err = validate( {}, {
		'file': 'README.md'
	});
	t.strictEqual( instanceOf( err, TypeError ), true, 'returns a type error' );
	t.end();
});

tape( 'a `file` option is required', function test( t ) {
	var err = validate( {}, {
		'slug': 'stdlib-js/stdlib/master'
	});
	t.strictEqual( instanceOf( err, TypeError ), true, 'returns a type error' );
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
		t.strictEqual( instanceOf( err, TypeError ), true, 'returns a type error when provided ' + values[i] );
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
	t.strictEqual( err, null, 'returns null' );
	t.strictEqual( obj.slug, 'stdlib-js/stdlib/develop', 'sets slug option' );
	t.strictEqual( obj.file, 'lib/index.js', 'sets file option' );
	t.strictEqual( obj.cdn, false, 'sets cdn option' );

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
	t.strictEqual( err, null, 'returns null' );
	t.end();
});
