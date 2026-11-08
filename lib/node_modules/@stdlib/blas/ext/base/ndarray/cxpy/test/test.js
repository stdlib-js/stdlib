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

var tape = require( 'tape' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var cxpy = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Complex64Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'complex64', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( cxpy.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function adds elements of `x` to `y` and assigns the results to `y`', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex64Array( [ 1.0, 2.0, 3.0, -1.0, 0.0, 1.0 ] );
	ybuf = new Complex64Array( [ 2.0, 1.0, -1.0, 3.0, 4.0, 0.0 ] );
	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );

	actual = cxpy( [ x, y ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+1.0i)
		3.0,
		3.0,
		// (3.0-1.0i) + (-1.0+3.0i)
		2.0,
		2.0,
		// (0.0+1.0i) + (4.0+0.0i)
		4.0,
		1.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = new Complex64Array( [ 1.0, 0.0, 2.0, 1.0 ] );
	ybuf = new Complex64Array( [ 3.0, -1.0, 4.0, 2.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	y = vector( ybuf, 2, 1, 0 );

	actual = cxpy( [ x, y ] );
	expected = new Complex64Array([
		// (1.0+0.0i) + (3.0-1.0i)
		4.0,
		-1.0,
		// (2.0+1.0i) + (4.0+2.0i)
		6.0,
		3.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex64Array([
		1.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		3.0,  // 1
		-1.0, // 1
		0.0,
		0.0,
		0.0,  // 2
		1.0   // 2
	]);
	ybuf = new Complex64Array([
		2.0,  // 0
		1.0,  // 0
		-1.0, // 1
		3.0,  // 1
		4.0,  // 2
		0.0   // 2
	]);
	x = vector( xbuf, 3, 2, 0 );
	y = vector( ybuf, 3, 1, 0 );

	actual = cxpy( [ x, y ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+1.0i)
		3.0,
		3.0,
		// (3.0-1.0i) + (-1.0+3.0i)
		2.0,
		2.0,
		// (0.0+1.0i) + (4.0+0.0i)
		4.0,
		1.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex64Array([
		1.0,  // 0
		2.0,  // 0
		3.0,  // 1
		-1.0, // 1
		0.0,  // 2
		1.0   // 2
	]);
	ybuf = new Complex64Array([
		2.0,  // 0
		1.0,  // 0
		0.0,
		0.0,
		-1.0, // 1
		3.0,  // 1
		0.0,
		0.0,
		4.0,  // 2
		0.0   // 2
	]);
	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 3, 2, 0 );

	actual = cxpy( [ x, y ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (2.0+1.0i)
		3.0,
		3.0,
		0.0,
		0.0,
		// (3.0-1.0i) + (-1.0+3.0i)
		2.0,
		2.0,
		0.0,
		0.0,
		// (0.0+1.0i) + (4.0+0.0i)
		4.0,
		1.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports ndarrays having negative strides', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex64Array([
		1.0,  // 2
		2.0,  // 2
		0.0,
		0.0,
		3.0,  // 1
		-1.0, // 1
		0.0,
		0.0,
		5.0,  // 0
		6.0   // 0
	]);
	ybuf = new Complex64Array([
		4.0,  // 2
		0.0,  // 2
		3.0,  // 1
		-1.0, // 1
		2.0,  // 0
		1.0   // 0
	]);
	x = vector( xbuf, 3, -2, 4 );
	y = vector( ybuf, 3, -1, 2 );

	actual = cxpy( [ x, y ] );
	expected = new Complex64Array([
		// (1.0+2.0i) + (4.0+0.0i)
		5.0,
		2.0,
		// (3.0-1.0i) + (3.0-1.0i)
		6.0,
		-2.0,
		// (5.0+6.0i) + (2.0+1.0i)
		7.0,
		7.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex64Array([
		0.0,
		0.0,
		1.0,  // 0
		0.0,  // 0
		0.0,
		0.0,
		2.0,  // 1
		0.0,  // 1
		0.0,
		0.0,
		3.0,  // 2
		0.0   // 2
	]);
	ybuf = new Complex64Array([
		0.0,
		0.0,
		2.0,  // 0
		0.0,  // 0
		3.0,  // 1
		0.0,  // 1
		4.0,  // 2
		0.0   // 2
	]);
	x = vector( xbuf, 3, 2, 1 );
	y = vector( ybuf, 3, 1, 1 );

	actual = cxpy( [ x, y ] );

	expected = new Complex64Array([
		0.0,
		0.0,
		// (1.0+0.0i) + (2.0+0.0i)
		3.0,
		0.0,
		// (2.0+0.0i) + (3.0+0.0i)
		5.0,
		0.0,
		// (3.0+0.0i) + (4.0+0.0i)
		7.0,
		0.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty ndarrays, the function returns the output ndarray unchanged', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex64Array( [] );
	ybuf = new Complex64Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );

	actual = cxpy( [ x, y ] );
	expected = new Complex64Array( [] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});
