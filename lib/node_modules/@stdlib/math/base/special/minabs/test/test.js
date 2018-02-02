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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var minabs = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minabs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v;

	v = minabs( NaN, 3.14 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = minabs( 3.14, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = minabs( NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = minabs( 3.14, 4.2, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `+infinity` if not provided any arguments', function test( t ) {
	var v = minabs();
	t.strictEqual( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns a correctly signed zero', function test( t ) {
	var v;

	v = minabs( +0.0, -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = minabs( -0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = minabs( -0.0, -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = minabs( +0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = minabs( -0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = minabs( +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = minabs( +0.0, -0.0, +0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	t.end();
});

tape( 'the function returns the minimum absolute value', function test( t ) {
	var v;

	v = minabs( 4.2, 3.14 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = minabs( -4.2, 3.14 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = minabs( 3.14 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = minabs( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = minabs( NINF );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = minabs( 4.2, 3.14, -1.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	v = minabs( 4.2, 3.14, -1.0, -3.14 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	v = minabs( PINF, 3.14 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = minabs( 3.14, PINF );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = minabs( PINF );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = minabs( 3.14, 4.2, PINF );
	t.strictEqual( v, 3.14, 'returns expected value' );

	t.end();
});
