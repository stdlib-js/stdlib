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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var clamp = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof clamp, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any argument, the function returns `NaN`', function test( t ) {
	var v;

	v = clamp( NaN, 0.0, 5.0 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = clamp( 0.0, NaN, 5.0 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = clamp( 3.14, 0.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = clamp( NaN, NaN, 5.0 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = clamp( NaN, 0.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = clamp( 3.14, NaN, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = clamp( NaN, NaN, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a value which is between a minimum value (inclusive) and a maximum value (inclusive), the function returns the input value', function test( t ) {
	var v;

	v = clamp( 3.14, 0.0, 5.0 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = clamp( -3.14, -10.0, 15.0 );
	t.strictEqual( v, -3.14, 'returns expected value' );

	v = clamp( 3.14, 3.14, 5.0 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	v = clamp( 3.14, 0.0, 3.14 );
	t.strictEqual( v, 3.14, 'returns expected value' );

	t.end();
});

tape( 'if provided a value which exceeds either a minimum value or a maximum value, the function clamps the value to the nearest extremum', function test( t ) {
	var v;

	v = clamp( 13.14, 0.0, 5.0 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	v = clamp( -13.14, -10.0, 15.0 );
	t.strictEqual( v, -10.0, 'returns expected value' );

	t.end();
});

tape( 'the function distinguishes between positive and negative zero', function test( t ) {
	var v;

	v = clamp( -0.0, 0.0, 5.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = clamp( 0.0, -0.0, 5.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = clamp( -0.0, -0.0, 5.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = clamp( 0.0, 0.0, 5.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = clamp( 0.0, -10.0, -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = clamp( -0.0, -10.0, 0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = clamp( 0.0, -10.0, 0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = clamp( -0.0, -10.0, -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = clamp( 0.0, -0.0, 0.0 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = clamp( -0.0, -0.0, 0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	v = clamp( -0.0, -0.0, -0.0 );
	t.strictEqual( isNegativeZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function allows swapped minimum and maximum values', function test( t ) {
	var v;

	v = clamp( 3.14, 10.0, 0.0 );
	t.strictEqual( v, 10.0, 'returns expected value' );

	v = clamp( 3.14, 3.0, 1.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});
