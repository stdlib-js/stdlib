/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var gcopy = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcopy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( gcopy.length, 7, 'arity of 7' );
	t.end();
});

tape( 'the function copies elements from `x` into `y`', function test( t ) {
	var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	gcopy( x.length, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, x, 'deep equal' );
	t.notEqual( y, x, 'different references' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	];
	N = 3;

	gcopy( N, x, 2, 0, y, 1, 0 );

	expected = [ 1.0, 3.0, 5.0, 9.0, 10.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	];
	y = [
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	];
	N = 3;

	gcopy( N, x, 1, 2, y, 1, 0 );

	expected = [ 3.0, 4.0, 5.0, 9.0, 10.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	];
	N = 3;

	gcopy( N, x, 1, 0, y, 2, 0 );

	expected = [ 1.0, 7.0, 2.0, 9.0, 3.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		6.0,
		7.0,
		8.0, // 0
		9.0, // 1
		10.0 // 2
	];
	N = 3;

	gcopy( N, x, 1, 0, y, 1, 2 );

	expected = [ 6.0, 7.0, 1.0, 2.0, 3.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	out = gcopy( x.length, x, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	expected = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	gcopy( -1, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	gcopy( 0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		6.0,
		7.0, // 2
		8.0, // 1
		9.0, // 0
		10.0
	];
	N = 3;

	gcopy( N, x, -2, x.length-1, y, -1, y.length-2 );

	expected = [ 6.0, 1.0, 3.0, 5.0, 10.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	];
	y = [
		7.0,
		8.0,
		9.0,
		10.0, // 2
		11.0, // 1
		12.0  // 0
	];
	N = 3;

	gcopy( N, x, 2, 1, y, -1, y.length-1 );

	expected = [ 7.0, 8.0, 9.0, 6.0, 4.0, 2.0 ];

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently copies elements from `x` into `y`', function test( t ) {
	var x;
	var y;
	var i;

	x = new Array( 100 );
	y = new Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
	}

	gcopy( x.length, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, x, 'deep equal' );
	t.notEqual( y, x, 'different references' );

	x = new Array( 120 );
	y = new Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i*2;
		y[ i ] = x.length - i;
	}

	gcopy( x.length, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, x, 'deep equal' );
	t.notEqual( y, x, 'different references' );

	t.end();
});
