/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var isNaNArray = require( '@stdlib/assert/is-nan-array' );
var tryRequire = require( '@stdlib/utils/try-require' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );


// VARIABLES //

var kernelBetaincinv = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( kernelBetaincinv instanceof Error )
};


// FIXTURES //

var largeAsymmetric = require( './fixtures/python/large_asymmetric.json' );
var largeSymmetric = require( './fixtures/python/large_symmetric.json' );
var studentsT = require( './fixtures/python/students_t.json' );
var pNearOne = require( './fixtures/python/p_near_one.json' );
var medium = require( './fixtures/python/medium.json' );
var linear = require( './fixtures/python/linear.json' );
var tinyP = require( './fixtures/python/tiny_p.json' );
var mixed = require( './fixtures/python/mixed.json' );
var small = require( './fixtures/python/small.json' );
var huge = require( './fixtures/python/huge.json' );


// FUNCTIONS //

/**
* Tests the function against a fixture set.
*
* @private
* @param {Object} t - test object
* @param {Object} fixtures - fixture data
* @param {NonNegativeInteger} tol1 - ULP tolerance for the first output value
* @param {NonNegativeInteger} tol2 - ULP tolerance for the second output value
*/
function testFixtures( t, fixtures, tol1, tol2 ) {
	var expected1;
	var expected2;
	var out;
	var a;
	var b;
	var p;
	var q;
	var i;

	a = fixtures.a;
	b = fixtures.b;
	p = fixtures.p;
	q = fixtures.q;
	expected1 = fixtures.expected1;
	expected2 = fixtures.expected2;
	for ( i = 0; i < p.length; i++ ) {
		out = kernelBetaincinv( a[ i ], b[ i ], p[ i ], q[ i ] );
		t.strictEqual( isAlmostSameValue( out[ 0 ], expected1[ i ], tol1 ), true, 'returns expected value' );
		t.strictEqual( isAlmostSameValue( out[ 1 ], expected2[ i ], tol2 ), true, 'returns expected value' );
	}
}


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kernelBetaincinv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `[ NaN, NaN ]` if provided `NaN` for any parameter', opts, function test( t ) {
	var out;

	out = kernelBetaincinv( NaN, 3.0, 0.5, 0.5 );
	t.strictEqual( isNaNArray( out ), true, 'returns expected value' );

	out = kernelBetaincinv( 2.0, NaN, 0.5, 0.5 );
	t.strictEqual( isNaNArray( out ), true, 'returns expected value' );

	out = kernelBetaincinv( 2.0, 3.0, NaN, 0.5 );
	t.strictEqual( isNaNArray( out ), true, 'returns expected value' );

	out = kernelBetaincinv( 2.0, 3.0, 0.5, NaN );
	t.strictEqual( isNaNArray( out ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `[ NaN, NaN ]` if provided a negative `a` or `b`', opts, function test( t ) {
	var out;

	out = kernelBetaincinv( -1.0, 3.0, 0.5, 0.5 );
	t.strictEqual( isNaNArray( out ), true, 'returns expected value' );

	out = kernelBetaincinv( 2.0, -1.0, 0.5, 0.5 );
	t.strictEqual( isNaNArray( out ), true, 'returns expected value' );

	out = kernelBetaincinv( NINF, 3.0, 0.5, 0.5 );
	t.strictEqual( isNaNArray( out ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `[ NaN, NaN ]` if provided `p` outside the interval `[0,1]`', opts, function test( t ) {
	var out;

	out = kernelBetaincinv( 2.0, 3.0, 1.5, -0.5 );
	t.strictEqual( isNaNArray( out ), true, 'returns expected value' );

	out = kernelBetaincinv( 2.0, 3.0, -0.5, 1.5 );
	t.strictEqual( isNaNArray( out ), true, 'returns expected value' );

	out = kernelBetaincinv( 2.0, 3.0, PINF, NINF );
	t.strictEqual( isNaNArray( out ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `[ 0.0, 1.0 ]` if provided `p = 0`', opts, function test( t ) {
	var out;

	out = kernelBetaincinv( 2.0, 3.0, 0.0, 1.0 );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 1.0, 'returns expected value' );

	out = kernelBetaincinv( 0.3, 0.7, 0.0, 1.0 );
	t.strictEqual( out[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `[ 1.0, 0.0 ]` if provided `q = 0`', opts, function test( t ) {
	var out;

	out = kernelBetaincinv( 2.0, 3.0, 1.0, 0.0 );
	t.strictEqual( out[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.0, 'returns expected value' );

	out = kernelBetaincinv( 0.3, 0.7, 1.0, 0.0 );
	t.strictEqual( out[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `[ p, 1 - p ]` if provided `a = 1` and `b = 1`', opts, function test( t ) {
	var out;

	out = kernelBetaincinv( 1.0, 1.0, 0.3, 0.7 );
	t.strictEqual( out[ 0 ], 0.3, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.7, 'returns expected value' );

	out = kernelBetaincinv( 1.0, 1.0, 0.925, 0.075 );
	t.strictEqual( out[ 0 ], 0.925, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.07499999999999996, 'returns expected value' );

	t.end();
});

tape( 'the function uses a closed-form expression if provided `a = 0.5` and `b = 0.5`', opts, function test( t ) {
	var out;

	out = kernelBetaincinv( 0.5, 0.5, 0.25, 0.75 );
	t.strictEqual( out[ 0 ], 0.14644660940672624, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.8535533905932737, 'returns expected value' );

	out = kernelBetaincinv( 0.5, 0.5, 0.5, 0.5 );
	t.strictEqual( out[ 0 ], 0.4999999999999999, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.4999999999999999, 'returns expected value' );

	out = kernelBetaincinv( 0.5, 0.5, 0.75, 0.25 );
	t.strictEqual( out[ 0 ], 0.8535533905932737, 'returns expected value' );
	t.strictEqual( out[ 1 ], 0.14644660940672624, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function (medium `a` and `b`)', opts, function test( t ) {
	testFixtures( t, medium, 100, 100 );
	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function (small `a` and `b`)', opts, function test( t ) {
	testFixtures( t, small, 700, 700 );
	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function (mixed small and large parameters)', opts, function test( t ) {
	testFixtures( t, mixed, 200, 200 );
	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function (large nearly equal `a` and `b`)', opts, function test( t ) {
	testFixtures( t, largeSymmetric, 2000, 2000 );
	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function (large asymmetric `a` and `b`)', opts, function test( t ) {
	testFixtures( t, largeAsymmetric, 50, 50 );
	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function (very large `a` and `b`)', opts, function test( t ) {
	// NOTE: for very large parameters, the reference values themselves are only accurate to a relative error on the order of `1e-11`; the wide tolerances reflect reference-value accuracy, not implementation error.
	testFixtures( t, huge, 75000, 150000 );
	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function (Student\'s t case, `b = 0.5`)', opts, function test( t ) {
	testFixtures( t, studentsT, 50, 50 );
	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function (`a = 1` or `b = 1`)', opts, function test( t ) {
	testFixtures( t, linear, 100, 100 );
	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function (very small `p`)', opts, function test( t ) {
	testFixtures( t, tinyP, 200, 50 );
	t.end();
});

tape( 'the function evaluates the inverse of the lower regularized incomplete beta function (`p` near unity)', opts, function test( t ) {
	testFixtures( t, pNearOne, 100, 300 );
	t.end();
});
