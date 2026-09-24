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
var gfirstIndexLessThan = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gfirstIndexLessThan, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( gfirstIndexLessThan.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function returns the first index of an element which is less than a corresponding element in another array', function test( t ) {
	var actual;
	var x;
	var y;

	x = [ 6.0, 1.0, 5.0, 5.0, 5.0, 5.0 ];
	y = [ 5.0, 2.0, 4.0, 4.0, 4.0, 4.0 ];

	// Nonnegative stride...
	actual = gfirstIndexLessThan( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = [ 6.0, 5.0, 1.0, 5.0, 5.0, 5.0 ];
	y = [ 5.0, 4.0, 2.0, 4.0, 4.0, 4.0 ];

	actual = gfirstIndexLessThan( 3, x, 2, 0, y, 1, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = [ 6.0, 5.0, 5.0, 5.0, 1.0, 5.0 ];
	y = [ 5.0, 4.0, 4.0, 4.0, 2.0, 4.0 ];

	actual = gfirstIndexLessThan( 3, x, 1, 0, y, 2, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = [ 6.0, 5.0, 5.0, 5.0, 1.0, 5.0 ];
	y = [ 5.0, 4.0, 4.0, 4.0, 2.0, 4.0 ];

	actual = gfirstIndexLessThan( 3, x, 2, 0, y, 2, 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	x = [ 1.0, 5.0, 4.0, 3.0, 2.0, 6.0 ];
	y = [ 2.0, 6.0, 5.0, 4.0, 3.0, 5.0 ];

	actual = gfirstIndexLessThan( x.length, x, -1, x.length-1, y, -1, y.length-1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = [ 3.0, 5.0, 4.0, 6.0, 2.0, 5.0 ];
	y = [ 4.0, 6.0, 5.0, 5.0, 3.0, 6.0 ];

	actual = gfirstIndexLessThan( 3, x, -2, 4, y, -1, 2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = [ 5.0, 5.0, 6.0, 3.0, 2.0, 4.0 ];
	y = [ 6.0, 6.0, 5.0, 4.0, 3.0, 4.0 ];

	actual = gfirstIndexLessThan( 3, x, -1, 2, y, -2, 4 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ];
	y = [ 4.0, 4.0, 4.0, 4.0, 4.0, 4.0 ];

	actual = gfirstIndexLessThan( 3, x, -2, 4, y, -2, 4 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the first index of an element which is less than a corresponding element in another array (accessors)', function test( t ) {
	var actual;
	var x;
	var y;

	x = toAccessorArray( [ 6.0, 1.0, 5.0, 5.0, 5.0, 5.0 ] );
	y = toAccessorArray( [ 5.0, 2.0, 4.0, 4.0, 4.0, 4.0 ] );

	// Nonnegative stride...
	actual = gfirstIndexLessThan( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = toAccessorArray( [ 6.0, 5.0, 1.0, 5.0, 5.0, 5.0 ] );
	y = toAccessorArray( [ 5.0, 4.0, 2.0, 4.0, 4.0, 4.0 ] );

	actual = gfirstIndexLessThan( 3, x, 2, 0, y, 1, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = toAccessorArray( [ 6.0, 5.0, 5.0, 5.0, 1.0, 5.0 ] );
	y = toAccessorArray( [ 5.0, 4.0, 4.0, 4.0, 2.0, 4.0 ] );

	actual = gfirstIndexLessThan( 3, x, 1, 0, y, 2, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = toAccessorArray( [ 6.0, 5.0, 5.0, 5.0, 1.0, 5.0 ] );
	y = toAccessorArray( [ 5.0, 4.0, 4.0, 4.0, 2.0, 4.0 ] );

	actual = gfirstIndexLessThan( 3, x, 2, 0, y, 2, 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	x = toAccessorArray( [ 1.0, 5.0, 4.0, 3.0, 2.0, 6.0 ] );
	y = toAccessorArray( [ 2.0, 6.0, 5.0, 4.0, 3.0, 5.0 ] );

	actual = gfirstIndexLessThan( x.length, x, -1, x.length-1, y, -1, y.length-1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = toAccessorArray( [ 3.0, 5.0, 4.0, 6.0, 2.0, 5.0 ] );
	y = toAccessorArray( [ 4.0, 6.0, 5.0, 5.0, 3.0, 6.0 ] );

	actual = gfirstIndexLessThan( 3, x, -2, 4, y, -1, 2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = toAccessorArray( [ 5.0, 5.0, 6.0, 3.0, 2.0, 4.0 ] );
	y = toAccessorArray( [ 6.0, 6.0, 5.0, 4.0, 3.0, 4.0 ] );

	actual = gfirstIndexLessThan( 3, x, -1, 2, y, -2, 4 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = toAccessorArray( [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ] );
	y = toAccessorArray( [ 4.0, 4.0, 4.0, 4.0, 4.0, 4.0 ] );

	actual = gfirstIndexLessThan( 3, x, -2, 4, y, -2, 4 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', function test( t ) {
	var actual;

	actual = gfirstIndexLessThan( 0, [ 1.0, 2.0, 3.0 ], 1, 0, [ 1.0, 2.0, 3.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfirstIndexLessThan( -1, [ 1.0, 2.0, 3.0 ], 1, 0, [ 1.0, 2.0, 3.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero (accessors)', function test( t ) {
	var actual;

	actual = gfirstIndexLessThan( 0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfirstIndexLessThan( -1, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if comparisons involve `NaN` values', function test( t ) {
	var actual;

	actual = gfirstIndexLessThan( 1, [ NaN ], 1, 0, [ 0.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfirstIndexLessThan( 1, [ 0.0 ], 1, 0, [ NaN ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if comparisons involve `NaN` values (accessors)', function test( t ) {
	var actual;

	actual = gfirstIndexLessThan( 1, toAccessorArray( [ NaN ] ), 1, 0, toAccessorArray( [ 0.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfirstIndexLessThan( 1, toAccessorArray( [ 0.0 ] ), 1, 0, toAccessorArray( [ NaN ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats `-0` and `+0` as equal', function test( t ) {
	var actual;

	actual = gfirstIndexLessThan( 1, [ 0.0 ], 1, 0, [ -0.0 ], 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats `-0` and `+0` as equal (accessors)', function test( t ) {
	var actual;

	actual = gfirstIndexLessThan( 1, toAccessorArray( [ 0.0 ] ), 1, 0, toAccessorArray( [ -0.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		6.0, // 0
		2.0,
		1.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		5.0, // 0
		2.0, // 1
		4.0, // 2
		0.0,
		0.0
	];

	actual = gfirstIndexLessThan( 3, x, 2, 0, y, 1, 0 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		6.0, // 0
		2.0,
		1.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		5.0, // 0
		2.0, // 1
		4.0, // 2
		0.0,
		0.0
	];

	actual = gfirstIndexLessThan( 3, toAccessorArray( x ), 2, 0, toAccessorArray( y ), 1, 0 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		6.0, // 0
		1.0, // 1
		5.0, // 2
		4.0,
		5.0
	];
	y = [
		5.0, // 0
		0.0,
		4.0, // 1
		0.0,
		3.0  // 2
	];

	actual = gfirstIndexLessThan( 3, x, 1, 0, y, 2, 0 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		6.0, // 0
		1.0, // 1
		5.0, // 2
		4.0,
		5.0
	];
	y = [
		5.0, // 0
		0.0,
		4.0, // 1
		0.0,
		3.0  // 2
	];

	actual = gfirstIndexLessThan( 3, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 2, 0 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		6.0, // 2
		2.0,
		1.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		3.0, // 2
		2.0, // 1
		5.0, // 0
		0.0,
		0.0
	];

	actual = gfirstIndexLessThan( 3, x, -2, 4, y, -1, 2 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		6.0, // 2
		2.0,
		1.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		3.0, // 2
		2.0, // 1
		5.0, // 0
		0.0,
		0.0
	];

	actual = gfirstIndexLessThan( 3, toAccessorArray( x ), -2, 4, toAccessorArray( y ), -1, 2 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		6.0, // 0
		2.0,
		5.0, // 1
		4.0,
		0.0, // 2
		6.0
	];
	y = [
		5.0,  // 2
		4.0,  // 1
		5.0,  // 0
		0.0,
		0.0,
		0.0
	];

	actual = gfirstIndexLessThan( 3, x, 2, 0, y, -1, 2 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns (accessors)', function test( t ) {
	var actual;
	var x;
	var y;

	x = [
		6.0, // 0
		2.0,
		5.0, // 1
		4.0,
		0.0, // 2
		6.0
	];
	y = [
		5.0,  // 2
		4.0,  // 1
		5.0,  // 0
		0.0,
		0.0,
		0.0
	];

	actual = gfirstIndexLessThan( 3, toAccessorArray( x ), 2, 0, toAccessorArray( y ), -1, 2 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});
