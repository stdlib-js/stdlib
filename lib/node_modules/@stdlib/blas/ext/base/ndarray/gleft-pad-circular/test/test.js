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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var gleftPadCircular = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'generic', buffer, [ length ], [ stride ], offset, 'row-major' );
}

/**
* Returns a zero-dimensional ndarray.
*
* @private
* @param {number} v - scalar value
* @returns {ndarray} zero-dimensional ndarray
*/
function scalar( v ) {
	return scalar2ndarray( v, {
		'dtype': 'generic'
	});
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gleftPadCircular, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( gleftPadCircular.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function prepends elements to a one-dimensional output ndarray by circularly repeating existing elements', function test( t ) {
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [ 1.0, 2.0, 3.0, 4.0 ];
	ybuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	x = vector( xbuf, 4, 1, 0 );
	y = vector( ybuf, 10, 1, 0 );

	actual = gleftPadCircular( [ x, y, scalar( 6 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0 ], 'returns expected value' );

	xbuf = [ 1.0, 2.0, 3.0 ];
	ybuf = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 5, 1, 0 );

	actual = gleftPadCircular( [ x, y, scalar( 2 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 2.0, 3.0, 1.0, 2.0, 3.0 ], 'returns expected value' );

	xbuf = [ 1.0, 2.0 ];
	ybuf = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	x = vector( xbuf, 2, 1, 0 );
	y = vector( ybuf, 6, 1, 0 );

	actual = gleftPadCircular( [ x, y, scalar( 4 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0 ], 'returns expected value' );

	t.end();
});

tape( 'if the input ndarray is empty, the function returns the output ndarray unchanged', function test( t ) {
	var actual;
	var ybuf;
	var x;
	var y;

	ybuf = [ 6.0, 7.0, 8.0 ];

	x = vector( [], 0, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );

	actual = gleftPadCircular( [ x, y, scalar( 2 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 6.0, 7.0, 8.0 ], 'returns expected value' );

	t.end();
});

tape( 'if `k` is zero, the function copies indexed elements in `x` to `y` without padding', function test( t ) {
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [ 1.0, 2.0, 3.0 ];
	ybuf = [ 6.0, 7.0, 8.0 ];

	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );

	actual = gleftPadCircular( [ x, y, scalar( 0 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 1.0, 2.0, 3.0 ], 'returns expected value' );

	t.end();
});

tape( 'if `k` is less than zero, the function copies indexed elements in `x` to `y` without padding', function test( t ) {
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [ 1.0, 2.0, 3.0 ];
	ybuf = [ 6.0, 7.0, 8.0 ];

	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );

	actual = gleftPadCircular( [ x, y, scalar( -1 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 1.0, 2.0, 3.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports input ndarrays having non-unit strides', function test( t ) {
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	ybuf = [
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];

	x = vector( xbuf, 3, 2, 0 );
	y = vector( ybuf, 5, 1, 0 );

	actual = gleftPadCircular( [ x, y, scalar( 2 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 3.0, 5.0, 1.0, 3.0, 5.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports output ndarrays having non-unit strides', function test( t ) {
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [
		1.0, // 0
		2.0, // 1
		3.0  // 2
	];
	ybuf = [
		0.0, // 1
		0.0,
		0.0, // 2
		0.0,
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0, // 2
		0.0
	];

	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 5, 2, 0 );

	actual = gleftPadCircular( [ x, y, scalar( 2 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 2.0, 0.0, 3.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	ybuf = [
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0, // 2
		0.0  // 1
	];

	x = vector( xbuf, 3, -2, 4 );
	y = vector( ybuf, 5, -1, 4 );

	actual = gleftPadCircular( [ x, y, scalar( 2 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 1.0, 3.0, 5.0, 1.0, 3.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports input ndarrays having non-zero offsets', function test( t ) {
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

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
	ybuf = [
		0.0, // 2
		0.0, // 3
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0  // 3
	];

	x = vector( xbuf, 4, 2, 1 );
	y = vector( ybuf, 6, 1, 0 );

	actual = gleftPadCircular( [ x, y, scalar( 2 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 2.0, 4.0, 1.0, -2.0, 2.0, 4.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports output ndarrays having non-zero offsets', function test( t ) {
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [
		1.0, // 0
		2.0, // 1
		3.0  // 2
	];
	ybuf = [
		0.0,
		0.0,
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];

	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 5, 1, 2 );

	actual = gleftPadCircular( [ x, y, scalar( 2 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 0.0, 0.0, 2.0, 3.0, 1.0, 2.0, 3.0 ], 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var actual;
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	ybuf = [
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0, // 2
		0.0  // 1
	];

	x = vector( xbuf, 3, 2, 0 );
	y = vector( ybuf, 5, -1, 4 );

	actual = gleftPadCircular( [ x, y, scalar( 2 ) ] );
	t.strictEqual( actual, y, 'returns expected value' );
	t.deepEqual( getData( actual ), [ 5.0, 3.0, 1.0, 5.0, 3.0 ], 'returns expected value' );

	t.end();
});
