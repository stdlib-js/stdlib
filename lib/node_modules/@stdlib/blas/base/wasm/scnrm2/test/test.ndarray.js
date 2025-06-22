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
var Complex64Array = require( '@stdlib/array/complex64' );
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var scnrm2 = require( './../lib' );


// FUNCTIONS //

/**
* Tests for element approximate equality.
*
* @private
* @param {Object} t - test object
* @param {number} actual - actual value
* @param {number} expected - expected value
* @param {number} rtol - relative tolerance
*/
function isApprox( t, actual, expected, rtol ) {
	var delta;
	var tol;

	if ( actual === expected ) {
		t.strictEqual( actual, expected, 'returns expected value' );
	} else {
		delta = abs( actual - expected );
		tol = rtol * EPS * abs( expected );
		t.ok( delta <= tol, 'within tolerance. actual: '+actual+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}
}


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scnrm2, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 4', function test( t ) {
	t.strictEqual( scnrm2.ndarray.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method calculates the L2-norm of a vector', function test( t ) {
	var nrm2;
	var x;

	x = new Complex64Array( [ 3.0, -4.0, -6.0, 8.0, 0.0, 3.0 ] );

	nrm2 = scnrm2.ndarray( x.length, x, 1, 0 );
	isApprox( t, nrm2, 11.575836902790, 1.0 );

	// Short datasets:
	x = new Complex64Array( [ -4.0, 0.0 ] );

	nrm2 = scnrm2.ndarray( x.length, x, 1, 0 );
	t.strictEqual( nrm2, 4.0, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports a `stride` parameter', function test( t ) {
	var nrm2;
	var x;

	x = new Complex64Array([
		1.0,  // 0
		2.0,  // 0
		2.0,
		2.0,
		-7.0, // 1
		-2.0, // 1
		3.0,
		3.0,
		4.0,  // 2
		2.0   // 2
	]);

	nrm2 = scnrm2.ndarray( 3, x, 2, 0 );
	isApprox( t, nrm2, 8.831760866327, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports a negative stride parameter', function test( t ) {
	var nrm2;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		2.0,  // 2
		-7.0, // 2
		-2.0,
		3.0,
		4.0,  // 1
		2.0   // 1
	]);

	nrm2 = scnrm2.ndarray( 2, x, -2, x.length-1);
	isApprox( t, nrm2, 8.544003745317, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports an `offset` parameter', function test( t ) {
	var nrm2;
	var x;

	x = new Complex64Array([
		1.0,
		1.0,
		2.0,
		2.0,
		1.0,  // 1
		2.0,  // 1
		-2.0,
		-2.0,
		2.0,  // 2
		3.0   // 2
	]);

	nrm2 = scnrm2.ndarray( 2, x, 2, 2 );
	isApprox( t, nrm2, 4.24264068711, 1.0 );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `ndarray` method returns `0`', function test( t ) {
	var nrm2;
	var x;

	x = new Complex64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, 6.0 ] );

	nrm2 = scnrm2.ndarray( 0, x, 1, 0 );
	t.strictEqual( nrm2, 0.0, 'returns expected value' );

	nrm2 = scnrm2.ndarray( -1, x, 1, 0 );
	t.strictEqual( nrm2, 0.0, 'returns expected value' );

	t.end();
});
