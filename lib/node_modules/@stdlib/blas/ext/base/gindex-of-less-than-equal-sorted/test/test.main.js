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
var Float64Array = require( '@stdlib/array/float64' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gindexOfLessThanEqualSorted = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gindexOfLessThanEqualSorted, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( gindexOfLessThanEqualSorted.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function returns the index of the first element in a sorted strided array which is less than or equal to a provided search element', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the first element in a sorted strided array which is less than or equal to a provided search element (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the first element in a sorted strided array which is less than or equal to a provided search element when the search element is not present in the strided array', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];

	actual = gindexOfLessThanEqualSorted( x.length, 1.5, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the first element in a sorted strided array which is less than or equal to a provided search element when the search element is not present in the strided array (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	actual = gindexOfLessThanEqualSorted( x.length, 1.5, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if every indexed element in the array is greater than the search element', function test( t ) {
	var actual;
	var x;

	x = [ 2.0, 2.0, 2.0 ];

	actual = gindexOfLessThanEqualSorted( x.length, 1.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if every indexed element in the array is greater than the search element (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 2.0, 2.0, 2.0 ] );

	actual = gindexOfLessThanEqualSorted( x.length, 1.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 2.0, 3.0 ];

	actual = gindexOfLessThanEqualSorted( 0, 2.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfLessThanEqualSorted( -1, 2.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero (accessors)', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 2.0, 3.0 ];

	actual = gindexOfLessThanEqualSorted( 0, 2.0, toAccessorArray( x ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfLessThanEqualSorted( -1, 2.0, toAccessorArray( x ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if comparisons involve `NaN` values', function test( t ) {
	var actual;

	actual = gindexOfLessThanEqualSorted( 2, NaN, [ 0.0, 1.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfLessThanEqualSorted( 2, 0.0, [ NaN, NaN ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if comparisons involve `NaN` values (accessors)', function test( t ) {
	var actual;

	actual = gindexOfLessThanEqualSorted( 2, NaN, toAccessorArray( [ 0.0, 1.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfLessThanEqualSorted( 2, 0.0, toAccessorArray( [ NaN, NaN ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats `-0` and `+0` as equal', function test( t ) {
	var actual;

	actual = gindexOfLessThanEqualSorted( 1, -0.0, [ 0.0 ], 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfLessThanEqualSorted( 1, 0.0, [ -0.0 ], 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function treats `-0` and `+0` as equal (accessors)', function test( t ) {
	var actual;

	actual = gindexOfLessThanEqualSorted( 1, -0.0, toAccessorArray( [ 0.0 ] ), 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfLessThanEqualSorted( 1, 0.0, toAccessorArray( [ -0.0 ] ), 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 0
		9.0,
		2.0, // 1
		9.0,
		3.0  // 2
	];

	actual = gindexOfLessThanEqualSorted( 3, 2.0, x, 2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 0
		9.0,
		2.0, // 1
		9.0,
		3.0  // 2
	];

	actual = gindexOfLessThanEqualSorted( 3, 2.0, toAccessorArray( x ), 2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride', function test( t ) {
	var actual;
	var x;

	x = [
		3.0, // 2
		9.0,
		2.0, // 1
		9.0,
		1.0  // 0
	];

	actual = gindexOfLessThanEqualSorted( 3, 2.0, x, -2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		3.0, // 2
		9.0,
		2.0, // 1
		9.0,
		1.0  // 0
	];

	actual = gindexOfLessThanEqualSorted( 3, 2.0, toAccessorArray( x ), -2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 0
		9.0,
		2.0, // 1
		9.0,
		3.0  // 2
	];

	actual = gindexOfLessThanEqualSorted( 3, 2.0, x, 2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 0
		9.0,
		2.0, // 1
		9.0,
		3.0  // 2
	];

	actual = gindexOfLessThanEqualSorted( 3, 2.0, toAccessorArray( x ), 2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = new Float64Array( [ 9.0, 1.0, 2.0, 3.0, 4.0 ] );
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	actual = gindexOfLessThanEqualSorted( 3, 2.0, x1, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the first element in a sorted strided array which is less than or equal to a provided search element (descending order)', function test( t ) {
	var actual;
	var x;

	x = [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ];

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the first element in a sorted strided array which is less than or equal to a provided search element (descending order) (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the first element in a sorted strided array which is less than or equal to a provided search element when the search element is not present in the strided array (descending order)', function test( t ) {
	var actual;
	var x;

	x = [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ];

	actual = gindexOfLessThanEqualSorted( x.length, 1.5, x, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the first element in a sorted strided array which is less than or equal to a provided search element when the search element is not present in the strided array (descending order) (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );

	actual = gindexOfLessThanEqualSorted( x.length, 1.5, x, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if every indexed element in the array is greater than the search element (descending order)', function test( t ) {
	var actual;
	var x;

	x = [ 3.0, 2.0, 1.0 ];

	actual = gindexOfLessThanEqualSorted( x.length, 0.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if every indexed element in the array is greater than the search element (descending order) (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 3.0, 2.0, 1.0 ] );

	actual = gindexOfLessThanEqualSorted( x.length, 0.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride (descending order)', function test( t ) {
	var actual;
	var x;

	x = [
		3.0, // 0
		9.0,
		2.0, // 1
		9.0,
		1.0  // 2
	];

	actual = gindexOfLessThanEqualSorted( 3, 2.0, x, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride (descending order) (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		3.0, // 0
		9.0,
		2.0, // 1
		9.0,
		1.0  // 2
	];

	actual = gindexOfLessThanEqualSorted( 3, 2.0, toAccessorArray( x ), 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride (descending order)', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 2
		9.0,
		2.0, // 1
		9.0,
		3.0  // 0
	];

	actual = gindexOfLessThanEqualSorted( 3, 2.0, x, -2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride (descending order) (accessors)', function test( t ) {
	var actual;
	var x;

	x = [
		1.0, // 2
		9.0,
		2.0, // 1
		9.0,
		3.0  // 0
	];

	actual = gindexOfLessThanEqualSorted( 3, 2.0, toAccessorArray( x ), -2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets (descending order)', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = new Float64Array( [ 9.0, 4.0, 3.0, 2.0, 1.0 ] );
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	actual = gindexOfLessThanEqualSorted( 3, 3.0, x1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports input arrays containing `NaN` values', function test( t ) {
	var actual;
	var x;

	x = [ 4.0, 3.0, NaN, 1.0 ];

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	x = [ NaN, 3.0, 2.0, 1.0 ];

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = [ 3.0, 2.0, 1.0, NaN ];

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = [ 1.0, NaN, 3.0, 4.0 ];

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports input arrays containing `NaN` values (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 4.0, 3.0, NaN, 1.0 ] );

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	x = toAccessorArray( [ NaN, 3.0, 2.0, 1.0 ] );

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = toAccessorArray( [ 3.0, 2.0, 1.0, NaN ] );

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = toAccessorArray( [ 1.0, NaN, 3.0, 4.0 ] );

	actual = gindexOfLessThanEqualSorted( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});
