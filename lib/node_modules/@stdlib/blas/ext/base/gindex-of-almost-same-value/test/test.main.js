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
var EPS = require( '@stdlib/constants/float64/eps' );
var gindexOfAlmostSameValue = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gindexOfAlmostSameValue, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gindexOfAlmostSameValue.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function returns the first index of an element which is almost the same value as a provided search element', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];

	// Nonnegative stride...
	actual = gindexOfAlmostSameValue( x.length, 1.0, 1, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 2.0, 1, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 3.0, 1, x, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 4.0, 1, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = gindexOfAlmostSameValue( x.length, 1.0, 1, x, -1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 2.0, 1, x, -1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 3.0, 1, x, -1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 4.0, 1, x, -1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which is almost the same value as a provided search element (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	// Nonnegative stride...
	actual = gindexOfAlmostSameValue( x.length, 1.0, 1, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 2.0, 1, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 3.0, 1, x, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 4.0, 1, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = gindexOfAlmostSameValue( x.length, 1.0, 1, x, -1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 2.0, 1, x, -1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 3.0, 1, x, -1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 4.0, 1, x, -1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a maximum allowed ULP difference', function test( t ) {
	var actual;
	var x;

	x = [ 1.0+( 4.0*EPS ), 1.0+( 2.0*EPS ), 1.0+EPS ];

	actual = gindexOfAlmostSameValue( x.length, 1.0, 0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 1.0, 1, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 1.0, 2, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 1.0, 4, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a maximum allowed ULP difference (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0+( 4.0*EPS ), 1.0+( 2.0*EPS ), 1.0+EPS ] );

	actual = gindexOfAlmostSameValue( x.length, 1.0, 0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 1.0, 1, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 1.0, 2, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = gindexOfAlmostSameValue( x.length, 1.0, 4, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;

	actual = gindexOfAlmostSameValue( 0, 2.0, 1, [ 1.0, 2.0, 3.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfAlmostSameValue( -1, 2.0, 1, [ 1.0, 2.0, 3.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero (accessors)', function test( t ) {
	var actual;

	actual = gindexOfAlmostSameValue( 0, 2.0, 1, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gindexOfAlmostSameValue( -1, 2.0, 1, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats `NaN` values as the same', function test( t ) {
	var actual;

	actual = gindexOfAlmostSameValue( 1, NaN, 1, [ NaN ], 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfAlmostSameValue( 1, NaN, 1, [ 1.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats `NaN` values as the same (accessors)', function test( t ) {
	var actual;

	actual = gindexOfAlmostSameValue( 1, NaN, 1, toAccessorArray( [ NaN ] ), 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = gindexOfAlmostSameValue( 1, NaN, 1, toAccessorArray( [ 1.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats -0 and +0 as distinct', function test( t ) {
	var actual;

	actual = gindexOfAlmostSameValue( 1, 0.0, 0, [ -0.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats -0 and +0 as distinct (accessors)', function test( t ) {
	var actual;

	actual = gindexOfAlmostSameValue( 1, 0.0, 0, toAccessorArray( [ -0.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

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

	actual = gindexOfAlmostSameValue( 3, 3.0, 1, x, 2 );
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

	actual = gindexOfAlmostSameValue( 3, 3.0, 1, x, 2 );
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

	actual = gindexOfAlmostSameValue( 3, 3.0, 1, x, -2 );
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

	actual = gindexOfAlmostSameValue( 3, 3.0, 1, x, -2 );
	t.strictEqual( actual, 1, 'returns expected value' );

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

	actual = gindexOfAlmostSameValue( 3, 3.0, 1, x, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var actual;
	var x0;
	var x1;

	// Initial array...
	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);

	// Create offset view...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	actual = gindexOfAlmostSameValue( 3, 4.0, 1, x1, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});
