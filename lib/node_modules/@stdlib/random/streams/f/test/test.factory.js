/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Uint32Array = require( '@stdlib/array/uint32' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var RandomStream = require( './../lib/main.js' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a factory function', function test( t ) {
	var createStream = factory();
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a factory function (options)', function test( t ) {
	var createStream = factory( {} );
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a factory function (parameters)', function test( t ) {
	var createStream = factory( 2.0, 5.0 );
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a factory function (parameters + options)', function test( t ) {
	var createStream = factory( 2.0, 5.0, {} );
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function which throws an error if degrees of freedom `d1` is not a positive number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1.0,
		0.0,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory();
			createStream( value, 2.0 );
		};
	}
});

tape( 'the function returns a function which throws an error if degrees of freedom `d1` is not a positive number primitive (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory( value, 2.0 );
			createStream();
		};
	}
});

tape( 'the function returns a function which throws an error if degrees of freedom `d2` is not a positive number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1.0,
		0.0,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory();
			createStream( 2.0, value );
		};
	}
});

tape( 'the function returns a function which throws an error if degrees of freedom `d2` is not a positive number primitive (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1.0,
		0.0,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory( 2.0, value );
			createStream();
		};
	}
});

tape( 'the function returns a function which throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		false,
		void 0,
		null,
		NaN,
		function noop() {},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			var createStream = factory( value );
			createStream( 2.0, 5.0 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an options argument which is not an object (parameters)', function test( t ) {
	var values;
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
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			var createStream = factory( 2.0, 5.0, value );
			createStream();
		};
	}
});

tape( 'the function returns a function which throws an error if provided an invalid `iter` option', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		-5,
		3.14,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory({
				'iter': value
			});
			createStream( 2.0, 5.0 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an invalid `iter` option (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		-5,
		3.14,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory( 2.0, 5.0, {
				'iter': value
			});
			createStream();
		};
	}
});

tape( 'if provided a `prng` option which is not a function, the function returns a function which throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory({
				'prng': value
			});
			createStream( 2.0, 5.0 );
		};
	}
});

tape( 'if provided a `prng` option which is not a function, the function returns a function which throws an error (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory( 2.0, 5.0, {
				'prng': value
			});
			createStream();
		};
	}
});

tape( 'if provided a `copy` option which is not a boolean, the function returns a function which throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
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
			var createStream = factory({
				'copy': value
			});
			createStream( 2.0, 5.0 );
		};
	}
});

tape( 'if provided a `copy` option which is not a boolean, the function returns a function which throws an error (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
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
			var createStream = factory( 2.0, 5.0, {
				'copy': value
			});
			createStream();
		};
	}
});

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object, the function returns a function which throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		0.0,
		-5.0,
		NaN,
		true,
		false,
		null,
		void 0,
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
			var createStream = factory({
				'seed': value
			});
			createStream( 2.0, 5.0 );
		};
	}
});

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object, the function returns a function which throws an error (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		0.0,
		-5.0,
		NaN,
		true,
		false,
		null,
		void 0,
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
			var createStream = factory( 2.0, 5.0, {
				'seed': value
			});
			createStream();
		};
	}
});

tape( 'the function returns a function which throws a range error if provided a `seed` which is an integer greater than the maximum unsigned 32-bit integer', function test( t ) {
	var values;
	var i;

	values = [
		UINT32_MAX + 1,
		UINT32_MAX + 2,
		UINT32_MAX + 3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory({
				'seed': value
			});
			createStream( 2.0, 5.0 );
		};
	}
});

tape( 'the function returns a function which throws a range error if provided a `seed` which is an integer greater than the maximum unsigned 32-bit integer (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		UINT32_MAX + 1,
		UINT32_MAX + 2,
		UINT32_MAX + 3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory( 2.0, 5.0, {
				'seed': value
			});
			createStream();
		};
	}
});

tape( 'if provided a `state` option which is not a Uint32Array, the function returns a function which throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
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
			var createStream = factory({
				'state': value
			});
			createStream( 2.0, 5.0 );
		};
	}
});

tape( 'if provided a `state` option which is not a Uint32Array, the function returns a function which throws an error (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
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
			var createStream = factory( 2.0, 5.0, {
				'state': value
			});
			createStream();
		};
	}
});

tape( 'if provided an invalid `state` option, the function returns a function which throws an error', function test( t ) {
	var values;
	var i;

	values = [
		new Uint32Array( 0 ),
		new Uint32Array( 10 ),
		new Uint32Array( 100 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory({
				'state': value
			});
			createStream( 2.0, 5.0 );
		};
	}
});

tape( 'if provided an invalid `state` option, the function returns a function which throws an error (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		new Uint32Array( 0 ),
		new Uint32Array( 10 ),
		new Uint32Array( 100 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory( 2.0, 5.0, {
				'state': value
			});
			createStream();
		};
	}
});

tape( 'if provided an invalid readable stream option, the function returns a function which throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		NaN,
		true,
		false,
		null,
		void 0,
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
			var createStream = factory({
				'highWaterMark': value
			});
			createStream( 2.0, 5.0 );
		};
	}
});

tape( 'if provided an invalid readable stream option, the function returns a function which throws an error (parameters)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		NaN,
		true,
		false,
		null,
		void 0,
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
			var createStream = factory( 2.0, 5.0, {
				'highWaterMark': value
			});
			createStream();
		};
	}
});

tape( 'the function returns a factory function which creates stream instances', function test( t ) {
	var createStream;
	var i;

	createStream = factory();

	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream( 2.0, 5.0 ) instanceof RandomStream, true, 'returns a stream instance' );
	}
	t.end();
});

tape( 'the function returns a factory function which creates stream instances (options)', function test( t ) {
	var createStream;
	var i;

	createStream = factory( {} );

	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream( 2.0, 5.0 ) instanceof RandomStream, true, 'returns a stream instance' );
	}
	t.end();
});

tape( 'the function returns a factory function which creates stream instances (parameters)', function test( t ) {
	var createStream;
	var i;

	createStream = factory( 2.0, 5.0 );

	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream() instanceof RandomStream, true, 'returns a stream instance' );
	}
	t.end();
});

tape( 'the function returns a factory function which creates stream instances (parameters + options)', function test( t ) {
	var createStream;
	var i;

	createStream = factory( 2.0, 5.0, {} );

	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream() instanceof RandomStream, true, 'returns a stream instance' );
	}
	t.end();
});
