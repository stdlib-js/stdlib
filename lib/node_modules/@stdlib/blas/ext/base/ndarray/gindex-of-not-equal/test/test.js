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
var gindexOfNotEqual = require( './../lib' );


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
	t.strictEqual( typeof gindexOfNotEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first element in a one-dimensional ndarray which is not equal to a provided search element', function test( t ) {
	var searchElement;
	var actual;
	var x;

	x = vector( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ], 6, 1, 0 );

	searchElement = scalar2ndarray( 1.0, {
		'dtype': 'generic'
	});
	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	searchElement = scalar2ndarray( 2.0, {
		'dtype': 'generic'
	});
	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	searchElement = scalar2ndarray( 3.0, {
		'dtype': 'generic'
	});
	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	searchElement = scalar2ndarray( 4.0, {
		'dtype': 'generic'
	});
	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if every element in a one-dimensional ndarray is equal to a provided search element', function test( t ) {
	var searchElement;
	var actual;
	var x;

	x = vector( [ 2.0, 2.0, 2.0 ], 3, 1, 0 );
	searchElement = scalar2ndarray( 2.0, {
		'dtype': 'generic'
	});

	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function considers `NaN` elements to be not equal to a provided search element', function test( t ) {
	var searchElement;
	var actual;
	var x;

	x = vector( [ 1.0, NaN, 1.0 ], 3, 1, 0 );
	searchElement = scalar2ndarray( 1.0, {
		'dtype': 'generic'
	});

	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the first element if a provided search element is `NaN`', function test( t ) {
	var searchElement;
	var actual;
	var x;

	x = vector( [ NaN, 1.0 ], 2, 1, 0 );
	searchElement = scalar2ndarray( NaN, {
		'dtype': 'generic'
	});

	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function considers `-0` and `+0` to be equal', function test( t ) {
	var searchElement;
	var actual;
	var x;

	x = vector( [ -0.0, 0.0 ], 2, 1, 0 );
	searchElement = scalar2ndarray( 0.0, {
		'dtype': 'generic'
	});

	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-unit strides', function test( t ) {
	var searchElement;
	var actual;
	var x;

	x = vector( [ 2.0, 9.0, 2.0, 9.0, 3.0, 9.0 ], 3, 2, 0 );

	searchElement = scalar2ndarray( 2.0, {
		'dtype': 'generic'
	});
	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	searchElement = scalar2ndarray( 9.0, {
		'dtype': 'generic'
	});
	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having negative strides', function test( t ) {
	var searchElement;
	var actual;
	var x;

	x = vector( [ 2.0, 1.0, 2.0, 2.0, 3.0, 3.0 ], 6, -1, 5 );

	searchElement = scalar2ndarray( 3.0, {
		'dtype': 'generic'
	});
	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 2, 'returns expected value' );

	searchElement = scalar2ndarray( 1.0, {
		'dtype': 'generic'
	});
	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports one-dimensional ndarrays having non-zero offsets', function test( t ) {
	var searchElement;
	var actual;
	var x;

	x = vector( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ], 3, 1, 3 );
	searchElement = scalar2ndarray( 2.0, {
		'dtype': 'generic'
	});

	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an empty one-dimensional ndarray', function test( t ) {
	var searchElement;
	var actual;
	var x;

	x = vector( [], 0, 1, 0 );
	searchElement = scalar2ndarray( 2.0, {
		'dtype': 'generic'
	});

	actual = gindexOfNotEqual( [ x, searchElement ] );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
