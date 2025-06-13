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
var Complex128Array = require( '@stdlib/array/complex128' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var zdrot = require( './../lib/zdrot.js' );


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
	t.strictEqual( typeof zdrot, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( zdrot.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function applies a plane rotation', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var xe;
	var ye;
	var x;
	var y;

	x = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0, // 2
		4.0, // 2
		5.0, // 3
		6.0, // 3
		7.0, // 4
		8.0  // 4
	]);
	y = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0, // 3
		0.0, // 3
		0.0, // 4
		0.0  // 4
	]);

	viewX = new Float64Array( x.buffer );
	viewY = new Float64Array( y.buffer );

	xe = new Float64Array([
		0.8, // 1
		1.6, // 1
		2.4, // 2
		3.2, // 2
		4.0, // 3
		4.8, // 3
		5.6, // 4
		6.4  // 4
	]);
	ye = new Float64Array([
		-0.6, // 1
		-1.2, // 1
		-1.8, // 2
		-2.4, // 2
		-3.0, // 3
		-3.6, // 3
		-4.2, // 4
		-4.8  // 4
	]);

	out = zdrot( x.length, x, 1, y, 1, 0.8, 0.6 );
	isApprox( t, viewX, xe, 2.0 );
	isApprox( t, viewY, ye, 2.0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var xe;
	var ye;
	var x;
	var y;

	x = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	y = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);

	viewX = new Float64Array( x.buffer );
	viewY = new Float64Array( y.buffer );

	xe = new Float64Array([
		0.8, // 1
		1.6, // 1
		3.0,
		4.0,
		4.0, // 2
		4.8, // 2
		7.0,
		8.0
	]);
	ye = new Float64Array([
		-0.6, // 1
		-1.2, // 1
		-3.0, // 2
		-3.6, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);

	out = zdrot( 2, x, 2, y, 1, 0.8, 0.6 );
	isApprox( t, viewX, xe, 2.0 );
	isApprox( t, viewY, ye, 2.0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var xe;
	var ye;
	var x;
	var y;

	x = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	y = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0, // 2
		0.0, // 2
		0.0,
		0.0
	]);

	viewX = new Float64Array( x.buffer );
	viewY = new Float64Array( y.buffer );

	xe = new Float64Array([
		0.8, // 1
		1.6, // 1
		2.4, // 2
		3.2, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	ye = new Float64Array([
		-0.6, // 1
		-1.2, // 1
		0.0,
		0.0,
		-1.8, // 2
		-2.4, // 2
		0.0,
		0.0
	]);

	out = zdrot( 2, x, 1, y, 2, 0.8, 0.6 );
	isApprox( t, viewX, xe, 2.0 );
	isApprox( t, viewY, ye, 2.0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the second input array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = zdrot( x.length, x, 1, y, 1, 0.8, 0.6 );

	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves both arrays unchanged', function test( t ) {
	var viewX;
	var viewY;
	var xe;
	var ye;
	var x;
	var y;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	y = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	viewX = new Float64Array( x.buffer );
	viewY = new Float64Array( y.buffer );

	xe = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	ye = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zdrot( -1, x, 1, y, 1, 0.8, 0.6 );
	t.deepEqual( viewX, xe, 'returns expected value' );
	t.deepEqual( viewY, ye, 'returns expected value' );

	zdrot( 0, x, 1, y, 1, 0.8, 0.6 );
	t.deepEqual( viewX, xe, 'returns expected value' );
	t.deepEqual( viewY, ye, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var xe;
	var ye;
	var x;
	var y;

	x = new Complex128Array([
		1.0, // 2
		2.0, // 2
		3.0, // 1
		4.0, // 1
		5.0,
		6.0,
		7.0,
		8.0
	]);
	y = new Complex128Array([
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0,
		0.0
	]);

	viewX = new Float64Array( x.buffer );
	viewY = new Float64Array( y.buffer );

	xe = new Float64Array([
		0.8, // 2
		1.6, // 2
		2.4, // 1
		3.2, // 1
		5.0,
		6.0,
		7.0,
		8.0
	]);
	ye = new Float64Array([
		-0.6, // 2
		-1.2, // 2
		0.0,
		0.0,
		-1.8, // 1
		-2.4, // 1
		0.0,
		0.0
	]);

	out = zdrot( 2, x, -1, y, -2, 0.8, 0.6 );
	isApprox( t, viewX, xe, 2.0 );
	isApprox( t, viewY, ye, 2.0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var xe;
	var ye;
	var x;
	var y;

	x = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	y = new Complex128Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);

	viewX = new Float64Array( x.buffer );
	viewY = new Float64Array( y.buffer );

	xe = new Float64Array([
		0.8, // 1
		1.6, // 1
		3.0,
		4.0,
		4.0, // 2
		4.8, // 2
		7.0,
		8.0
	]);
	ye = new Float64Array([
		-3.0, // 2
		-3.6, // 2
		-0.6, // 1
		-1.2, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);

	out = zdrot( 2, x, 2, y, -1, 0.8, 0.6 );
	isApprox( t, viewX, xe, 2.0 );
	isApprox( t, viewY, ye, 2.0 );
	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var x0;
	var y0;
	var x1;
	var y1;
	var xe;
	var ye;

	// Initial arrays...
	x0 = new Complex128Array([
		1.0,
		2.0,
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0, // 1
		8.0  // 1
	]);
	y0 = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at the 2nd element
	y1 = new Complex128Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // begin at the 3rd element

	viewX = new Float64Array( x0.buffer );
	viewY = new Float64Array( y0.buffer );

	xe = new Float64Array([
		1.0,
		2.0,
		2.4, // 2
		3.2, // 2
		5.0,
		6.0,
		5.6, // 1
		6.4  // 1
	]);
	ye = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		-4.2, // 1
		-4.8, // 1
		-1.8, // 2
		-2.4  // 2
	]);

	out = zdrot( 2, x1, -2, y1, 1, 0.8, 0.6 );
	isApprox( t, viewX, xe, 2.0 );
	isApprox( t, viewY, ye, 2.0 );
	t.strictEqual( out, y1, 'returns expected value' );
	t.end();
});
