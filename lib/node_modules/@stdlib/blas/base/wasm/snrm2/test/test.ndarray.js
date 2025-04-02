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
var Float32Array = require( '@stdlib/array/float32' );
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var snrm2 = require( './../lib' );


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
	t.strictEqual( typeof snrm2, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 4', function test( t ) {
	t.strictEqual( snrm2.ndarray.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method calculates the L2-norm of a vector', function test( t ) {
	var nrm2;
	var x;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	nrm2 = snrm2.ndarray( x.length, x, 1, 0 );
	isApprox( t, nrm2, 7.4, 2.0 );

	// Short datasets:
	x = new Float32Array( [ -4.0 ] );

	nrm2 = snrm2.ndarray( x.length, x, 1, 0 );
	isApprox( t, nrm2, 4.0, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports a `stride` parameter', function test( t ) {
	var nrm2;
	var x;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);

	nrm2 = snrm2.ndarray( 4, x, 2, 0 );
	isApprox( t, nrm2, 5.0, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports a negative stride parameter', function test( t ) {
	var nrm2;
	var x;

	x = new Float32Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);

	nrm2 = snrm2.ndarray( 4, x, -2, x.length-2 );
	isApprox( t, nrm2, 5.0, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports an `offset` parameter', function test( t ) {
	var nrm2;
	var x;

	x = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);

	nrm2 = snrm2.ndarray( 4, x, 2, 1 );
	isApprox( t, nrm2, 5.0, 1.0 );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `ndarray` method returns `0`', function test( t ) {
	var nrm2;
	var x;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	nrm2 = snrm2.ndarray( 0, x, 1, 0 );
	t.strictEqual( nrm2, 0.0, 'returns expected value' );

	nrm2 = snrm2.ndarray( -1, x, 1, 0 );
	t.strictEqual( nrm2, 0.0, 'returns expected value' );

	t.end();
});
