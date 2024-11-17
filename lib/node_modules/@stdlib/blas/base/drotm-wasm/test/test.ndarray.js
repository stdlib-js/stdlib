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
var Float64Array = require( '@stdlib/array/float64' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var drotm = require( './../lib' );


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
	t.strictEqual( typeof drotm, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 8', function test( t ) {
	t.strictEqual( drotm.ndarray.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method applies a modified Givens plane rotation (sx=1, sy=1)', function test( t ) {
	var param;
	var xbuf;
	var ybuf;
	var out;
	var ox;
	var oy;
	var xe;
	var ye;
	var N;
	var x;
	var y;
	var i;

	N = [ 0, 1, 2, 4 ];

	xbuf = [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ];
	ybuf = [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ];

	param = [ 0.0, 0.0, 2.0, -3.0, 0.0 ];

	ox = [ 0, 0, 0, 0 ];
	oy = [ 0, 0, 0, 0 ];

	xe = [
		new Float64Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ -0.9, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ -0.9, 2.8, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ -0.9, 2.8, -1.4, -1.3, 0.9, -0.3, -0.4 ] )
	];
	ye = [
		new Float64Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ 1.7, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ 1.7, -0.7, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ 1.7, -0.7, -0.7, 2.3, -0.6, 0.2, 0.8 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float64Array( xbuf );
		y = new Float64Array( ybuf );
		out = drotm.ndarray( N[ i ], x, 1, ox[ i ], y, 1, oy[ i ], param );
		isApprox( t, x, xe[ i ], 5.0 );
		isApprox( t, y, ye[ i ], 5.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the `ndarray` method applies a modified Givens plane rotation (sx=2, sy=-2)', function test( t ) {
	var param;
	var xbuf;
	var ybuf;
	var out;
	var ox;
	var oy;
	var xe;
	var ye;
	var N;
	var x;
	var y;
	var i;

	N = [ 0, 1, 2, 4 ];

	xbuf = [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ];
	ybuf = [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ];

	param = [ 1.0, 5.0, 2.0, 0.0, -4.0 ];

	ox = [ 0, 0, 0, 0 ];
	oy = [ 0, 0, 2, 6 ];

	xe = [
		new Float64Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ 3.5, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ 3.3, 0.1, -2.0, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ 3.8, 0.1, -3.1, 0.8, 4.8, -0.3, -1.5 ] )
	];
	ye = [
		new Float64Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ -2.6, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ -1.5, -0.9, -1.8, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ -1.6, -0.9, -2.1, 0.7, 2.9, 0.2, -3.8 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float64Array( xbuf );
		y = new Float64Array( ybuf );
		out = drotm.ndarray( N[ i ], x, 2, ox[ i ], y, -2, oy[ i ], param );
		isApprox( t, x, xe[ i ], 10.0 );
		isApprox( t, y, ye[ i ], 10.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the `ndarray` method applies a modified Givens plane rotation (sx=-2, sy=1)', function test( t ) {
	var param;
	var xbuf;
	var ybuf;
	var out;
	var ox;
	var oy;
	var xe;
	var ye;
	var N;
	var x;
	var y;
	var i;

	N = [ 0, 1, 2, 4 ];

	xbuf = [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ];
	ybuf = [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ];

	param = [ 0.0, 0.0, 2.0, -3.0, 0.0 ];

	ox = [ 0, 0, 2, 6 ];
	oy = [ 0, 0, 0, 0 ];

	xe = [
		new Float64Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ -0.9, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ 3.3, 0.1, -2.0, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ -1.5, 0.1, -1.4, 0.8, 3.6, -0.3, -1.9 ] )
	];
	ye = [
		new Float64Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ 1.7, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ -0.5, 0.3, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ -0.3, 0.9, -0.7, 1.9, -0.6, 0.2, 0.8 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float64Array( xbuf );
		y = new Float64Array( ybuf );
		out = drotm.ndarray( N[ i ], x, -2, ox[ i ], y, 1, oy[ i ], param );
		isApprox( t, x, xe[ i ], 10.0 );
		isApprox( t, y, ye[ i ], 10.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the `ndarray` method applies a plane rotation (sx=-1, sy=-2)', function test( t ) {
	var param;
	var xbuf;
	var ybuf;
	var out;
	var ox;
	var oy;
	var xe;
	var ye;
	var N;
	var x;
	var y;
	var i;

	N = [ 0, 1, 2, 4 ];

	xbuf = [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ];
	ybuf = [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ];

	param = [ 0.0, 0.0, 2.0, -3.0, 0.0 ];

	ox = [ 0, 0, 1, 3 ];
	oy = [ 0, 0, 2, 6 ];

	xe = [
		new Float64Array( [ 0.6, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ -0.9, 0.1, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ -0.9, -0.8, -0.5, 0.8, 0.9, -0.3, -0.4 ] ),
		new Float64Array( [ -0.9, -0.8, 1.3, -1.6, 0.9, -0.3, -0.4 ] )
	];
	ye = [
		new Float64Array( [ 0.5, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ 1.7, -0.9, 0.3, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ 1.7, -0.9, 0.5, 0.7, -0.6, 0.2, 0.8 ] ),
		new Float64Array( [ 1.7, -0.9, 0.5, 0.7, -1.6, 0.2, 2.4 ] )
	];

	for ( i = 0; i < N.length; i++ ) {
		x = new Float64Array( xbuf );
		y = new Float64Array( ybuf );
		out = drotm.ndarray( N[ i ], x, -1, ox[ i ], y, -2, oy[ i ], param );
		isApprox( t, x, xe[ i ], 4.0 );
		isApprox( t, y, ye[ i ], 4.0 );
		t.strictEqual( out, y, 'returns expected value' );
	}
	t.end();
});

tape( 'the `ndarray` method applies a plane rotation', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	]);
	param = new Float64Array( [ -1.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 3, x, 2, 0, y, 2, 0, param );

	xe = new Float64Array( [
		-18.0, // 0
		2.0,
		-24.0, // 1
		4.0,
		-30.0  // 2
	] );
	ye = new Float64Array( [
		2.0, // 0
		7.0,
		6.0, // 1
		9.0,
		10.0 // 2
	] );

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0,
		4.0, // 1
		5.0
	]);
	y = new Float64Array([
		6.0, // 0
		7.0,
		8.0,
		9.0, // 1
		10.0
	]);
	param = new Float64Array( [ 1.0, 0.0, 2.0, 3.0, 0.0 ] );

	drotm.ndarray( 2, x, 3, 0, y, 3, 0, param );

	xe = new Float64Array( [
		6.0, // 0
		2.0,
		3.0,
		9.0, // 1
		5.0
	] );
	ye = new Float64Array( [
		-1.0, // 0
		7.0,
		8.0,
		-4.0, // 1
		10.0
	] );

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports an `x` stride', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0
	]);
	y = new Float64Array([
		6.0, // 0
		7.0, // 1
		8.0,
		9.0,
		10.0
	]);

	param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 2, x, 2, 0, y, 1, 0, param );

	xe = new Float64Array( [
		-17.0, // 0
		2.0,
		-18.0, // 1
		4.0,
		5.0
	] );
	ye = new Float64Array( [
		8.0,  // 0
		13.0, // 1
		8.0,
		9.0,
		10.0
	] );

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0,
		4.0, // 1
		5.0
	]);
	y = new Float64Array([
		6.0, // 0
		7.0, // 1
		8.0,
		9.0,
		10.0
	]);
	param = new Float64Array( [ -1.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 2, x, 3, 0, y, 1, 0, param );

	xe = new Float64Array( [
		-18.0, // 0
		2.0,
		3.0,
		-21.0, // 1
		5.0
	] );
	ye = new Float64Array( [
		2.0, // 0
		8.0, // 1
		8.0,
		9.0,
		10.0
	] );

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports an `x` offset', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float64Array([
		1.0,
		2.0, // 0
		3.0, // 1
		4.0,
		5.0
	]);
	y = new Float64Array([
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0
	]);

	param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 2, x, 1, 1, y, 2, 0, param );

	xe = new Float64Array( [ 1.0, -16.0, -21.0, 4.0, 5.0 ] );
	ye = new Float64Array( [ 10.0, 7.0, 14.0, 9.0, 10.0 ] );

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	x = new Float64Array([
		1.0, // 1
		2.0,
		3.0, // 0
		4.0,
		5.0
	]);
	y = new Float64Array([
		6.0, // 0
		7.0, // 1
		8.0,
		9.0,
		10.0
	]);
	param = new Float64Array( [ -1.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 2, x, -2, 2, y, 1, 0, param );

	xe = new Float64Array( [
		-21.0, // 1
		2.0,
		-18.0, // 0
		4.0,
		5.0
	] );
	ye = new Float64Array( [
		6.0,  // 0
		2.0, // 1
		8.0,
		9.0,
		10.0
	] );

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	]);
	param = new Float64Array( [ 1.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 3, x, -2, 4, y, 1, 0, param );

	xe = new Float64Array( [
		8.0, // 2
		2.0,
		7.0, // 1
		4.0,
		6.0  // 0
	] );
	ye = new Float64Array( [
		-5.0, // 0
		-3.0, // 1
		-1.0, // 2
		9.0,
		10.0
	] );

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	t.end();
});

tape( 'the `ndarray` method supports a `y` stride', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	]);
	param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 3, x, 1, 0, y, 2, 0, param );

	xe = new Float64Array( [
		-17.0, // 0
		-22.0, // 1
		-27.0, // 2
		4.0,
		5.0
	] );
	ye = new Float64Array( [
		8.0,  // 0
		7.0,
		12.0, // 1
		9.0,
		16.0  // 2
	] );

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0,
		4.0,
		5.0
	]);
	y = new Float64Array([
		6.0, // 0
		7.0,
		8.0,
		9.0, // 1
		10.0
	]);
	param = new Float64Array( [ -1.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 2, x, 1, 0, y, 3, 0, param );

	xe = new Float64Array( [
		-18.0, // 0
		-27.0, // 1
		3.0,
		4.0,
		5.0
	] );
	ye = new Float64Array( [
		2.0, // 0
		7.0,
		8.0,
		4.0, // 1
		10.0
	] );

	isApprox( t, x, xe, 1.0 );
	isApprox( t, y, ye, 1.0 );

	t.end();
});

tape( 'the `ndarray` method supports a `y` offset', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0,
		4.0,
		5.0
	]);
	y = new Float64Array([
		6.0,
		7.0, // 0
		8.0,
		9.0, // 1
		10.0
	]);

	param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 2, x, 1, 0, y, 2, 1, param );

	xe = new Float64Array( [ -20.0, -25.0, 3.0, 4.0, 5.0 ] );
	ye = new Float64Array( [ 6.0, 9.0, 8.0, 13.0, 10.0 ] );

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0,
		4.0,
		5.0
	]);
	y = new Float64Array([
		6.0, // 1
		7.0,
		8.0, // 0
		9.0,
		10.0
	]);
	param = new Float64Array( [ 1.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 2, x, 1, 0, y, -2, 2, param );

	xe = new Float64Array( [
		8.0, // 0
		6.0, // 1
		3.0,
		4.0,
		5.0
	] );
	ye = new Float64Array( [
		-2.0, // 1
		7.0,
		-1.0, // 0
		9.0,
		10.0
	] );

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		6.0, // 2
		7.0,
		8.0, // 1
		9.0,
		10.0 // 0
	]);
	param = new Float64Array( [ -1.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 3, x, 1, 0, y, -2, 4, param );

	xe = new Float64Array( [
		-30.0, // 0
		-24.0, // 1
		-18.0, // 2
		4.0,
		5.0
	] );
	ye = new Float64Array( [
		6.0, // 2
		7.0,
		4.0, // 1
		9.0,
		2.0  // 0
	] );

	isApprox( t, x, xe, 2.0 );
	isApprox( t, y, ye, 2.0 );

	t.end();
});

tape( 'the `ndarray` method returns a reference to the second input array', function test( t ) {
	var param;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	out = drotm.ndarray( x.length, x, 1, 0, y, 1, 0, param );

	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, a module instance has an `ndarray` method which leaves both the input arrays unchanged', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	xe = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	ye = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	drotm.ndarray( -1, x, 1, 0, y, 1, 0, param );
	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	drotm.ndarray( 0, x, 1, 0, y, 1, 0, param );
	t.deepEqual( x, xe, 'returns expected value' );
	t.deepEqual( y, ye, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports complex access patterns', function test( t ) {
	var param;
	var xe;
	var ye;
	var x;
	var y;

	x = new Float64Array([
		0.6, // 1
		0.1, // 0
		-0.5,
		0.8,
		0.9,
		-0.3,
		-0.4
	]);
	y = new Float64Array([
		0.5,  // 1
		-0.9,
		0.3,  // 0
		0.7,
		-0.6,
		0.2,
		0.8
	]);
	param = new Float64Array( [ 0.0, 0.0, 2.0, -3.0, 0.0 ] );

	drotm.ndarray( 2, x, -1, 1, y, -2, 2, param );

	xe = new Float64Array( [ -0.9, -0.8, -0.5, 0.8, 0.9, -0.3, -0.4 ] );
	ye = new Float64Array( [ 1.7, -0.9, 0.5, 0.7, -0.6, 0.2, 0.8 ] );

	isApprox( t, x, xe, 5.0 );
	isApprox( t, y, ye, 5.0 );

	t.end();
});
