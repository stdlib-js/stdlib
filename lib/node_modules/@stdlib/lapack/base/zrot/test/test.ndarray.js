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
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var zrot = require( './../lib/ndarray.js' );


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
			if ( tol === 0.0 ) {
				tol = EPS; // absolute tolerance when `expected[i]` is `0`
			}
			t.ok( delta <= tol, 'within tolerance. actual: '+actual[ i ]+'. expected: '+expected[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zrot, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( zrot.length, 9, 'returns expected value' );
	t.end();
});

tape( 'the function applies a plane rotation', function test( t ) {
	var viewX;
	var viewY;
	var cxe;
	var cye;
	var out;
	var cx;
	var cy;
	var s;

	s = new Complex128( 0.6, 0.0 );

	cx = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0, // 2
		4.0, // 2
		5.0, // 3
		6.0, // 3
		7.0, // 4
		8.0  // 4
	]);
	cy = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0, // 3
		0.0, // 3
		0.0, // 4
		0.0  // 4
	]);

	viewX = new Float64Array( cx.buffer );
	viewY = new Float64Array( cy.buffer );

	cxe = new Float64Array([
		0.8, // 1
		1.6, // 1
		2.4, // 2
		3.2, // 2
		4.0, // 3
		4.8, // 3
		5.6, // 4
		6.4  // 4
	]);
	cye = new Float64Array([
		-0.6, // 1
		-1.2, // 1
		-1.8, // 2
		-2.4, // 2
		-3.0, // 3
		-3.6, // 3
		-4.2, // 4
		-4.8  // 4
	]);

	out = zrot( cx.length, cx, 1, 0, cy, 1, 0, 0.8, s );
	isApprox( t, viewX, cxe, 2.0 );
	isApprox( t, viewY, cye, 2.0 );
	t.strictEqual( out, cy, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var viewX;
	var viewY;
	var cxe;
	var cye;
	var out;
	var cx;
	var cy;
	var s;

	s = new Complex128( 0.0, 0.6 );
	cx = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	cy = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);

	viewX = new Float64Array( cx.buffer );
	viewY = new Float64Array( cy.buffer );

	cxe = new Float64Array([
		0.8, // 1
		1.6, // 1
		3.0,
		4.0,
		4.0, // 2
		4.8, // 2
		7.0,
		8.0
	]);
	cye = new Float64Array([
		-1.2, // 1
		0.6,  // 1
		-3.6, // 2
		3.0,  // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);

	out = zrot( 2, cx, 2, 0, cy, 1, 0, 0.8, s );
	isApprox( t, viewX, cxe, 2.0 );
	isApprox( t, viewY, cye, 2.0 );
	t.strictEqual( out, cy, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var viewX;
	var viewY;
	var cxe;
	var cye;
	var out;
	var cx;
	var cy;
	var s;

	s = new Complex128( 0.3, 0.4 );
	cx = new Complex128Array([
		1.0,
		2.0,
		3.0, // 1
		4.0, // 1
		5.0, // 2
		6.0, // 2
		7.0, // 3
		8.0  // 3
	]);
	cy = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0, // 3
		0.0, // 3
		0.0,
		0.0
	]);

	viewX = new Float64Array( cx.buffer );
	viewY = new Float64Array( cy.buffer );

	cxe = new Float64Array([
		1.0,
		2.0,
		2.4, // 1
		3.2, // 1
		4.0, // 2
		4.8, // 2
		5.6, // 3
		6.4  // 3
	]);
	cye = new Float64Array([
		-2.5, // 1
		0.0,  // 1
		-3.9, // 2
		0.2,  // 2
		-5.3, // 3
		0.4,  // 3
		0.0,
		0.0
	]);

	out = zrot( 3, cx, 1, 1, cy, 1, 0, 0.8, s );
	isApprox( t, viewX, cxe, 2.0 );
	isApprox( t, viewY, cye, 4.0 );
	t.strictEqual( out, cy, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var viewX;
	var viewY;
	var cxe;
	var cye;
	var out;
	var cx;
	var cy;
	var s;

	s = new Complex128( 0.3, 0.4 );
	cx = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	cy = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0, // 2
		0.0, // 2
		0.0,
		0.0
	]);

	viewX = new Float64Array( cx.buffer );
	viewY = new Float64Array( cy.buffer );

	cxe = new Float64Array([
		0.8, // 1
		1.6, // 1
		2.4, // 2
		3.2, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	cye = new Float64Array([
		-1.1, // 1
		-0.2, // 1
		0.0,
		0.0,
		-2.5, // 2
		0.0,  // 2
		0.0,
		0.0
	]);

	out = zrot( 2, cx, 1, 0, cy, 2, 0, 0.8, s );
	isApprox( t, viewX, cxe, 2.0 );
	isApprox( t, viewY, cye, 2.0 );
	t.strictEqual( out, cy, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var viewX;
	var viewY;
	var cxe;
	var cye;
	var out;
	var cx;
	var cy;
	var s;

	s = new Complex128( 0.3, 0.4 );
	cx = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	cy = new Complex128Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);

	viewX = new Float64Array( cx.buffer );
	viewY = new Float64Array( cy.buffer );

	cxe = new Float64Array([
		0.8, // 1
		1.6, // 1
		3.0,
		4.0,
		4.0, // 2
		4.8, // 2
		7.0,
		8.0
	]);
	cye = new Float64Array([
		-3.9, // 2
		0.2,  // 2
		-1.1, // 1
		-0.2, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);

	out = zrot( 2, cx, 2, 0, cy, -1, 1, 0.8, s );
	isApprox( t, viewX, cxe, 2.0 );
	isApprox( t, viewY, cye, 4.0 );
	t.strictEqual( out, cy, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the second array', function test( t ) {
	var out;
	var cx;
	var cy;
	var s;

	cx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	cy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	s = new Complex128( 0.3, 0.4 );

	out = zrot( cx.length, cx, 1, 0, cy, 1, 0, 0.8, s );

	t.strictEqual( out, cy, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns both vectors unchanged', function test( t ) {
	var viewX;
	var viewY;
	var cxe;
	var cye;
	var cx;
	var cy;
	var s;

	cx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	cy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	s = new Complex128( 0.3, 0.4 );

	viewX = new Float64Array( cx.buffer );
	viewY = new Float64Array( cy.buffer );

	cxe = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	cye = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zrot( -1, cx, 1, 0, cy, 1, 0, 0.8, s );
	t.deepEqual( viewX, cxe, 'returns expected value' );
	t.deepEqual( viewY, cye, 'returns expected value' );

	zrot( 0, cx, 1, 0, cy, 1, 0, 0.8, s );
	t.deepEqual( viewX, cxe, 'returns expected value' );
	t.deepEqual( viewY, cye, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var viewX;
	var viewY;
	var cxe;
	var cye;
	var out;
	var cx;
	var cy;
	var s;

	s = new Complex128( 0.3, 0.4 );
	cx = new Complex128Array([
		1.0, // 2
		2.0, // 2
		3.0, // 1
		4.0, // 1
		5.0,
		6.0,
		7.0,
		8.0
	]);
	cy = new Complex128Array([
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0,
		0.0
	]);

	viewX = new Float64Array( cx.buffer );
	viewY = new Float64Array( cy.buffer );

	cxe = new Float64Array([
		0.8, // 2
		1.6, // 2
		2.4, // 1
		3.2, // 1
		5.0,
		6.0,
		7.0,
		8.0
	]);
	cye = new Float64Array([
		-1.1, // 2
		-0.2, // 2
		0.0,
		0.0,
		-2.5, // 1
		0.0,  // 1
		0.0,
		0.0
	]);

	out = zrot( 2, cx, -1, 1, cy, -2, 2, 0.8, s );
	isApprox( t, viewX, cxe, 2.0 );
	isApprox( t, viewY, cye, 2.0 );
	t.strictEqual( out, cy, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var viewX;
	var viewY;
	var cxe;
	var cye;
	var out;
	var cx;
	var cy;
	var s;

	s = new Complex128( 0.3, 0.4 );
	cx = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	cy = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);

	viewX = new Float64Array( cx.buffer );
	viewY = new Float64Array( cy.buffer );

	cxe = new Float64Array([
		1.0,
		2.0,
		2.4, // 1
		3.2, // 1
		5.0,
		6.0,
		5.6, // 2
		6.4  // 2
	]);
	cye = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		-2.5, // 1
		0.0,  // 1
		-5.3, // 2
		0.4   // 2
	]);

	out = zrot( 2, cx, 2, 1, cy, 1, 2, 0.8, s );
	isApprox( t, viewX, cxe, 2.0 );
	isApprox( t, viewY, cye, 4.0 );
	t.strictEqual( out, cy, 'returns expected value' );
	t.end();
});
