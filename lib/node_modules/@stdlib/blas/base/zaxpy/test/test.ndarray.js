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
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var zaxpy = require( './../lib/ndarray.js' );


// FUNCTIONS //

/**
* Tests for element-wise approximate equality.
*
* @private
* @param {Object} t - test object
* @param {Collection} actual - actual values
* @param {Collection} expected - expected values
* @param {number} rtol - relative tolerance
*/
function isApprox( t, actual, expected, rtol ) {
	var delta;
	var tol;
	var i;

	t.strictEqual( actual.length, expected.length, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		if ( actual[ i ] === expected[ i ] ) {
			t.strictEqual( actual[ i ], expected[ i ], 'returns expected value' );
		} else {
			delta = abs( actual[ i ] - expected[ i ] );
			tol = rtol * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. actual: '+actual[ i ]+'. expected: '+expected[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zaxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( zaxpy.length, 8, 'arity of 8' );
	t.end();
});

tape( 'the function scales elements from `zx` by `za` and adds the result to `zy`', function test( t ) {
	var expected;
	var viewY;
	var za;
	var zx;
	var zy;

	zx = new Complex128Array( [
		0.7,  // 1
		-0.8, // 1
		-0.4, // 2
		-0.7, // 2
		-0.1, // 3
		-0.9, // 3
		0.2,  // 4
		-0.8, // 4
		-0.9,
		-0.4,
		0.1,
		0.4,
		-0.6,
		0.6
	] );
	zy = new Complex128Array( [
		0.6,  // 1
		-0.6, // 1
		-0.9, // 2
		0.5,  // 2
		0.7,  // 3
		-0.6, // 3
		0.1,  // 4
		-0.5, // 4
		-0.1,
		-0.2,
		-0.5,
		-0.3,
		0.8,
		-0.7
	] );
	za = new Complex128( 0.4, -0.7 );

	zaxpy( 4, za, zx, 1, 0, zy, 1, 0 );

	viewY = new Float64Array( zy.buffer );
	expected = new Float64Array( [
		0.32,  // 1
		-1.41, // 1
		-1.55, // 2
		0.5,   // 2
		0.03,  // 3
		-0.89, // 3
		-0.38, // 4
		-0.96, // 4
		-0.1,
		-0.2,
		-0.5,
		-0.3,
		0.8,
		-0.7
	] );
	isApprox( t, viewY, expected, 14.0 );
	t.end();
});

tape( 'the function supports a `zx` stride', function test( t ) {
	var expected;
	var viewY;
	var za;
	var zx;
	var zy;

	zx = new Complex128Array( [
		0.7,  // 1
		-0.8, // 1
		-0.4,
		-0.7,
		-0.1, // 2
		-0.9, // 2
		0.2,
		-0.8,
		-0.9, // 3
		-0.4, // 3
		0.1,
		0.4,
		-0.6, // 4
		0.6   // 4
	] );
	zy = new Complex128Array( [
		0.6,  // 1
		-0.6, // 1
		-0.9, // 2
		0.5,  // 2
		0.7,  // 3
		-0.6, // 3
		0.1,  // 4
		-0.5, // 4
		-0.1,
		-0.2,
		-0.5,
		-0.3,
		0.8,
		-0.7
	] );
	za = new Complex128( 0.4, -0.7 );

	zaxpy( 4, za, zx, 2, 0, zy, 1, 0 );

	viewY = new Float64Array( zy.buffer );
	expected = new Float64Array( [
		0.32,  // 1
		-1.41, // 1
		-1.57, // 2
		0.21,  // 2
		0.06,  // 3
		-0.13, // 3
		0.28,  // 4
		0.16,  // 4
		-0.1,
		-0.2,
		-0.5,
		-0.3,
		0.8,
		-0.7
	] );
	isApprox( t, viewY, expected, 14.0 );
	t.end();
});

tape( 'the function supports a `zx` offset', function test( t ) {
	var expected;
	var viewY;
	var za;
	var zx;
	var zy;

	zx = new Complex128Array( [
		0.7,
		-0.8,
		-0.4, // 1
		-0.7, // 1
		-0.1,
		-0.9,
		0.2,  // 2
		-0.8, // 2
		-0.9,
		-0.4,
		0.1,  // 3
		0.4,  // 3
		-0.6,
		0.6
	] );
	zy = new Complex128Array( [
		0.6,  // 1
		-0.6, // 1
		-0.9, // 2
		0.5,  // 2
		0.7,  // 3
		-0.6, // 3
		0.1,
		-0.5,
		-0.1,
		-0.2,
		-0.5,
		-0.3,
		0.8,
		-0.7
	] );
	za = new Complex128( 0.4, -0.7 );

	zaxpy( 3, za, zx, 2, 1, zy, 1, 0 );

	viewY = new Float64Array( zy.buffer );
	expected = new Float64Array( [
		-0.05, // 1
		-0.6,  // 1
		-1.38, // 2
		0.04,  // 2
		1.02,  // 3
		-0.51, // 3
		0.1,
		-0.5,
		-0.1,
		-0.2,
		-0.5,
		-0.3,
		0.8,
		-0.7
	] );
	isApprox( t, viewY, expected, 14.0 );
	t.end();
});

tape( 'the function supports a `zy` stride', function test( t ) {
	var expected;
	var viewY;
	var za;
	var zx;
	var zy;

	zx = new Complex128Array( [
		0.7,  // 1
		-0.8, // 1
		-0.4, // 2
		-0.7, // 2
		-0.1, // 3
		-0.9, // 3
		0.2,  // 4
		-0.8, // 4
		-0.9,
		-0.4,
		0.1,
		0.4,
		-0.6,
		0.6
	] );
	zy = new Complex128Array( [
		0.6,  // 1
		-0.6, // 1
		-0.9,
		0.5,
		0.7,  // 2
		-0.6, // 2
		0.1,
		-0.5,
		-0.1, // 3
		-0.2, // 3
		-0.5,
		-0.3,
		0.8,  // 4
		-0.7  // 4
	] );
	za = new Complex128( 0.4, -0.7 );

	zaxpy( 4, za, zx, 1, 0, zy, 2, 0 );

	viewY = new Float64Array( zy.buffer );
	expected = new Float64Array( [
		0.32,  // 1
		-1.41, // 1
		-0.9,
		0.5,
		0.05,  // 2
		-0.6,  // 2
		0.1,
		-0.5,
		-0.77, // 3
		-0.49, // 3
		-0.5,
		-0.3,
		0.32,  // 4
		-1.16  // 4
	] );
	isApprox( t, viewY, expected, 14.0 );
	t.end();
});

tape( 'the function supports a `zy` offset', function test( t ) {
	var expected;
	var viewY;
	var za;
	var zx;
	var zy;

	zx = new Complex128Array( [
		0.7,  // 1
		-0.8, // 1
		-0.4, // 2
		-0.7, // 2
		-0.1, // 3
		-0.9, // 3
		0.2,
		-0.8,
		-0.9,
		-0.4,
		0.1,
		0.4,
		-0.6,
		0.6
	] );
	zy = new Complex128Array( [
		0.6,
		-0.6,
		-0.9, // 1
		0.5,  // 1
		0.7,
		-0.6,
		0.1,  // 2
		-0.5, // 2
		-0.1,
		-0.2,
		-0.5, // 3
		-0.3, // 3
		0.8,
		-0.7
	] );
	za = new Complex128( 0.4, -0.7 );

	zaxpy( 3, za, zx, 1, 0, zy, 2, 1 );

	viewY = new Float64Array( zy.buffer );
	expected = new Float64Array( [
		0.6,
		-0.6,
		-1.18, // 1
		-0.31, // 1
		0.7,
		-0.6,
		-0.55, // 2
		-0.5,  // 2
		-0.1,
		-0.2,
		-1.17, // 3
		-0.59, // 3
		0.8,
		-0.7
	] );
	isApprox( t, viewY, expected, 14.0 );
	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var za;
	var zx;
	var zy;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	za = new Complex128( 2.0, 2.0 );

	out = zaxpy( zx.length, za, zx, 1, 0, zy, 1, 0 );

	t.strictEqual( out, zy, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the second input array unchanged', function test( t ) {
	var expected;
	var viewY;
	var za;
	var zx;
	var zy;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	zy = new Complex128Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	za = new Complex128( 2.0, 2.0 );

	viewY = new Float64Array( zy.buffer );
	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	zaxpy( -1, za, zx, 1, 0, zy, 1, 0 );
	t.deepEqual( viewY, expected, 'returns expected value' );

	zaxpy( 0, za, zx, 1, 0, zy, 1, 0 );
	t.deepEqual( viewY, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `zx` stride', function test( t ) {
	var expected;
	var viewY;
	var za;
	var zx;
	var zy;

	zx = new Complex128Array( [
		0.7,  // 4
		-0.8, // 4
		-0.4,
		-0.7,
		-0.1, // 3
		-0.9, // 3
		0.2,
		-0.8,
		-0.9, // 2
		-0.4, // 2
		0.1,
		0.4,
		-0.6, // 1
		0.6   // 1
	] );
	zy = new Complex128Array( [
		0.6,  // 1
		-0.6, // 1
		-0.9, // 2
		0.5,  // 2
		0.7,  // 3
		-0.6, // 3
		0.1,  // 4
		-0.5, // 4
		-0.1,
		-0.2,
		-0.5,
		-0.3,
		0.8,
		-0.7
	] );
	za = new Complex128( 0.4, -0.7 );

	zaxpy( 4, za, zx, -2, 6, zy, 1, 0 );

	viewY = new Float64Array( zy.buffer );
	expected = new Float64Array( [
		0.78,  // 1
		0.06,  // 1
		-1.54, // 2
		0.97,  // 2
		0.03,  // 3
		-0.89, // 3
		-0.18, // 4
		-1.31, // 4
		-0.1,
		-0.2,
		-0.5,
		-0.3,
		0.8,
		-0.7
	] );
	isApprox( t, viewY, expected, 14.0 );
	t.end();
});

tape( 'the function supports a negative `zy` stride', function test( t ) {
	var expected;
	var viewY;
	var za;
	var zx;
	var zy;

	zx = new Complex128Array( [
		0.7,  // 1
		-0.8, // 1
		-0.4,
		-0.7,
		-0.1, // 2
		-0.9, // 2
		0.2,
		-0.8,
		-0.9, // 3
		-0.4, // 3
		0.1,
		0.4,
		-0.6, // 4
		0.6   // 4
	] );
	zy = new Complex128Array( [
		0.6,  // 4
		-0.6, // 4
		-0.9,
		0.5,
		0.7,  // 3
		-0.6, // 3
		0.1,
		-0.5,
		-0.1, // 2
		-0.2, // 2
		-0.5,
		-0.3,
		0.8,  // 1
		-0.7  // 1
	] );
	za = new Complex128( 0.4, -0.7 );

	zaxpy( 4, za, zx, 2, 0, zy, -2, 6 );

	viewY = new Float64Array( zy.buffer );
	expected = new Float64Array( [
		0.78,  // 4
		0.06,  // 4
		-0.9,
		0.5,
		0.06,  // 3
		-0.13, // 3
		0.1,
		-0.5,
		-0.77, // 2
		-0.49, // 2
		-0.5,
		-0.3,
		0.52,  // 1
		-1.51  // 1
	] );
	isApprox( t, viewY, expected, 14.0 );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var viewY;
	var za;
	var zx;
	var zy;

	zx = new Complex128Array( [
		0.7,   // 4
		-0.8,  // 4
		-0.4,  // 3
		-0.7,  // 3
		-0.1,  // 2
		-0.9,  // 2
		0.2,   // 1
		-0.8,  // 1
		-0.9,
		-0.4,
		0.1,
		0.4,
		-0.6,
		0.6
	] );
	zy = new Complex128Array( [
		0.6,  // 4
		-0.6, // 4
		-0.9,
		0.5,
		0.7,  // 3
		-0.6, // 3
		0.1,
		-0.5,
		-0.1, // 2
		-0.2, // 2
		-0.5,
		-0.3,
		0.8,  // 1
		-0.7  // 1
	] );
	za = new Complex128( 0.4, -0.7 );

	zaxpy( 4, za, zx, -1, 3, zy, -2, 6 );

	viewY = new Float64Array( zy.buffer );
	expected = new Float64Array( [
		0.32,  // 4
		-1.41, // 4
		-0.9,
		0.5,
		0.05,  // 3
		-0.6,  // 3
		0.1,
		-0.5,
		-0.77, // 2
		-0.49, // 2
		-0.5,
		-0.3,
		0.32,  // 1
		-1.16  // 1
	] );
	isApprox( t, viewY, expected, 14.0 );
	t.end();
});
