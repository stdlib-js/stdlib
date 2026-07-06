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
var gfirstIndexEqual = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gfirstIndexEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( gfirstIndexEqual.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function returns the first index of an element which equals a corresponding element in another array', function test( t ) {
	var actual;
	var x;
	var y;

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ];

	// Nonnegative stride...
	actual = gfirstIndexEqual( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 2.0, 0.0, 3.0, 0.0 ];

	actual = gfirstIndexEqual( x.length-1, x, 1, 1, y, 1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 3.0, 0.0 ];

	actual = gfirstIndexEqual( x.length-2, x, 1, 2, y, 1, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( x.length-2, x, 1, 2, y, 1, 2 );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	y = [ 0.0, 0.0, 3.0, 0.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( 3, x, 2, 0, y, 2, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	// Negative stride...
	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 1.0, 0.0, 0.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( x.length, x, -1, x.length-1, y, -1, y.length-1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 2.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( 3, x, -2, x.length-1, y, -2, y.length-1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( 3, x, -2, x.length-2, y, -2, y.length-2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	actual = gfirstIndexEqual( x.length, x, -1, x.length-1, y, -1, y.length-1 );
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
	actual = gfirstIndexEqual( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 2.0, 0.0, 3.0, 0.0 ] );

	actual = gfirstIndexEqual( x.length, x, 1, 1, y, 1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 3.0, 0.0 ] );

	actual = gfirstIndexEqual( x.length, x, 1, 2, y, 1, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = gfirstIndexEqual( x.length-2, x, 1, 2, y, 1, 2 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 1.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = gfirstIndexEqual( x.length, x, -1, x.length-1, y, -1, y.length-1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 0.0, 2.0, 0.0, 0.0 ] );

	actual = gfirstIndexEqual( 3, x, -2, x.length-1, y, -2, y.length-1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = toAccessorArray( [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = gfirstIndexEqual( 3, x, -2, x.length-2, y, -2, y.length-2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = toAccessorArray( [ 5.0, 6.0, 7.0, 8.0 ] );

	actual = gfirstIndexEqual( x.length, x, -1, x.length-1, y, -1, y.length-1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter is less than or equal to zero', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 0, [ 1.0, 2.0, 3.0 ], 1, 0, [ 1.0, 2.0, 3.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfirstIndexEqual( -1, [ 1.0, 2.0, 3.0 ], 1, 0, [ 1.0, 2.0, 3.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter is less than or equal to zero (accessors)', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfirstIndexEqual( -1, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element equal to `NaN`', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 1, [ NaN ], 1, 0, [ NaN ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element equal to `NaN` (accessors)', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 1, toAccessorArray( [ NaN ] ), 1, 0, toAccessorArray( [ NaN ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats -0 and +0 as equal', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 1, [ -0.0 ], 1, 0, [ 0.0 ], 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function treats -0 and +0 as equal (accessors)', function test( t ) {
	var actual;

	actual = gfirstIndexEqual( 1, toAccessorArray( [ -0.0 ] ), 1, 0, toAccessorArray( [ 0.0 ] ), 1, 0 );
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

	actual = gfirstIndexEqual( 3, x, 2, 0, y, 1, 0 );

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

	actual = gfirstIndexEqual( 3, toAccessorArray( x ), 2, 0, toAccessorArray( y ), 1, 0 );

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

	actual = gfirstIndexEqual( 3, x, 1, 0, y, 2, 0 );

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

	actual = gfirstIndexEqual( 3, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 2, 0 );

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

	actual = gfirstIndexEqual( 3, x, -2, 4, y, -1, 2 );

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

	actual = gfirstIndexEqual( 3, toAccessorArray( x ), -2, 4, toAccessorArray( y ), -1, 2 );

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

	actual = gfirstIndexEqual( 3, x, 2, 0, y, -1, 2 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});
