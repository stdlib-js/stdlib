/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var gindexOf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gindexOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( gindexOf.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];

	// Nonnegative stride...
	actual = gindexOf( x.length, 1.0, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOf( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOf( x.length, 3.0, x, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = gindexOf( x.length, 4.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = gindexOf( x.length, 1.0, x, -1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = gindexOf( x.length, 2.0, x, -1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOf( x.length, 3.0, x, -1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOf( x.length, 4.0, x, -1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	// Nonnegative stride...
	actual = gindexOf( x.length, 1.0, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOf( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOf( x.length, 3.0, x, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = gindexOf( x.length, 4.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = gindexOf( x.length, 1.0, x, -1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = gindexOf( x.length, 2.0, x, -1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOf( x.length, 3.0, x, -1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOf( x.length, 4.0, x, -1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;

	actual = gindexOf( 0, 2.0, [ 1.0, 2.0, 3.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOf( -1, 2.0, [ 1.0, 2.0, 3.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element equal to `NaN`', function test( t ) {
	var actual;

	actual = gindexOf( 1, NaN, [ NaN ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element equal to `NaN` (accessors)', function test( t ) {
	var actual;

	actual = gindexOf( 1, NaN, toAccessorArray( [ NaN ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
