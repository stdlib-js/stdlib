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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var caxpy = tryRequire( resolve( __dirname, './../lib/caxpy.native.js' ) );
var opts = {
	'skip': ( caxpy instanceof Error )
};


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

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof caxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', opts, function test( t ) {
	t.strictEqual( caxpy.length, 6, 'arity of 6' );
	t.end();
});

tape( 'the function scales elements from `cx` by `ca` and adds the result to `cy`', opts, function test( t ) {
	var expected;
	var viewY;
	var ca;
	var cx;
	var cy;

	cx = new Complex64Array( [
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
	cy = new Complex64Array( [
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
	ca = new Complex64( 0.4, -0.7 );

	caxpy( 4, ca, cx, 1, cy, 1 );

	viewY = new Float32Array( cy.buffer );
	expected = new Float32Array( [
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
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function supports a `cx` stride', opts, function test( t ) {
	var expected;
	var viewY;
	var ca;
	var cx;
	var cy;

	cx = new Complex64Array( [
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
	cy = new Complex64Array( [
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
	ca = new Complex64( 0.4, -0.7 );

	caxpy( 4, ca, cx, 2, cy, 1 );

	viewY = new Float32Array( cy.buffer );
	expected = new Float32Array( [
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
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function supports a `cy` stride', opts, function test( t ) {
	var expected;
	var viewY;
	var ca;
	var cx;
	var cy;

	cx = new Complex64Array( [
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
	cy = new Complex64Array( [
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
	ca = new Complex64( 0.4, -0.7 );

	caxpy( 4, ca, cx, 1, cy, 2 );

	viewY = new Float32Array( cy.buffer );
	expected = new Float32Array( [
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
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var ca;
	var cx;
	var cy;

	cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	ca = new Complex64( 2.0, 2.0 );

	out = caxpy( cx.length, ca, cx, 1, cy, 1 );

	t.strictEqual( out, cy, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the second input array unchanged', opts, function test( t ) {
	var expected;
	var viewY;
	var ca;
	var cx;
	var cy;

	cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	cy = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	ca = new Complex64( 2.0, 2.0 );

	viewY = new Float32Array( cy.buffer );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	caxpy( -1, ca, cx, 1, cy, 1 );
	t.deepEqual( viewY, expected, 'returns expected value' );

	caxpy( 0, ca, cx, 1, cy, 1 );
	t.deepEqual( viewY, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative `cx` strides', opts, function test( t ) {
	var expected;
	var viewY;
	var ca;
	var cx;
	var cy;

	cx = new Complex64Array( [
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
	cy = new Complex64Array( [
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
	ca = new Complex64( 0.4, -0.7 );

	caxpy( 4, ca, cx, -2, cy, 1 );

	viewY = new Float32Array( cy.buffer );
	expected = new Float32Array( [
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
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function supports negative `cy` strides', opts, function test( t ) {
	var expected;
	var viewY;
	var ca;
	var cx;
	var cy;

	cx = new Complex64Array( [
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
	cy = new Complex64Array( [
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
	ca = new Complex64( 0.4, -0.7 );

	caxpy( 4, ca, cx, 2, cy, -2 );

	viewY = new Float32Array( cy.buffer );
	expected = new Float32Array( [
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
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var viewY;
	var ca;
	var cx;
	var cy;

	cx = new Complex64Array( [
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
	cy = new Complex64Array( [
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
	ca = new Complex64( 0.4, -0.7 );

	caxpy( 4, ca, cx, -1, cy, -2 );

	viewY = new Float32Array( cy.buffer );
	expected = new Float32Array( [
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
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var viewY;
	var cx0;
	var cy0;
	var cx1;
	var cy1;
	var ca;

	// Initial arrays...
	cx0 = new Complex64Array([
		1.0,
		2.0,
		3.0, // 1
		4.0, // 1
		5.0,
		6.0
	]);
	cy0 = new Complex64Array([
		1.0,
		1.0,
		1.0,
		1.0,
		1.0, // 1
		1.0  // 1
	]);

	// Define a scalar constant:
	ca = new Complex64( 2.0, 2.0 );

	// Create offset views...
	cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // begin at the 2nd element
	cy1 = new Complex64Array( cy0.buffer, cy0.BYTES_PER_ELEMENT*2 ); // begin at the 3rd element

	caxpy( 1, ca, cx1, 1, cy1, 1 );

	viewY = new Float32Array( cy0.buffer );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, -1.0, 15.0 ] );

	t.deepEqual( viewY, expected, 'returns expected value' );
	t.end();
});
