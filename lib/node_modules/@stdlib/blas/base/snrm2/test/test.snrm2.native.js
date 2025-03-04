/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var snrm2 = tryRequire( resolve( __dirname, './../lib/snrm2.native.js' ) );
var opts = {
	'skip': ( snrm2 instanceof Error )
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
	t.strictEqual( typeof snrm2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', opts, function test( t ) {
	t.strictEqual( snrm2.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the L2-norm of a vector', opts, function test( t ) {
	var x;
	var z;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	z = snrm2( x.length, x, 1 );
	isApprox( t, z, 7.4, 2.0 );

	x = new Float32Array( [ -4.0 ] );

	z = snrm2( x.length, x, 1 );
	isApprox( t, z, 4.0, 1.0 );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0`', opts, function test( t ) {
	var x;
	var z;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	z = snrm2( 0, x, 1 );
	t.strictEqual( z, 0.0, 'returns expected value' );

	z = snrm2( -1, x, 1 );
	t.strictEqual( z, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', opts, function test( t ) {
	var N;
	var x;
	var z;

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

	N = 4;
	z = snrm2( N, x, 2 );

	isApprox( t, z, 5.0, 1.0 );
	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Float32Array([
		0.3, // 3
		5.0,
		0.5, // 2
		6.0,
		0.4, // 1
		8.0,
		0.4, // 0
		9.0
	]);
	expected = 0.81;

	actual = snrm2( 4, x, -2 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var x0;
	var x1;
	var N;
	var z;

	x0 = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
	N = 4;

	z = snrm2( N, x1, 2 );
	isApprox( t, z, 5.0, 1.0 );

	t.end();
});
