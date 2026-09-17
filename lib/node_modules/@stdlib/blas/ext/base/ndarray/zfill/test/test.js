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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var getData = require( '@stdlib/ndarray/data-buffer' );
var zfill = require( './../lib' );


// FUNCTIONS //

/**
* Returns a one-dimensional ndarray.
*
* @private
* @param {Complex128Array} buffer - underlying data buffer
* @param {NonNegativeInteger} length - number of indexed elements
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - index offset
* @returns {ndarray} one-dimensional ndarray
*/
function vector( buffer, length, stride, offset ) {
	return new ndarray( 'complex128', buffer, [ length ], [ stride ], offset, 'row-major' );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zfill, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function fills an ndarray with a specified scalar constant', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, -2.0, 3.0, 4.0, -6.0, 5.0, 7.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 4, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = vector( xbuf, 2, 2, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 5.0, 5.0, 3.0, 4.0, 5.0, 5.0, 7.0, 8.0 ] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a negative stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = vector( xbuf, 2, -2, 2 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 5.0, 5.0, 3.0, 4.0, 5.0, 5.0, 7.0, 8.0 ] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an input ndarray having a non-zero offset', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, -2.0, 3.0, 4.0, -6.0, 5.0, 7.0 ] );
	x = vector( xbuf, 2, 1, 2 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 1.0, 2.0, -2.0, 3.0, 5.0, 5.0, 5.0, 5.0 ] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a nonnegative starting index', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 4, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 1.0, 2.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative starting index', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( -3, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 4, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 1.0, 2.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a nonnegative ending index', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 3, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 7.0, 8.0 ] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative ending index', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( -1, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 7.0, 8.0 ] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function clamps out-of-bounds starting and ending indices', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( -10, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 10, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if a resolved starting index is greater than or equal to a resolved ending index, the function returns the input ndarray unchanged', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	x = vector( xbuf, 4, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	start = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 2, {
		'dtype': 'generic'
	});
	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	start = scalar2ndarray( 3, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	start = scalar2ndarray( 5, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 4, {
		'dtype': 'generic'
	});
	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( -10, {
		'dtype': 'generic'
	});
	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a fill range for an input ndarray having a non-unit stride', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [ 1.0, 2.0, -2.0, 3.0, 4.0, -6.0, 5.0, 7.0 ] );
	x = vector( xbuf, 2, 2, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( 1, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 2, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [ 1.0, 2.0, -2.0, 3.0, 5.0, 5.0, 5.0, 7.0 ] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the input ndarray unchanged when the input ndarray is empty', function test( t ) {
	var expected;
	var actual;
	var alpha;
	var start;
	var xbuf;
	var end;
	var x;

	xbuf = new Complex128Array( [] );
	x = vector( xbuf, 0, 1, 0 );
	alpha = scalar2ndarray( new Complex128( 5.0, 5.0 ), {
		'dtype': 'complex128'
	});
	start = scalar2ndarray( 0, {
		'dtype': 'generic'
	});
	end = scalar2ndarray( 0, {
		'dtype': 'generic'
	});

	actual = zfill( [ x, alpha, start, end ] );
	t.strictEqual( actual, x, 'returns expected value' );

	expected = new Complex128Array( [] );
	t.strictEqual( isSameComplex128Array( getData( actual ), expected ), true, 'returns expected value' );

	t.end();
});
