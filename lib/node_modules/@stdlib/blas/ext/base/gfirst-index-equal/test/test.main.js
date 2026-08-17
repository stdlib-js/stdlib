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
var gfirstIndexEqual = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gfirstIndexEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gfirstIndexEqual.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function returns the first index of an element which equals a corresponding element in another array', function test( t ) {
	var actual;
	var x;
	var y;

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ];

	// Nonnegative stride...
	actual = gfirstIndexEqual( x.length, x, 1, y, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 2.0, 0.0, 3.0, 0.0 ];

	actual = gfirstIndexEqual( x.length, x, 1, y, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 3.0, 0.0 ];

	actual = gfirstIndexEqual( x.length, x, 1, y, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( x.length, x, 1, y, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	y = [ 0.0, 0.0, 3.0, 0.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( 3, x, 2, y, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	// Negative stride...
	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 1.0, 0.0, 0.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( x.length, x, -1, y, -1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 2.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( x.length, x, -1, y, -1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 3.0 ];

	actual = gfirstIndexEqual( x.length, x, -1, y, -1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( x.length, x, -1, y, -1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which equals a corresponding element in another array (accessors)', function test( t ) {
	var actual;
	var x;
	var y;

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ] );

	// Nonnegative stride...
	actual = gfirstIndexEqual( x.length, x, 1, y, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 2.0, 0.0, 3.0, 0.0 ] );

	actual = gfirstIndexEqual( x.length, x, 1, y, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 3.0, 0.0 ] );

	actual = gfirstIndexEqual( x.length, x, 1, y, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = gfirstIndexEqual( x.length, x, 1, y, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 1.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = gfirstIndexEqual( x.length, x, -1, y, -1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 0.0, 2.0, 0.0, 0.0 ] );

	actual = gfirstIndexEqual( x.length, x, -1, y, -1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 3.0 ] );

	actual = gfirstIndexEqual( x.length, x, -1, y, -1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = gfirstIndexEqual( x.length, x, -1, y, -1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 0, [ 1.0, 2.0, 3.0 ], 1, [ 1.0, 2.0, 3.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfirstIndexEqual( -1, [ 1.0, 2.0, 3.0 ], 1, [ 1.0, 2.0, 3.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero (accessors)', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfirstIndexEqual( -1, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element equal to `NaN`', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 1, [ NaN ], 1, [ NaN ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element equal to `NaN` (accessors)', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 1, toAccessorArray( [ NaN ] ), 1, toAccessorArray( [ NaN ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats -0 and +0 as equal', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 1, [ -0.0 ], 1, [ 0.0 ], 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function treats -0 and +0 as equal (accessors)', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 1, toAccessorArray( [ -0.0 ] ), 1, toAccessorArray( [ 0.0 ] ), 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		0.0, // 0
		3.0, // 1
		0.0, // 2
		0.0,
		0.0
	];

	actual = gfirstIndexEqual( 3, x, 2, y, 1 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		0.0, // 0
		3.0, // 1
		0.0, // 2
		0.0,
		0.0
	];

	actual = gfirstIndexEqual( 3, toAccessorArray( x ), 2, toAccessorArray( y ), 1 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		0.0, // 0
		0.0,
		2.0, // 1
		0.0,
		0.0  // 2
	];

	actual = gfirstIndexEqual( 3, x, 1, y, 2 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		0.0, // 0
		0.0,
		2.0, // 1
		0.0,
		0.0  // 2
	];

	actual = gfirstIndexEqual( 3, toAccessorArray( x ), 1, toAccessorArray( y ), 2 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		0.0, // 2
		3.0, // 1
		0.0, // 0
		0.0,
		0.0
	];

	actual = gfirstIndexEqual( 3, x, -2, y, -1 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		0.0, // 2
		3.0, // 1
		0.0, // 0
		0.0,
		0.0
	];

	actual = gfirstIndexEqual( 3, toAccessorArray( x ), -2, toAccessorArray( y ), -1 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	];
	y = [
		5.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	];

	actual = gfirstIndexEqual( 3, x, 2, y, -1 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var actual;
	var x0;
	var y0;
	var x1;
	var y1;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	y0 = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 0
		4.0, // 1
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at 4th element

	actual = gfirstIndexEqual( 3, x1, -2, y1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});
