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
var Complex128Array = require( '@stdlib/array/complex128' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gconjoin = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gconjoin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( gconjoin.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function returns a string created by joining strided array elements into a human-readable list using a conjunction', function test( t ) {
	var actual;
	var x;

	x = [ 1, 2, 3, 4 ];

	// Three or more elements with Oxford comma...
	actual = gconjoin( x.length, 'result: ', '', 'and', true, x, 1 );
	t.strictEqual( actual, 'result: 1, 2, 3, and 4', 'returns expected value' );

	// Three or more elements without Oxford comma...
	actual = gconjoin( x.length, 'result: ', '', 'and', false, x, 1 );
	t.strictEqual( actual, 'result: 1, 2, 3 and 4', 'returns expected value' );

	// Two elements...
	actual = gconjoin( 2, 'result: ', '', 'and', true, x, 1 );
	t.strictEqual( actual, 'result: 1 and 2', 'returns expected value' );

	// Single element...
	actual = gconjoin( 1, 'result: ', '', 'and', true, x, 1 );
	t.strictEqual( actual, 'result: 1', 'returns expected value' );

	// Empty conjunction...
	actual = gconjoin( x.length, '[ ', ' ]', '', true, x, 1 );
	t.strictEqual( actual, '[ 1, 2, 3, 4 ]', 'returns expected value' );

	// Prefix and suffix...
	actual = gconjoin( 3, '(', ')', 'or', false, [ 1, 2, 3 ], 1 );
	t.strictEqual( actual, '(1, 2 or 3)', 'returns expected value' );

	// Nonnegative stride...
	actual = gconjoin( 3, '', '', 'and', true, [ 1, 2, 3, 4, 5, 6 ], 2 );
	t.strictEqual( actual, '1, 3, and 5', 'returns expected value' );

	// Negative stride...
	actual = gconjoin( 3, '', '', 'and', true, [ 1, 2, 3, 4, 5, 6 ], -2 );
	t.strictEqual( actual, '5, 3, and 1', 'returns expected value' );

	// Null and undefined values...
	x = [ 1, null, 3, undefined, 5 ];
	actual = gconjoin( x.length, '', '', 'and', true, x, 1 );
	t.strictEqual( actual, '1, , 3, , and 5', 'returns expected value' );

	t.end();
});

tape( 'the function returns a string created by joining strided array elements into a human-readable list using a conjunction (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1, 2, 3, 4 ] );

	// Three or more elements with Oxford comma...
	actual = gconjoin( x.length, 'result: ', '', 'and', true, x, 1 );
	t.strictEqual( actual, 'result: 1, 2, 3, and 4', 'returns expected value' );

	// Three or more elements without Oxford comma...
	actual = gconjoin( x.length, 'result: ', '', 'and', false, x, 1 );
	t.strictEqual( actual, 'result: 1, 2, 3 and 4', 'returns expected value' );

	// Two elements...
	actual = gconjoin( 2, 'result: ', '', 'and', true, x, 1 );
	t.strictEqual( actual, 'result: 1 and 2', 'returns expected value' );

	// Single element...
	actual = gconjoin( 1, 'result: ', '', 'and', true, x, 1 );
	t.strictEqual( actual, 'result: 1', 'returns expected value' );

	// Empty conjunction...
	actual = gconjoin( x.length, '[ ', ' ]', '', true, x, 1 );
	t.strictEqual( actual, '[ 1, 2, 3, 4 ]', 'returns expected value' );

	// Nonnegative stride...
	x = toAccessorArray( [ 1, 2, 3, 4, 5, 6 ] );
	actual = gconjoin( 3, '', '', 'and', true, x, 2 );
	t.strictEqual( actual, '1, 3, and 5', 'returns expected value' );

	// Negative stride...
	x = toAccessorArray( [ 1, 2, 3, 4 ] );
	actual = gconjoin( x.length, '', '', 'and', true, x, -1 );
	t.strictEqual( actual, '4, 3, 2, and 1', 'returns expected value' );

	// Null and undefined values...
	x = toAccessorArray( [ 1, null, 3, undefined, 5 ] );
	actual = gconjoin( x.length, '', '', 'and', true, x, 1 );
	t.strictEqual( actual, '1, , 3, , and 5', 'returns expected value' );

	t.end();
});

tape( 'the function returns a string created by joining strided array elements into a human-readable list using a conjunction (complex128)', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] );

	// Unit stride...
	actual = gconjoin( x.length, '', '', 'and', true, x, 1 );
	t.strictEqual( actual, '1 + 2i, 3 + 4i, and 5 + 6i', 'returns expected value' );

	// Non-unit stride...
	actual = gconjoin( 2, '', '', 'and', true, x, 2 );
	t.strictEqual( actual, '1 + 2i and 5 + 6i', 'returns expected value' );

	t.end();
});

tape( 'the function returns the prefix followed by the suffix if provided an `N` parameter less than or equal to zero', function test( t ) {
	var actual;

	actual = gconjoin( 0, '', '', 'and', true, [ 1, 2, 3 ], 1 );
	t.strictEqual( actual, '', 'returns expected value' );

	actual = gconjoin( -1, '', '', 'and', true, [ 1, 2, 3 ], 1 );
	t.strictEqual( actual, '', 'returns expected value' );

	actual = gconjoin( 0, '[', ']', 'and', true, [ 1, 2, 3 ], 1 );
	t.strictEqual( actual, '[]', 'returns expected value' );

	actual = gconjoin( -1, '[ ', ' ]', 'and', true, [ 1, 2, 3 ], 1 );
	t.strictEqual( actual, '[  ]', 'returns expected value' );

	t.end();
});

tape( 'the function returns the prefix followed by the suffix if provided an `N` parameter less than or equal to zero (accessors)', function test( t ) {
	var actual;

	actual = gconjoin( 0, '', '', 'and', true, toAccessorArray( [ 1, 2, 3 ] ), 1 );
	t.strictEqual( actual, '', 'returns expected value' );

	actual = gconjoin( -1, '', '', 'and', true, toAccessorArray( [ 1, 2, 3 ] ), 1 );
	t.strictEqual( actual, '', 'returns expected value' );

	actual = gconjoin( 0, '[', ']', 'and', true, toAccessorArray( [ 1, 2, 3 ] ), 1 );
	t.strictEqual( actual, '[]', 'returns expected value' );

	t.end();
});
