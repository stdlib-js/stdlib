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
var Float64Array = require( '@stdlib/array/float64' );
var gcircshift = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcircshift, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( gcircshift.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = gcircshift( x.length, 2, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	gcircshift( 0, 1, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gcircshift( -4, 1, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a circular shift (right shift, positive k)', function test( t ) {
	var expected;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 4.0, 5.0, 1.0, 2.0, 3.0 ];

	gcircshift( x.length, 2, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 5.0, 1.0, 2.0, 3.0, 4.0 ];

	gcircshift( x.length, 1, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a circular shift (right shift, positive k, accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];
	expected = [ 5.0, 6.0, 7.0, 1.0, 2.0, 3.0, 4.0 ];

	gcircshift( x.length, 3, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	expected = [ 6.0, 7.0, 8.0, 1.0, 2.0, 3.0, 4.0, 5.0 ];

	gcircshift( x.length, 3, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a circular shift (left shift, negative k)', function test( t ) {
	var expected;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 3.0, 4.0, 5.0, 1.0, 2.0 ];

	gcircshift( x.length, -2, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 2.0, 3.0, 4.0, 5.0, 1.0 ];

	gcircshift( x.length, -1, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function performs a circular shift (left shift, negative k, accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];
	expected = [ 4.0, 5.0, 6.0, 7.0, 1.0, 2.0, 3.0 ];

	gcircshift( x.length, -3, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	expected = [ 3.0, 4.0, 1.0, 2.0 ];

	gcircshift( x.length, -2, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an arbitrary number of positions to shift', function test( t ) {
	var expected;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	gcircshift( x.length, 0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gcircshift( x.length, 4, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gcircshift( x.length, -4, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gcircshift( x.length, 8, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 4.0, 5.0, 1.0, 2.0, 3.0 ];

	gcircshift( x.length, 7, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 3.0, 4.0, 5.0, 1.0, 2.0 ];

	gcircshift( x.length, -7, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an arbitrary number of positions to shift (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	gcircshift( x.length, 0, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gcircshift( x.length, 4, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 4.0, 5.0, 1.0, 2.0, 3.0 ];

	gcircshift( x.length, 7, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,  // 0
		0.0,
		2.0,  // 1
		0.0,
		3.0,  // 2
		0.0,
		4.0   // 3
	];
	expected = [
		4.0,  // 0
		0.0,
		1.0,  // 1
		0.0,
		2.0,  // 2
		0.0,
		3.0   // 3
	];

	gcircshift( 4, 1, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0 ];
	expected = [ 4.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0 ];

	gcircshift( 4, 1, toAccessorArray( x ), 2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,  // 3
		0.0,
		2.0,  // 2
		0.0,
		3.0,  // 1
		0.0,
		4.0   // 0
	];
	expected = [
		2.0,  // 3
		0.0,
		3.0,  // 2
		0.0,
		4.0,  // 1
		0.0,
		1.0   // 0
	];

	gcircshift( 4, 1, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 4.0 ];
	expected = [ 2.0, 0.0, 3.0, 0.0, 4.0, 0.0, 1.0 ];

	gcircshift( 4, 1, toAccessorArray( x ), -2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		0.0,
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0, // 3
		5.0  // 4
	]);
	expected = new Float64Array([
		0.0,
		4.0, // 0
		5.0, // 1
		1.0, // 2
		2.0, // 3
		3.0  // 4
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	gcircshift( 5, 2, x1, 1 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});
