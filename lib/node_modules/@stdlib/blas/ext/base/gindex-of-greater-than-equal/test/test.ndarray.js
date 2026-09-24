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
var gindexOfGreaterThanEqual = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gindexOfGreaterThanEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gindexOfGreaterThanEqual.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function returns the first index of an element which is greater than or equal to a search element', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];

	// Nonnegative stride...
	actual = gindexOfGreaterThanEqual( x.length, 0.0, x, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length-1, 1.0, x, 1, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length-2, 2.0, x, 1, 2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length-2, 3.0, x, 1, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length-2, 4.0, x, 1, 2 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = gindexOfGreaterThanEqual( x.length, 0.0, x, -1, x.length-1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( 3, 1.0, x, -2, x.length-1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( 3, 2.0, x, -2, x.length-2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length, 3.0, x, -1, x.length-1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length, 4.0, x, -1, x.length-1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which is greater than or equal to a search element (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	// Nonnegative stride...
	actual = gindexOfGreaterThanEqual( x.length, 0.0, x, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length, 1.0, x, 1, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length, 2.0, x, 1, 2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length, 3.0, x, 1, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length, 4.0, x, 1, 2 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = gindexOfGreaterThanEqual( x.length, 0.0, x, -1, x.length-1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( 3, 1.0, x, -2, x.length-1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( 3, 2.0, x, -2, x.length-2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length, 3.0, x, -1, x.length-1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( x.length, 4.0, x, -1, x.length-1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', function test( t ) {
	var actual;

	actual = gindexOfGreaterThanEqual( 0, 2.0, [ 1.0, 2.0, 3.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( -1, 2.0, [ 1.0, 2.0, 3.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero (accessors)', function test( t ) {
	var actual;

	actual = gindexOfGreaterThanEqual( 0, 2.0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( -1, 2.0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if comparisons involve `NaN` values', function test( t ) {
	var actual;

	actual = gindexOfGreaterThanEqual( 1, NaN, [ 0.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( 1, 0.0, [ NaN ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if comparisons involve `NaN` values (accessors)', function test( t ) {
	var actual;

	actual = gindexOfGreaterThanEqual( 1, NaN, toAccessorArray( [ 0.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfGreaterThanEqual( 1, 0.0, toAccessorArray( [ NaN ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats -0 and +0 as equal', function test( t ) {
	var actual;

	actual = gindexOfGreaterThanEqual( 1, -0.0, [ 0.0 ], 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function treats -0 and +0 as equal (accessors)', function test( t ) {
	var actual;

	actual = gindexOfGreaterThanEqual( 1, -0.0, toAccessorArray( [ 0.0 ] ), 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var actual;
	var x;

	x = [
		0.0, // 0
		9.0,
		0.0, // 1
		9.0,
		1.0  // 2
	];

	actual = gindexOfGreaterThanEqual( 3, 1.0, x, 2, 0 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		0.0, // 0
		9.0,
		0.0, // 1
		9.0,
		1.0  // 2
	];

	actual = gindexOfGreaterThanEqual( 3, 1.0, toAccessorArray( x ), 2, 0 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 2
		9.0,
		0.0, // 1
		9.0,
		0.0  // 0
	];

	actual = gindexOfGreaterThanEqual( 3, 1.0, x, -2, 4 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 2
		9.0,
		0.0, // 1
		9.0,
		0.0  // 0
	];

	actual = gindexOfGreaterThanEqual( 3, 1.0, toAccessorArray( x ), -2, 4 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var actual;
	var x;

	x = [
		9.0,
		0.0, // 0
		0.0, // 1
		1.0  // 2
	];

	actual = gindexOfGreaterThanEqual( 3, 1.0, x, 1, 1 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		9.0,
		0.0, // 0
		0.0, // 1
		1.0  // 2
	];

	actual = gindexOfGreaterThanEqual( 3, 1.0, toAccessorArray( x ), 1, 1 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var actual;
	var x;

	x = [
		0.0, // 0
		9.0,
		0.0, // 1
		9.0,
		1.0, // 2
		9.0
	];

	actual = gindexOfGreaterThanEqual( 3, 1.0, x, 2, 0 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		0.0, // 0
		9.0,
		0.0, // 1
		9.0,
		1.0, // 2
		9.0
	];

	actual = gindexOfGreaterThanEqual( 3, 1.0, toAccessorArray( x ), 2, 0 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});
