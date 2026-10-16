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
var gminheapify = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gminheapify, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( gminheapify.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function converts an array to a min-heap', function test( t ) {
	var expected;
	var x;

	x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
	expected = [ 1.0, 5.0, 3.0, 7.0, 9.0 ];
	gminheapify( 5, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 7.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 2.0, 4.0, 3.0, 7.0, 5.0 ];
	gminheapify( 5, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts an array to a min-heap (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
	expected = [ 1.0, 5.0, 3.0, 7.0, 9.0 ];
	y = toAccessorArray( x );
	gminheapify( 5, y, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 7.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 2.0, 4.0, 3.0, 7.0, 5.0 ];
	y = toAccessorArray( x );
	gminheapify( 5, y, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter', function test( t ) {
	var expected;
	var x;

	x = [ 0.0, 7.0, 5.0, 3.0, 1.0, 9.0 ];
	expected = [ 0.0, 1.0, 5.0, 3.0, 7.0, 9.0 ];
	gminheapify( 5, x, 1, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 0.0, 7.0, 5.0, 3.0, 1.0, 9.0 ];
	expected = [ 0.0, 1.0, 5.0, 3.0, 7.0, 9.0 ];
	y = toAccessorArray( x );
	gminheapify( 5, y, 1, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride and offset parameters', function test( t ) {
	var expected;
	var x;

	x = [ 0.0, 7.0, 0.0, 5.0, 0.0, 3.0, 0.0, 1.0, 0.0, 9.0 ];
	expected = [ 0.0, 1.0, 0.0, 5.0, 0.0, 3.0, 0.0, 7.0, 0.0, 9.0 ];
	gminheapify( 5, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride and offset parameters (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 0.0, 7.0, 0.0, 5.0, 0.0, 3.0, 0.0, 1.0, 0.0, 9.0 ];
	expected = [ 0.0, 1.0, 0.0, 5.0, 0.0, 3.0, 0.0, 7.0, 0.0, 9.0 ];
	y = toAccessorArray( x );
	gminheapify( 5, y, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns the input array', function test( t ) {
	var x;
	var y;

	x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
	y = gminheapify( 5, x, 1, 0 );
	t.strictEqual( y, x, 'returns the same array reference' );

	t.end();
});

tape( 'the function returns the input array (accessors)', function test( t ) {
	var x;
	var y;
	var z;

	x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
	y = toAccessorArray( x );
	z = gminheapify( 5, y, 1, 0 );
	t.strictEqual( z, y, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;

	x = [ 7.0, 0.0, 5.0, 0.0, 3.0, 0.0, 1.0, 0.0, 9.0 ];
	expected = [ 7.0, 0.0, 9.0, 0.0, 3.0, 0.0, 5.0, 0.0, 1.0 ];

	gminheapify( 5, x, -2, 8 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 7.0, 0.0, 5.0, 0.0, 3.0, 0.0, 1.0, 0.0, 9.0 ];
	expected = [ 7.0, 0.0, 9.0, 0.0, 3.0, 0.0, 5.0, 0.0, 1.0 ];

	y = toAccessorArray( x );
	gminheapify( 5, y, -2, 8 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
