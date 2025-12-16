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
var scalar2ndarrayLike = require( '@stdlib/ndarray/base/from-scalar-like' );
var zerosLike = require( '@stdlib/ndarray/zeros-like' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var dcusumors = require( './../lib' );


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
	t.strictEqual( typeof dcusumors, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( dcusumors.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function computes the cumulative sum of a one-dimensional ndarray', function test( t ) {
	var expected;
	var initial;
	var xbuf;
	var x;
	var y;
	var v;

	xbuf = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	x = vector( xbuf, 6, 1, 0 );
	y = zerosLike( x );
	initial = scalar2ndarrayLike( x, 0.0 );
	v = dcusumors( [ x, y, initial ] );

	expected = new Float64Array( [ 1.0, -1.0, -5.0, 0.0, 0.0, 3.0 ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Float64Array( [ -4.0, -5.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	y = zerosLike( x );
	initial = scalar2ndarrayLike( x, 10.0 );
	v = dcusumors( [ x, y, initial ] );

	expected = new Float64Array( [ 6.0, 1.0 ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Float64Array( [ -0.0, 0.0, -0.0 ] );
	x = vector( xbuf, 3, 1, 0 );
	y = zerosLike( x );
	initial = scalar2ndarrayLike( x, -0.0 );
	v = dcusumors( [ x, y, initial ] );

	expected = new Float64Array( [ -0.0, 0.0, 0.0 ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes the cumulative sum of a one-dimensional ndarray (with an initial value)', function test( t ) {
	var expected;
	var initial;
	var xbuf;
	var x;
	var y;
	var v;

	xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	y = zerosLike( x );
	initial = scalar2ndarrayLike( x, 5.0 );
	v = dcusumors( [ x, y, initial ] );

	expected = new Float64Array( [ 6.0, 9.0, 13.0, 15.0 ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the output ndarray unchanged if provided an empty ndarray', function test( t ) {
	var expected;
	var initial;
	var xbuf;
	var x;
	var y;
	var v;

	xbuf = new Float64Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	y = zerosLike( x );
	initial = scalar2ndarrayLike( x, 0.0 );
	v = dcusumors( [ x, y, initial ] );

	expected = new Float64Array( [] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var initial;
	var xbuf;
	var x;
	var y;
	var v;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	x = vector( xbuf, 5, -1, 4 );
	y = zerosLike( x );
	initial = scalar2ndarrayLike( x, 0.0 );
	v = dcusumors( [ x, y, initial ] );

	expected = new Float64Array( [ 5.0, 9.0, 12.0, 14.0, 15.0 ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var initial;
	var xbuf;
	var x;
	var y;
	var v;

	xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	x = vector( xbuf, 3, 1, 2 );
	y = zerosLike( x );
	initial = scalar2ndarrayLike( x, 0.0 );
	v = dcusumors( [ x, y, initial ] );

	expected = new Float64Array( [ 3.0, 7.0, 12.0 ] );
	t.strictEqual( v, y, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});
