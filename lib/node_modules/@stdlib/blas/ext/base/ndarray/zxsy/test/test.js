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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var zxsy = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Complex128Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'complex128', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zxsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( zxsy.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function subtracts elements of `y` from `x` and assigns the results to `y`', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array( [ 1.0, -2.0, 3.0, 4.0, -5.0, 6.0 ] );
	ybuf = new Complex128Array( [ 2.0, 3.0, -4.0, 5.0, 6.0, -7.0 ] );
	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );

	actual = zxsy( [ x, y ] );
	expected = new Complex128Array([
		// (1.0-2.0i)  - (2.0+3.0i)
		-1.0,
		-5.0,
		// (3.0+4.0i)  - (-4.0+5.0i)
		7.0,
		-1.0,
		// (-5.0+6.0i) - (6.0-7.0i)
		-11.0,
		13.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = new Complex128Array( [ 5.0, 2.0, 3.0, 1.0 ] );
	ybuf = new Complex128Array( [ 2.0, 1.0, 1.0, 0.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	y = vector( ybuf, 2, 1, 0 );

	actual = zxsy( [ x, y ] );
	expected = new Complex128Array([
		// (5.0+2.0i) - (2.0+1.0i)
		3.0,
		1.0,
		// (3.0+1.0i) - (1.0+0.0i)
		2.0,
		1.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array([
		1.0,  // 0
		-2.0, // 0
		0.0,
		0.0,
		3.0,  // 1
		4.0,  // 1
		0.0,
		0.0,
		-5.0, // 2
		6.0   // 2
	]);
	ybuf = new Complex128Array([
		2.0,  // 0
		3.0,  // 0
		-4.0, // 1
		5.0,  // 1
		6.0,  // 2
		-7.0  // 2
	]);
	x = vector( xbuf, 3, 2, 0 );
	y = vector( ybuf, 3, 1, 0 );

	actual = zxsy( [ x, y ] );
	expected = new Complex128Array([
		// (1.0-2.0i)  - (2.0+3.0i)
		-1.0,
		-5.0,
		// (3.0+4.0i)  - (-4.0+5.0i)
		7.0,
		-1.0,
		// (-5.0+6.0i) - (6.0-7.0i)
		-11.0,
		13.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array([
		1.0,  // 0
		-2.0, // 0
		3.0,  // 1
		4.0,  // 1
		-5.0, // 2
		6.0   // 2
	]);
	ybuf = new Complex128Array([
		2.0,  // 0
		3.0,  // 0
		0.0,
		0.0,
		-4.0, // 1
		5.0,  // 1
		0.0,
		0.0,
		6.0,  // 2
		-7.0  // 2
	]);
	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 3, 2, 0 );

	actual = zxsy( [ x, y ] );
	expected = new Complex128Array([
		// (1.0-2.0i)  - (2.0+3.0i)
		-1.0,
		-5.0,
		0.0,
		0.0,
		// (3.0+4.0i)  - (-4.0+5.0i)
		7.0,
		-1.0,
		0.0,
		0.0,
		// (-5.0+6.0i) - (6.0-7.0i)
		-11.0,
		13.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports ndarrays having negative strides', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array([
		-5.0, // 2
		6.0,  // 2
		0.0,
		0.0,
		3.0,  // 1
		4.0,  // 1
		0.0,
		0.0,
		1.0,  // 0
		-2.0  // 0
	]);
	ybuf = new Complex128Array([
		6.0,  // 2
		-7.0, // 2
		-4.0, // 1
		5.0,  // 1
		2.0,  // 0
		3.0   // 0
	]);
	x = vector( xbuf, 3, -2, 4 );
	y = vector( ybuf, 3, -1, 2 );

	actual = zxsy( [ x, y ] );
	expected = new Complex128Array([
		// (-5.0+6.0i) - (6.0-7.0i)
		-11.0,
		13.0,
		// (3.0+4.0i)  - (-4.0+5.0i)
		7.0,
		-1.0,
		// (1.0-2.0i)  - (2.0+3.0i)
		-1.0,
		-5.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array([
		0.0,
		0.0,
		5.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		4.0,  // 1
		1.0,  // 1
		0.0,
		0.0,
		3.0,  // 2
		0.0   // 2
	]);
	ybuf = new Complex128Array([
		0.0,
		0.0,
		2.0,  // 0
		1.0,  // 0
		1.0,  // 1
		0.0,  // 1
		1.0,  // 2
		0.0   // 2
	]);
	x = vector( xbuf, 3, 2, 1 );
	y = vector( ybuf, 3, 1, 1 );

	actual = zxsy( [ x, y ] );

	expected = new Complex128Array([
		0.0,
		0.0,
		// (5.0+2.0i) - (2.0+1.0i)
		3.0,
		1.0,
		// (4.0+1.0i) - (1.0+0.0i)
		3.0,
		1.0,
		// (3.0+0.0i) - (1.0+0.0i)
		2.0,
		0.0
	]);
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty ndarrays, the function returns the output ndarray unchanged', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Complex128Array( [] );
	ybuf = new Complex128Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );

	actual = zxsy( [ x, y ] );
	expected = new Complex128Array( [] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );
	t.end();
});
