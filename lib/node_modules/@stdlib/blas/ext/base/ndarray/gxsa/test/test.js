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
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var gxsa = require( './../lib' );


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
	t.strictEqual( typeof gxsa, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function subtracts a scalar constant from each element', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = [
		-2.0, // 0
		1.0,  // 1
		3.0,  // 2
		-5.0, // 3
		4.0   // 4
	];
	x = vector( xbuf, 5, 1, 0 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'generic'
	});

	actual = gxsa( [ x, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [
		-7.0,  // -2.0 - 5.0
		-4.0,  // 1.0 - 5.0
		-2.0,  // 3.0 - 5.0
		-10.0, // -5.0 - 5.0
		-1.0   // 4.0 - 5.0
	];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

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
	x = vector( xbuf, 4, 2, 0 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'generic'
	});

	actual = gxsa( [ x, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [
		-7.0, // 0
		1.0,
		-2.0, // 1
		-5.0,
		-1.0, // 2
		0.0,
		-6.0, // 3
		-3.0
	];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = [
		-2.0, // 4
		1.0,  // 3
		3.0,  // 2
		-5.0, // 1
		4.0   // 0
	];
	x = vector( xbuf, 5, -1, 4 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'generic'
	});

	actual = gxsa( [ x, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [
		-7.0,  // 4
		-4.0,  // 3
		-2.0,  // 2
		-10.0, // 1
		-1.0   // 0
	];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = [
		1.0,
		-2.0,
		3.0,  // 0
		-5.0, // 1
		4.0,  // 2
		0.0
	];
	x = vector( xbuf, 3, 1, 2 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'generic'
	});

	actual = gxsa( [ x, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [
		1.0,
		-2.0,
		-2.0,  // 0
		-10.0, // 1
		-1.0,  // 2
		0.0
	];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the input ndarray is empty', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = [];
	x = vector( xbuf, 0, 1, 0 );
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'generic'
	});

	actual = gxsa( [ x, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = [];
	t.deepEqual( xbuf, expected, 'returns expected value' );

	t.end();
});
