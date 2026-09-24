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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var rangeBy = require( './../lib' );


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
	t.strictEqual( typeof rangeBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( rangeBy.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the range of a one-dimensional ndarray via a callback function', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	v = rangeBy( [ vector( x, 6, 1, 0 ) ], clbk );
	t.strictEqual( v, 18.0, 'returns expected value' );

	x = [ -4.0, -5.0 ];
	v = rangeBy( [ vector( x, 2, 1, 0 ) ], clbk );
	t.strictEqual( v, 2.0, 'returns expected value' );

	x = [ -0.0, 0.0, -0.0 ];
	v = rangeBy( [ vector( x, 3, 1, 0 ) ], clbk );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = rangeBy( [ vector( x, 1, 1, 0 ) ], clbk );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = rangeBy( [ vector( x, 2, 1, 0 ) ], clbk );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v * 2.0;
	}
});

tape( 'if provided an empty ndarray, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = [];

	v = rangeBy( [ vector( x, 0, 1, 0 ) ], clbk );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v * 2.0;
	}
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];

	v = rangeBy( [ vector( x, 4, 2, 0 ) ], clbk );

	t.strictEqual( v, 12.0, 'returns expected value' );
	t.end();

	function clbk( v ) {
		return v * 2.0;
	}
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var x;
	var v;

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];

	v = rangeBy( [ vector( x, 4, -2, 6 ) ], clbk );

	t.strictEqual( v, 12.0, 'returns expected value' );
	t.end();

	function clbk( v ) {
		return v * 2.0;
	}
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var x;
	var v;

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

	v = rangeBy( [ vector( x, 4, 2, 1 ) ], clbk );
	t.strictEqual( v, 12.0, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v * 2.0;
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var indices;
	var values;
	var arrays;
	var ctx;
	var arr;
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
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
	v = rangeBy( [ arr ], clbk, ctx );

	t.strictEqual( v, 12.0, 'returns expected value' );
	t.strictEqual( ctx.count, 4, 'returns expected value' );

	expected = [
		1.0,
		2.0,
		-2.0,
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

	function clbk( v, idx, arr ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values.push( v );
		indices.push( idx );
		arrays.push( arr );
		return v * 2.0;
	}
});
