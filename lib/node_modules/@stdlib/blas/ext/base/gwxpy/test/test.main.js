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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var zeros = require( '@stdlib/array/base/zeros' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gwxpy = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gwxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( gwxpy.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function adds elements of `x` to the corresponding elements of `y` and assigns the results to elements in `w`', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = zeros( x.length );
	expected = [
		3.0,  // 1.0 + 2.0
		5.0,  // 2.0 + 3.0
		7.0,  // 3.0 + 4.0
		9.0,  // 4.0 + 5.0
		11.0  // 5.0 + 6.0
	];

	gwxpy( x.length, x, 1, y, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	y = [ 5.0, 6.0 ];
	w = zeros( x.length );
	expected = [ 6.0, 8.0 ];

	gwxpy( x.length, x, 1, y, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function adds elements of `x` to the corresponding elements of `y` and assigns the results to elements in `w` (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = zeros( x.length );
	expected = [
		3.0,  // 1.0 + 2.0
		5.0,  // 2.0 + 3.0
		7.0,  // 3.0 + 4.0
		9.0,  // 4.0 + 5.0
		11.0  // 5.0 + 6.0
	];

	gwxpy( x.length, toAccessorArray( x ), 1, toAccessorArray( y ), 1, toAccessorArray( w ), 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	y = [ 5.0, 6.0 ];
	w = zeros( x.length );
	expected = [ 6.0, 8.0 ];

	gwxpy( x.length, toAccessorArray( x ), 1, toAccessorArray( y ), 1, toAccessorArray( w ), 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 5.0, 6.0, 7.0, 8.0, 9.0 ];
	w = zeros( x.length );
	out = gwxpy( x.length, x, 1, y, 1, w, 1 );

	t.strictEqual( out, w, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `w` unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	w = [ 7.0, 8.0, 9.0 ];
	expected = [ 7.0, 8.0, 9.0 ];

	gwxpy( 0, x, 1, y, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	gwxpy( -4, x, 1, y, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [ 2.0, 3.0, 4.0 ];
	w = zeros( 3 );
	expected = [
		3.0, // 1.0 + 2.0
		6.0, // 3.0 + 3.0
		9.0  // 5.0 + 4.0
	];

	gwxpy( 3, x, 2, y, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [ 2.0, 3.0, 4.0 ];
	w = zeros( 3 );
	expected = [
		3.0, // 1.0 + 2.0
		6.0, // 3.0 + 3.0
		9.0  // 5.0 + 4.0
	];

	gwxpy( 3, toAccessorArray( x ), 2, toAccessorArray( y ), 1, toAccessorArray( w ), 1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	y = [
		2.0, // 0
		30.0,
		3.0, // 1
		10.0,
		4.0  // 2
	];
	w = zeros( 3 );
	expected = [
		3.0, // 1.0 + 2.0
		5.0, // 2.0 + 3.0
		7.0  // 3.0 + 4.0
	];

	gwxpy( 3, x, 1, y, 2, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	y = [
		2.0, // 0
		30.0,
		3.0, // 1
		10.0,
		4.0  // 2
	];
	w = zeros( 3 );
	expected = [
		3.0, // 1.0 + 2.0
		5.0, // 2.0 + 3.0
		7.0  // 3.0 + 4.0
	];

	gwxpy( 3, toAccessorArray( x ), 1, toAccessorArray( y ), 2, toAccessorArray( w ), 1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 2.0, 3.0, 4.0 ];
	w = [
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	];
	expected = [
		3.0,  // 1.0 + 2.0
		30.0,
		5.0,  // 2.0 + 3.0
		10.0,
		7.0   // 3.0 + 4.0
	];

	gwxpy( 3, x, 1, y, 1, w, 2 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 2.0, 3.0, 4.0 ];
	w = [
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	];
	expected = [
		3.0,  // 1.0 + 2.0
		30.0,
		5.0,  // 2.0 + 3.0
		10.0,
		7.0   // 3.0 + 4.0
	];

	gwxpy( 3, toAccessorArray( x ), 1, toAccessorArray( y ), 1, toAccessorArray( w ), 2 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

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
	w = new Float64Array( 3 );
	expected = new Float64Array([
		5.0, // 1.0 + 4.0
		6.0, // 3.0 + 3.0
		7.0  // 5.0 + 2.0
	]);

	gwxpy( 3, x, -2, y, -1, w, -1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		4.0, // 2
		3.0, // 1
		2.0  // 0
	];
	w = new Float64Array( 3 );
	expected = new Float64Array([
		5.0, // 1.0 + 4.0
		6.0, // 3.0 + 3.0
		7.0  // 5.0 + 2.0
	]);

	gwxpy( 3, toAccessorArray( x ), -2, toAccessorArray( y ), -1, toAccessorArray( w ), -1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var w0;
	var x1;
	var y1;
	var w1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		5.0,
		6.0
	]);
	y0 = new Float64Array([
		7.0,
		8.0,
		9.0,  // 0
		10.0, // 1
		11.0, // 2
		12.0
	]);
	w0 = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 );
	w1 = new Float64Array( w0.buffer, w0.BYTES_PER_ELEMENT*3 );

	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		11.0, // 2.0 + 9.0
		13.0, // 3.0 + 10.0
		15.0  // 4.0 + 11.0
	]);

	gwxpy( 3, x1, 1, y1, 1, w1, 1 );
	t.deepEqual( w0, expected, 'returns expected value' );
	t.end();
});

tape( 'if all strides are equal to `1`, the function efficiently adds elements of `x` to the corresponding elements of `y` and assigns the results to elements in `w`', function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( 100 );
	w = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = x[ i ] + y[ i ];
	}
	gwxpy( x.length, x, 1, y, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	y = new Float64Array( 240 );
	w = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = x[ i ] + y[ i ];
	}
	gwxpy( x.length, x, 1, y, 1, w, 1 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});
