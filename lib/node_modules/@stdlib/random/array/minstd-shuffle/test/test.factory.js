/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var INT32_MAX = require( '@stdlib/constants/int32/max' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		true,
		false,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'if provided a `copy` option which is not a boolean, the function throws an error', function test( t ) {
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
			factory({
				'copy': value
			});
		};
	}
});

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object, the function throws an error', function test( t ) {
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
			factory({
				'seed': value
			});
		};
	}
});

tape( 'the function throws a range error if provided a `seed` which is an integer greater than the maximum signed 32-bit integer', function test( t ) {
	var values;
	var i;

	values = [
		INT32_MAX + 1,
		INT32_MAX + 2,
		INT32_MAX + 3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'seed': value
			});
		};
	}
});

tape( 'if provided a `state` option which is not an Int32Array, the function throws an error', function test( t ) {
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
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided an invalid `state` option, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		new Int32Array( 0 ),
		new Int32Array( 10 ),
		new Int32Array( 100 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided an `idtype` option which is not a supported data type, the function throws an error', function test( t ) {
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
			factory({
				'idtype': value
			});
		};
	}
});

tape( 'if provided an `ndtype` option which is not a supported data type, the function throws an error', function test( t ) {
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
			factory({
				'ndtype': value
			});
		};
	}
});

tape( 'the function returns a function which throws an error if provided a first argument which is not a nonnegative integer', function test( t ) {
	var random;
	var values;
	var i;

	random = factory();

	values = [
		'5',
		-3,
		3.14,
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
			random( value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a first argument which is not a nonnegative integer (options)', function test( t ) {
	var random;
	var values;
	var i;

	random = factory();

	values = [
		'5',
		-3,
		3.14,
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
			random( value, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a `dtype` option which is not a supported data type', function test( t ) {
	var random;
	var values;
	var i;

	random = factory();

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
			random( 10, {
				'dtype': value
			});
		};
	}
});

tape( 'the function returns a function having a "normalized" method which throws an error if provided a `dtype` option which is not a supported data type', function test( t ) {
	var random;
	var values;
	var i;

	random = factory();

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
			random.normalized( 10, {
				'dtype': value
			});
		};
	}
});

tape( 'the function returns a function for creating arrays containing pseudorandom numbers (default)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory();
	actual = random( 10 );

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying a PRNG seed', function test( t ) {
	var random;
	var arr1;
	var arr2;

	random = factory({
		'seed': 12345
	});
	arr1 = random( 10 );

	t.strictEqual( arr1 instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( arr1.length, 10, 'returns expected value' );

	random = factory({
		'seed': 12345
	});
	arr2 = random( 10 );

	t.strictEqual( arr2 instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( arr2.length, 10, 'returns expected value' );

	t.deepEqual( arr1, arr2, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a PRNG seed (normalized)', function test( t ) {
	var random;
	var arr1;
	var arr2;

	random = factory({
		'seed': 12345
	});
	arr1 = random.normalized( 10 );

	t.strictEqual( arr1 instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( arr1.length, 10, 'returns expected value' );

	random = factory({
		'seed': 12345
	});
	arr2 = random.normalized( 10 );

	t.strictEqual( arr2 instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( arr2.length, 10, 'returns expected value' );

	t.deepEqual( arr1, arr2, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the default output array data type (dtype=float64)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'idtype': 'float64'
	});
	actual = random( 10 );

	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the default output array data type (dtype=float32)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'idtype': 'float32'
	});
	actual = random( 10 );

	t.strictEqual( actual instanceof Float32Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the default output array data type (dtype=int32)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'idtype': 'int32'
	});
	actual = random( 10 );

	t.strictEqual( actual instanceof Int32Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the default output array data type (dtype=generic)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'idtype': 'generic'
	});
	actual = random( 10 );

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the returned function supports overriding the default output array data type (dtype=generic)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'idtype': 'float64'
	});
	actual = random( 10, {
		'dtype': 'generic'
	});

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the function supports specifying the generator state', function test( t ) {
	var random;
	var state;
	var arr;
	var i;

	random = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		random( 2 );
	}
	// Capture the current state:
	state = random.state;

	// Move to a future state...
	arr = random( 10 );
	for ( i = 0; i < 100; i++ ) {
		random( 2 );
	}
	// Create another function using the captured state:
	random = factory({
		'state': state
	});

	// Replay previously generated values:
	t.deepEqual( random( 10 ), arr, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying the generator state (normalized)', function test( t ) {
	var random;
	var state;
	var arr;
	var i;

	random = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		random.normalized( 2 );
	}
	// Capture the current state:
	state = random.state;

	// Move to a future state...
	arr = random.normalized( 10 );
	for ( i = 0; i < 100; i++ ) {
		random.normalized( 2 );
	}
	// Create another function using the captured state:
	random = factory({
		'state': state
	});

	// Replay previously generated values:
	t.deepEqual( random.normalized( 10 ), arr, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports setting the generator state', function test( t ) {
	var random;
	var state;
	var arr;
	var i;

	random = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		random( 2 );
	}
	// Capture the current state:
	state = random.state;

	// Move to a future state...
	arr = random( 10 );
	for ( i = 0; i < 100; i++ ) {
		random( 2 );
	}
	// Set the state:
	random.state = state;

	// Replay previously generated values:
	t.deepEqual( random( 10 ), arr, 'returns expected value' );

	t.end();
});

tape( 'the returned function supports setting the generator state (normalized)', function test( t ) {
	var random;
	var state;
	var arr;
	var i;

	random = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		random.normalized( 2 );
	}
	// Capture the current state:
	state = random.state;

	// Move to a future state...
	arr = random.normalized( 10 );
	for ( i = 0; i < 100; i++ ) {
		random.normalized( 2 );
	}
	// Set the state:
	random.state = state;

	// Replay previously generated values:
	t.deepEqual( random.normalized( 10 ), arr, 'returns expected value' );

	t.end();
});

tape( 'attached to the returned is a method for creating arrays containing "normalized" pseudorandom numbers (default)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory();
	t.strictEqual( typeof random.normalized, 'function', 'has method' );

	actual = random.normalized( 10 );
	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'attached to the returned is a method for creating arrays containing "normalized" pseudorandom numbers (dtype=float64)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'ndtype': 'float64'
	});
	t.strictEqual( typeof random.normalized, 'function', 'has method' );

	actual = random.normalized( 10 );
	t.strictEqual( actual instanceof Float64Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'attached to the returned is a method for creating arrays containing "normalized" pseudorandom numbers (dtype=float32)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'ndtype': 'float32'
	});
	t.strictEqual( typeof random.normalized, 'function', 'has method' );

	actual = random.normalized( 10 );
	t.strictEqual( actual instanceof Float32Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'attached to the returned is a method for creating arrays containing "normalized" pseudorandom numbers (dtype=generic)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'ndtype': 'generic'
	});
	t.strictEqual( typeof random.normalized, 'function', 'has method' );

	actual = random.normalized( 10 );
	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'attached to the returned is a method which supports overriding the default output array data type (dtype=generic)', function test( t ) {
	var random;
	var actual;
	var i;

	random = factory({
		'ndtype': 'float32'
	});
	actual = random.normalized( 10, {
		'dtype': 'generic'
	});

	t.strictEqual( actual instanceof Array, true, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( typeof actual[ i ], 'number', 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'attached to the returned function is the underlying PRNG', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.PRNG, 'function', 'has property' );
	t.strictEqual( random.PRNG.NAME, 'minstd-shuffle', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (integer seed)', function test( t ) {
	var random = factory({
		'seed': 12345
	});
	t.strictEqual( isInt32Array( random.seed ), true, 'has property' );
	t.strictEqual( random.seed[ 0 ], 12345, 'equal to provided seed' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (array seed)', function test( t ) {
	var actual;
	var rand;
	var seed;
	var i;

	seed = [ 1234, 5678 ];
	rand = factory({
		'seed': seed
	});

	actual = rand.seed;
	t.strictEqual( isInt32Array( actual ), true, 'has property' );
	for ( i = 0; i < seed.length; i++ ) {
		t.strictEqual( actual[ i ], seed[ i ], 'returns expected value for word '+i );
	}
	t.end();
});

tape( 'attached to the returned function is the generator seed length', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state', function test( t ) {
	var random = factory();
	t.strictEqual( isInt32Array( random.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state length', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state size', function test( t ) {
	var random = factory();
	t.strictEqual( typeof random.byteLength, 'number', 'has property' );
	t.end();
});
