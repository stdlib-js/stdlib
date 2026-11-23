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
var gaxpb = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gaxpb, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gaxpb.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies each element by a scalar constant and adds a scalar constant to each result', function test( t ) {
	var expected;
	var x;

	x = [
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	];
	expected = [
		23.0,  // 5.0*4.0 + 3.0
		13.0,  // 5.0*2.0 + 3.0
		-12.0, // 5.0*(-3.0) + 3.0
		28.0,  // 5.0*5.0 + 3.0
		-2.0,  // 5.0*(-1.0) + 3.0
		13.0,  // 5.0*2.0 + 3.0
		-22.0, // 5.0*(-5.0) + 3.0
		33.0   // 5.0*6.0 + 3.0
	];

	gaxpb( x.length, 5.0, 3.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	expected = [ 8.0, 13.0 ]; // [5.0*1.0+3.0, 5.0*2.0+3.0]

	gaxpb( x.length, 5.0, 3.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function multiplies each element by a scalar constant and adds a scalar constant to each result (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	];
	expected = [
		23.0,  // 5.0*4.0 + 3.0
		13.0,  // 5.0*2.0 + 3.0
		-12.0, // 5.0*(-3.0) + 3.0
		28.0,  // 5.0*5.0 + 3.0
		-2.0,  // 5.0*(-1.0) + 3.0
		13.0,  // 5.0*2.0 + 3.0
		-22.0, // 5.0*(-5.0) + 3.0
		33.0   // 5.0*6.0 + 3.0
	];

	gaxpb( x.length, 5.0, 3.0, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	expected = [ 8.0, 13.0 ];

	gaxpb( x.length, 5.0, 3.0, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = gaxpb( x.length, 5.0, 3.0, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	gaxpb( 0, 5.0, 3.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gaxpb( -4, 5.0, 3.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'when `alpha` equals `1.0`, the function adds `beta` to each element', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];
	expected = [ 8.0, 1.0, 6.0, 20.0, 9.0, 8.0 ]; // 1.0*x + 5.0

	gaxpb( x.length, 1.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'when `beta` equals `0.0`, the function multiplies each element by `alpha`', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];
	expected = [ 15.0, -20.0, 5.0, 75.0, 20.0, 15.0 ]; // 5.0*x

	gaxpb( x.length, 5.0, 0.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		13.0,  // 5.0*2.0 + 3.0 = 13.0
		-3.0,
		-22.0, // 5.0*(-5.0) + 3.0 = -22.0
		7.0,
		33.0   // 5.0*6.0 + 3.0 = 33.0
	];

	gaxpb( 3, 5.0, 3.0, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		13.0,
		-3.0,
		-22.0,
		7.0,
		33.0
	];

	gaxpb( 3, 5.0, 3.0, toAccessorArray( x ), 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		13.0,  // 5.0*2.0 + 3.0
		-3.0,
		-22.0, // 5.0*(-5.0) + 3.0
		7.0,
		33.0   // 5.0*6.0 + 3.0
	];

	gaxpb( 3, 5.0, 3.0, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		13.0,
		-3.0,
		-22.0,
		7.0,
		33.0
	];

	gaxpb( 3, 5.0, 3.0, toAccessorArray( x ), -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	expected = new Float64Array([
		1.0,
		13.0, // 5.0*2.0 + 3.0
		3.0,
		23.0, // 5.0*4.0 + 3.0
		5.0,
		33.0  // 5.0*6.0 + 3.0
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	gaxpb( 3, 5.0, 3.0, x1, 2 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently multiplies by a constant and adds a constant to each element', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var i;

	alpha = 3.0;
	beta = 5.0;
	x = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = ( alpha * x[ i ] ) + beta;
	}
	gaxpb( x.length, alpha, beta, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = ( alpha * x[ i ] ) + beta;
	}
	gaxpb( x.length, alpha, beta, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});
