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
var gindexOfSameValue = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gindexOfSameValue, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gindexOfSameValue.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function returns the first index of an element which has the same value as a provided search element', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];

	// Nonnegative stride...
	actual = gindexOfSameValue( x.length, 1.0, x, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfSameValue( x.length-1, 2.0, x, 1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = gindexOfSameValue( x.length-2, 3.0, x, 1, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfSameValue( x.length-2, 4.0, x, 1, 2 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = gindexOfSameValue( x.length, 1.0, x, -1, x.length-1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = gindexOfSameValue( 3, 2.0, x, -2, x.length-1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = gindexOfSameValue( 3, 1.0, x, -2, x.length-2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfSameValue( x.length, 4.0, x, -1, x.length-1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which has the same value as a provided search element (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	// Nonnegative stride...
	actual = gindexOfSameValue( x.length, 1.0, x, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfSameValue( x.length-1, 2.0, x, 1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = gindexOfSameValue( x.length-2, 3.0, x, 1, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfSameValue( x.length-2, 4.0, x, 1, 2 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = gindexOfSameValue( x.length, 1.0, x, -1, x.length-1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = gindexOfSameValue( 3, 2.0, x, -2, x.length-1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = gindexOfSameValue( 3, 1.0, x, -2, x.length-2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfSameValue( x.length, 4.0, x, -1, x.length-1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;

	actual = gindexOfSameValue( 0, 2.0, [ 1.0, 2.0, 3.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfSameValue( -1, 2.0, [ 1.0, 2.0, 3.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 2.0, 3.0 ] );

	actual = gindexOfSameValue( 0, 2.0, x, 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfSameValue( -1, 2.0, x, 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index when searching for `NaN`', function test( t ) {
	var actual;

	actual = gindexOfSameValue( 1, NaN, [ NaN ], 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index when searching for `NaN` (accessors)', function test( t ) {
	var actual;

	actual = gindexOfSameValue( 1, NaN, toAccessorArray( [ NaN ] ), 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function distinguishes between -0 and +0', function test( t ) {
	var actual;

	actual = gindexOfSameValue( 1, 0.0, [ -0.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfSameValue( 1, -0.0, [ 0.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfSameValue( 1, 0.0, [ 0.0 ], 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfSameValue( 1, -0.0, [ -0.0 ], 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function distinguishes between -0 and +0 (accessors)', function test( t ) {
	var actual;

	actual = gindexOfSameValue( 1, 0.0, toAccessorArray( [ -0.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfSameValue( 1, -0.0, toAccessorArray( [ 0.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfSameValue( 1, 0.0, toAccessorArray( [ 0.0 ] ), 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfSameValue( 1, -0.0, toAccessorArray( [ -0.0 ] ), 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];

	actual = gindexOfSameValue( 3, 3.0, x, 2, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);

	actual = gindexOfSameValue( 3, 3.0, x, 2, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];

	actual = gindexOfSameValue( 3, 3.0, x, -2, 4 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);

	actual = gindexOfSameValue( 3, 3.0, x, -2, 4 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var actual;
	var x;

	x = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	];

	actual = gindexOfSameValue( 4, 2.0, x, 2, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` offset (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);

	actual = gindexOfSameValue( 4, 2.0, x, 2, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	];

	actual = gindexOfSameValue( 3, 3.0, x, 2, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});
