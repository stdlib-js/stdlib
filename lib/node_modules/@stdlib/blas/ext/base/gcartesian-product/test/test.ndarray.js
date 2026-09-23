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
var gcartesianProduct = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcartesianProduct, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 12', function test( t ) {
	t.strictEqual( gcartesianProduct.length, 12, 'has expected arity' );
	t.end();
});

tape( 'the function computes the Cartesian product', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 10.0, 20.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 10.0, 1.0, 20.0, 2.0, 10.0, 2.0, 20.0, 3.0, 10.0, 3.0, 20.0 ];

	gcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes the Cartesian product (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 2, 2, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	z = gcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );

	t.strictEqual( z, out, 'same reference' );
	t.end();
});

tape( 'if provided an `M` or `N` parameter equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 5.0, 6.0, 7.0, 8.0 ];
	expected = [ 5.0, 6.0, 7.0, 8.0 ];

	gcartesianProduct( 0, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	gcartesianProduct( x.length, 0, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x`', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 2, y.length, x, 2, 0, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x` (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 2, y.length, toAccessorArray( x ), 2, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x`', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [
		2.0, // 1
		1.0  // 0
	];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 2, y.length, x, -1, 1, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x` (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [
		2.0, // 1
		1.0  // 0
	];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 2, y.length, toAccessorArray( x ), -1, 1, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `y`', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [
		3.0, // 0
		0.0,
		4.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( x.length, 2, x, 1, 0, y, 2, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `y` (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [
		3.0, // 0
		0.0,
		4.0, // 1
		0.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( x.length, 2, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 2, 0, toAccessorArray( out ), 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `y`', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [
		4.0, // 1
		3.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( x.length, 2, x, 1, 0, y, -1, 1, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `y` (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [
		4.0, // 1
		3.0  // 0
	];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( x.length, 2, toAccessorArray( x ), 1, 0, toAccessorArray( y ), -1, 1, toAccessorArray( out ), 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for the output pairs', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];
	expected = [
		1.0,
		3.0,
		0.0,
		0.0,
		1.0,
		4.0,
		0.0,
		0.0,
		2.0,
		3.0,
		0.0,
		0.0,
		2.0,
		4.0,
		0.0,
		0.0
	];

	gcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 4, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for the output pairs (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	];
	expected = [
		1.0,
		3.0,
		0.0,
		0.0,
		1.0,
		4.0,
		0.0,
		0.0,
		2.0,
		3.0,
		0.0,
		0.0,
		2.0,
		4.0,
		0.0,
		0.0
	];

	gcartesianProduct( x.length, y.length, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 4, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for the output pairs', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 2.0, 4.0, 2.0, 3.0, 1.0, 4.0, 1.0, 3.0 ];

	gcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, -2, 1, 6 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for the output pairs (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 2.0, 4.0, 2.0, 3.0, 1.0, 4.0, 1.0, 3.0 ];

	gcartesianProduct( x.length, y.length, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), -2, 1, 6 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for the output pair elements', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 3.0, 1.0, 4.0, 1.0, 3.0, 2.0, 4.0, 2.0 ];

	gcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, -1, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for the output pair elements (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 3.0, 1.0, 4.0, 1.0, 3.0, 2.0, 4.0, 2.0 ];

	gcartesianProduct( x.length, y.length, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 2, -1, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offsetX` parameter', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 0.0, 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 2, y.length, x, 1, 1, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offsetX` parameter (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 0.0, 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( 2, y.length, toAccessorArray( x ), 1, 1, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offsetY` parameter', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 0.0, 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( x.length, 2, x, 1, 0, y, 1, 1, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offsetY` parameter (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 0.0, 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( x.length, 2, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 1, toAccessorArray( out ), 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offsetOut` parameter', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 0.0, 0.0, 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offsetOut` parameter (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 0.0, 0.0, 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ];

	gcartesianProduct( x.length, y.length, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 2, 1, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a column-major output layout', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 1, 4, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a column-major output layout (accessors)', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0 ];
	y = [ 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ];

	gcartesianProduct( x.length, y.length, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 1, 4, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
