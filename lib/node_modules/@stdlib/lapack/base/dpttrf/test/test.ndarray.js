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
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var dpttrf = require( './../lib/ndarray.js' );


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
	t.strictEqual( typeof dpttrf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( dpttrf.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var D;
	var E;
	var i;

	values = [
		-1,
		-2,
		-3,
		-4,
		-5
	];

	D = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	E = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dpttrf( value, D, 1, 0, E, 1, 0 );
		};
	}
});

tape( 'the function computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`', function test( t ) {
	var expectedD;
	var expectedE;
	var info;
	var D;
	var E;
	var N;

	N = 3;

	D = new Float64Array( [ 4.0, 5.0, 6.0 ] );
	E = new Float64Array( [ 1.0, 2.0 ] );

	expectedD = new Float64Array( [ 4.0, 4.75, 5.157894736842105 ] );
	expectedE = new Float64Array( [ 0.25, 0.42105263157894735 ] );

	info = dpttrf( N, D, 1, 0, E, 1, 0 );
	t.strictEqual( info, 0, 'returns expected value' );
	isApprox( t, D, expectedD, 2.0 );
	isApprox( t, E, expectedE, 2.0 );

	N = 7;

	D = new Float64Array( [ 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	E = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0] );

	expectedD = new Float64Array( [ 4.0, 4.75, 5.157894736842105, 5.255102040816327, 4.955339805825243, 3.954937304075235, 0.89745368076885157 ] );
	expectedE = new Float64Array( [ 0.25, 0.42105263157894735, 0.58163265306122447, 0.76116504854368927, 1.0090125391849529, 1.5170910532051916 ] );

	info = dpttrf( N, D, 1, 0, E, 1, 0 );
	t.strictEqual( info, 0, 'returns expected value' );
	isApprox( t, D, expectedD, 2.0 );
	isApprox( t, E, expectedE, 2.0 );

	t.end();
});

tape( 'the function supports providing index offsets', function test( t ) {
	var expectedD;
	var expectedE;
	var info;
	var D;
	var E;
	var N;

	N = 3;

	D = new Float64Array( [ 0.0, 0.0, 4.0, 5.0, 6.0 ] );
	E = new Float64Array( [ 0.0, 0.0, 0.0, 1.0, 2.0 ] );

	expectedD = new Float64Array( [ 0.0, 0.0, 4.0, 4.75, 5.157894736842105 ] );
	expectedE = new Float64Array( [ 0.0, 0.0, 0.0, 0.25, 0.42105263157894735 ] );

	info = dpttrf( N, D, 1, 2, E, 1, 3 );
	t.strictEqual( info, 0, 'returns expected value' );
	isApprox( t, D, expectedD, 2.0 );
	isApprox( t, E, expectedE, 2.0 );

	t.end();
});

tape( 'the function supports providing positive strides', function test( t ) {
	var expectedD;
	var expectedE;
	var info;
	var D;
	var E;
	var N;

	N = 3;

	D = new Float64Array( [ 0.0, 0.0, 4.0, 0.0, 0.0, 5.0, 0.0, 0.0, 6.0 ] );
	E = new Float64Array( [ 0.0, 0.0, 0.0, 1.0, 0.0, 2.0 ] );

	expectedD = new Float64Array( [ 0.0, 0.0, 4.0, 0.0, 0.0, 4.75, 0.0, 0.0, 5.157894736842105 ] );
	expectedE = new Float64Array( [ 0.0, 0.0, 0.0, 0.25, 0.0, 0.42105263157894735 ] );

	info = dpttrf( N, D, 3, 2, E, 2, 3 );
	t.strictEqual( info, 0, 'returns expected value' );
	isApprox( t, D, expectedD, 2.0 );
	isApprox( t, E, expectedE, 2.0 );

	t.end();
});

tape( 'the function supports providing mixed sign strides', function test( t ) {
	var expectedD;
	var expectedE;
	var info;
	var D;
	var E;
	var N;

	N = 3;

	D = new Float64Array( [ 6.0, 0.0, 0.0, 5.0, 0.0, 0.0, 4.0 ] );
	E = new Float64Array( [ 0.0, 0.0, 0.0, 1.0, 0.0, 2.0 ] );

	expectedD = new Float64Array( [ 5.157894736842105, 0.0, 0.0, 4.75, 0.0, 0.0, 4.0 ] );
	expectedE = new Float64Array( [ 0.0, 0.0, 0.0, 0.25, 0.0, 0.42105263157894735 ] );

	info = dpttrf( N, D, -3, 6, E, 2, 3 );
	t.strictEqual( info, 0, 'returns expected value' );
	isApprox( t, D, expectedD, 2.0 );
	isApprox( t, E, expectedE, 2.0 );

	t.end();
});

tape( 'the function supports providing negative strides', function test( t ) {
	var expectedD;
	var expectedE;
	var info;
	var D;
	var E;
	var N;

	N = 3;

	D = new Float64Array( [ 6.0, 0.0, 0.0, 5.0, 0.0, 0.0, 4.0 ] );
	E = new Float64Array( [ 0.0, 0.0, 0.0, 2.0, 0.0, 1.0 ] );

	expectedD = new Float64Array( [ 5.157894736842105, 0.0, 0.0, 4.75, 0.0, 0.0, 4.0 ] );
	expectedE = new Float64Array( [ 0.0, 0.0, 0.0, 0.42105263157894735, 0.0, 0.25 ] );

	info = dpttrf( N, D, -3, 6, E, -2, 5 );
	t.strictEqual( info, 0, 'returns expected value' );
	isApprox( t, D, expectedD, 2.0 );
	isApprox( t, E, expectedE, 2.0 );

	t.end();
});

tape( 'the function returns a non-zero status code when a diagonal element is less than or equal to zero', function test( t ) {
	var info;
	var D;
	var E;
	var N;

	N = 3;

	D = new Float64Array( [ 0.0, 5.0, 6.0 ] );
	E = new Float64Array( [ 1.0, 2.0 ] );

	info = dpttrf( N, D, 1, 0, E, 1, 0 );
	t.strictEqual( info, 1, 'returns expected value' );

	D = new Float64Array( [ 4.0, 0.0, 6.0 ] );
	E = new Float64Array( [ 1.0, 2.0 ] );

	info = dpttrf( N, D, 1, 0, E, 1, 0 );
	t.strictEqual( info, 2, 'returns expected value' );

	D = new Float64Array( [ 4.0, 5.0, 0.0 ] );
	E = new Float64Array( [ 1.0, 2.0 ] );

	info = dpttrf( N, D, 1, 0, E, 1, 0 );
	t.strictEqual( info, 3, 'returns expected value' );

	t.end();
});

tape( 'the function leaves the input arrays unchanged when `N` is equal to zero', function test( t ) {
	var expectedD;
	var expectedE;
	var info;
	var D;
	var E;
	var N;

	N = 0;

	D = new Float64Array( [ 4.0, 5.0, 6.0 ] );
	E = new Float64Array( [ 1.0, 2.0 ] );

	expectedD = new Float64Array( [ 4.0, 5.0, 6.0 ] );
	expectedE = new Float64Array( [ 1.0, 2.0 ] );

	info = dpttrf( N, D, 1, 0, E, 1, 0 );
	t.strictEqual( info, 0, 'returns expected value' );
	t.deepEqual( D, expectedD, 'returns expected value' );
	t.deepEqual( E, expectedE, 'returns expected value' );

	t.end();
});
