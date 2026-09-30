/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isAlmostSameValue = require( '@stdlib/number/float64/base/assert/is-almost-same-value' );
var logGradient = require( './../lib' );


// FIXTURES //

var tinyPositive = require( './fixtures/julia/tiny_positive.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );
var tinyNegative = require( './fixtures/julia/tiny_negative.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logGradient, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the log loss gradient for tiny positive values', function test( t ) {
	var expected;
	var x;
	var y;
	var p;
	var v;
	var i;

	x = tinyPositive.x;
	y = tinyPositive.y;
	p = tinyPositive.p;
	expected = tinyPositive.expected;
	for ( i = 0; i < y.length; i++ ) {
		v = logGradient( x[ i ], y[ i ], p[ i ] );
		t.strictEqual( isAlmostSameValue( v, expected[ i ], 0 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the log loss gradient for small positive values', function test( t ) {
	var expected;
	var x;
	var y;
	var p;
	var v;
	var i;

	x = smallPositive.x;
	y = smallPositive.y;
	p = smallPositive.p;
	expected = smallPositive.expected;
	for ( i = 0; i < y.length; i++ ) {
		v = logGradient( x[ i ], y[ i ], p[ i ] );
		t.strictEqual( isAlmostSameValue( v, expected[ i ], 1 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the log loss gradient for tiny negative values', function test( t ) {
	var expected;
	var x;
	var y;
	var p;
	var v;
	var i;

	x = tinyNegative.x;
	y = tinyNegative.y;
	p = tinyNegative.p;
	expected = tinyNegative.expected;
	for ( i = 0; i < y.length; i++ ) {
		v = logGradient( x[ i ], y[ i ], p[ i ] );
		t.strictEqual( isAlmostSameValue( v, expected[ i ], 0 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes the log loss gradient for small negative values', function test( t ) {
	var expected;
	var x;
	var y;
	var p;
	var v;
	var i;

	x = smallNegative.x;
	y = smallNegative.y;
	p = smallNegative.p;
	expected = smallNegative.expected;
	for ( i = 0; i < y.length; i++ ) {
		v = logGradient( x[ i ], y[ i ], p[ i ] );
		t.strictEqual( isAlmostSameValue( v, expected[ i ], 2 ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v;

	v = logGradient( NaN, 1.0, 0.782 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = logGradient( 2.0, NaN, 0.782 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = logGradient( 2.0, 1.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if y is not +1 or -1', function test( t ) {
	var v;

	v = logGradient( -0.9, 3.0, 1.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = logGradient( 0.453, 0.76, 2.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});
