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
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var toBinaryStringf = require( '@stdlib/number/float32/base/to-binary-string' );
var fromBinaryStringf = require( './../lib' );


// FIXTURES //

var small = require( './fixtures/julia/bits_1e-36_1e-38.json' );
var medium = require( './fixtures/julia/bits_-1e3_1e3.json' );
var large = require( './fixtures/julia/bits_1e36_1e38.json' );
var subnormal = require( './fixtures/julia/bits_1e-39_1e-45.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fromBinaryStringf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a string with a length other than `32`, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'1010101',
		'',
		'101',
		'111111111',
		'1111111111111111111111111111111',
		'111111111111111111111111111111111'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fromBinaryStringf( value );
		};
	}
});

tape( 'if provided all zeros, the function returns `+0`', function test( t ) {
	var v = fromBinaryStringf( toBinaryStringf( 0.0 ) );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );
	t.end();
});

tape( 'if provided a sign bit of 1 and all zeros, the function returns `-0`', function test( t ) {
	var v = fromBinaryStringf( toBinaryStringf( -0.0 ) );
	t.strictEqual( isNegativeZero( v ), true, 'returns -0' );
	t.end();
});

tape( 'if provided a bit sequence where all exponent bits are 1s and everything else is 0, the function returns positive infinity', function test( t ) {
	t.strictEqual( fromBinaryStringf( toBinaryStringf( PINF ) ), PINF, 'returns +infinity' );
	t.end();
});

tape( 'if provided a bit sequence where the sign bit is 1, all exponent bits are 1s, and everything else is 0, the function returns negative infinity', function test( t ) {
	t.strictEqual( fromBinaryStringf( toBinaryStringf( NINF ) ), NINF, 'returns -infinity' );
	t.end();
});

tape( 'if provided a bit sequence where the sign bit may be either 1 or 0, all exponent bits are 1s, and the fraction is not all 0s, the function returns `NaN`', function test( t ) {
	var v = fromBinaryStringf( toBinaryStringf( NaN ) );
	t.strictEqual( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function creates single-precision floating-point numbers from literal bit representations for small values', function test( t ) {
	var expected;
	var val;
	var x;
	var i;

	x = small.x;
	expected = small.expected;
	for ( i = 0; i < x.length; i++ ) {
		val = fromBinaryStringf( x[ i ] );
		t.strictEqual( val, expected[ i ], 'returns a float equal to ' + expected[ i ] + ' from ' + x[ i ] );
	}
	t.end();
});

tape( 'the function creates single-precision floating-point numbers from literal bit representations for medium values', function test( t ) {
	var expected;
	var val;
	var x;
	var i;

	x = medium.x;
	expected = medium.expected;
	for ( i = 0; i < x.length; i++ ) {
		val = fromBinaryStringf( x[ i ] );
		t.strictEqual( val, expected[ i ], 'returns a float equal to ' + expected[ i ] + ' from ' + x[ i ] );
	}
	t.end();
});

tape( 'the function creates single-precision floating-point numbers from literal bit representations for large values', function test( t ) {
	var expected;
	var val;
	var x;
	var i;

	x = large.x;
	expected = large.expected;
	for ( i = 0; i < x.length; i++ ) {
		val = fromBinaryStringf( x[ i ] );
		t.strictEqual( val, expected[ i ], 'returns a float equal to ' + expected[ i ] + ' from ' + x[ i ] );
	}
	t.end();
});

tape( 'the function creates single-precision floating-point numbers from literal bit representations for subnormal values', function test( t ) {
	var expected;
	var val;
	var x;
	var i;

	x = subnormal.x;
	expected = subnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		val = fromBinaryStringf( x[ i ] );
		t.strictEqual( val, expected[ i ], 'returns a float equal to ' + expected[ i ] + ' from ' + x[ i ] );
	}
	t.end();
});
