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
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var gxsy = require( './../lib' );


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
	t.strictEqual( typeof gxsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( gxsy.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function subtracts `y` from `x` and assigns the results to `y`', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [ -2.0, 1.0, 3.0, -5.0, 4.0 ];
	ybuf = [ 1.0, 2.0, -3.0, 4.0, -1.0 ];
	x = vector( xbuf, 5, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );
	expected = [
		-3.0, // -2.0 - 1.0
		-1.0, // 1.0  - 2.0
		6.0,  // 3.0  - (-3.0)
		-9.0, // -5.0 - 4.0
		5.0   // 4.0  - (-1.0)
	];

	actual = gxsy( [ x, y ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports input ndarrays having non-unit strides', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [
		-2.0, // 0
		1.0,
		3.0,  // 1
		-5.0,
		4.0,  // 2
		0.0,
		-1.0, // 3
		-3.0
	];
	ybuf = [
		1.0,  // 0
		2.0,
		-3.0, // 1
		4.0,
		-1.0, // 2
		0.0,
		3.0,  // 3
		2.0
	];
	x = vector( xbuf, 4, 2, 0 );
	y = vector( ybuf, 4, 2, 0 );
	expected = [
		-3.0, // -2.0 - 1.0
		2.0,
		6.0,  // 3.0  - (-3.0)
		4.0,
		5.0,  // 4.0  - (-1.0)
		0.0,
		-4.0, // -1.0 - 3.0
		2.0
	];

	actual = gxsy( [ x, y ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports input ndarrays having negative strides', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [
		-2.0, // 4
		1.0,  // 3
		3.0,  // 2
		-5.0, // 1
		4.0   // 0
	];
	ybuf = [
		1.0,  // 4
		2.0,  // 3
		-3.0, // 2
		4.0,  // 1
		-1.0  // 0
	];
	x = vector( xbuf, 5, -1, 4 );
	y = vector( ybuf, 5, -1, 4 );
	expected = [
		-3.0, // -2.0 - 1.0
		-1.0, // 1.0  - 2.0
		6.0,  // 3.0  - (-3.0)
		-9.0, // -5.0 - 4.0
		5.0   // 4.0  - (-1.0)
	];

	actual = gxsy( [ x, y ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports input ndarrays having non-zero offsets', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [
		1.0,
		-2.0,
		3.0,  // 0
		-5.0, // 1
		4.0,  // 2
		0.0
	];
	ybuf = [
		1.0,
		-2.0,
		0.0,  // 0
		4.0,  // 1
		-1.0, // 2
		0.0
	];
	x = vector( xbuf, 3, 1, 2 );
	y = vector( ybuf, 3, 1, 2 );
	expected = [
		1.0,
		-2.0,
		3.0,  // 3.0  - 0.0
		-9.0, // -5.0 - 4.0
		5.0,  // 4.0  - (-1.0)
		0.0
	];

	actual = gxsy( [ x, y ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the output ndarray unchanged when the input ndarrays are empty', function test( t ) {
	var expected;
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [];
	ybuf = [];
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );
	expected = [];

	actual = gxsy( [ x, y ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( ybuf, expected, 'returns expected value' );

	t.end();
});
