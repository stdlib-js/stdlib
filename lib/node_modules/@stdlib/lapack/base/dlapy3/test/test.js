/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float64/pinf' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var pow = require( '@stdlib/math/base/special/pow' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var dlapy3 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlapy3, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `+0` if all arguments are `+-0`', function test( t ) {
	var h;

	h = dlapy3( +0.0, +0.0, +0.0 );
	t.strictEqual( isPositiveZero( h ), true, 'returns expected value' );

	h = dlapy3( -0.0, +0.0, -0.0 );
	t.strictEqual( isPositiveZero( h ), true, 'returns expected value' );

	h = dlapy3( +0.0, -0.0, 0.0 );
	t.strictEqual( isPositiveZero( h ), true, 'returns expected value' );

	h = dlapy3( -0.0, -0.0, -0.0 );
	t.strictEqual( isPositiveZero( h ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if one or more arguments is `NaN`', function test( t ) {
	var h;

	h = dlapy3( NaN, 0.0, 0.0 );
	t.strictEqual( isnan( h ), true, 'returns expected value' );

	h = dlapy3( 0.0, NaN, 0.0 );
	t.strictEqual( isnan( h ), true, 'returns expected value' );

	h = dlapy3( 0.0, 0.0, NaN );
	t.strictEqual( isnan( h ), true, 'returns expected value' );

	h = dlapy3( NaN, NaN, 0.0 );
	t.strictEqual( isnan( h ), true, 'returns expected value' );

	h = dlapy3( NaN, 0.0, NaN );
	t.strictEqual( isnan( h ), true, 'returns expected value' );

	h = dlapy3( 0.0, NaN, NaN );
	t.strictEqual( isnan( h ), true, 'returns expected value' );

	h = dlapy3( NaN, NaN, NaN );
	t.strictEqual( isnan( h ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the Euclidian norm', function test( t ) {
	var h;

	h = dlapy3( 1234.0, 7863.0, 1298.0 );
	t.strictEqual( h, 8064.3864614736813, 'returns expected value' );

	h = dlapy3( 7.0, 9.0, 12.0 );
	t.strictEqual( h, 16.552945357246848, 'returns expected value' );

	h = dlapy3( 3.0, 4.0, 12.0 );
	t.strictEqual( h, 13.0, 'returns expected value' );

	t.end();
});

tape( 'the function avoids overflow', function test( t ) {
	var h;

	h = sqrt( pow( 1.0e308, 2 ) + pow( 1.0e308, 2 ) + pow( 1.0e308, 2 ) );
	t.strictEqual( h, PINF, 'returns expected value' );

	h = dlapy3( 1.0e308, 1.0e308, 1.0e308 );
	t.strictEqual( h, 1.7320508075688772e+308, 'returns expected value' );

	t.end();
});

tape( 'the function avoids underflow', function test( t ) {
	var h;

	h = sqrt( pow( 1.0e-200, 2 ) + pow( 1e-200, 2 ) + pow( 1e-200, 2 ) );
	t.strictEqual( h, 0.0, 'returns expected value' );

	h = dlapy3( 1.0e-200, 1.0e-200, 1.0e-200 );
	t.strictEqual( h, 1.7320508075688772e-200, 'returns expected value' );

	t.end();
});
