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
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var zerosLike = require( '@stdlib/ndarray/zeros-like' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var dcumin = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Float64Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'float64', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcumin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( dcumin.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the cumulative minimum value of a one-dimensional ndarray', function test( t ) {
	var expected;
	var xbuf;
	var x;
	var y;
	var v;

	xbuf = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	x = vector( xbuf, 6, 1, 0 );
	y = zerosLike( x );
	v = dcumin( [ x, y ] );

	expected = new Float64Array( [ 1.0, -2.0, -4.0, -4.0, -4.0, -4.0 ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Float64Array( [ -4.0, -5.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	y = zerosLike( x );
	v = dcumin( [ x, y ] );

	expected = new Float64Array( [ -4.0, -5.0 ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Float64Array( [ -0.0, 0.0, -0.0 ] );
	x = vector( xbuf, 3, 1, 0 );
	y = zerosLike( x );
	v = dcumin( [ x, y ] );

	expected = new Float64Array( [ -0.0, -0.0, -0.0 ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Float64Array( [ NaN ] );
	x = vector( xbuf, 1, 1, 0 );
	y = zerosLike( x );
	v = dcumin( [ x, y ] );

	expected = new Float64Array( [ NaN ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Float64Array( [ NaN, NaN ] );
	x = vector( xbuf, 2, 1, 0 );
	y = zerosLike( x );
	v = dcumin( [ x, y ] );

	expected = new Float64Array( [ NaN, NaN ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty vector, the function returns the output array unchanged', function test( t ) {
	var expected;
	var xbuf;
	var x;
	var y;
	var v;

	xbuf = new Float64Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	y = zerosLike( x );

	v = dcumin( [ x, y ] );

	expected = new Float64Array( [] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);
	x = vector( xbuf, 4, 2, 0 );

	ybuf = new Float64Array([
		0.0,  // 0
		0.0,
		0.0,  // 1
		0.0,
		0.0,  // 2
		0.0,
		0.0,  // 3
		0.0
	]);
	y = vector( ybuf, 4, 2, 0 );

	v = dcumin( [ x, y ] );

	expected = new Float64Array([
		1.0,   // 0
		0.0,
		1.0,   // 1
		0.0,
		-2.0,  // 2
		0.0,
		-2.0,  // 3
		0.0
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Float64Array([
		1.0,  // 2
		-2.0,
		3.0,  // 1
		4.0,
		-5.0  // 0
	]);
	x = vector( xbuf, 3, -2, 4 );

	ybuf = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);
	y = vector( ybuf, 3, -1, 2 );

	v = dcumin( [ x, y ] );

	expected = new Float64Array([
		-5.0,  // 2
		-5.0,  // 1
		-5.0,  // 0
		0.0,
		0.0
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);
	x = vector( xbuf, 4, 2, 1 );

	ybuf = new Float64Array([
		0.0,
		0.0,
		0.0,  // 0
		0.0,  // 1
		0.0,  // 2
		0.0,  // 3
		0.0,
		0.0
	]);
	y = vector( ybuf, 4, 1, 2 );

	v = dcumin( [ x, y ] );

	expected = new Float64Array([
		0.0,
		0.0,
		1.0,   // 0
		-2.0,  // 1
		-2.0,  // 2
		-2.0,  // 3
		0.0,
		0.0
	]);
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});
