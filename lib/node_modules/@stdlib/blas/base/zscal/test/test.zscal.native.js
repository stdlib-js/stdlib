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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var zscal = tryRequire( resolve( __dirname, './../lib/zscal.native.js' ) );
var opts = {
	'skip': ( zscal instanceof Error )
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
	t.strictEqual( typeof zscal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( zscal.length, 4, 'arity of 4' );
	t.end();
});

tape( 'the function scales elements from `zx` by `za`', opts, function test( t ) {
	var expected;
	var viewX;
	var za;
	var zx;

	zx = new Complex128Array([
		0.3, // 1
		0.1, // 1
		0.5, // 2
		0.0, // 2
		0.0, // 3
		0.5, // 3
		0.0, // 4
		0.2  // 4
	]);
	za = new Complex128( 0.4, -0.7 );

	zscal( 4, za, zx, 1 );

	viewX = new Float64Array( zx.buffer );
	expected = new Float64Array([
		0.19,  // 1
		-0.17, // 1
		0.2,   // 2
		-0.35, // 2
		0.35,  // 3
		0.2,   // 3
		0.14,  // 4
		0.08   // 4
	]);

	isApprox( t, viewX, expected, 1.0 );
	t.end();
});

tape( 'the function supports a `zx` stride', opts, function test( t ) {
	var expected;
	var viewX;
	var za;
	var zx;

	zx = new Complex128Array([
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
	za = new Complex128( 0.4, -0.7 );

	zscal( 3, za, zx, 2 );

	viewX = new Float64Array( zx.buffer );
	expected = new Float64Array([
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

	isApprox( t, viewX, expected, 5.0 );
	t.end();
});

tape( 'the function supports a negative `zx` stride', opts, function test( t ) {
	var expected;
	var viewX;
	var za;
	var zx;

	zx = new Complex128Array([
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
	za = new Complex128( 0.4, -0.7 );

	zscal( 3, za, zx, -2 );

	viewX = new Float64Array( zx.buffer );
	expected = new Float64Array([
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

	isApprox( t, viewX, expected, 5.0 );
	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var za;
	var zx;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	za = new Complex128( 2.0, 2.0 );

	out = zscal( 4, za, zx, 1 );

	t.strictEqual( out, zx, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', opts, function test( t ) {
	var expected;
	var viewX;
	var za;
	var zx;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	za = new Complex128( 2.0, 2.0 );

	viewX = new Float64Array( zx.buffer );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	zscal( -1, za, zx, 1 );
	t.deepEqual( viewX, expected, 'returns expected value' );

	zscal( 0, za, zx, 1 );
	t.deepEqual( viewX, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var viewX;
	var zx0;
	var zx1;
	var za;

	// Initial arrays...
	zx0 = new Complex128Array([
		0.1,
		-0.3,
		8.0,  // 1
		9.0,  // 1
		0.5,  // 2
		-0.1, // 2
		2.0,  // 3
		5.0,  // 3
		2.0,
		3.0
	]);
	za = new Complex128( 0.4, -0.7 );

	// Create offset views...
	zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	zscal( 3, za, zx1, 1 );

	viewX = new Float64Array( zx0.buffer );
	expected = new Float64Array([
		0.1,
		-0.3,
		9.5,   // 1
		-2.0,  // 1
		0.13,  // 2
		-0.39, // 2
		4.3,   // 3
		0.6,   // 3
		2.0,
		3.0
	]);

	isApprox( t, viewX, expected, 1.0 );
	t.end();
});
