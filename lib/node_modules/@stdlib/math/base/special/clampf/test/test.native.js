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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var clampf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( clampf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof clampf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any argument, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = clampf( NaN, 0.0, 5.0 );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = clampf( 0.0, NaN, 5.0 );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = clampf( 3.14, 0.0, NaN );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = clampf( NaN, NaN, 5.0 );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = clampf( NaN, 0.0, NaN );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = clampf( 3.14, NaN, NaN );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	v = clampf( NaN, NaN, NaN );
	t.strictEqual( isnanf( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a value which is between a minimum value (inclusive) and a maximum value (inclusive), the function returns the input value', opts, function test( t ) {
	var v;

	v = clampf( 3.0, 0.0, 5.0 );
	t.strictEqual( v, 3.0, 'returns expected value' );

	v = clampf( -3.0, -10.0, 15.0 );
	t.strictEqual( v, -3.0, 'returns expected value' );

	v = clampf( 3.0, 3.0, 5.0 );
	t.strictEqual( v, 3.0, 'returns expected value' );

	v = clampf( 3.0, 0.0, 3.0 );
	t.strictEqual( v, 3.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a value which exceeds either a minimum value or a maximum value, the function clamps the value to the nearest extremum', opts, function test( t ) {
	var v;

	v = clampf( 13.14, 0.0, 5.0 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	v = clampf( -13.14, -10.0, 15.0 );
	t.strictEqual( v, -10.0, 'returns expected value' );

	t.end();
});

tape( 'the function distinguishes between positive and negative zero', opts, function test( t ) {
	var v;

	v = clampf( -0.0, 0.0, 5.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = clampf( 0.0, -0.0, 5.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = clampf( -0.0, -0.0, 5.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	v = clampf( 0.0, 0.0, 5.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = clampf( 0.0, -10.0, -0.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	v = clampf( -0.0, -10.0, 0.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	v = clampf( 0.0, -10.0, 0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = clampf( -0.0, -10.0, -0.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	v = clampf( 0.0, -0.0, 0.0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	v = clampf( -0.0, -0.0, 0.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	v = clampf( -0.0, -0.0, -0.0 );
	t.strictEqual( isNegativeZerof( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function allows swapped minimum and maximum values', opts, function test( t ) {
	var v;

	v = clampf( 3.14, 10.0, 0.0 );
	t.strictEqual( v, 10.0, 'returns expected value' );

	v = clampf( 3.14, 3.0, 1.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});
