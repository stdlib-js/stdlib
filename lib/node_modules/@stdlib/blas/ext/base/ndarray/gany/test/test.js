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
var gany = require( './../lib' );


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
	t.strictEqual( typeof gany, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( gany.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function tests whether at least one element in a one-dimensional ndarray is truthy', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 1, 1 ];
	v = gany( [ vector( x, 4, 1, 0 ) ] );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 0, 0, 0, 0 ];
	v = gany( [ vector( x, 5, 1, 0 ) ] );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 0, 0 ];
	v = gany( [ vector( x, 3, 1, 0 ) ] );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ -0, 0, -0 ];
	v = gany( [ vector( x, 3, 1, 0 ) ] );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ -1, 0, 0 ];
	v = gany( [ vector( x, 3, 1, 0 ) ] );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty ndarray, the function returns `false`', function test( t ) {
	var x;
	var v;

	x = [];

	v = gany( [ vector( x, 0, 1, 0 ) ] );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var x;
	var v;

	x = [
		0, // 0
		1,
		0, // 1
		1,
		0, // 2
		1,
		0, // 3
		1
	];
	v = gany( [ vector( x, 4, 2, 0 ) ] );

	t.strictEqual( v, false, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var x;
	var v;

	x = [
		1, // 3
		0,
		0, // 2
		0,
		0, // 1
		0,
		0, // 0
		0
	];
	v = gany( [ vector( x, 4, -2, 6 ) ] );

	t.strictEqual( v, true, 'returns expected value' );
	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var x;
	var v;

	x = [
		1,
		0, // 0
		1,
		0, // 1
		1,
		0, // 2
		1,
		0  // 3
	];
	v = gany( [ vector( x, 4, 2, 1 ) ] );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});
