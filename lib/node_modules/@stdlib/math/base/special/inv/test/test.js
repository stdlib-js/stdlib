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
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var inv = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof inv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the multiplicative inverse of a number', function test( t ) {
	t.strictEqual( inv( -2.0 ), -0.5, 'negative number' );
	t.strictEqual( inv( 3.0 ), 1.0/3.0, 'positive number' );
	t.end();
});

tape( 'the function computes the multiplicative inverse of negative infinity', function test( t ) {
	t.strictEqual( isNegativeZero( inv( NINF ) ), true, 'returns negative zero' );
	t.end();
});

tape( 'the function computes the multiplicative inverse of positive infinity', function test( t ) {
	t.strictEqual( isPositiveZero( inv( PINF ) ), true, 'returns positive zero' );
	t.end();
});

tape( 'the function computes the multiplicative inverse of positive zero', function test( t ) {
	t.strictEqual( inv( 0.0 ), PINF, 'returns expected value' );
	t.end();
});

tape( 'the function computes the multiplicative inverse of negative zero', function test( t ) {
	t.strictEqual( inv( -0.0 ), NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = inv( NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );
	t.end();
});
