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
var zeros = require( '@stdlib/array/base/zeros' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gwaxpb = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gwaxpb, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( gwaxpb.length, 9, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies each element in a strided array `x` by a scalar constant and adds a scalar constant before assigning the results to a strided array `w`', function test( t ) {
	var expected;
	var x;
	var w;

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
	w = zeros( x.length );
	expected = [
		23.0,  // 5.0*4.0    + 3.0
		13.0,  // 5.0*2.0    + 3.0
		-12.0, // 5.0*(-3.0) + 3.0
		28.0,  // 5.0*5.0    + 3.0
		-2.0,  // 5.0*(-1.0) + 3.0
		13.0,  // 5.0*2.0    + 3.0
		-22.0, // 5.0*(-5.0) + 3.0
		33.0   // 5.0*6.0    + 3.0
	];

	gwaxpb( x.length, 5.0, 3.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	w = zeros( x.length );
	expected = [ 8.0, 13.0 ];

	gwaxpb( x.length, 5.0, 3.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function multiplies each element in a strided array `x` by a scalar constant and adds a scalar constant before assigning the results to a strided array `w` (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

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
	w = zeros( x.length );
	expected = [
		23.0,  // 5.0*4.0    + 3.0
		13.0,  // 5.0*2.0    + 3.0
		-12.0, // 5.0*(-3.0) + 3.0
		28.0,  // 5.0*5.0    + 3.0
		-2.0,  // 5.0*(-1.0) + 3.0
		13.0,  // 5.0*2.0    + 3.0
		-22.0, // 5.0*(-5.0) + 3.0
		33.0   // 5.0*6.0    + 3.0
	];

	gwaxpb( x.length, 5.0, 3.0, toAccessorArray( x ), 1, 0, toAccessorArray( w ), 1, 0 ); // eslint-disable-line max-len
	t.deepEqual( w, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	w = zeros( x.length );
	expected = [ 8.0, 13.0 ];

	gwaxpb( x.length, 5.0, 3.0, toAccessorArray( x ), 1, 0, toAccessorArray( w ), 1, 0 ); // eslint-disable-line max-len
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	w = zeros( x.length );
	out = gwaxpb( x.length, 3.0, 1.0, x, 1, 0, w, 1, 0 );

	t.strictEqual( out, w, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `w` unchanged', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 3.0, -4.0, 1.0 ];
	w = [ 4.0, 5.0, 6.0 ];
	expected = [ 4.0, 5.0, 6.0 ];

	gwaxpb( 0, 5.0, 3.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	gwaxpb( -4, 5.0, 3.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'when `alpha` equals `1.0`, the function adds `beta` to each element and assigns the results to `w`', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];
	w = zeros( x.length );
	expected = [ 8.0, 1.0, 6.0, 20.0, 9.0, 8.0 ]; // x + 5.0

	gwaxpb( x.length, 1.0, 5.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'when `beta` equals `0.0`, the function multiplies each element by `alpha` and assigns the results to `w`', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];
	w = zeros( x.length );
	expected = [ 15.0, -20.0, 5.0, 75.0, 20.0, 15.0 ]; // 5.0*x

	gwaxpb( x.length, 5.0, 0.0, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	w = zeros( 3 );
	expected = [
		13.0,  // 5.0*2.0    + 3.0
		-22.0, // 5.0*(-5.0) + 3.0
		33.0   // 5.0*6.0    + 3.0
	];

	gwaxpb( 3, 5.0, 3.0, x, 2, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	w = zeros( 3 );
	expected = [
		13.0,  // 5.0*2.0    + 3.0
		-22.0, // 5.0*(-5.0) + 3.0
		33.0   // 5.0*6.0    + 3.0
	];

	gwaxpb( 3, 5.0, 3.0, toAccessorArray( x ), 2, 0, toAccessorArray( w ), 1, 0 ); // eslint-disable-line max-len
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	w = [
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	];
	expected = [
		8.0,  // 5.0*1.0 + 3.0
		30.0,
		13.0, // 5.0*2.0 + 3.0
		10.0,
		18.0  // 5.0*3.0 + 3.0
	];

	gwaxpb( 3, 5.0, 3.0, x, 1, 0, w, 2, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	w = [
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	];
	expected = [
		8.0,  // 5.0*1.0 + 3.0
		30.0,
		13.0, // 5.0*2.0 + 3.0
		10.0,
		18.0  // 5.0*3.0 + 3.0
	];

	gwaxpb( 3, 5.0, 3.0, toAccessorArray( x ), 1, 0, toAccessorArray( w ), 2, 0 ); // eslint-disable-line max-len
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	w = [
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];
	expected = [
		13.0,  // 5.0*2.0    + 3.0
		-22.0, // 5.0*(-5.0) + 3.0
		33.0   // 5.0*6.0    + 3.0
	];

	gwaxpb( 3, 5.0, 3.0, x, -2, x.length-1, w, -1, w.length-1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	w = [
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];
	expected = [
		13.0,  // 5.0*2.0    + 3.0
		-22.0, // 5.0*(-5.0) + 3.0
		33.0   // 5.0*6.0    + 3.0
	];

	gwaxpb( 3, 5.0, 3.0, toAccessorArray( x ), -2, x.length-1, toAccessorArray( w ), -1, w.length-1 ); // eslint-disable-line max-len
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var w;

	x = [
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		5.0
	];
	w = zeros( 5 );
	expected = [
		13.0, // 5.0*2.0 + 3.0
		18.0, // 5.0*3.0 + 3.0
		23.0, // 5.0*4.0 + 3.0
		0.0,
		0.0
	];

	gwaxpb( 3, 5.0, 3.0, x, 1, 1, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` offset', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	w = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];
	expected = [
		0.0,
		0.0,
		8.0,  // 5.0*1.0 + 3.0
		13.0, // 5.0*2.0 + 3.0
		18.0  // 5.0*3.0 + 3.0
	];

	gwaxpb( 3, 5.0, 3.0, x, 1, 0, w, 1, 2 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently multiplies each element of a strided array by a constant and adds a constant', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var w;
	var i;

	alpha = 3.0;
	beta = 5.0;
	x = new Float64Array( 100 );
	w = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = ( alpha * x[ i ] ) + beta;
	}
	gwaxpb( x.length, alpha, beta, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	w = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = ( alpha * x[ i ] ) + beta;
	}
	gwaxpb( x.length, alpha, beta, x, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});
