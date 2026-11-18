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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var dger = require( './../lib' );


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
	return new ndarray( 'float64', buffer, [ length ], [ stride ], offset, 'row-major' );
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
	t.strictEqual( typeof dger, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( dger.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function performs the rank 1 operation `A = alpha*x*y^T + A`', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var Abuf;
	var x;
	var y;
	var A;
	var v;

	xbuf = new Float64Array([
		1.0, // 0
		2.0  // 1
	]);
	ybuf = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	Abuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );
	A = matrix( Abuf, 2, 3, 3, 1, 0 );
	alpha = scalar2ndarray( 1.0, {
		'dtype': 'float64'
	});

	v = dger( [ x, y, A, alpha ] );

	expected = new Float64Array( [ 2.0, 4.0, 6.0, 6.0, 9.0, 12.0 ] );
	t.strictEqual( v, A, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Float64Array([
		1.0, // 0
		2.0  // 1
	]);
	ybuf = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	Abuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );
	A = matrix( Abuf, 2, 3, 1, 2, 0 );
	alpha = scalar2ndarray( 1.0, {
		'dtype': 'float64'
	});

	v = dger( [ x, y, A, alpha ] );

	expected = new Float64Array( [ 2.0, 4.0, 5.0, 8.0, 8.0, 12.0 ] );
	t.strictEqual( v, A, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if `alpha` is `0`, the function returns `A` unchanged', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var Abuf;
	var x;
	var y;
	var A;
	var v;

	xbuf = new Float64Array([
		1.0, // 0
		2.0  // 1
	]);
	ybuf = new Float64Array([
		3.0, // 0
		4.0, // 1
		5.0  // 2
	]);
	Abuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );
	A = matrix( Abuf, 2, 3, 3, 1, 0 );
	alpha = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});

	v = dger( [ x, y, A, alpha ] );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	t.strictEqual( v, A, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports ndarrays having non-unit strides', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var Abuf;
	var x;
	var y;
	var A;
	var v;

	xbuf = new Float64Array([
		1.0, // 0
		0.0,
		2.0  // 1
	]);
	x = vector( xbuf, 2, 2, 0 );

	ybuf = new Float64Array([
		1.0, // 0
		0.0,
		2.0, // 1
		0.0,
		3.0  // 2
	]);
	y = vector( ybuf, 3, 2, 0 );

	Abuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	A = matrix( Abuf, 2, 3, 3, 1, 0 );
	alpha = scalar2ndarray( 2.0, {
		'dtype': 'float64'
	});

	v = dger( [ x, y, A, alpha ] );

	expected = new Float64Array( [ 3.0, 6.0, 9.0, 8.0, 13.0, 18.0 ] );
	t.strictEqual( v, A, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports ndarrays having negative strides', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var Abuf;
	var x;
	var y;
	var A;
	var v;

	xbuf = new Float64Array([
		2.0, // 1
		0.0,
		1.0  // 0
	]);
	x = vector( xbuf, 2, -2, 2 );

	ybuf = new Float64Array([
		3.0, // 2
		0.0,
		2.0, // 1
		0.0,
		1.0  // 0
	]);
	y = vector( ybuf, 3, -2, 4 );

	Abuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	A = matrix( Abuf, 2, 3, 3, 1, 0 );
	alpha = scalar2ndarray( 2.0, {
		'dtype': 'float64'
	});

	v = dger( [ x, y, A, alpha ] );

	expected = new Float64Array( [ 3.0, 6.0, 9.0, 8.0, 13.0, 18.0 ] );
	t.strictEqual( v, A, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var Abuf;
	var x;
	var y;
	var A;
	var v;

	xbuf = new Float64Array([
		0.0,
		1.0, // 0
		0.0,
		2.0  // 1
	]);
	x = vector( xbuf, 2, 2, 1 );

	ybuf = new Float64Array([
		0.0,
		0.0,
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	y = vector( ybuf, 3, 1, 2 );

	Abuf = new Float64Array([
		0.0,
		0.0,
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	A = matrix( Abuf, 2, 3, 3, 1, 2 );
	alpha = scalar2ndarray( 1.0, {
		'dtype': 'float64'
	});

	v = dger( [ x, y, A, alpha ] );

	expected = new Float64Array([
		0.0,
		0.0,
		2.0,
		4.0,
		6.0,
		6.0,
		9.0,
		12.0
	]);
	t.strictEqual( v, A, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});
