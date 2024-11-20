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
var isNumberArray = require( '@stdlib/assert/is-number-array' );
var isStringArray = require( '@stdlib/assert/is-string-array' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var Float64Array = require( '@stdlib/array/float64' );
var Int32Array = require( '@stdlib/array/int32' );
var Int16Array = require( '@stdlib/array/int16' );
var Int8Array = require( '@stdlib/array/int8' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an argument which is neither array-like or an options object', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if provided a `pool` argument which is not array-like', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		function noop() {},
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value, {
				'seed': 323
			});
		};
	}
});

tape( 'the function allows setting a default `replace` strategy for the returned function', function test( t ) {
	var expected;
	var sample;
	var actual;

	// When not supplying `pool`...
	sample = factory({
		'replace': false,
		'seed': 223
	});

	expected = [ 2, 1, 3, 6, 4, 5 ];
	actual = sample( [ 1, 2, 3, 4, 5, 6 ] );
	t.equal( actual.length, 6, 'returned array has six elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	expected = [ 6, 5, 6, 6, 6, 3 ];
	actual = sample( [ 1, 2, 3, 4, 5, 6 ], {
		'replace': true
	});
	t.equal( actual.length, 6, 'returned array has six elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	// When supplying `pool`...
	sample = factory( [ 1, 2, 3, 4, 5, 6 ], {
		'replace': false,
		'seed': 223
	});

	expected = [ 5, 5, 6, 5, 1, 6 ];
	actual = sample({
		'replace': true
	});
	t.equal( actual.length, 6, 'returned array has six elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	expected = [ 2, 1, 3 ];
	actual = sample({
		'size': 3
	});
	t.equal( actual.length, 3, 'returned array has three elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	expected = [ 6, 5, 4 ];
	actual = sample({
		'size': 3
	});
	t.equal( actual.length, 3, 'returned array has three elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	t.end();
});

tape( 'the function allows setting a default `mutate` strategy for the returned function', function test( t ) {
	var expected;
	var sample;
	var actual;

	sample = factory( [ 1, 2, 3, 4, 5, 6 ], {
		'replace': false,
		'mutate': true,
		'seed': 223
	});

	expected = [ 2, 1, 3 ];
	actual = sample({
		'size': 3
	});
	t.equal( actual.length, 3, 'returned array has three elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	expected = [ 6, 4, 5 ];
	actual = sample({
		'size': 3,
		'mutate': false
	});
	t.equal( actual.length, 3, 'returned array has three elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	expected = [ 6, 4, 5 ];
	actual = sample({
		'size': 3
	});
	t.equal( actual.length, 3, 'returned array has three elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	t.end();
});

tape( 'the returned function allows overriding the default mutate strategy', function test( t ) {
	var expected;
	var sample;
	var actual;

	sample = factory( [ 1, 2, 3, 4, 5, 6 ], {
		'replace': false,
		'mutate': false,
		'seed': 223,
		'size': 3
	});

	expected = [ 2, 1, 3 ];
	actual = sample({
		'mutate': true
	});
	t.equal( actual.length, 3, 'returned array has three elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	expected = [ 6, 4, 5 ];
	actual = sample({
		'mutate': true
	});
	t.equal( actual.length, 3, 'returned array has three elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	actual = sample();
	t.equal( actual, null, 'returns null' );

	t.end();
});

tape( 'the function allows setting a default `size` strategy for the returned function', function test( t ) {
	var expected;
	var sample;
	var actual;

	sample = factory({
		'size': 5,
		'seed': 223
	});

	expected = [ 1, 1, 1, 1, 0 ];
	actual = sample( [ 0, 1 ] );
	t.equal( actual.length, 5, 'returned array has five elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	sample = factory( [ 0, 1 ], {
		'size': 5,
		'seed': 223
	});

	expected = [ 1, 1, 1, 1, 0 ];
	actual = sample();
	t.equal( actual.length, 5, 'returned array has five elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	t.end();
});

tape( 'the function fixes the population from which to sample when supplied an array-like object', function test( t ) {
	var expected;
	var sample;
	var actual;
	var bool;
	var len;
	var i;
	var x;

	x = [ 0, 1 ];
	expected = [ 1, 0 ];
	len = x.length;
	sample = factory( x, {
		'seed': 329
	});
	actual = sample();
	t.equal( actual.length, len, 'returned array has two elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	x = 'abcdef';
	expected = [ 'd', 'c', 'a' ];
	len = x.length;
	sample = factory( x, {
		'seed': 329
	});
	actual = sample({
		'size': 3
	});
	t.equal( actual.length, 3, 'returned array has three elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	x = [ 0, 1 ];
	len = x.length;
	sample = factory( x );
	actual = sample();
	t.equal( actual.length, len, 'returned array has two elements' );
	for ( i = 0; i < len; i++ ) {
		bool = ( actual[i] === 0 || actual[i] === 1 );
		t.equal( bool, true, 'element is zero or one' );
	}

	x = 'abcdef';
	sample = factory( x );
	actual = sample({
		'size': 3
	});
	t.equal( actual.length, 3, 'returned array has three elements' );
	for ( i = 0; i < 3; i++ ) {
		bool = (
			actual[i] === 'a' ||
			actual[i] === 'b' ||
			actual[i] === 'c' ||
			actual[i] === 'd' ||
			actual[i] === 'e' ||
			actual[i] === 'f'
		);
		t.equal( bool, true, 'element is a, b, c, d, e, or f' );
	}

	t.end();
});

tape( 'when the population is fixed, the returned function returns `null` after all observations have been drawn when sampling without replacement and `mutate` is set to true', function test( t ) {
	var expected;
	var sample;
	var actual;
	var len;
	var x;

	expected = [ 6, 5, 3, 1, 2, 4 ];
	x = [ 1, 2, 3, 4, 5, 6 ];
	len = x.length;
	sample = factory( x, {
		'seed': 329,
		'mutate': true,
		'replace': false
	});

	actual = sample();
	t.equal( actual.length, len, 'returned array has six elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	actual = sample();
	t.equal( actual, null, 'returns null' );

	t.end();
});

tape( 'the returned function throws an error if not provided an array-like object', function test( t ) {
	var sample;
	var values;
	var i;

	sample = factory();

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sample( value );
		};
	}
});

tape( 'when fixing the population from which to sample, the returned function throws an error if provided an options object which is not an object', function test( t ) {
	var sample;
	var values;
	var i;

	sample = factory( [ 0, 1 ] );

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sample( value );
		};
	}
});

tape( 'the returned function throws an error if provided an options object which is not an object', function test( t ) {
	var sample;
	var values;
	var i;

	sample = factory();

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sample( [], value );
		};
	}
});

tape( 'the returned function throws an error if provided an invalid option', function test( t ) {
	var sample;
	var values;
	var i;

	sample = factory();

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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sample( [], {
				'replace': value
			});
		};
	}
});

tape( 'the returned function throws an error if the `size` option exceeds the `pool` length when sampling without replacement', function test( t ) {
	var sample;
	var values;
	var i;

	values = [
		[ [ 1, 2, 3 ], 4 ],
		[ [ 1, 2, 3, 4, 5, 6 ], 10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sample = factory( value[ 0 ] );
			sample({
				'size': value[ 1 ],
				'replace': false
			});
		};
	}
});

tape( 'the returned function throws an error if provided a `size` option exceeding the input array length when sampling without replacement', function test( t ) {
	var sample;
	var values;
	var i;

	sample = factory();

	values = [
		[ [ 1, 2, 3 ], 4 ],
		[ [ 1, 2, 3, 4, 5, 6 ], 10 ]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sample( value[ 0 ], {
				'size': value[ 1 ],
				'replace': false
			});
		};
	}
});

tape( 'attached to the returned function is the generator seed', function test( t ) {
	var sample = factory({
		'seed': 311
	});
	t.equal( isUint32Array( sample.seed ), true, 'has property' );
	t.equal( sample.seed[ 0 ], 311, 'has expected value' );
	t.end();
});

tape( 'attached to the returned function is the underlying PRNG', function test( t ) {
	var sample = factory();
	t.equal( typeof sample.PRNG, 'function', 'has property' );
	t.end();
});

tape( 'the returned function samples characters with replacement from a string', function test( t ) {
	var expected;
	var actual;
	var sample;

	sample = factory({
		'seed': 311
	});

	expected = [ 'c', 'c', 'e', 'c', 'b', 'd' ];
	actual = sample( 'abcdef' );

	t.equal( isStringArray( actual ), true, 'returns an array of characters' );
	t.equal( actual.length, 6, 'returned array has six elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	t.end();
});

tape( 'the returned function samples with replacement from an array', function test( t ) {
	var expected;
	var actual;
	var sample;

	sample = factory({
		'seed': 311
	});

	// Simple array:
	expected = [ 2, 2, 3, 2 ];
	actual = sample( [ 1, 2, 3, 4 ] );

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 4, 'returned array has four elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	// Typed array:
	expected = [ 5, 8, 6, 7, 9 ];
	actual = sample( new Float64Array( [ 5, 6, 7, 8, 9 ] ) );

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 5, 'returned array has five elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	t.end();
});

tape( 'the returned function samples without replacement from an array', function test( t ) {
	var expected;
	var actual;
	var sample;

	sample = factory({
		'seed': 789
	});

	// Simple array:
	expected = [ 4, 3, 1, 2 ];
	actual = sample( [ 1, 2, 3, 4 ], {
		'replace': false
	});

	// Typed array:
	expected = [ 6, 5, 7, 9, 8 ];
	actual = sample( new Int32Array( [ 5, 6, 7, 8, 9 ] ), {
		'replace': false
	});

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 5, 'returned array has five elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	t.end();
});

tape( 'the returned function draws a sample with a specified size from an array (with replacement)', function test( t ) {
	var expected;
	var actual;
	var sample;

	sample = factory({
		'seed': 789
	});

	// Simple array:
	expected = [ 0, 0, 1, 1, 1, 1, 0, 0, 0, 1 ];
	actual = sample( [ 0, 1 ], {
		'size': 10
	});

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 10, 'returned array has ten elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	// Typed array:
	expected = [ 0, 1, 1, 0, 1, 1, 0, 0, 0, 0 ];
	actual = sample( new Int8Array( [ 0, 1 ] ), {
		'size': 10
	});

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 10, 'returned array has ten elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	t.end();
});

tape( 'the returned function draws a sample with a specified size from an array (without replacement)', function test( t ) {
	var expected;
	var actual;
	var sample;

	sample = factory({
		'seed': 656
	});

	// Simple array:
	expected = [ 8, 9, 6, 5 ];
	actual = sample( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ], {
		'size': 4,
		'replace': false
	});

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 4, 'returned array has four elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	// Typed array:
	expected = [ 7, 6, 5, 2, 1 ];
	actual = sample( new Int16Array( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ), {
		'size': 5,
		'replace': false
	});

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 5, 'returned array has five elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	t.end();
});

tape( 'the returned function draws a sample from an array using specified probabilities (with replacement)', function test( t ) {
	var expected;
	var actual;
	var sample;

	sample = factory({
		'seed': 321
	});

	// Simple array:
	expected = [ 6, 6, 2, 3 ];
	actual = sample( [ 1, 2, 3, 4, 5, 6 ], {
		'size': 4,
		'probs': [ 1.0/12.0, 2.0/6.0, 2.0/6.0, 1.0/12.0, 1.0/12.0, 1.0/12.0 ]
	});

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 4, 'returned array has four elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	// Typed array:
	expected = [ 4, 3, 3, 5, 4 ];
	actual = sample( new Int8Array( [ 1, 2, 3, 4, 5, 6 ] ), {
		'size': 5,
		'probs': [ 0.0, 1.0/12.0, 1.0/12.0, 3.0/6.0, 2.0/6.0, 0.0 ]
	});

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 5, 'returned array has five elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	expected = [ 1, 2, 1, 2, 1 ];
	actual = sample( new Int8Array( [ 1, 2, 3, 4 ] ), {
		'size': 5,
		'probs': [ 0.5, 0.2, 0.2, 0.1 ]
	});

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 5, 'returned array has five elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	t.end();
});

tape( 'the returned function draws a sample from an array using specified probabilities (without replacement)', function test( t ) {
	var expected;
	var actual;
	var sample;

	sample = factory({
		'seed': 589
	});

	// Simple array:
	expected = [ 2, 3, 5 ];
	actual = sample( [ 1, 2, 3, 4, 5, 6 ], {
		'size': 3,
		'probs': [ 1.0/12.0, 2.0/6.0, 2.0/6.0, 1.0/12.0, 1.0/12.0, 1.0/12.0 ],
		'replace': false
	});

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 3, 'returned array has three elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	// Typed array:
	expected = [ 4, 3, 5, 2 ];
	actual = sample( new Int8Array( [ 1, 2, 3, 4, 5, 6 ] ), {
		'size': 4,
		'probs': [ 1.0/12.0, 2.0/6.0, 2.0/6.0, 1.0/12.0, 1.0/12.0, 1.0/12.0 ],
		'replace': false
	});

	t.equal( isNumberArray( actual ), true, 'returns an array of numbers' );
	t.equal( actual.length, 4, 'returned array has four elements' );
	t.deepEqual( actual, expected, 'returned array is a random draw' );

	t.end();
});
