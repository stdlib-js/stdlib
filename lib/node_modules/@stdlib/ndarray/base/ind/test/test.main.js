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
var ind = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ind, 'function', 'main export is a function' );
	t.end();
});

tape( 'when the `mode` is equal to "clamp", the function clamps an index to the interval [0,max]', function test( t ) {
	t.strictEqual( ind( 2, 10, 'clamp' ), 2, 'returns expected value' );
	t.strictEqual( ind( -5, 10, 'clamp' ), 0, 'returns expected value' );
	t.strictEqual( ind( 15, 10, 'clamp' ), 10, 'returns expected value' );
	t.end();
});

tape( 'when the `mode` is equal to "wrap", the function wraps an index on the interval [0,max]', function test( t ) {
	var expected;
	var values;
	var i;

	values = [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]; // eslint-disable-line max-len
	expected = [ 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5 ]; // eslint-disable-line max-len

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( ind( values[ i ], 9, 'wrap' ), expected[ i ], 'returns expected value. idx: '+values[ i ]+'. expected: '+expected[ i ]+'.' );
	}
	t.end();
});

tape( 'when the `mode` is equal to "wrap", the function wraps an index on the interval [0,max]', function test( t ) {
	t.strictEqual( ind( 2, 10, 'wrap' ), 2, 'returns expected value' );
	t.strictEqual( ind( 12, 10, 'wrap' ), 1, 'returns expected value' );
	t.strictEqual( ind( -2, 10, 'wrap' ), 9, 'returns expected value' );
	t.strictEqual( ind( 21, 10, 'wrap' ), 10, 'returns expected value' );
	t.strictEqual( ind( 22, 10, 'wrap' ), 0, 'returns expected value' );
	t.strictEqual( ind( 26, 10, 'wrap' ), 4, 'returns expected value' );
	t.strictEqual( ind( -21, 10, 'wrap' ), 1, 'returns expected value' );
	t.strictEqual( ind( -22, 10, 'wrap' ), 0, 'returns expected value' );
	t.strictEqual( ind( -26, 10, 'wrap' ), 7, 'returns expected value' );
	t.end();
});

tape( 'when the `mode` is equal to `throw`, the function returns the index when on the interval [0,max]', function test( t ) {
	var max;
	var i;

	max = 10;
	for ( i = 0; i < max+1; i++ ) {
		t.strictEqual( ind( i, max, 'throw' ), i, 'returns expected value' );
	}
	t.end();
});

tape( 'when the `mode` is equal to `throw`, the function throws an error when a provided index is outside the interval [0,max]', function test( t ) {
	var max;
	var i;

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
			ind( value, max, 'throw' );
		};
	}
});

tape( 'when the `mode` is equal to `normalize`, the function resolves a nonnegative index when on the interval [-max-1,max]', function test( t ) {
	var expected;
	var max;
	var idx;
	var i;

	max = 10;
	for ( i = -max-1; i < max+1; i++ ) {
		idx = ind( i, max, 'normalize' );
		if ( i < 0 ) {
			expected = i + max + 1;
		} else {
			expected = i;
		}
		t.strictEqual( idx, expected, 'returns expected value' );
	}
	t.end();
});

tape( 'when the `mode` is equal to `normalize`, the function throws an error when a provided index is outside the interval [-max-1,max]', function test( t ) {
	var max;
	var i;

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
			ind( value, max, 'normalize' );
		};
	}
});
