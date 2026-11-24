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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Float64Array = require( '@stdlib/array/float64' );
var getData = require( '@stdlib/ndarray/base/data-buffer' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var dmeanstdev = require( './../lib' );


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
	t.strictEqual( typeof dmeanstdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( dmeanstdev.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the arithmetic mean and standard deviation of a one-dimensional ndarray', function test( t ) {
	var correction;
	var expected;
	var opts;
	var out;
	var x;
	var v;

	opts = {
		'dtype': 'float64'
	};

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	out = new Float64Array( 2 );
	correction = scalar2ndarray( 1.0, opts );

	v = dmeanstdev( [ vector( x, x.length, 1, 0 ), vector( out, 2, 1, 0 ), correction ] );
	expected = new Float64Array( [ 0.5, sqrt( 53.5/(x.length-1) ) ] );
	t.deepEqual( getData( v ), expected, 'returns expected value' );

	x = new Float64Array( [ -4.0, -5.0 ] );
	out = new Float64Array( 2 );
	correction = scalar2ndarray( 1.0, opts );

	v = dmeanstdev( [ vector( x, x.length, 1, 0 ), vector( out, 2, 1, 0 ), correction ] );
	expected = new Float64Array( [ -4.5, sqrt( 0.5 ) ] );
	t.deepEqual( getData( v ), expected, 'returns expected value' );

	x = new Float64Array( [ NaN ] );
	out = new Float64Array( 2 );
	correction = scalar2ndarray( 1.0, opts );

	v = dmeanstdev( [ vector( x, x.length, 1, 0 ), vector( out, 2, 1, 0 ), correction ] );
	t.strictEqual( isnan( getData( v )[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( getData( v )[ 1 ] ), true, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN ] );
	out = new Float64Array( 2 );
	correction = scalar2ndarray( 1.0, opts );

	v = dmeanstdev( [ vector( x, x.length, 1, 0 ), vector( out, 2, 1, 0 ), correction ] );
	t.strictEqual( isnan( getData( v )[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( getData( v )[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty ndarray, the function returns `NaN` values', function test( t ) {
	var correction;
	var opts;
	var out;
	var x;
	var v;

	opts = {
		'dtype': 'float64'
	};

	x = new Float64Array( [] );
	out = new Float64Array( 2 );
	correction = scalar2ndarray( 1.0, opts );

	v = dmeanstdev( [ vector( x, 0, 1, 0 ), vector( out, 2, 1, 0 ), correction ] );
	t.strictEqual( isnan( getData( v )[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( getData( v )[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a correction value yielding `N-correction` less than or equal to `0`, the function returns a standard deviation equal to `NaN`', function test( t ) {
	var correction;
	var opts;
	var out;
	var x;
	var v;

	opts = {
		'dtype': 'float64'
	};

	x = new Float64Array( [ 1.0 ] );
	out = new Float64Array( 2 );
	correction = scalar2ndarray( 1.0, opts );

	v = dmeanstdev( [ vector( x, 1, 1, 0 ), vector( out, 2, 1, 0 ), correction ] );
	t.strictEqual( getData( v )[ 0 ], 1.0, 'returns expected mean' );
	t.strictEqual( isnan( getData( v )[ 1 ] ), true, 'returns NaN for stdev' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var correction;
	var expected;
	var opts;
	var out;
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
	out = new Float64Array( 2 );
	correction = scalar2ndarray( 1.0, opts );

	v = dmeanstdev( [ vector( x, 4, 2, 0 ), vector( out, 2, 1, 0 ), correction ] );
	expected = new Float64Array( [ 1.25, 2.5 ] );
	t.deepEqual( getData( v ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var correction;
	var expected;
	var opts;
	var out;
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
	out = new Float64Array( 2 );
	correction = scalar2ndarray( 1.0, opts );

	v = dmeanstdev( [ vector( x, 4, -2, 6 ), vector( out, 2, 1, 0 ), correction ] );
	expected = new Float64Array( [ 1.25, 2.5 ] );
	t.deepEqual( getData( v ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var correction;
	var expected;
	var opts;
	var out;
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
	out = new Float64Array( 2 );
	correction = scalar2ndarray( 1.0, opts );

	v = dmeanstdev( [ vector( x, 4, 2, 1 ), vector( out, 2, 1, 0 ), correction ] );
	expected = new Float64Array( [ 1.25, 2.5 ] );
	t.deepEqual( getData( v ), expected, 'returns expected value' );

	t.end();
});
