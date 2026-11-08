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
var gminheapify = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gminheapify, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( gminheapify.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the function converts an array to a min-heap', function test( t ) {
	var expected;
	var x;

	x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
	expected = [ 1.0, 5.0, 3.0, 7.0, 9.0 ];
	gminheapify( 5, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 7.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 2.0, 4.0, 3.0, 7.0, 5.0 ];
	gminheapify( 5, x, 1 );
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
	gminheapify( 5, y, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 7.0, 2.0, 3.0, 4.0, 5.0 ];
	expected = [ 2.0, 4.0, 3.0, 7.0, 5.0 ];
	y = toAccessorArray( x );
	gminheapify( 5, y, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function handles edge cases', function test( t ) {
	var expected;
	var x;

	x = [];
	expected = [];
	gminheapify( 0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 5.0 ];
	expected = [ 5.0 ];
	gminheapify( 1, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 5.0, 3.0 ];
	expected = [ 3.0, 5.0 ];
	gminheapify( 2, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function handles edge cases (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [];
	expected = [];
	y = toAccessorArray( x );
	gminheapify( 0, y, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 5.0 ];
	expected = [ 5.0 ];
	y = toAccessorArray( x );
	gminheapify( 1, y, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 5.0, 3.0 ];
	expected = [ 3.0, 5.0 ];
	y = toAccessorArray( x );
	gminheapify( 2, y, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride parameter', function test( t ) {
	var expected;
	var x;

	x = [ 7.0, 0.0, 5.0, 0.0, 3.0, 0.0, 1.0, 0.0, 9.0 ];
	expected = [ 1.0, 0.0, 5.0, 0.0, 3.0, 0.0, 7.0, 0.0, 9.0 ];

	gminheapify( 5, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a stride parameter (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 7.0, 0.0, 5.0, 0.0, 3.0, 0.0, 1.0, 0.0, 9.0 ];
	expected = [ 1.0, 0.0, 5.0, 0.0, 3.0, 0.0, 7.0, 0.0, 9.0 ];

	y = toAccessorArray( x );
	gminheapify( 5, y, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the input array', function test( t ) {
	var x;
	var y;

	x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
	y = gminheapify( 5, x, 1 );
	t.strictEqual( y, x, 'returns the same array reference' );

	t.end();
});

tape( 'the function returns the input array (accessors)', function test( t ) {
	var x;
	var y;
	var z;

	x = [ 7.0, 5.0, 3.0, 1.0, 9.0 ];
	y = toAccessorArray( x );
	z = gminheapify( 5, y, 1 );
	t.strictEqual( z, y, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;

	x = [ 9.0, 0.0, 1.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0 ];
	expected = [ 9.0, 0.0, 7.0, 0.0, 3.0, 0.0, 5.0, 0.0, 1.0 ];

	gminheapify( 5, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 9.0, 0.0, 1.0, 0.0, 3.0, 0.0, 5.0, 0.0, 7.0 ];
	expected = [ 9.0, 0.0, 7.0, 0.0, 3.0, 0.0, 5.0, 0.0, 1.0 ];

	y = toAccessorArray( x );
	gminheapify( 5, y, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
