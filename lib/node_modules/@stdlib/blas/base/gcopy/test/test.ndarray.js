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
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var gcopy = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcopy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( gcopy.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function copies elements from `x` into `y`', function test( t ) {
	var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	gcopy( x.length, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, x, 'returns expected value' );
	t.notEqual( y, x, 'different references' );

	t.end();
});

tape( 'the function copies elements from `x` into `y` (accessors)', function test( t ) {
	var x = new Complex128Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	var y = new Complex128Array( [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ] );

	gcopy( x.length, x, 1, 0, y, 1, 0 );

	t.deepEqual( reinterpret128( y, 0 ), reinterpret128( x, 0 ), 'returns expected value' );
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

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Complex128Array([
		0.0, // 0
		1.0, // 0
		2.0,
		3.0,
		4.0, // 1
		5.0  // 1
	]);
	y = new Complex128Array([
		6.0, // 0
		7.0, // 0
		8.0, // 1
		9.0, // 1
		10.0,
		11.0
	]);
	N = 2;

	gcopy( N, x, 2, 0, y, 1, 0 );

	expected = new Float64Array( [ 0.0, 1.0, 4.0, 5.0, 10.0, 11.0 ] );

	t.deepEqual( reinterpret128( y, 0 ), expected, 'returns expected value' );
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

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Complex128Array([
		0.0,
		1.0,
		2.0, // 0
		3.0, // 0
		4.0, // 1
		5.0  // 1
	]);
	y = new Complex128Array([
		6.0, // 0
		7.0, // 0
		8.0, // 1
		9.0, // 1
		10.0,
		11.0
	]);
	N = 2;

	gcopy( N, x, 1, 1, y, 1, 0 );

	expected = new Float64Array( [ 2.0, 3.0, 4.0, 5.0, 10.0, 11.0 ] );

	t.deepEqual( reinterpret128( y, 0 ), expected, 'returns expected value' );
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

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Complex128Array([
		0.0, // 0
		1.0, // 0
		2.0, // 1
		3.0, // 1
		4.0,
		5.0
	]);
	y = new Complex128Array([
		6.0,  // 0
		7.0,  // 0
		8.0,
		9.0,
		10.0, // 1
		11.0  // 1
	]);
	N = 2;

	gcopy( N, x, 1, 0, y, 2, 0 );

	expected = new Float64Array( [ 0.0, 1.0, 8.0, 9.0, 2.0, 3.0 ] );

	t.deepEqual( reinterpret128( y, 0 ), expected, 'returns expected value' );
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

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Complex128Array([
		0.0, // 0
		1.0, // 0
		2.0, // 1
		3.0, // 1
		4.0,
		5.0
	]);
	y = new Complex128Array([
		6.0,
		7.0,
		8.0,  // 0
		9.0,  // 0
		10.0, // 1
		11.0  // 1
	]);
	N = 2;

	gcopy( N, x, 1, 0, y, 1, 1 );

	expected = new Float64Array( [ 6.0, 7.0, 0.0, 1.0, 2.0, 3.0 ] );

	t.deepEqual( reinterpret128( y, 0 ), expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	out = gcopy( x.length, x, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'returns expected value' );
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
	t.deepEqual( y, expected, 'returns expected value' );

	gcopy( 0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

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

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Complex128Array([
		0.0, // 1
		1.0, // 1
		2.0,
		3.0,
		4.0, // 0
		5.0  // 0
	]);
	y = new Complex128Array([
		6.0,
		7.0,
		8.0,  // 1
		9.0,  // 1
		10.0, // 0
		11.0  // 0
	]);
	N = 2;

	gcopy( N, x, -2, x.length-1, y, -1, y.length-1 );

	expected = new Float64Array( [ 6.0, 7.0, 0.0, 1.0, 4.0, 5.0 ] );

	t.deepEqual( reinterpret128( y, 0 ), expected, 'returns expected value' );
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

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently copies elements from `x` into `y`', function test( t ) {
	var x;
	var y;
	var i;

	x = [];
	y = [];
	for ( i = 0; i < 100; i++ ) {
		x.push( i );
		y.push( x.length - i );
	}

	gcopy( x.length, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, x, 'returns expected value' );
	t.notEqual( y, x, 'different references' );

	x = [];
	y = [];
	for ( i = 0; i < x.length; i++ ) {
		x.push( i*2 );
		y.push( x.length - i );
	}

	gcopy( x.length, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, x, 'returns expected value' );
	t.notEqual( y, x, 'different references' );

	t.end();
});
