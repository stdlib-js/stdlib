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

tape( 'the function scales elements from `x` by `alpha` and adds the result to `y`', opts, function test( t ) {
	var expected;
	var viewY;
	var alpha;
	var x;
	var y;

	x = new Complex64Array([
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
	]);
	y = new Complex64Array([
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
	]);
	alpha = new Complex64( 0.4, -0.7 );

	caxpy( 4, alpha, x, 1, y, 1 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array([
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
	]);
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function supports a `x` stride', opts, function test( t ) {
	var expected;
	var viewY;
	var alpha;
	var x;
	var y;

	x = new Complex64Array([
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
	]);
	y = new Complex64Array([
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
	]);
	alpha = new Complex64( 0.4, -0.7 );

	caxpy( 4, alpha, x, 2, y, 1 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array([
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
	]);
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var viewY;
	var alpha;
	var x;
	var y;

	x = new Complex64Array([
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
	]);
	y = new Complex64Array([
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
	]);
	alpha = new Complex64( 0.4, -0.7 );

	caxpy( 4, alpha, x, 1, y, 2 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array([
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
	]);
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var alpha;
	var out;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	alpha = new Complex64( 2.0, 2.0 );

	out = caxpy( x.length, alpha, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided `alpha` parameter equal to `0`, the function returns the second input array unchanged', opts, function test( t ) {
	var expected;
	var viewY;
	var alpha;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	alpha = new Complex64( 0.0, 0.0 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	caxpy( -1, alpha, x, 1, y, 1 );
	t.deepEqual( viewY, expected, 'returns expected value' );

	caxpy( 0, alpha, x, 1, y, 1 );
	t.deepEqual( viewY, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the second input array unchanged', opts, function test( t ) {
	var expected;
	var viewY;
	var alpha;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	alpha = new Complex64( 2.0, 2.0 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	caxpy( -1, alpha, x, 1, y, 1 );
	t.deepEqual( viewY, expected, 'returns expected value' );

	caxpy( 0, alpha, x, 1, y, 1 );
	t.deepEqual( viewY, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative `x` strides', opts, function test( t ) {
	var expected;
	var viewY;
	var alpha;
	var x;
	var y;

	x = new Complex64Array([
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
	]);
	y = new Complex64Array([
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
	]);
	alpha = new Complex64( 0.4, -0.7 );

	caxpy( 4, alpha, x, -2, y, 1 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array([
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
	]);
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function supports negative `y` strides', opts, function test( t ) {
	var expected;
	var viewY;
	var alpha;
	var x;
	var y;

	x = new Complex64Array([
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
	]);
	y = new Complex64Array([
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
	]);
	alpha = new Complex64( 0.4, -0.7 );

	caxpy( 4, alpha, x, 2, y, -2 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array([
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
	]);
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var viewY;
	var alpha;
	var x;
	var y;

	x = new Complex64Array([
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
	]);
	y = new Complex64Array([
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
	]);
	alpha = new Complex64( 0.4, -0.7 );

	caxpy( 4, alpha, x, -1, y, -2 );

	viewY = new Float32Array( y.buffer );
	expected = new Float32Array([
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
	]);
	isApprox( t, viewY, expected, 10.0 );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var viewY;
	var alpha;
	var x0;
	var y0;
	var x1;
	var y1;

	// Initial arrays...
	x0 = new Complex64Array([
		1.0,
		2.0,
		3.0, // 1
		4.0, // 1
		5.0,
		6.0
	]);
	y0 = new Complex64Array([
		1.0,
		1.0,
		1.0,
		1.0,
		1.0, // 1
		1.0  // 1
	]);

	// Define a scalar constant:
	alpha = new Complex64( 2.0, 2.0 );

	// Create offset views...
	x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at the 2nd element
	y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // begin at the 3rd element

	caxpy( 1, alpha, x1, 1, y1, 1 );

	viewY = new Float32Array( y0.buffer );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, -1.0, 15.0 ] );

	t.deepEqual( viewY, expected, 'returns expected value' );
	t.end();
});
