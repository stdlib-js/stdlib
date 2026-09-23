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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var Float64Array = require( '@stdlib/array/float64' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var drrss = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( drrss instanceof Error )
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
	t.strictEqual( typeof drrss, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', opts, function test( t ) {
	t.strictEqual( drrss.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the square root of the residual sum of squares of two vectors', opts, function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	y = new Float64Array( [ 5.0, 12.0, -8.0, 15.0, 9.0, 0.0 ] );

	z = drrss( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( z, sqrt( 418.0 ), 'returns expected value' );

	x = new Float64Array( [ -4.0 ] );
	y = new Float64Array( [ 10.0 ] );

	z = drrss( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( z, 14.0, 'returns expected value' );

	x = new Float64Array( [ 1.0e150, 1.0e150, 1.0e150, 1.0e150 ] );
	y = new Float64Array( [ -1.0e150, 1.0e150, -1.0e150, -1.0e150 ] );

	z = drrss( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( z, 3.464101615137754e+150, 'returns expected value' );

	x = new Float64Array( [ 1.0e-155, 1.0e-155, 1.0e-155, 1.0e-155 ] );
	y = new Float64Array( [ -1.0e-155, -1.0e-155, -1.0e-155, -1.0e-155 ] );

	z = drrss( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( z, 4.0e-155, 'returns expected value' );

	x = new Float64Array( [ 1.0e150, 1.0e50, 1.0e150, 1.0e50 ] );
	y = new Float64Array( [ -1.0e150, -1.0e50, -1.0e150, -1.0e50 ] );

	z = drrss( x.length, x, 1, 0, y, 1, 0 );
	isApprox( t, z, 2.82842712474619e+150, 1.0 );

	x = new Float64Array( [ 1.0e-155, 1.0e50, 1.0e-155, 1.0e50 ] );
	y = new Float64Array( [ -1.0e-155, -1.0e50, -1.0e-155, -1.0e50 ] );

	z = drrss( x.length, x, 1, 0, y, 1, 0 );
	isApprox( t, z, 2.8284271247461905e+50, 1.0 );

	x = new Float64Array( [ 1.4e-154, 1.5e-154, 1.4e-154, 0.0 ] );
	y = new Float64Array( [ -1.4e-154, -1.5e-154, -1.4e-154, 0.0 ] );

	z = drrss( x.length, x, 1, 0, y, 1, 0 );
	isApprox( t, z, 4.967896939349689e-154, 1.0 );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0`', opts, function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	y = new Float64Array( [ 3.0, -2.0, 1.0, -15.0, 3.0 ] );

	z = drrss( 0, x, 1, 0, y, 1, 0 );
	t.strictEqual( z, 0.0, 'returns expected value' );

	z = drrss( -1, x, 1, 0, y, 1, 0 );
	t.strictEqual( z, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride parameters', opts, function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);
	y = new Float64Array([
		8.0,  // 0
		-2.0,
		3.0,  // 1
		-2.0,
		7.0,  // 2
		-2.0,
		0.0,  // 3
		-1.0
	]);

	z = drrss( 4, x, 2, 0, y, 2, 0 );

	// sqrt( 49+1+81+16 ) = sqrt( 147 )
	t.strictEqual( z, 12.12435565298214, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative stride parameters', opts, function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	y = new Float64Array([
		8.0,  // 3
		-2.0,
		3.0,  // 2
		-2.0,
		7.0,  // 1
		-2.0,
		0.0,  // 0
		-1.0
	]);

	z = drrss( 4, x, -2, x.length-2, y, -2, y.length-2 );

	// sqrt( 49+1+81+16 ) = sqrt( 147 )
	t.strictEqual( z, 12.12435565298214, 'returns expected value' );
	t.end();
});

tape( 'the function supports offset parameters', opts, function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array([
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
	y = new Float64Array([
		8.0,
		-2.0, // 0
		3.0,
		-2.0, // 1
		7.0,
		-2.0, // 2
		0.0,
		-1.0, // 3
		4.0
	]);

	z = drrss( 4, x, 2, 1, y, 2, 1 );

	// sqrt( 9+0+16+25 ) = sqrt( 50 )
	t.strictEqual( z, 7.0710678118654755, 'returns expected value' );
	t.end();
});
