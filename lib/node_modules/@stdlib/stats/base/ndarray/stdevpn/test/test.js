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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Float64Array = require( '@stdlib/array/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var stdevpn = require( './../lib' );


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
	return new ndarray( 'float64', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof stdevpn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( stdevpn.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the standard deviation of a one-dimensional ndarray', function test( t ) {
	var correction;
	var expected;
	var opts;
	var x;
	var v;

	opts = {
		'dtype': 'float64'
	};

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	correction = scalar2ndarray( 1.0, opts );

	v = stdevpn( [ vector( x, x.length, 1, 0 ), correction ] );
	expected = sqrt( 53.5/(x.length-1) );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ -4.0, -5.0 ] );
	correction = scalar2ndarray( 1.0, opts );

	v = stdevpn( [ vector( x, x.length, 1, 0 ), correction ] );
	expected = sqrt( 0.5 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	correction = scalar2ndarray( 1.0, opts );

	v = stdevpn( [ vector( x, x.length, 1, 0 ), correction ] );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	correction = scalar2ndarray( 1.0, opts );

	v = stdevpn( [ vector( x, x.length, 1, 0 ), correction ] );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty ndarray, the function returns `NaN`', function test( t ) {
	var correction;
	var opts;
	var x;
	var v;

	opts = {
		'dtype': 'float64'
	};

	x = new Float64Array( [] );
	correction = scalar2ndarray( 1.0, opts );

	v = stdevpn( [ vector( x, 0, 1, 0 ), correction ] );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a correction argument yielding `N-correction` less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var correction;
	var opts;
	var x;
	var v;

	opts = {
		'dtype': 'float64'
	};

	x = new Float64Array( [ 1.0 ] );
	correction = scalar2ndarray( 1.0, opts );

	v = stdevpn( [ vector( x, 1, 1, 0 ), correction ] );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var correction;
	var expected;
	var opts;
	var x;
	var v;

	opts = {
		'dtype': 'float64'
	};

	x = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);
	correction = scalar2ndarray( 1.0, opts );

	v = stdevpn( [ vector( x, 4, 2, 0 ), correction ] );
	expected = 2.5;
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var correction;
	var expected;
	var opts;
	var x;
	var v;

	opts = {
		'dtype': 'float64'
	};

	x = new Float64Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	correction = scalar2ndarray( 1.0, opts );

	v = stdevpn( [ vector( x, 4, -2, 6 ), correction ] );
	expected = 2.5;
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var correction;
	var expected;
	var opts;
	var x;
	var v;

	opts = {
		'dtype': 'float64'
	};

	x = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);
	correction = scalar2ndarray( 1.0, opts );

	v = stdevpn( [ vector( x, 4, 2, 1 ), correction ] );
	expected = 2.5;
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});
