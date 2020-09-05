/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var PINF = require( '@stdlib/constants/math/float32-pinf' );
var NINF = require( '@stdlib/constants/math/float32-ninf' );
var FLOAT32_MAX = require( '@stdlib/constants/math/float32-max' );
var pdifff = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pdifff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var v;

	v = pdifff( NaN, 3.14 );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = pdifff( 3.14, NaN );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = pdifff( NaN, NaN );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `+infinity` if the first argument is `+infinity`', function test( t ) {
	var v;

	v = pdifff( PINF, 3.14 );
	t.strictEqual( v, PINF, 'returns +infinity' );

	v = pdifff( PINF, NINF );
	t.strictEqual( v, PINF, 'returns +infinity' );

	t.end();
});

tape( 'the function returns `0` if both arguments are `+infinity`', function test( t ) {
	var v = pdifff( PINF, PINF );
	t.strictEqual( isPositiveZerof( v ), true, 'returns +0' );
	t.end();
});

tape( 'the function returns positive zero if the difference between the first and second arguments is less than or equal to `0`', function test( t ) {
	var v;

	v = pdifff( +0.0, -0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns +0' );

	v = pdifff( -0.0, +0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns +0' );

	v = pdifff( -0.0, -0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns +0' );

	v = pdifff( +0.0, +0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns +0' );

	v = pdifff( 3.14, 3.14 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns +0' );

	v = pdifff( 3.14, 4.2 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns +0' );

	t.end();
});

tape( 'the function returns the positive difference between `x` and `y`', function test( t ) {
	var v;

	v = pdifff( 4.15, 3.15 );
	t.strictEqual( v, 1.0, 'returns the positive difference' );

	v = pdifff( -4.2, 3.14 );
	t.strictEqual( v, 0.0, 'returns the positive difference' );

	v = pdifff( -4.2, -5.2 );
	t.strictEqual( v, 1.0, 'returns the positive difference' );

	t.end();
});

tape( 'the function returns `+infinity` if overflow occurs', function test( t ) {
	var half;
	var v;

	half = FLOAT32_MAX / 2.0;
	v = pdifff( half, -(half*1.5) );
	t.strictEqual( v, PINF, 'returns +infinity' );

	t.end();
});
