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
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var gdot = require( './../lib' );


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
	t.strictEqual( typeof gdot, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( gdot.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the dot product of two one-dimensional ndarrays', function test( t ) {
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ];
	ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ];
	x = vector( xbuf, 8, 1, 0 );
	y = vector( ybuf, 8, 1, 0 );
	v = gdot( [ x, y ] );

	t.strictEqual( v, -17.0, 'returns expected value' );

	xbuf = [ 3.0, -4.0, 1.0 ];
	ybuf = [ 1.0, -2.0, 3.0 ];
	x = vector( xbuf, 3, 1, 0 );
	y = vector( ybuf, 3, 1, 0 );
	v = gdot( [ x, y ] );

	t.strictEqual( v, 14.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty vector, the function returns `0.0`', function test( t ) {
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = [];
	ybuf = [];
	x = vector( xbuf, 0, 1, 0 );
	y = vector( ybuf, 0, 1, 0 );

	v = gdot( [ x, y ] );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var xbuf;
	var ybuf;
	var x;
	var y;
	var v;

	xbuf = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	x = vector( xbuf, 3, 2, 0 );

	ybuf = [
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	];
	y = vector( ybuf, 3, 1, 0 );

	v = gdot( [ x, y ] );
	t.strictEqual( v, -12.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
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

	v = gdot( [ x, y ] );
	t.strictEqual( v, 67.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
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

	v = gdot( [ x, y ] );
	t.strictEqual( v, 29.0, 'returns expected value' );

	t.end();
});
