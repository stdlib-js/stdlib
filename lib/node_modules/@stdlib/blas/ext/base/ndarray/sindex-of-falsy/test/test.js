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
var Float32Array = require( '@stdlib/array/float32' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var sindexOfFalsy = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Float32Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'float32', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sindexOfFalsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first falsy element', function test( t ) {
	var fromIndex;
	var actual;
	var x;

	x = vector( new Float32Array( [ 1.0, 1.0, 0.0, 2.0, 0.0, 1.0 ] ), 6, 1, 0 );
	fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = vector( new Float32Array( [ 1.0, 1.0, 0.0, 2.0, 0.0, 1.0 ] ), 4, 1, 2 );
	fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = vector( new Float32Array( [ 1.0, 1.0, 0.0, 2.0, 0.0, 1.0 ] ), 3, 2, 0 );
	fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	// Negative stride...
	x = vector( new Float32Array( [ 1.0, 1.0, 0.0, 2.0, 0.0, 1.0 ] ), 6, -1, 5 );
	fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `fromIndex` parameter (nonnegative)', function test( t ) {
	var fromIndex;
	var actual;
	var x;

	x = vector( new Float32Array( [ 0.0, 1.0, 0.0, 1.0, 0.0, 1.0 ] ), 6, 1, 0 );

	fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	fromIndex = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	fromIndex = scalar2ndarray( 3, {
		'dtype': 'generic'
	});
	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 4, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `fromIndex` parameter (negative)', function test( t ) {
	var fromIndex;
	var actual;
	var x;

	x = vector( new Float32Array( [ 1.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] ), 6, 1, 0 );

	fromIndex = scalar2ndarray( -1, {
		'dtype': 'generic'
	});
	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 5, 'returns expected value' );

	fromIndex = scalar2ndarray( -2, {
		'dtype': 'generic'
	});
	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 5, 'returns expected value' );

	fromIndex = scalar2ndarray( -3, {
		'dtype': 'generic'
	});
	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 3, 'returns expected value' );

	fromIndex = scalar2ndarray( -7, {
		'dtype': 'generic'
	});
	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function treats `NaN` values as falsy', function test( t ) {
	var fromIndex;
	var actual;
	var x;

	x = vector( new Float32Array( [ 3.0, 5.0, NaN, 0.0 ] ), 4, 1, 0 );
	fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a falsy element', function test( t ) {
	var fromIndex;
	var actual;
	var x;

	x = vector( new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] ), 4, 1, 0 );
	fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an empty one-dimensional ndarray', function test( t ) {
	var fromIndex;
	var actual;
	var x;

	x = vector( new Float32Array( [] ), 0, 1, 0 );
	fromIndex = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a starting search index which is greater than or equal to number of elements in the input ndarray', function test( t ) {
	var fromIndex;
	var actual;
	var x;

	x = vector( new Float32Array( [ 0.0, 1.0, 0.0, 1.0, 0.0, 1.0 ] ), 6, 1, 0 );
	fromIndex = scalar2ndarray( 7, {
		'dtype': 'generic'
	});

	actual = sindexOfFalsy( [ x, fromIndex ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
