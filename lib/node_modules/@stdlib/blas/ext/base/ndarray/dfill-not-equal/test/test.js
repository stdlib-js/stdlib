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
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var Float64Array = require( '@stdlib/array/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var dfillNotEqual = require( './../lib' );


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
	t.strictEqual( typeof dfillNotEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function replaces elements not equal to a provided search element', function test( t ) {
	var searchElement;
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, -2.0, 3.0, 0.0, 4.0, -6.0 ] );
	x = vector( xbuf, 6, 1, 0 );
	searchElement = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	actual = dfillNotEqual( [ x, searchElement, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 5.0, 5.0, 0.0, 5.0, 5.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var searchElement;
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, -2.0, 3.0, 0.0, 4.0, -6.0 ] );
	x = vector( xbuf, 3, 2, 0 );
	searchElement = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	actual = dfillNotEqual( [ x, searchElement, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 0.0, -2.0, 5.0, 0.0, 5.0, -6.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var searchElement;
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, -2.0, 3.0, 0.0, 4.0, -6.0 ] );
	x = vector( xbuf, 3, -2, 4 );
	searchElement = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	actual = dfillNotEqual( [ x, searchElement, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 0.0, -2.0, 5.0, 0.0, 5.0, -6.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var searchElement;
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, -2.0, 3.0, 0.0, 4.0, -6.0 ] );
	x = vector( xbuf, 3, 1, 3 );
	searchElement = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	actual = dfillNotEqual( [ x, searchElement, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 0.0, -2.0, 3.0, 0.0, 5.0, 5.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if all elements are equal to a provided search element, the function returns the input ndarray unchanged', function test( t ) {
	var searchElement;
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	searchElement = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	actual = dfillNotEqual( [ x, searchElement, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a search element equal to `NaN`, the function replaces all elements', function test( t ) {
	var searchElement;
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ NaN, 1.0, NaN ] );
	x = vector( xbuf, 3, 1, 0 );
	searchElement = scalar2ndarray( NaN, {
		'dtype': 'float64'
	});
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	actual = dfillNotEqual( [ x, searchElement, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 5.0, 5.0, 5.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function replaces `NaN` elements', function test( t ) {
	var searchElement;
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ NaN, 0.0, NaN ] );
	x = vector( xbuf, 3, 1, 0 );
	searchElement = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	actual = dfillNotEqual( [ x, searchElement, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ 5.0, 0.0, 5.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function considers `-0` and `+0` to be the same value', function test( t ) {
	var searchElement;
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = new Float64Array( [ -0.0, 1.0, 0.0, -0.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	searchElement = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	actual = dfillNotEqual( [ x, searchElement, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ -0.0, 5.0, 0.0, -0.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	xbuf = new Float64Array( [ -0.0, 1.0, 0.0, -0.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	searchElement = scalar2ndarray( -0.0, {
		'dtype': 'float64'
	});

	actual = dfillNotEqual( [ x, searchElement, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [ -0.0, 5.0, 0.0, -0.0 ] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the input ndarray is empty', function test( t ) {
	var searchElement;
	var expected;
	var actual;
	var alpha;
	var xbuf;
	var x;

	xbuf = new Float64Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	searchElement = scalar2ndarray( 0.0, {
		'dtype': 'float64'
	});
	alpha = scalar2ndarray( 5.0, {
		'dtype': 'float64'
	});

	actual = dfillNotEqual( [ x, searchElement, alpha ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Float64Array( [] );
	t.strictEqual( isSameFloat64Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});
