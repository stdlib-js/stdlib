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
var gxmy = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gxmy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gxmy.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies elements of `x` by the corresponding elements of `y` and assigns the results to `y`', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	expected = [
		2.0,  // 1.0 * 2.0
		6.0,  // 2.0 * 3.0
		12.0, // 3.0 * 4.0
		20.0, // 4.0 * 5.0
		30.0  // 5.0 * 6.0
	];

	gxmy( x.length, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	y = [ 5.0, 6.0 ];
	expected = [ 5.0, 12.0 ];

	gxmy( x.length, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function multiplies elements of `x` by the corresponding elements of `y` and assigns the results to `y` (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	expected = [
		2.0,  // 1.0 * 2.0
		6.0,  // 2.0 * 3.0
		12.0, // 3.0 * 4.0
		20.0, // 4.0 * 5.0
		30.0  // 5.0 * 6.0
	];

	gxmy( x.length, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	y = [ 5.0, 6.0 ];
	expected = [ 5.0, 12.0 ];

	gxmy( x.length, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 5.0, 6.0, 7.0, 8.0, 9.0 ];
	out = gxmy( x.length, x, 1, y, 1 );

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

	gxmy( 0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	gxmy( -4, x, 1, y, 1 );
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
		2.0,  // 1.0 * 2.0
		9.0,  // 3.0 * 3.0
		20.0  // 5.0 * 4.0
	];

	gxmy( 3, x, 2, y, 1 );
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
		2.0,  // 1.0 * 2.0
		9.0,  // 3.0 * 3.0
		20.0  // 5.0 * 4.0
	];

	gxmy( 3, toAccessorArray( x ), 2, toAccessorArray( y ), 1 );
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
		2.0,  // 1.0 * 2.0
		30.0,
		6.0,  // 2.0 * 3.0
		10.0,
		12.0  // 3.0 * 4.0
	];

	gxmy( 3, x, 1, y, 2 );
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
		2.0,  // 1.0 * 2.0
		30.0,
		6.0,  // 2.0 * 3.0
		10.0,
		12.0  // 3.0 * 4.0
	];

	gxmy( 3, toAccessorArray( x ), 1, toAccessorArray( y ), 2 );
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
		4.0,  // 1.0 * 4.0
		9.0,  // 3.0 * 3.0
		10.0  // 5.0 * 2.0
	]);

	gxmy( 3, x, -2, y, -1 );
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
		4.0,  // 1.0 * 4.0
		9.0,  // 3.0 * 3.0
		10.0  // 5.0 * 2.0
	]);

	gxmy( 3, toAccessorArray( x ), -2, toAccessorArray( y ), -1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;

	x0 = new Float64Array([
		10.0,
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0
	]);
	y0 = new Float64Array([
		10.0,
		10.0,
		2.0, // 0
		3.0, // 1
		4.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 );

	expected = new Float64Array([
		10.0,
		10.0,
		2.0,  // 1.0 * 2.0
		6.0,  // 2.0 * 3.0
		12.0  // 3.0 * 4.0
	]);

	gxmy( 3, x1, 1, y1, 1 );
	t.deepEqual( y0, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently multiplies elements of `x` by the corresponding elements of `y` and assigns the results to `y`', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = x[ i ] * y[ i ];
	}
	gxmy( x.length, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	y = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = x[ i ] * y[ i ];
	}
	gxmy( x.length, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});
