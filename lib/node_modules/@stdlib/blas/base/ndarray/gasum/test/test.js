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
var gasum = require( './../lib' );


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
	t.strictEqual( typeof gasum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( gasum.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the sum of absolute values for all elements in a one-dimensional ndarray', function test( t ) {
	var xbuf;
	var x;
	var y;

	xbuf = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	x = vector( xbuf, 5, 1, 0 );
	y = gasum( [ x ] );

	t.strictEqual( y, 15.0, 'returns expected value' );

	xbuf = [ -4.0, -2.0 ];
	x = vector( xbuf, 2, 1, 0 );
	y = gasum( [ x ] );

	t.strictEqual( y, 6.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty ndarray, the function returns `0.0`', function test( t ) {
	var xbuf;
	var x;
	var y;

	xbuf = [];
	x = vector( xbuf, 0, 1, 0 );

	y = gasum( [ x ] );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var xbuf;
	var x;
	var y;

	xbuf = [
		1.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	x = vector( xbuf, 3, 2, 0 );

	y = gasum( [ x ] );
	t.strictEqual( y, 12.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var xbuf;
	var x;
	var y;

	xbuf = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	x = vector( xbuf, 3, -2, 4 );

	y = gasum( [ x ] );
	t.strictEqual( y, 9.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var xbuf;
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
	x = vector( xbuf, 4, 2, 1 );

	y = gasum( [ x ] );
	t.strictEqual( y, 9.0, 'returns expected value' );

	t.end();
});
