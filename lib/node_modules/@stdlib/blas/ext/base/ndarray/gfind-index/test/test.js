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
var gfindIndex = require( './../lib' );


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
	t.strictEqual( typeof gfindIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first element which passes a test implemented by a predicate function', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 3.0, -2.0, 5.0, 0.0, 4.0 ];
	actual = gfindIndex( [ vector( x, 6, 1, 0 ) ], isEven );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = [ 4.0, 5.0 ];
	actual = gfindIndex( [ vector( x, 2, 1, 0 ) ], isEven );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = [ 1.0, 3.0, 5.0 ];
	actual = gfindIndex( [ vector( x, 3, 1, 0 ) ], isEven );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();

	function isEven( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns `-1` if provided an empty input ndarray', function test( t ) {
	var actual;
	var x;

	x = vector( [], 0, 1, 0 );

	actual = gfindIndex( [ x ], isEven );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();

	function isEven( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var actual;
	var x;

	x = [
		1.0,  // 0
		2.0,
		3.0,  // 1
		-4.0,
		-5.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];

	actual = gfindIndex( [ vector( x, 4, 2, 0 ) ], isEven );

	t.strictEqual( actual, 3, 'returns expected value' );
	t.end();

	function isEven( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var actual;
	var x;

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-2.0,
		-7.0, // 1
		4.0,
		3.0,  // 0
		2.0
	];

	actual = gfindIndex( [ vector( x, 4, -2, 6 ) ], isEven );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();

	function isEven( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var actual;
	var x;

	x = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	];

	actual = gfindIndex( [ vector( x, 4, 2, 1 ) ], isEven );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();

	function isEven( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var actual;
	var ctx;
	var arr;
	var x;

	x = [
		1.0,  // 0
		2.0,
		3.0,  // 1
		-2.0,
		-7.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];
	ctx = {
		'count': 0
	};

	indices = [];
	values = [];
	arrays = [];

	arr = vector( x, 4, 2, 0 );
	actual = gfindIndex( [ arr ], isEven, ctx );

	t.strictEqual( actual, 3, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [
		1.0,
		3.0,
		-7.0,
		4.0
	];
	t.deepEqual( values, expected, 'returns expected value' );

	expected = [
		0,
		1,
		2,
		3
	];
	t.deepEqual( indices, expected, 'returns expected value' );

	expected = [
		arr,
		arr,
		arr,
		arr
	];
	t.deepEqual( arrays, expected, 'returns expected value' );

	t.end();

	function isEven( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return v % 2.0 === 0.0;
	}
});
