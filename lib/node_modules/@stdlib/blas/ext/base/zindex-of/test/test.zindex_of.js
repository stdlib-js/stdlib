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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zindexOf = require( './../lib/zindex_of.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zindexOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array([
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		5.0,
		6.0,
		5.0,
		6.0
	]);

	// Nonnegative stride...
	actual = zindexOf( x.length, new Complex128( 1.0, 2.0 ), x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = zindexOf( x.length, new Complex128( 3.0, 4.0 ), x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = zindexOf( x.length, new Complex128( 5.0, 6.0 ), x, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = zindexOf( x.length, new Complex128( 7.0, 8.0 ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = zindexOf( x.length, new Complex128( 1.0, 2.0 ), x, -1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = zindexOf( x.length, new Complex128( 3.0, 4.0 ), x, -1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = zindexOf( x.length, new Complex128( 5.0, 6.0 ), x, -1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = zindexOf( x.length, new Complex128( 7.0, 8.0 ), x, -1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);

	actual = zindexOf( 0, new Complex128( 3.0, 4.0 ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = zindexOf( -1, new Complex128( 3.0, 4.0 ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride length equal to zero', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array([
		3.0,
		4.0,
		1.0,
		2.0,
		5.0,
		6.0
	]);

	actual = zindexOf( x.length, new Complex128( 3.0, 4.0 ), x, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = zindexOf( x.length, new Complex128( 1.0, 2.0 ), x, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element having a `NaN` component', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array( [ NaN, NaN ] );

	actual = zindexOf( 1, new Complex128( NaN, NaN ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = zindexOf( 1, new Complex128( NaN, 0.0 ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = zindexOf( 1, new Complex128( 0.0, NaN ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
