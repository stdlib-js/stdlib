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
var gaxpy = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gaxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( gaxpy.length, 6, 'returns expected value' );
	t.end();
});

tape( 'the function multiplies `x` by a constant and adds the result to `y`', function test( t ) {
	var expected;
	var alpha;
	var x;
	var y;

	alpha = 2.0;
	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];

	expected = [ 3.0, 5.0, 7.0, 9.0, 11.0 ];

	gaxpy( x.length, alpha, x, 1, y, 1 );

	t.deepEqual( y, expected, 'returns expected value' );

	// Short datasets:
	x = [ 1.0, 2.0 ];
	y = [ 1.0, 1.0 ];

	expected = [ 3.0, 5.0 ];

	gaxpy( x.length, alpha, x, 1, y, 1 );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function efficiently handles the case where `alpha` is `0`', function test( t ) {
	var expected;
	var alpha;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	alpha = 0.0;

	expected = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];

	gaxpy( x.length, alpha, x, 1, y, 1 );

	t.deepEqual( y, expected, 'returns expected value' );
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
		1.0, // 0
		1.0, // 1
		1.0, // 2
		1.0,
		1.0
	];
	N = 3;

	gaxpy( N, 2.0, x, 2, y, 1 );

	expected = [ 3.0, 7.0, 11.0, 1.0, 1.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
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
		1.0, // 0
		1.0,
		1.0, // 1
		1.0,
		1.0  // 2
	];
	N = 3;

	gaxpy( N, 2.0, x, 1, y, 2 );

	expected = [ 3.0, 1.0, 5.0, 1.0, 7.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	out = gaxpy( x.length, 3.0, x, 1, y, 1 );

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

	gaxpy( -1, 3.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	gaxpy( 0, 3.0, x, 1, y, 1 );
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
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	];
	N = 3;

	gaxpy( N, 3.0, x, -2, y, -1 );

	expected = [ 9.0, 16.0, 23.0, 9.0, 10.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	];
	y = [
		7.0,  // 2
		8.0,  // 1
		9.0,  // 0
		10.0,
		11.0,
		12.0
	];
	N = 3;

	gaxpy( N, 3.0, x, 2, y, -1 );

	expected = [ 22.0, 17.0, 12.0, 10.0, 11.0, 12.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	y0 = new Float64Array([
		7.0,
		8.0,
		9.0,
		10.0, // 0
		11.0, // 1
		12.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	gaxpy( 3, 3.0, x1, -2, y1, 1 );
	expected = new Float64Array([
		7.0,
		8.0,
		9.0,
		28.0,
		23.0,
		18.0
	]);

	t.deepEqual( y0, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently multiplies `x` by a constant and adds to `y`', function test( t ) {
	var expected;
	var alpha;
	var x;
	var y;
	var i;

	alpha = 3.0;

	x = new Array( 100 );
	y = new Array( x.length );
	expected = new Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = ( x[i]*alpha ) + y[i];
	}

	gaxpy( x.length, alpha, x, 1, y, 1 );

	t.deepEqual( y, expected, 'returns expected value' );

	x = new Array( 123 );
	y = new Array( x.length );
	expected = new Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i*2;
		y[ i ] = x.length - i;
		expected[ i ] = ( x[i]*alpha ) + y[i];
	}

	gaxpy( x.length, alpha, x, 1, y, 1 );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});
