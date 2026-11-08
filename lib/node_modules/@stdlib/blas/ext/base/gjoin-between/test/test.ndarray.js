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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gjoinBetween = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gjoinBetween, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( gjoinBetween.length, 9, 'has expected arity' );
	t.end();
});

tape( 'the function returns the prefix and suffix joined together if provided an `N` parameter less than or equal to zero', function test( t ) {
	var actual;

	actual = gjoinBetween( 0, 'a', 'b', [ 1, 2, 3 ], 1, 0, [ ',', ',' ], 1, 0 );
	t.strictEqual( actual, 'ab', 'returns expected value' );

	actual = gjoinBetween( -1, 'a', 'b', [ 1, 2, 3 ], 1, 0, [ ',', ',' ], 1, 0 );
	t.strictEqual( actual, 'ab', 'returns expected value' );

	actual = gjoinBetween( 0, '', '', [ 1, 2, 3 ], 1, 0, [ ',', ',' ], 1, 0 );
	t.strictEqual( actual, '', 'returns expected value' );

	t.end();
});

tape( 'the function returns a string created by joining strided array elements using specified separators', function test( t ) {
	var actual;
	var sep;
	var x;

	x = [ 1, 2, 3, 4 ];
	sep = [ ' + ', ' - ', ' != ' ];

	// Basic usage...
	actual = gjoinBetween( x.length, 'op: ', '', x, 1, 0, sep, 1, 0 );
	t.strictEqual( actual, 'op: 1 + 2 - 3 != 4', 'returns expected value' );

	// With suffix...
	actual = gjoinBetween( x.length, '[', ']', x, 1, 0, sep, 1, 0 );
	t.strictEqual( actual, '[1 + 2 - 3 != 4]', 'returns expected value' );

	// Without prefix or suffix...
	actual = gjoinBetween( x.length, '', '', x, 1, 0, sep, 1, 0 );
	t.strictEqual( actual, '1 + 2 - 3 != 4', 'returns expected value' );

	// Single element...
	actual = gjoinBetween( 1, '<', '>', x, 1, 0, sep, 1, 0 );
	t.strictEqual( actual, '<1>', 'returns expected value' );

	// With offset for x and separators...
	x = [ 1, 2, 3, 4, 5, 6 ];
	sep = [ 'a', ',', '-' ];
	actual = gjoinBetween( 3, '', '', x, 1, 1, sep, 1, 1 );
	t.strictEqual( actual, '2,3-4', 'returns expected value' );

	// Nonnegative stride for x and separators...
	x = [ 1, 2, 3, 4, 5, 6 ];
	sep = [ ',', 'a', '-', 'b' ];
	actual = gjoinBetween( 3, '', '', x, 2, 0, sep, 2, 0 );
	t.strictEqual( actual, '1,3-5', 'returns expected value' );

	// Negative stride for x...
	x = [ 1, 2, 3, 4, 5, 6 ];
	sep = [ ',', '-', '|', '~', '=' ];
	actual = gjoinBetween( x.length, '', '', x, -1, x.length-1, sep, 1, 0 );
	t.strictEqual( actual, '6,5-4|3~2=1', 'returns expected value' );

	// Negative stride for separators...
	x = [ 1, 2, 3, 4 ];
	sep = [ ' + ', ' - ', ' != ' ];
	actual = gjoinBetween( x.length, '', '', x, 1, 0, sep, -1, sep.length-1 );
	t.strictEqual( actual, '1 != 2 - 3 + 4', 'returns expected value' );

	// Null and undefined values...
	x = [ 1, null, 3, undefined, 5 ];
	sep = [ ',', ',', ',', ',' ];
	actual = gjoinBetween( x.length, '', '', x, 1, 0, sep, 1, 0 );
	t.strictEqual( actual, '1,,3,,5', 'returns expected value' );

	t.end();
});

tape( 'the function returns a string created by joining strided array elements using specified separators (accessors)', function test( t ) {
	var actual;
	var sep;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	sep = toAccessorArray( [ ' + ', ' - ', ' != ' ] );

	// Basic usage...
	actual = gjoinBetween( x.length, 'op: ', '', x, 1, 0, sep, 1, 0 );
	t.strictEqual( actual, 'op: 1 + 2 - 3 != 4', 'returns expected value' );

	// With suffix...
	actual = gjoinBetween( x.length, '[', ']', x, 1, 0, sep, 1, 0 );
	t.strictEqual( actual, '[1 + 2 - 3 != 4]', 'returns expected value' );

	// Without prefix or suffix...
	actual = gjoinBetween( x.length, '', '', x, 1, 0, sep, 1, 0 );
	t.strictEqual( actual, '1 + 2 - 3 != 4', 'returns expected value' );

	// Single element...
	actual = gjoinBetween( 1, '<', '>', x, 1, 0, sep, 1, 0 );
	t.strictEqual( actual, '<1>', 'returns expected value' );

	// With offset for x and separators...
	x = toAccessorArray( [ 1, 2, 3, 4, 5, 6 ] );
	sep = toAccessorArray( [ 'a', ',', '-' ] );
	actual = gjoinBetween( 3, '', '', x, 1, 1, sep, 1, 1 );
	t.strictEqual( actual, '2,3-4', 'returns expected value' );

	// Nonnegative stride for x and separators...
	x = toAccessorArray( [ 1, 2, 3, 4, 5, 6 ] );
	sep = toAccessorArray( [ ',', 'a', '-', 'b' ] );
	actual = gjoinBetween( 3, '', '', x, 2, 0, sep, 2, 0 );
	t.strictEqual( actual, '1,3-5', 'returns expected value' );

	// Negative stride for x...
	x = toAccessorArray( [ 1, 2, 3, 4, 5, 6 ] );
	sep = toAccessorArray( [ ',', '-', '|', '~', '=' ] );
	actual = gjoinBetween( x.length, '', '', x, -1, x.length-1, sep, 1, 0 );
	t.strictEqual( actual, '6,5-4|3~2=1', 'returns expected value' );

	// Negative stride for separators...
	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	sep = toAccessorArray( [ ' + ', ' - ', ' != ' ] );
	actual = gjoinBetween( x.length, '', '', x, 1, 0, sep, -1, sep.length-1 );
	t.strictEqual( actual, '1 != 2 - 3 + 4', 'returns expected value' );

	// Null and undefined values...
	x = toAccessorArray( [ 1, null, 3, undefined, 5 ] );
	sep = toAccessorArray( [ ',', ',', ',', ',' ] );
	actual = gjoinBetween( x.length, '', '', x, 1, 0, sep, 1, 0 );
	t.strictEqual( actual, '1,,3,,5', 'returns expected value' );

	t.end();
});
