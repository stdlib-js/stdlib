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
var isEqualBooleanArray = require( '@stdlib/assert/is-equal-booleanarray' );
var Float32Array = require( '@stdlib/array/float32' );
var BooleanArray = require( '@stdlib/array/bool' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var scunone = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional single-precision floating-point ndarray.
*
* @private
* @param {Float32Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'float32', buffer, [ length ], [ stride ], offset, 'row-major' );
}

/**
* Returns a one-dimensional boolean ndarray.
*
* @private
* @param {BooleanArray} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function bvector( buffer, length, stride, offset ) {
	return new ndarray( 'bool', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scunone, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( scunone.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function cumulatively tests whether every element in a one-dimensional ndarray is falsy', function test( t ) {
	var expected;
	var obuf;
	var xbuf;
	var out;
	var x;
	var v;

	xbuf = new Float32Array( [ 0.0, 0.0, 1.0, 1.0, 0.0, 1.0 ] );
	x = vector( xbuf, 6, 1, 0 );
	obuf = new BooleanArray( 6 );
	out = bvector( obuf, 6, 1, 0 );
	v = scunone( [ x, out ] );

	expected = new BooleanArray( [ true, true, false, false, false, false ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 5, 1, 0 );
	obuf = new BooleanArray( 5 );
	out = bvector( obuf, 5, 1, 0 );
	v = scunone( [ x, out ] );

	expected = new BooleanArray( [ true, true, true, true, true ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Float32Array( [ 1.0, 0.0, 0.0 ] );
	x = vector( xbuf, 3, 1, 0 );
	obuf = new BooleanArray( 3 );
	out = bvector( obuf, 3, 1, 0 );
	v = scunone( [ x, out ] );

	expected = new BooleanArray( [ false, false, false ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( getData( v ), expected ), true, 'returns expected value' );

	xbuf = new Float32Array( [ NaN, 0.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	obuf = new BooleanArray( 2 );
	out = bvector( obuf, 2, 1, 0 );
	v = scunone( [ x, out ] );

	expected = new BooleanArray( [ true, true ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty vector, the function returns the output array unchanged', function test( t ) {
	var expected;
	var obuf;
	var xbuf;
	var out;
	var x;
	var v;

	xbuf = new Float32Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	obuf = new BooleanArray( 0 );
	out = bvector( obuf, 0, 1, 0 );

	v = scunone( [ x, out ] );

	expected = new BooleanArray( [] );
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( getData( v ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var expected;
	var obuf;
	var xbuf;
	var out;
	var x;
	var v;

	xbuf = new Float32Array([
		0.0, // 0
		9.0,
		0.0, // 1
		9.0,
		1.0, // 2
		9.0,
		0.0, // 3
		9.0
	]);
	x = vector( xbuf, 4, 2, 0 );

	obuf = new BooleanArray( 8 );
	out = bvector( obuf, 4, 2, 0 );

	v = scunone( [ x, out ] );

	expected = new BooleanArray([
		true,  // 0
		false,
		true,  // 1
		false,
		false, // 2
		false,
		false, // 3
		false
	]);
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var expected;
	var obuf;
	var xbuf;
	var out;
	var x;
	var v;

	xbuf = new Float32Array([
		0.0, // 2
		9.0,
		1.0, // 1
		9.0,
		0.0  // 0
	]);
	x = vector( xbuf, 3, -2, 4 );

	obuf = new BooleanArray( 3 );
	out = bvector( obuf, 3, -1, 2 );

	v = scunone( [ x, out ] );

	expected = new BooleanArray([
		false, // 2
		false, // 1
		true   // 0
	]);
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var obuf;
	var xbuf;
	var out;
	var x;
	var v;

	xbuf = new Float32Array([
		9.0,
		0.0, // 0
		9.0,
		0.0, // 1
		9.0,
		1.0, // 2
		9.0,
		0.0  // 3
	]);
	x = vector( xbuf, 4, 2, 1 );

	obuf = new BooleanArray( 8 );
	out = bvector( obuf, 4, 1, 2 );

	v = scunone( [ x, out ] );

	expected = new BooleanArray([
		false,
		false,
		true,  // 0
		true,  // 1
		false, // 2
		false, // 3
		false,
		false
	]);
	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isEqualBooleanArray( getData( v ), expected ), true, 'returns expected value' );
	t.end();
});
