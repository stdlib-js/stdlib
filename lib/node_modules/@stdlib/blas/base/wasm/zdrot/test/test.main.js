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
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var zdrot = require( './../lib' );


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
	t.strictEqual( typeof zdrot.main, 'function', 'main export is a function' );
	t.end();
});

tape( 'the `main` method has an arity of 7', function test( t ) {
	t.strictEqual( zdrot.main.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the `main` method applies a plane rotation', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var zxe;
	var zye;
	var zx;
	var zy;

	zx = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0, // 2
		4.0, // 2
		5.0, // 3
		6.0, // 3
		7.0, // 4
		8.0  // 4
	]);
	zy = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0, // 3
		0.0, // 3
		0.0, // 4
		0.0  // 4
	]);

	viewX = new Float64Array( zx.buffer );
	viewY = new Float64Array( zy.buffer );

	zxe = new Float64Array([
		0.8, // 1
		1.6, // 1
		2.4, // 2
		3.2, // 2
		4.0, // 3
		4.8, // 3
		5.6, // 4
		6.4  // 4
	]);
	zye = new Float64Array([
		-0.6, // 1
		-1.2, // 1
		-1.8, // 2
		-2.4, // 2
		-3.0, // 3
		-3.6, // 3
		-4.2, // 4
		-4.8  // 4
	]);

	out = zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6 );
	isApprox( t, viewX, zxe, 2.0 );
	isApprox( t, viewY, zye, 2.0 );
	t.strictEqual( out, zy, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports an `x` stride', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var zxe;
	var zye;
	var zx;
	var zy;

	zx = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	zy = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);

	viewX = new Float64Array( zx.buffer );
	viewY = new Float64Array( zy.buffer );

	zxe = new Float64Array([
		0.8, // 1
		1.6, // 1
		3.0,
		4.0,
		4.0, // 2
		4.8, // 2
		7.0,
		8.0
	]);
	zye = new Float64Array([
		-0.6, // 1
		-1.2, // 1
		-3.0, // 2
		-3.6, // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);

	out = zdrot.main( 2, zx, 2, zy, 1, 0.8, 0.6 );
	isApprox( t, viewX, zxe, 2.0 );
	isApprox( t, viewY, zye, 2.0 );
	t.strictEqual( out, zy, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports a `y` stride', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var zxe;
	var zye;
	var zx;
	var zy;

	zx = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	zy = new Complex128Array([
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0, // 2
		0.0, // 2
		0.0,
		0.0
	]);

	viewX = new Float64Array( zx.buffer );
	viewY = new Float64Array( zy.buffer );

	zxe = new Float64Array([
		0.8, // 1
		1.6, // 1
		2.4, // 2
		3.2, // 2
		5.0,
		6.0,
		7.0,
		8.0
	]);
	zye = new Float64Array([
		-0.6, // 1
		-1.2, // 1
		0.0,
		0.0,
		-1.8, // 2
		-2.4, // 2
		0.0,
		0.0
	]);

	out = zdrot.main( 2, zx, 1, zy, 2, 0.8, 0.6 );
	isApprox( t, viewX, zxe, 2.0 );
	isApprox( t, viewY, zye, 2.0 );
	t.strictEqual( out, zy, 'returns expected value' );
	t.end();
});

tape( 'the `main` method returns a reference to the destination array', function test( t ) {
	var out;
	var zx;
	var zy;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6 );

	t.strictEqual( out, zy, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `main` method returns both vectors unchanged', function test( t ) {
	var viewX;
	var viewY;
	var zxe;
	var zye;
	var zx;
	var zy;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	viewX = new Float64Array( zx.buffer );
	viewY = new Float64Array( zy.buffer );

	zxe = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	zye = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zdrot.main( -1, zx, 1, zy, 1, 0.8, 0.6 );
	t.deepEqual( viewX, zxe, 'returns expected value' );
	t.deepEqual( viewY, zye, 'returns expected value' );

	zdrot.main( 0, zx, 1, zy, 1, 0.8, 0.6 );
	t.deepEqual( viewX, zxe, 'returns expected value' );
	t.deepEqual( viewY, zye, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports negative strides', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var zxe;
	var zye;
	var zx;
	var zy;

	zx = new Complex128Array([
		1.0, // 2
		2.0, // 2
		3.0, // 1
		4.0, // 1
		5.0,
		6.0,
		7.0,
		8.0
	]);
	zy = new Complex128Array([
		0.0, // 2
		0.0, // 2
		0.0,
		0.0,
		0.0, // 1
		0.0, // 1
		0.0,
		0.0
	]);

	viewX = new Float64Array( zx.buffer );
	viewY = new Float64Array( zy.buffer );

	zxe = new Float64Array([
		0.8, // 2
		1.6, // 2
		2.4, // 1
		3.2, // 1
		5.0,
		6.0,
		7.0,
		8.0
	]);
	zye = new Float64Array([
		-0.6, // 2
		-1.2, // 2
		0.0,
		0.0,
		-1.8, // 1
		-2.4, // 1
		0.0,
		0.0
	]);

	out = zdrot.main( 2, zx, -1, zy, -2, 0.8, 0.6 );
	isApprox( t, viewX, zxe, 2.0 );
	isApprox( t, viewY, zye, 2.0 );
	t.strictEqual( out, zy, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports complex access patterns', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var zxe;
	var zye;
	var zx;
	var zy;

	zx = new Complex128Array([
		1.0, // 1
		2.0, // 1
		3.0,
		4.0,
		5.0, // 2
		6.0, // 2
		7.0,
		8.0
	]);
	zy = new Complex128Array([
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);

	viewX = new Float64Array( zx.buffer );
	viewY = new Float64Array( zy.buffer );

	zxe = new Float64Array([
		0.8, // 1
		1.6, // 1
		3.0,
		4.0,
		4.0, // 2
		4.8, // 2
		7.0,
		8.0
	]);
	zye = new Float64Array([
		-3.0, // 2
		-3.6, // 2
		-0.6, // 1
		-1.2, // 1
		0.0,
		0.0,
		0.0,
		0.0
	]);

	out = zdrot.main( 2, zx, 2, zy, -1, 0.8, 0.6 );
	isApprox( t, viewX, zxe, 2.0 );
	isApprox( t, viewY, zye, 2.0 );
	t.strictEqual( out, zy, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports view offsets', function test( t ) {
	var viewX;
	var viewY;
	var out;
	var zx0;
	var zy0;
	var zx1;
	var zy1;
	var zxe;
	var zye;

	// Initial arrays...
	zx0 = new Complex128Array([
		1.0,
		2.0,
		3.0, // 2
		4.0, // 2
		5.0,
		6.0,
		7.0, // 1
		8.0  // 1
	]);
	zy0 = new Complex128Array([
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
	zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // begin at the 2nd element
	zy1 = new Complex128Array( zy0.buffer, zy0.BYTES_PER_ELEMENT*2 ); // begin at the 3rd element

	viewX = new Float64Array( zx0.buffer );
	viewY = new Float64Array( zy0.buffer );

	zxe = new Float64Array([
		1.0,
		2.0,
		2.4, // 2
		3.2, // 2
		5.0,
		6.0,
		5.6, // 1
		6.4  // 1
	]);
	zye = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		-4.2, // 1
		-4.8, // 1
		-1.8, // 2
		-2.4  // 2
	]);

	out = zdrot.main( 2, zx1, -2, zy1, 1, 0.8, 0.6 );
	isApprox( t, viewX, zxe, 2.0 );
	isApprox( t, viewY, zye, 2.0 );
	t.strictEqual( out, zy1, 'returns expected value' );
	t.end();
});
