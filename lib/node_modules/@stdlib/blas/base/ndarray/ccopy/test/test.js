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

var tape = require( 'tape' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var ccopy = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Collection} buffer - underlying data buffer
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
	t.strictEqual( typeof ccopy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( ccopy.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function copies values from a one-dimensional ndarray `x` into a one-dimensional ndarray `y`', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Complex64Array([
		1.0,  // 1
		2.0,  // 1
		3.0,  // 2
		4.0,  // 2
		5.0,  // 3
		6.0   // 3
	]);
	ybuf = new Complex64Array([
		0.0,  // 1
		0.0,  // 1
		0.0,  // 2
		0.0,  // 2
		0.0,  // 3
		0.0   // 3
	]);
	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );

	v = ccopy( [ x, y ] );

	expected = new Complex64Array([
		1.0,  // 1
		2.0,  // 1
		3.0,  // 2
		4.0,  // 2
		5.0,  // 3
		6.0   // 3
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Complex64Array([
		1.0,  // 1
		2.0,  // 1
		3.0,  // 2
		4.0   // 2
	]);
	ybuf = new Complex64Array([
		0.0,  // 1
		0.0,  // 1
		0.0,  // 2
		0.0   // 2
	]);
	x = vector( xbuf, 2, 1, 0 );
	y = vector( ybuf, 2, 1, 0 );

	v = ccopy( [ x, y ] );

	expected = new Complex64Array([
		1.0,  // 1
		2.0,  // 1
		3.0,  // 2
		4.0   // 2
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty ndarrays, the function returns the output ndarray unchanged', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Complex64Array( [] );
	ybuf = new Complex64Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );

	v = ccopy( [ x, y ] );

	expected = new Complex64Array( [] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Complex64Array([
		1.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		3.0,  // 1
		4.0,  // 1
		0.0,
		0.0,
		5.0,  // 2
		6.0   // 2
	]);
	x = vector( xbuf, 3, 2, 0 );

	ybuf = new Complex64Array([
		0.0,  // 0
		0.0,  // 0
		0.0,  // 1
		0.0,  // 1
		0.0,  // 2
		0.0,  // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);
	y = vector( ybuf, 3, 1, 0 );

	v = ccopy( [ x, y ] );

	expected = new Complex64Array([
		1.0,  // 0
		2.0,  // 0
		3.0,  // 1
		4.0,  // 1
		5.0,  // 2
		6.0,  // 2
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Complex64Array([
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
	x = vector( xbuf, 3, -2, 4 );

	ybuf = new Complex64Array([
		0.0,  // 2
		0.0,  // 2
		0.0,  // 1
		0.0,  // 1
		0.0,  // 0
		0.0,  // 0
		0.0,
		0.0,
		0.0,
		0.0
	]);
	y = vector( ybuf, 3, -1, 2 );

	v = ccopy( [ x, y ] );

	expected = new Complex64Array([
		1.0,  // 2
		2.0,  // 2
		3.0,  // 1
		4.0,  // 1
		5.0,  // 0
		6.0,  // 0
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Complex64Array([
		0.0,
		0.0,
		1.0,   // 0
		2.0,   // 0
		0.0,
		0.0,
		3.0,   // 1
		4.0,   // 1
		0.0,
		0.0,
		5.0,   // 2
		6.0,   // 2
		0.0,
		0.0,
		7.0,   // 3
		8.0    // 3
	]);
	x = vector( xbuf, 4, 2, 1 );

	ybuf = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,   // 0
		0.0,   // 0
		0.0,   // 1
		0.0,   // 1
		0.0,   // 2
		0.0,   // 2
		0.0,   // 3
		0.0,   // 3
		0.0,
		0.0,
		0.0,
		0.0
	]);
	y = vector( ybuf, 4, 1, 2 );

	v = ccopy( [ x, y ] );

	expected = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,   // 0
		2.0,   // 0
		3.0,   // 1
		4.0,   // 1
		5.0,   // 2
		6.0,   // 2
		7.0,   // 3
		8.0,   // 3
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});
