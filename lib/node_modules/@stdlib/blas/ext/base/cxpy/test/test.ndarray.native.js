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

/* eslint-disable stdlib/empty-line-before-comment */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var caddf = require( '@stdlib/complex/float32/base/add' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cxpy = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( cxpy instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', opts, function test( t ) {
	t.strictEqual( cxpy.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function adds elements of `x` to the corresponding elements of `y` and assigns the results to `y`', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		// (3.0+4.0i) + (4.0+5.0i)
		7.0,
		9.0,
		// (5.0+6.0i) + (6.0+7.0i)
		11.0,
		13.0
	]);

	cxpy( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Complex64Array( [ 5.0, 6.0, 7.0, 8.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (5.0+6.0i)
		6.0,
		8.0,
		// (3.0+4.0i) + (7.0+8.0i)
		10.0,
		12.0
	]);

	cxpy( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	out = cxpy( x.length, x, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Complex64Array( [ 4.0, 5.0, 6.0, 7.0 ] );
	expected = new Complex64Array( [ 4.0, 5.0, 6.0, 7.0 ] );

	cxpy( 0, x, 1, 0, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	cxpy( -4, x, 1, 0, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex64Array([
		1.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		5.0,  // 1
		6.0,  // 1
		0.0,
		0.0,
		9.0,  // 2
		10.0  // 2
	]);
	y = new Complex64Array( [ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		// (5.0+6.0i) + (4.0+5.0i)
		9.0,
		11.0,
		// (9.0+10.0i) + (6.0+7.0i)
		15.0,
		17.0
	]);

	cxpy( 3, x, 2, 0, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Complex64Array([
		2.0,  // 0
		3.0,  // 0
		4.0,
		5.0,
		6.0,  // 1
		7.0,  // 1
		8.0,
		9.0,
		10.0, // 2
		11.0  // 2
	]);
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		4.0,
		5.0,
		// (3.0+4.0i) + (6.0+7.0i)
		9.0,
		11.0,
		8.0,
		9.0,
		// (5.0+6.0i) + (10.0+11.0i)
		15.0,
		17.0
	]);

	cxpy( 3, x, 1, 0, y, 2, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Complex64Array([
		1.0,  // 2
		2.0,  // 2
		0.0,
		0.0,
		3.0,  // 1
		4.0,  // 1
		0.0,
		0.0,
		5.0,  // 0
		6.0   // 0
	]);
	y = new Complex64Array([
		4.0,  // 2
		5.0,  // 2
		3.0,  // 1
		4.0,  // 1
		2.0,  // 0
		3.0   // 0
	]);
	expected = new Complex64Array([
		// (1.0+2.0i) + (4.0+5.0i)
		5.0,
		7.0,
		// (3.0+4.0i) + (3.0+4.0i)
		6.0,
		8.0,
		// (5.0+6.0i) + (2.0+3.0i)
		7.0,
		9.0
	]);

	cxpy( 3, x, -2, 4, y, -1, 2 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;

	x0 = new Complex64Array([
		10.0,
		0.0,
		1.0,  // 0
		2.0,  // 0
		3.0,  // 1
		4.0,  // 1
		5.0,  // 2
		6.0   // 2
	]);
	y0 = new Complex64Array([
		10.0,
		0.0,
		10.0,
		0.0,
		2.0,  // 0
		3.0,  // 0
		4.0,  // 1
		5.0,  // 1
		6.0,  // 2
		7.0   // 2
	]);

	x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 );

	expected = new Complex64Array([
		10.0,
		0.0,
		10.0,
		0.0,
		// (1.0+2.0i) + (2.0+3.0i)
		3.0,
		5.0,
		// (3.0+4.0i) + (4.0+5.0i)
		7.0,
		9.0,
		// (5.0+6.0i) + (6.0+7.0i)
		11.0,
		13.0
	]);

	cxpy( 3, x1, 1, 0, y1, 1, 0 );
	t.strictEqual( isSameComplex64Array( y0, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently adds elements of `x` to the corresponding elements of `y` and assigns the results to `y`', opts, function test( t ) {
	var expected;
	var xv;
	var yv;
	var x;
	var y;
	var i;

	x = new Complex64Array( 100 );
	y = new Complex64Array( 100 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		xv = new Complex64( i, 0.0 );
		yv = new Complex64( x.length - i, 0.0 );
		x.set( xv, i );
		y.set( yv, i );
		expected.set( caddf( xv, yv ), i );
	}
	cxpy( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	x = new Complex64Array( 240 );
	y = new Complex64Array( 240 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		xv = new Complex64( i, 0.0 );
		yv = new Complex64( x.length - i, 0.0 );
		x.set( xv, i );
		y.set( yv, i );
		expected.set( caddf( xv, yv ), i );
	}
	cxpy( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isSameComplex64Array( y, expected ), true, 'returns expected value' );

	t.end();
});
