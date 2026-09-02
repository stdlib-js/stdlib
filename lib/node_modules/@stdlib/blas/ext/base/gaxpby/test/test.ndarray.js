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
var gaxpby = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gaxpby, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( gaxpby.length, 9, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies `x` by a constant and adds the result to `y` multiplied by a constant', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	expected = [
		9.0,  // 5.0*1.0 + 2.0*2.0
		16.0, // 5.0*2.0 + 2.0*3.0
		23.0, // 5.0*3.0 + 2.0*4.0
		30.0, // 5.0*4.0 + 2.0*5.0
		37.0  // 5.0*5.0 + 2.0*6.0
	];

	gaxpby( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	y = [ 5.0, 6.0 ];
	expected = [ 15.0, 22.0 ];

	gaxpby( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function multiplies `x` by a constant and adds the result to `y` multiplied by a constant (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	expected = [
		9.0,  // 5.0*1.0 + 2.0*2.0
		16.0, // 5.0*2.0 + 2.0*3.0
		23.0, // 5.0*3.0 + 2.0*4.0
		30.0, // 5.0*4.0 + 2.0*5.0
		37.0  // 5.0*5.0 + 2.0*6.0
	];

	gaxpby( x.length, 5.0, toAccessorArray( x ), 1, 0, 2.0, toAccessorArray( y ), 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	y = [ 5.0, 6.0 ];
	expected = [ 15.0, 22.0 ];

	gaxpby( x.length, 5.0, toAccessorArray( x ), 1, 0, 2.0, toAccessorArray( y ), 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 5.0, 6.0, 7.0, 8.0, 9.0 ];
	out = gaxpby( x.length, 5.0, x, 1, 0, 2.0, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	expected = [ 4.0, 5.0, 6.0 ];

	gaxpby( 0, 5.0, x, 1, 0, 2.0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	gaxpby( -4, 5.0, x, 1, 0, 2.0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `alpha` equals `0.0`, the function scales `y` by `beta`', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	expected = [ 6.0, 9.0, 12.0, 15.0, 18.0 ]; // 3.0*y

	gaxpby( x.length, 0.0, x, 1, 0, 3.0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'when `beta` equals `1.0`, the function multiplies `x` by a constant and adds the result to `y`', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	expected = [ 11.0, 17.0, 23.0, 29.0, 35.0 ]; // 5.0*x + y

	gaxpby( x.length, 5.0, x, 1, 0, 1.0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [ 2.0, 3.0, 4.0 ];
	expected = [
		9.0,  // 5.0*1.0 + 2.0*2.0
		21.0, // 5.0*3.0 + 2.0*3.0
		33.0  // 5.0*5.0 + 2.0*4.0
	];

	gaxpby( 3, 5.0, x, 2, 0, 2.0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [ 2.0, 3.0, 4.0 ];
	expected = [
		9.0,  // 5.0*1.0 + 2.0*2.0
		21.0, // 5.0*3.0 + 2.0*3.0
		33.0  // 5.0*5.0 + 2.0*4.0
	];

	gaxpby( 3, 5.0, toAccessorArray( x ), 2, 0, 2.0, toAccessorArray( y ), 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0 ];
	y = [
		2.0, // 0
		30.0,
		3.0, // 1
		10.0,
		4.0  // 2
	];
	expected = [
		9.0,  // 5.0*1.0 + 2.0*2.0
		30.0,
		16.0, // 5.0*2.0 + 2.0*3.0
		10.0,
		23.0  // 5.0*3.0 + 2.0*4.0
	];

	gaxpby( 3, 5.0, x, 1, 0, 2.0, y, 2, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0 ];
	y = [
		2.0, // 0
		30.0,
		3.0, // 1
		10.0,
		4.0  // 2
	];
	expected = [
		9.0,  // 5.0*1.0 + 2.0*2.0
		30.0,
		16.0, // 5.0*2.0 + 2.0*3.0
		10.0,
		23.0  // 5.0*3.0 + 2.0*4.0
	];

	gaxpby( 3, 5.0, toAccessorArray( x ), 1, 0, 2.0, toAccessorArray( y ), 2, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		4.0, // 2
		3.0, // 1
		2.0  // 0
	]);
	expected = new Float64Array([
		13.0, // 5.0*1.0 + 2.0*4.0
		21.0, // 5.0*3.0 + 2.0*3.0
		29.0  // 5.0*5.0 + 2.0*2.0
	]);

	gaxpby( 3, 5.0, x, -2, x.length-1, 2.0, y, -1, y.length-1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = new Float64Array([
		4.0, // 2
		3.0, // 1
		2.0  // 0
	]);
	expected = new Float64Array([
		13.0, // 5.0*1.0 + 2.0*4.0
		21.0, // 5.0*3.0 + 2.0*3.0
		29.0  // 5.0*5.0 + 2.0*2.0
	]);

	gaxpby( 3, 5.0, toAccessorArray( x ), -2, x.length-1, 2.0, toAccessorArray( y ), -1, y.length-1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		0.0,
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [ 2.0, 3.0, 4.0 ];
	expected = [
		9.0,  // 5.0*1.0 + 2.0*2.0
		21.0, // 5.0*3.0 + 2.0*3.0
		33.0  // 5.0*5.0 + 2.0*4.0
	];

	gaxpby( 3, 5.0, x, 2, 1, 2.0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		0.0,
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [ 2.0, 3.0, 4.0 ];
	expected = [
		9.0,  // 5.0*1.0 + 2.0*2.0
		21.0, // 5.0*3.0 + 2.0*3.0
		33.0  // 5.0*5.0 + 2.0*4.0
	];

	gaxpby( 3, 5.0, toAccessorArray( x ), 2, 1, 2.0, toAccessorArray( y ), 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0 ];
	y = [
		0.0,
		2.0, // 0
		3.0, // 1
		4.0  // 2
	];
	expected = [
		0.0,
		9.0,  // 5.0*1.0 + 2.0*2.0
		16.0, // 5.0*2.0 + 2.0*3.0
		23.0  // 5.0*3.0 + 2.0*4.0
	];

	gaxpby( 3, 5.0, x, 1, 0, 2.0, y, 1, 1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0 ];
	y = [
		0.0,
		2.0, // 0
		3.0, // 1
		4.0  // 2
	];
	expected = [
		0.0,
		9.0,  // 5.0*1.0 + 2.0*2.0
		16.0, // 5.0*2.0 + 2.0*3.0
		23.0  // 5.0*3.0 + 2.0*4.0
	];

	gaxpby( 3, 5.0, toAccessorArray( x ), 1, 0, 2.0, toAccessorArray( y ), 1, 1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		0.0,
		1.0, // 0
		0.0,
		2.0, // 1
		0.0,
		3.0  // 2
	];
	y = [
		0.0,
		0.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		0.0
	];
	expected = [
		0.0,
		0.0,
		9.0,  // 5.0*1.0 + 2.0*2.0
		16.0, // 5.0*2.0 + 2.0*3.0
		23.0, // 5.0*3.0 + 2.0*4.0
		0.0
	];

	gaxpby( 3, 5.0, x, 2, 1, 2.0, y, 1, 2 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently multiplies `x` by a constant and adds the result to `y` multiplied by a constant', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;
	var i;

	alpha = 3.0;
	beta = 5.0;
	x = new Float64Array( 100 );
	y = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = ( alpha * x[ i ] ) + ( beta * y[ i ] );
	}
	gaxpby( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	y = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = ( alpha * x[ i ] ) + ( beta * y[ i ] );
	}
	gaxpby( x.length, alpha, x, 1, 0, beta, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});
