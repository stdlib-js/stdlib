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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
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
	var expected;
	var out;
	var X;

	X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = new Float64Array( [ 1.0, 30.0 ] );

	out = dlassq( 4, X, 1, 1.0, 0.0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form (NaNs)', function test( t ) {
	var expected;
	var out;
	var X;

	X = new Float64Array( [ 1.0, NaN, 3.0, 4.0 ] );
	expected = new Float64Array( [ 1.0, NaN ] );

	out = dlassq( 4, X, 1, 1.0, 0.0 );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	X = new Float64Array( [ 1.0e-160, 1.0e-160, NaN, 1.0e-160 ] );
	expected = new Float64Array( [ 1.0, NaN ] );

	out = dlassq( 4, X, 1, 1.0, 0.0 );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e150, 1.0e150, NaN, 1.0e150 ] );
	expected = new Float64Array( [ 8.997827589086393e+161, NaN ] );

	out = dlassq( 4, X, 1, 1.0, 0.0 );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form (large values)', function test( t ) {
	var expected;
	var out;
	var X;

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e150, 1.0e150, 1.0e150, 1.0e150 ] );
	expected = new Float64Array( [ 8.997827589086393e+161, 4.940656458412465e-24 ] ); // => 4.0e300

	out = dlassq( 4, X, 1, 1.0, 0.0 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e150, 1.0e150, 1.0e150, 1.0e150 ] );
	expected = new Float64Array( [ 8.997827589086393e+161, 9.881312916824931e-24 ] ); // => 8.0e300

	out = dlassq( 4, X, 1, 2.0, 1.0e300 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e150, 1.0e150, 1.0e150, 1.0e150 ] );
	expected = new Float64Array( [ 8.997827589086393e+161, 6.1758205730155814e-24 ] ); // => 5.0e300

	out = dlassq( 4, X, 1, 1.0, 1.0e300 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e308, 1.0e308, 1.0e308, 1.0e308 ] );
	expected = new Float64Array( [ 8.997827589086393e+161, 1.0/0.0 ] );

	out = dlassq( 4, X, 1, 1.0e308, 1.0e308 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form (small values)', function test( t ) {
	var expected;
	var out;
	var X;

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e-160, 1.0e-160, 1.0e-160, 1.0e-160 ] );
	expected = new Float64Array( [ 2.2227587494850775e-162, 8096.090132292425 ] ); // => ~4.0e-320

	out = dlassq( 4, X, 1, 1.0, 0.0 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e-160, 1.0e-160, 1.0e-160, 1.0e-160 ] );
	expected = new Float64Array( [ 2.2227587494850775e-162, 8602.090132292426 ] ); // => ~4.24e-320

	out = dlassq( 4, X, 1, 0.5, 1.0e-320 );
	t.deepEqual( out, expected, 'returns expected value' );

	// Checked on Wolfram Alpha:
	X = new Float64Array( [ 1.0e-160, 1.0e-160, 1.0e-160, 1.0e-160 ] );
	expected = new Float64Array( [ 2.2227587494850775e-162, 10120.090132292426 ] ); // => ~5.0e-320

	out = dlassq( 4, X, 1, 1.0, 1.0e-320 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form (sumsq > 0)', function test( t ) {
	var expected;
	var out;
	var X;

	X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = new Float64Array( [ 1.0, 31.0 ] );

	out = dlassq( 4, X, 1, 1.0, 1.0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var out;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	expected = new Float64Array( [ 1.0, 31.0 ] );

	out = dlassq( 4, X, -1, 1.0, 1.0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns initialized values if provided an `N` argument less than or equal to `0`', function test( t ) {
	var expected;
	var out;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	expected = new Float64Array( [ 1.0, 1.0 ] );

	out = dlassq( 0, X, -1, 1.0, 1.0 );
	t.deepEqual( out, expected, 'returns expected value' );

	out = dlassq( -5, X, -1, 1.0, 1.0 );
	t.deepEqual( out, expected, 'returns expected value' );

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	expected = new Float64Array( [ 1.0, 0.0 ] );

	out = dlassq( 0, X, 1, 0.0, 999.0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function does not compute an updated sum of squares if the scale factor is `NaN`', function test( t ) {
	var expected;
	var out;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	expected = new Float64Array( [ 0.0, 0.0 ] );

	out = dlassq( 4, X, -1, NaN, 1.0 );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function does not compute an updated sum of squares if the sum of squares is `NaN`', function test( t ) {
	var expected;
	var out;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	expected = new Float64Array( [ 0.0, 0.0 ] );

	out = dlassq( 4, X, -1, 1.0, NaN );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	t.end();
});
