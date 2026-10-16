/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var dlassq = require( './../lib/dlassq.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlassq, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( dlassq.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form', function test( t ) {
	var scale;
	var sumsq;
	var X;

	X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 0.0 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 30.0, 'returns expected value' );

	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form (NaNs)', function test( t ) {
	var scale;
	var sumsq;
	var X;

	X = new Float64Array( [ 1.0, NaN, 3.0, 4.0 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 0.0 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( isnan( sumsq[ 0 ] ), true, 'returns expected value' );

	X = new Float64Array( [ 1.0e-160, 1.0e-160, NaN, 1.0e-160 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 0.0 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( isnan( sumsq[ 0 ] ), true, 'returns expected value' );

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e150, 1.0e150, NaN, 1.0e150 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 0.0 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 8.997827589086393e+161, 'returns expected value' );
	t.strictEqual( isnan( sumsq[ 0 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form (large values)', function test( t ) {
	var scale;
	var sumsq;
	var X;

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e150, 1.0e150, 1.0e150, 1.0e150 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 0.0 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 8.997827589086393e+161, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 4.940656458412465e-24, 'returns expected value' ); // => 4.0e300

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e150, 1.0e150, 1.0e150, 1.0e150 ] );
	scale = new Float64Array( [ 2.0 ] );
	sumsq = new Float64Array( [ 1.0e300 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 8.997827589086393e+161, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 9.881312916824931e-24, 'returns expected value' ); // => 8.0e300

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e150, 1.0e150, 1.0e150, 1.0e150 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 1.0e300 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 8.997827589086393e+161, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 6.1758205730155814e-24, 'returns expected value' ); // => 5.0e300

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e308, 1.0e308, 1.0e308, 1.0e308 ] );
	scale = new Float64Array( [ 1.0e308 ] );
	sumsq = new Float64Array( [ 1.0e308 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 8.997827589086393e+161, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 1.0/0.0, 'returns expected value' );

	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form (small values)', function test( t ) {
	var scale;
	var sumsq;
	var X;

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e-160, 1.0e-160, 1.0e-160, 1.0e-160 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 0.0 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 2.2227587494850775e-162, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 8096.090132292425, 'returns expected value' ); // => ~4.0e-320

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e-160, 1.0e-160, 1.0e-160, 1.0e-160 ] );
	scale = new Float64Array( [ 0.5 ] );
	sumsq = new Float64Array( [ 1.0e-320 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 2.2227587494850775e-162, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 8602.090132292426, 'returns expected value' ); // => ~4.24e-320

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e-160, 1.0e-160, 1.0e-160, 1.0e-160 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 1.0e-320 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 2.2227587494850775e-162, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 10120.090132292426, 'returns expected value' ); // => ~5.0e-320

	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form (sumsq > 0)', function test( t ) {
	var scale;
	var sumsq;
	var X;

	X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 1.0 ] );

	dlassq( 4, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 31.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var scale;
	var sumsq;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 1.0 ] );

	dlassq( 4, X, -1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 31.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns initialized values if provided an `N` argument less than or equal to `0`', function test( t ) {
	var scale;
	var sumsq;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ 1.0 ] );

	dlassq( 0, X, -1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 1.0, 'returns expected value' );

	dlassq( -5, X, -1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 1.0, 'returns expected value' );

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	scale = new Float64Array( [ 0.0 ] );
	sumsq = new Float64Array( [ 999.0 ] );

	dlassq( 0, X, 1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function does not compute an updated sum of squares if the scale factor is `NaN`', function test( t ) {
	var scale;
	var sumsq;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	scale = new Float64Array( [ NaN ] );
	sumsq = new Float64Array( [ 1.0 ] );

	dlassq( 4, X, -1, scale, sumsq );
	t.strictEqual( isnan( scale[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( sumsq[ 0 ], 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function does not compute an updated sum of squares if the sum of squares is `NaN`', function test( t ) {
	var scale;
	var sumsq;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	scale = new Float64Array( [ 1.0 ] );
	sumsq = new Float64Array( [ NaN ] );

	dlassq( 4, X, -1, scale, sumsq );
	t.strictEqual( scale[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( isnan( sumsq[ 0 ] ), true, 'returns expected value' );

	t.end();
});
