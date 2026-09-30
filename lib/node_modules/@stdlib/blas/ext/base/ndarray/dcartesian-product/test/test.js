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
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var dcartesianProduct = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Collection} buffer - underlying data buffer
* @param {NonNegativeInteger} N - number of elements
* @param {integer} stride - stride
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, N, stride, offset ) {
	return new ndarray( 'float64', buffer, [ N ], [ stride ], offset, 'row-major' );
}

/**
* Returns a two-dimensional ndarray.
*
* @private
* @param {Collection} buffer - underlying data buffer
* @param {NonNegativeInteger} M - number of rows
* @param {NonNegativeInteger} N - number of columns
* @param {integer} stride0 - stride of the first dimension
* @param {integer} stride1 - stride of the second dimension
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} two-dimensional ndarray
*/
function matrix( buffer, M, N, stride0, stride1, offset ) {
	return new ndarray( 'float64', buffer, [ M, N ], [ stride0, stride1 ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcartesianProduct, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( dcartesianProduct.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function computes the Cartesian product (row-major)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;
	var v;

	x = vector( new Float64Array( [ 1.0, 2.0 ] ), 2, 1, 0 );
	y = vector( new Float64Array( [ 3.0, 4.0 ] ), 2, 1, 0 );
	out = matrix( new Float64Array( 8 ), 4, 2, 2, 1, 0 );

	v = dcartesianProduct( [ x, y, out ] );

	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes the Cartesian product (row-major, M=3, N=2)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;
	var v;

	x = vector( new Float64Array( [ 1.0, 2.0, 3.0 ] ), 3, 1, 0 );
	y = vector( new Float64Array( [ 4.0, 5.0 ] ), 2, 1, 0 );
	out = matrix( new Float64Array( 12 ), 6, 2, 2, 1, 0 );

	v = dcartesianProduct( [ x, y, out ] );

	expected = new Float64Array([
		1.0,
		4.0,
		1.0,
		5.0,
		2.0,
		4.0,
		2.0,
		5.0,
		3.0,
		4.0,
		3.0,
		5.0
	]);
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes the Cartesian product (row-major, M=1, N=1)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;
	var v;

	x = vector( new Float64Array( [ 5.0 ] ), 1, 1, 0 );
	y = vector( new Float64Array( [ 7.0 ] ), 1, 1, 0 );
	out = matrix( new Float64Array( 2 ), 1, 2, 2, 1, 0 );

	v = dcartesianProduct( [ x, y, out ] );

	expected = new Float64Array( [ 5.0, 7.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function computes the Cartesian product (column-major)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;
	var v;

	x = vector( new Float64Array( [ 1.0, 2.0 ] ), 2, 1, 0 );
	y = vector( new Float64Array( [ 3.0, 4.0 ] ), 2, 1, 0 );
	out = matrix( new Float64Array( 8 ), 4, 2, 1, 4, 0 );

	v = dcartesianProduct( [ x, y, out ] );

	expected = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the output ndarray', function test( t ) {
	var out;
	var x;
	var y;
	var v;

	x = vector( new Float64Array( [ 1.0, 2.0 ] ), 2, 1, 0 );
	y = vector( new Float64Array( [ 3.0, 4.0 ] ), 2, 1, 0 );
	out = matrix( new Float64Array( 8 ), 4, 2, 2, 1, 0 );

	v = dcartesianProduct( [ x, y, out ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.end();
});

tape( 'if provided `M` or `N` less than or equal to `0`, the function returns the output ndarray unchanged', function test( t ) {
	var expected;
	var out;
	var x;
	var y;
	var v;

	out = matrix( new Float64Array( [ 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] ), 4, 2, 2, 1, 0 );
	expected = new Float64Array( [ 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	x = vector( new Float64Array( [ 1.0, 2.0 ] ), 0, 1, 0 );
	y = vector( new Float64Array( [ 3.0, 4.0 ] ), 2, 1, 0 );

	v = dcartesianProduct( [ x, y, out ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	x = vector( new Float64Array( [ 1.0, 2.0 ] ), 2, 1, 0 );
	y = vector( new Float64Array( [ 3.0, 4.0 ] ), 0, 1, 0 );

	v = dcartesianProduct( [ x, y, out ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports input ndarrays with strides', function test( t ) {
	var expected;
	var out;
	var x;
	var y;
	var v;

	x = vector( new Float64Array( [ 1.0, 0.0, 2.0, 0.0 ] ), 2, 2, 0 );
	y = vector( new Float64Array( [ 3.0, 0.0, 4.0, 0.0 ] ), 2, 2, 0 );
	out = matrix( new Float64Array( 8 ), 4, 2, 2, 1, 0 );

	v = dcartesianProduct( [ x, y, out ] );

	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports input ndarrays with negative strides', function test( t ) {
	var expected;
	var out;
	var x;
	var y;
	var v;

	x = vector( new Float64Array( [ 2.0, 1.0 ] ), 2, -1, 1 );
	y = vector( new Float64Array( [ 4.0, 3.0 ] ), 2, -1, 1 );
	out = matrix( new Float64Array( 8 ), 4, 2, 2, 1, 0 );

	v = dcartesianProduct( [ x, y, out ] );

	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var out;
	var x;
	var y;
	var v;

	x = vector( new Float64Array( [ 99.0, 1.0, 2.0 ] ), 2, 1, 1 );
	y = vector( new Float64Array( [ 99.0, 3.0, 4.0 ] ), 2, 1, 1 );
	out = matrix( new Float64Array( 10 ), 4, 2, 2, 1, 2 );

	v = dcartesianProduct( [ x, y, out ] );

	expected = new Float64Array( [ 0.0, 0.0, 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports output ndarrays with negative strides', function test( t ) {
	var expected;
	var out;
	var x;
	var y;
	var v;

	x = vector( new Float64Array( [ 1.0, 2.0 ] ), 2, 1, 0 );
	y = vector( new Float64Array( [ 3.0, 4.0 ] ), 2, 1, 0 );
	out = matrix( new Float64Array( 8 ), 4, 2, -2, 1, 6 );

	v = dcartesianProduct( [ x, y, out ] );

	expected = new Float64Array( [ 2.0, 4.0, 2.0, 3.0, 1.0, 4.0, 1.0, 3.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});
