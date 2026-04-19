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
var isSameArray = require( '@stdlib/assert/is-same-array' );
var scalar2ndarray = require( '@stdlib/ndarray/base/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var gaxpy = require( './../lib' );


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
	return new ndarray( 'generic', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gaxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( gaxpy.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies one-dimensional ndarray `x` by a constant `alpha` and adds the result to one-dimensional ndarray `y`', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	ybuf = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	x = vector( xbuf, 5, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );
	alpha = scalar2ndarray( 2.0, 'generic', 'row-major' );

	v = gaxpy( [ x, y, alpha ] );

	expected = [ 3.0, 5.0, 7.0, 9.0, 11.0 ];
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameArray( getData( v ), expected ), true, 'returns expected value' );

	xbuf = [ 1.0, 2.0 ];
	ybuf = [ 1.0, 1.0 ];
	x = vector( xbuf, 2, 1, 0 );
	y = vector( ybuf, 2, 1, 0 );
	alpha = scalar2ndarray( 2.0, 'generic', 'row-major' );

	v = gaxpy( [ x, y, alpha ] );

	expected = [ 3.0, 5.0 ];
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameArray( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided empty ndarrays, the function returns the output ndarray unchanged', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = [];
	ybuf = [];
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );
	alpha = scalar2ndarray( 5.0, 'generic', 'row-major' );

	v = gaxpy( [ x, y, alpha ] );

	expected = [];
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameArray( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	x = vector( xbuf, 3, 2, 0 );

	ybuf = [
		1.0, // 0
		1.0, // 1
		1.0, // 2
		1.0,
		1.0
	];
	y = vector( ybuf, 3, 1, 0 );
	alpha = scalar2ndarray( 2.0, 'generic', 'row-major' );

	v = gaxpy( [ x, y, alpha ] );

	expected = [ 3.0, 7.0, 11.0, 1.0, 1.0 ];
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameArray( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	x = vector( xbuf, 3, -2, 4 );

	ybuf = [
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	];
	y = vector( ybuf, 3, -1, 2 );
	alpha = scalar2ndarray( 3.0, 'generic', 'row-major' );

	v = gaxpy( [ x, y, alpha ] );

	expected = [ 9.0, 16.0, 23.0, 9.0, 10.0 ];
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameArray( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	];
	x = vector( xbuf, 4, 2, 1 );

	ybuf = [
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0, // 2
		6.0, // 3
		7.0,
		8.0
	];
	y = vector( ybuf, 4, 1, 2 );
	alpha = scalar2ndarray( 3.0, 'generic', 'row-major' );

	v = gaxpy( [ x, y, alpha ] );

	expected = [ 1.0, 2.0, 6.0, -2.0, 11.0, 18.0, 7.0, 8.0 ];
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameArray( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});
