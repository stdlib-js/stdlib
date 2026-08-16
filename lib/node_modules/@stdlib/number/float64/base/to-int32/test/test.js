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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var float64ToInt32 = require( './../lib' );


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );
var decimals = require( './fixtures/julia/decimals.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof float64ToInt32, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `0`, the function returns `0`', function test( t ) {
	var v = float64ToInt32( 0.0 );
	t.strictEqual( v, 0, 'equals 0' );
	t.end();
});

tape( 'if provided `-0`, the function returns `0`', function test( t ) {
	var v = float64ToInt32( -0.0 );
	t.strictEqual( v, 0, 'equals 0' );
	t.strictEqual( isNegativeZero( v ), false, 'does not return -0' );
	t.end();
});

tape( 'if provided `+infinity`, the function returns `0`', function test( t ) {
	var v = float64ToInt32( PINF );
	t.strictEqual( v, 0, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity`, the function returns `0`', function test( t ) {
	var v = float64ToInt32( NINF );
	t.strictEqual( v, 0, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `0`', function test( t ) {
	var v = float64ToInt32( NaN );
	t.strictEqual( isnan( v ), false, 'does not return NaN' );
	t.strictEqual( v, 0, 'returns expected value' );
	t.end();
});

tape( 'the function converts integer double-precision floating-point values to signed 32-bit integers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = integers.x;
	expected = integers.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToInt32( x[ i ] );
		t.strictEqual( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

tape( 'the function converts decimal double-precision floating-point values to signed 32-bit integers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = decimals.x;
	expected = decimals.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = float64ToInt32( x[ i ] );
		t.strictEqual( y, expected[ i ], 'y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});
