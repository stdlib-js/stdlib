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
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var Float32Array = require( '@stdlib/array/float32' );
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var cscal = require( './../lib' );


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

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cscal, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 5', function test( t ) {
	t.strictEqual( cscal.ndarray.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the `ndarray` method scales elements from `cx` by `ca`', function test( t ) {
	var expected;
	var viewX;
	var ca;
	var cx;

	cx = new Complex64Array([
		0.3, // 1
		0.1, // 1
		0.5, // 2
		0.0, // 2
		0.0, // 3
		0.5, // 3
		0.0, // 4
		0.2, // 4
		2.0,
		3.0,
		2.0,
		3.0
	]);
	ca = new Complex64( 0.4, -0.7 );

	cscal.ndarray( 4, ca, cx, 1, 0 );

	viewX = new Float32Array( cx.buffer );
	expected = new Float32Array([
		0.19,  // 1
		-0.17, // 1
		0.2,   // 2
		-0.35, // 2
		0.35,  // 3
		0.2,   // 3
		0.14,  // 4
		0.08,  // 4
		2.0,
		3.0,
		2.0,
		3.0
	]);
	isApprox( t, viewX, expected, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports specifying a `cx` stride', function test( t ) {
	var expected;
	var viewX;
	var ca;
	var cx;

	cx = new Complex64Array([
		0.1,  // 1
		0.1,  // 1
		3.0,
		6.0,
		-0.6, // 2
		0.1,  // 2
		4.0,
		7.0,
		0.1,  // 3
		-0.3, // 3
		7.0,
		2.0
	]);
	ca = new Complex64( 0.4, -0.7 );

	cscal.ndarray( 3, ca, cx, 2, 0 );

	viewX = new Float32Array( cx.buffer );
	expected = new Float32Array([
		0.11,  // 1
		-0.03, // 1
		3.0,
		6.0,
		-0.17, // 2
		0.46,  // 2
		4.0,
		7.0,
		-0.17, // 3
		-0.19, // 3
		7.0,
		2.0
	]);
	isApprox( t, viewX, expected, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports specifying a negative `cx` stride', function test( t ) {
	var expected;
	var viewX;
	var ca;
	var cx;

	cx = new Complex64Array([
		0.1,  // 3
		0.1,  // 3
		3.0,
		6.0,
		-0.6, // 2
		0.1,  // 2
		4.0,
		7.0,
		0.1,  // 1
		-0.3, // 1
		7.0,
		2.0
	]);
	ca = new Complex64( 0.4, -0.7 );

	cscal.ndarray( 3, ca, cx, -2, 4 );

	viewX = new Float32Array( cx.buffer );
	expected = new Float32Array([
		0.11,  // 3
		-0.03, // 3
		3.0,
		6.0,
		-0.17, // 2
		0.46,  // 2
		4.0,
		7.0,
		-0.17, // 1
		-0.19, // 1
		7.0,
		2.0
	]);
	isApprox( t, viewX, expected, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports a `cx` offset', function test( t ) {
	var expected;
	var viewX;
	var ca;
	var cx;

	cx = new Complex64Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0,  // 1
		6.0,  // 1
		0.1,  // 2
		-0.3, // 2
		7.0,  // 3
		2.0   // 3
	]);
	ca = new Complex64( 0.4, -0.7 );

	cscal.ndarray( 3, ca, cx, 1, 3 );

	viewX = new Float32Array( cx.buffer );
	expected = new Float32Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		5.8,   // 1
		-0.4,  // 1
		-0.17, // 2
		-0.19, // 2
		4.2,   // 3
		-4.1   // 3
	]);
	isApprox( t, viewX, expected, 5.0 );

	t.end();
});

tape( 'the `ndarray` method returns a reference to the input array', function test( t ) {
	var out;
	var ca;
	var cx;

	cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	ca = new Complex64( 2.0, 2.0 );

	out = cscal.ndarray( 4, ca, cx, 1, 0 );

	t.strictEqual( out, cx, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `ndarray` method returns the input array unchanged', function test( t ) {
	var expected;
	var viewX;
	var ca;
	var cx;

	cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	ca = new Complex64( 2.0, 2.0 );

	viewX = new Float32Array( cx.buffer );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	cscal.ndarray( -1, ca, cx, 1, 0 );
	t.deepEqual( viewX, expected, 'returns expected value' );

	cscal.ndarray( 0, ca, cx, 1, 0 );
	t.deepEqual( viewX, expected, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports complex access patterns', function test( t ) {
	var expected;
	var viewX;
	var ca;
	var cx;

	cx = new Complex64Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0, // 1
		6.0, // 1
		0.1,
		-0.3,
		7.0,
		2.0,
		2.0, // 2
		3.0  // 2
	]);
	ca = new Complex64( 0.4, -0.7 );

	cscal.ndarray( 2, ca, cx, 3, 3 );

	viewX = new Float32Array( cx.buffer );
	expected = new Float32Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		5.8,  // 1
		-0.4, // 1
		0.1,
		-0.3,
		7.0,
		2.0,
		2.9,  // 2
		-0.2  // 2
	]);
	isApprox( t, viewX, expected, 5.0 );

	t.end();
});
