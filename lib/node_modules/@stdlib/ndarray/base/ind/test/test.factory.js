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
var factory = require( './../lib' ).factory;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a recognized index mode', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'foo',
		'bar',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'when the `mode` is equal to "clamp", the returned function clamps an index to the interval [0,max]', function test( t ) {
	var ind = factory( 'clamp' );
	t.strictEqual( ind( 2, 10 ), 2, 'returns expected value' );
	t.strictEqual( ind( -5, 10 ), 0, 'returns expected value' );
	t.strictEqual( ind( 15, 10 ), 10, 'returns expected value' );
	t.end();
});

tape( 'when the `mode` is equal to "wrap", the returned function wraps an index on the interval [0,max]', function test( t ) {
	var expected;
	var values;
	var ind;
	var i;

	ind = factory( 'wrap' );

	values = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]; // eslint-disable-line max-len
	expected = [ 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5 ]; // eslint-disable-line max-len

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( ind( values[ i ], 9 ), expected[ i ], 'returns expected value. idx: '+values[ i ]+'. expected: '+expected[ i ]+'.' );
	}
	t.end();
});

tape( 'when the `mode` is equal to "wrap", the returned function wraps an index on the interval [0,max]', function test( t ) {
	var ind = factory( 'wrap' );
	t.strictEqual( ind( 2, 10 ), 2, 'returns expected value' );
	t.strictEqual( ind( 12, 10 ), 1, 'returns expected value' );
	t.strictEqual( ind( -2, 10 ), 9, 'returns expected value' );
	t.strictEqual( ind( 21, 10 ), 10, 'returns expected value' );
	t.strictEqual( ind( 22, 10 ), 0, 'returns expected value' );
	t.strictEqual( ind( 26, 10 ), 4, 'returns expected value' );
	t.strictEqual( ind( -21, 10 ), 1, 'returns expected value' );
	t.strictEqual( ind( -22, 10 ), 0, 'returns expected value' );
	t.strictEqual( ind( -26, 10 ), 7, 'returns expected value' );
	t.end();
});

tape( 'when the `mode` is equal to `throw`, the returned function returns the index when on the interval [0,max]', function test( t ) {
	var ind;
	var max;
	var i;

	ind = factory( 'throw' );

	max = 10;
	for ( i = 0; i < max+1; i++ ) {
		t.strictEqual( ind( i, max ), i, 'returns expected value' );
	}
	t.end();
});

tape( 'when the `mode` is equal to `throw`, the returned function throws an error when a provided index is outside the interval [0,max]', function test( t ) {
	var ind;
	var max;
	var i;

	ind = factory( 'throw' );

	max = 10;
	for ( i = -100; i < 0; i++ ) {
		t.throws( badValue( i ), RangeError, 'throws an range error when provided '+i );
	}
	for ( i = max+1; i < 100; i++ ) {
		t.throws( badValue( i ), RangeError, 'throws an range error when provided '+i );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ind( value, max );
		};
	}
});

tape( 'when the `mode` is equal to `normalize`, the returned function resolves a nonnegative index when on the interval [-max-1,max]', function test( t ) {
	var expected;
	var ind;
	var max;
	var idx;
	var i;

	ind = factory( 'normalize' );

	max = 10;
	for ( i = -max-1; i < max+1; i++ ) {
		idx = ind( i, max );
		if ( i < 0 ) {
			expected = i + max + 1;
		} else {
			expected = i;
		}
		t.strictEqual( idx, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'when the `mode` is equal to `normalize`, the returned function throws an error when a provided index is outside the interval [-max-1,max]', function test( t ) {
	var ind;
	var max;
	var i;

	ind = factory( 'normalize' );

	max = 10;
	for ( i = -100; i < -max-1; i++ ) {
		t.throws( badValue( i ), RangeError, 'throws an range error when provided '+i );
	}
	for ( i = max+1; i < 100; i++ ) {
		t.throws( badValue( i ), RangeError, 'throws an range error when provided '+i );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ind( value, max );
		};
	}
});
