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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var Float64Array = require( '@stdlib/array/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var dapxsumkbn = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Float64Array} buffer - underlying data buffer
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
	t.strictEqual( typeof dapxsumkbn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( dapxsumkbn.length, 1, 'has expected arity' );
	t.end();
});

tape( 'the function adds a constant and calculates the sum of all ndarray elements using an improved Kahan–Babuška algorithm', function test( t ) {
	var alpha;
	var xbuf;
	var x;
	var v;

	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	xbuf = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0, 0.0, -3.0, 3.0 ] ); // eslint-disable-line max-len
	x = vector( xbuf, 9, 1, 0 );
	v = dapxsumkbn( [ x, alpha ] );
	t.strictEqual( v, 48.0, 'returns expected value' );

	xbuf = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	x = vector( xbuf, 6, 1, 0 );
	v = dapxsumkbn( [ x, alpha ] );
	t.strictEqual( v, 33.0, 'returns expected value' );

	xbuf = new Float64Array( [ -4.0, -4.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	v = dapxsumkbn( [ x, alpha ] );
	t.strictEqual( v, 2.0, 'returns expected value' );

	xbuf = new Float64Array( [ NaN, 4.0 ] );
	x = vector( xbuf, 2, 1, 0 );
	v = dapxsumkbn( [ x, alpha ] );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	xbuf = new Float64Array( [ 1.0, 1.0e100, 1.0, -1.0e100 ] );
	x = vector( xbuf, 4, 1, 0 );
	v = dapxsumkbn( [ x, alpha ] );
	t.strictEqual( v, 22.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty ndarray, the function returns `0.0`', function test( t ) {
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Float64Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	v = dapxsumkbn( [ x, alpha ] );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an ndarray containing a single element, the function returns that element plus a constant', function test( t ) {
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Float64Array( [ 1.0 ] );
	x = vector( xbuf, 1, 1, 0 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	v = dapxsumkbn( [ x, alpha ] );
	t.strictEqual( v, 6.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);
	x = vector( xbuf, 4, 2, 0 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	v = dapxsumkbn( [ x, alpha ] );
	t.strictEqual( v, 25.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Float64Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	x = vector( xbuf, 4, -2, 6 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	v = dapxsumkbn( [ x, alpha ] );
	t.strictEqual( v, 25.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an ndarray having a stride equal to 0, the function returns the first element plus a constant repeated N times', function test( t ) {
	var expected;
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	x = vector( xbuf, xbuf.length, 0, 0 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	v = dapxsumkbn( [ x, alpha ] );
	expected = xbuf.length * ( xbuf[ 0 ] + 5.0 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var alpha;
	var xbuf;
	var x;
	var v;

	xbuf = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);
	x = vector( xbuf, 4, 2, 1 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	v = dapxsumkbn( [ x, alpha ] );
	t.strictEqual( v, 25.0, 'returns expected value' );

	t.end();
});
