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
var gjoinBetween = require( './../lib' );


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
	t.strictEqual( typeof gjoinBetween, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a string by joining one-dimensional ndarray elements using specified separators', function test( t ) {
	var separators;
	var actual;
	var prefix;
	var suffix;
	var x;

	x = vector( [ 1, 2, 3, 4 ], 4, 1, 0 );
	prefix = scalar2ndarray( 'op: ', {
		'dtype': 'generic'
	});
	suffix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	separators = vector( [ ' + ', ' - ', ' != ' ], 3, 1, 0 );

	actual = gjoinBetween( [ x, prefix, suffix, separators ] );
	t.strictEqual( actual, 'op: 1 + 2 - 3 != 4', 'returns expected value' );

	prefix = scalar2ndarray( '[', {
		'dtype': 'generic'
	});
	suffix = scalar2ndarray( ']', {
		'dtype': 'generic'
	});

	actual = gjoinBetween( [ x, prefix, suffix, separators ] );
	t.strictEqual( actual, '[1 + 2 - 3 != 4]', 'returns expected value' );

	prefix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	suffix = scalar2ndarray( '', {
		'dtype': 'generic'
	});

	actual = gjoinBetween( [ x, prefix, suffix, separators ] );
	t.strictEqual( actual, '1 + 2 - 3 != 4', 'returns expected value' );

	t.end();
});

tape( 'the function returns the prefix and suffix joined together if the number of elements is zero', function test( t ) {
	var separators;
	var actual;
	var prefix;
	var suffix;
	var x;

	x = vector( [ 1, 2, 3 ], 0, 1, 0 );
	prefix = scalar2ndarray( 'a', {
		'dtype': 'generic'
	});
	suffix = scalar2ndarray( 'b', {
		'dtype': 'generic'
	});
	separators = vector( [ ',', ',' ], 2, 1, 0 );

	actual = gjoinBetween( [ x, prefix, suffix, separators ] );
	t.strictEqual( actual, 'ab', 'returns expected value' );

	prefix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	suffix = scalar2ndarray( '', {
		'dtype': 'generic'
	});

	actual = gjoinBetween( [ x, prefix, suffix, separators ] );
	t.strictEqual( actual, '', 'returns expected value' );

	t.end();
});

tape( 'the function supports a single element', function test( t ) {
	var separators;
	var actual;
	var prefix;
	var suffix;
	var x;

	x = vector( [ 1 ], 1, 1, 0 );
	prefix = scalar2ndarray( '<', {
		'dtype': 'generic'
	});
	suffix = scalar2ndarray( '>', {
		'dtype': 'generic'
	});
	separators = vector( [ ',' ], 1, 1, 0 );

	actual = gjoinBetween( [ x, prefix, suffix, separators ] );
	t.strictEqual( actual, '<1>', 'returns expected value' );

	t.end();
});

tape( 'the function supports ndarray strides', function test( t ) {
	var separators;
	var actual;
	var prefix;
	var suffix;
	var x;

	x = vector( [ 1, 2, 3, 4, 5, 6 ], 3, 2, 0 );
	prefix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	suffix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	separators = vector( [ ',', 'a', '-', 'b' ], 2, 2, 0 );

	actual = gjoinBetween( [ x, prefix, suffix, separators ] );
	t.strictEqual( actual, '1,3-5', 'returns expected value' );

	t.end();
});

tape( 'the function supports ndarray offsets', function test( t ) {
	var separators;
	var actual;
	var prefix;
	var suffix;
	var x;

	x = vector( [ 1, 2, 3, 4, 5, 6 ], 3, 1, 3 );
	prefix = scalar2ndarray( '[ ', {
		'dtype': 'generic'
	});
	suffix = scalar2ndarray( ' ]', {
		'dtype': 'generic'
	});
	separators = vector( [ 'a', ' | ', ' | ' ], 2, 1, 1 );

	actual = gjoinBetween( [ x, prefix, suffix, separators ] );
	t.strictEqual( actual, '[ 4 | 5 | 6 ]', 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var separators;
	var actual;
	var prefix;
	var suffix;
	var x;

	x = vector( [ 1, 2, 3, 4, 5, 6 ], 6, -1, 5 );
	prefix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	suffix = scalar2ndarray( '', {
		'dtype': 'generic'
	});
	separators = vector( [ ',', '-', '|', '~', '=' ], 5, 1, 0 );

	actual = gjoinBetween( [ x, prefix, suffix, separators ] );
	t.strictEqual( actual, '6,5-4|3~2=1', 'returns expected value' );

	t.end();
});
