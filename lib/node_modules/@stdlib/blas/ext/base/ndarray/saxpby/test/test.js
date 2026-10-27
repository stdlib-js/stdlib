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
var Float32Array = require( '@stdlib/array/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var saxpby = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
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


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof saxpby, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( saxpby.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies `x` by a constant and adds the result to `y` multiplied by a constant', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0 ] );
	ybuf = new Float32Array( [ 1.0, 2.0, -3.0, 4.0, -1.0 ] );
	x = vector( xbuf, 5, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float32'
	});
	beta = scalar2ndarray( 3.0, {
		'dtype': 'float32'
	});
	expected = new Float32Array([
		-7.0,  // 5.0*(-2.0) + 3.0*1.0
		11.0,  // 5.0*1.0    + 3.0*2.0
		6.0,   // 5.0*3.0    + 3.0*(-3.0)
		-13.0, // 5.0*(-5.0) + 3.0*4.0
		17.0   // 5.0*4.0    + 3.0*(-1.0)
	]);

	actual = saxpby( [ x, y, alpha, beta ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports input ndarrays having non-unit strides', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Float32Array([
		-2.0, // 0
		1.0,
		3.0,  // 1
		-5.0,
		4.0,  // 2
		0.0,
		-1.0, // 3
		-3.0
	]);
	ybuf = new Float32Array([
		1.0,  // 0
		2.0,
		-3.0, // 1
		4.0,
		-1.0, // 2
		0.0,
		3.0,  // 3
		2.0
	]);
	x = vector( xbuf, 4, 2, 0 );
	y = vector( ybuf, 4, 2, 0 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float32'
	});
	beta = scalar2ndarray( 3.0, {
		'dtype': 'float32'
	});
	expected = new Float32Array([
		-7.0, // 5.0*(-2.0) + 3.0*1.0
		2.0,
		6.0,  // 5.0*3.0    + 3.0*(-3.0)
		4.0,
		17.0, // 5.0*4.0    + 3.0*(-1.0)
		0.0,
		4.0,  // 5.0*(-1.0) + 3.0*3.0
		2.0
	]);

	actual = saxpby( [ x, y, alpha, beta ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports input ndarrays having negative strides', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Float32Array([
		-2.0, // 4
		1.0,  // 3
		3.0,  // 2
		-5.0, // 1
		4.0   // 0
	]);
	ybuf = new Float32Array([
		1.0,  // 4
		2.0,  // 3
		-3.0, // 2
		4.0,  // 1
		-1.0  // 0
	]);
	x = vector( xbuf, 5, -1, 4 );
	y = vector( ybuf, 5, -1, 4 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float32'
	});
	beta = scalar2ndarray( 3.0, {
		'dtype': 'float32'
	});
	expected = new Float32Array([
		-7.0,  // 5.0*(-2.0) + 3.0*1.0
		11.0,  // 5.0*1.0    + 3.0*2.0
		6.0,   // 5.0*3.0    + 3.0*(-3.0)
		-13.0, // 5.0*(-5.0) + 3.0*4.0
		17.0   // 5.0*4.0    + 3.0*(-1.0)
	]);

	actual = saxpby( [ x, y, alpha, beta ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports input ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Float32Array([
		1.0,
		-2.0,
		3.0,  // 0
		-5.0, // 1
		4.0,  // 2
		0.0
	]);
	ybuf = new Float32Array([
		1.0,
		-2.0,
		0.0,  // 0
		4.0,  // 1
		-1.0, // 2
		0.0
	]);
	x = vector( xbuf, 3, 1, 2 );
	y = vector( ybuf, 3, 1, 2 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float32'
	});
	beta = scalar2ndarray( 3.0, {
		'dtype': 'float32'
	});
	expected = new Float32Array([
		1.0,
		-2.0,
		15.0,  // 5.0*3.0    + 3.0*0.0
		-13.0, // 5.0*(-5.0) + 3.0*4.0
		17.0,  // 5.0*4.0    + 3.0*(-1.0)
		0.0
	]);

	actual = saxpby( [ x, y, alpha, beta ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the output ndarray unchanged when the input ndarrays are empty', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var beta;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Float32Array( [] );
	ybuf = new Float32Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float32'
	});
	beta = scalar2ndarray( 3.0, {
		'dtype': 'float32'
	});
	expected = new Float32Array( [] );

	actual = saxpby( [ x, y, alpha, beta ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});
