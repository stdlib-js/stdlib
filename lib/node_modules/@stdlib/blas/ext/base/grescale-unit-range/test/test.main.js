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
var grescaleUnitRange = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof grescaleUnitRange, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( grescaleUnitRange.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function rescales each element from the range [a, b] to [0, 1] and assigns the results to `y`', function test( t ) {
	var expected;
	var x;
	var y;

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
	y = zeros( x.length );
	expected = [
		0.375, // (4.0 - 1.0) / (9.0 - 1.0)
		0.125, // (2.0 - 1.0) / (9.0 - 1.0)
		-0.5,  // (-3.0 - 1.0) / (9.0 - 1.0)
		0.5,   // (5.0 - 1.0) / (9.0 - 1.0)
		-0.25, // (-1.0 - 1.0) / (9.0 - 1.0)
		0.125, // (2.0 - 1.0) / (9.0 - 1.0)
		-0.75, // (-5.0 - 1.0) / (9.0 - 1.0)
		0.625  // (6.0 - 1.0) / (9.0 - 1.0)
	];

	grescaleUnitRange( x.length, 1.0, 9.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 3.0 ];
	y = zeros( x.length );
	expected = [ 0.0, 0.25 ];

	grescaleUnitRange( x.length, 1.0, 9.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function rescales each element from the range [a, b] to [0, 1] and assigns the results to `y` (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

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
	y = zeros( x.length );
	expected = [
		0.375, // (4.0 - 1.0) / (9.0 - 1.0)
		0.125, // (2.0 - 1.0) / (9.0 - 1.0)
		-0.5,  // (-3.0 - 1.0) / (9.0 - 1.0)
		0.5,   // (5.0 - 1.0) / (9.0 - 1.0)
		-0.25, // (-1.0 - 1.0) / (9.0 - 1.0)
		0.125, // (2.0 - 1.0) / (9.0 - 1.0)
		-0.75, // (-5.0 - 1.0) / (9.0 - 1.0)
		0.625  // (6.0 - 1.0) / (9.0 - 1.0)
	];

	grescaleUnitRange( x.length, 1.0, 9.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 ); // eslint-disable-line max-len
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 3.0 ];
	y = zeros( x.length );
	expected = [ 0.0, 0.25 ];

	grescaleUnitRange( x.length, 1.0, 9.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 ); // eslint-disable-line max-len
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = zeros( x.length );
	out = grescaleUnitRange( x.length, 1.0, 9.0, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 3.0, -4.0, 1.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	expected = [ 4.0, 5.0, 6.0 ];

	grescaleUnitRange( 0, 1.0, 9.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	grescaleUnitRange( -4, 1.0, 9.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when the input range has unit width, the function shifts each element', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];
	y = zeros( x.length );
	expected = [ 1.0, -6.0, -1.0, 13.0, 2.0, 1.0 ]; // x - 2.0

	grescaleUnitRange( x.length, 2.0, 3.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'when the lower bound is zero, the function scales each element', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 10.0, -5.0, 15.0, 20.0, -10.0, 25.0 ];
	y = zeros( x.length );
	expected = [ 5.0, -2.5, 7.5, 10.0, -5.0, 12.5 ]; // x * 0.5

	grescaleUnitRange( x.length, 0.0, 2.0, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	y = zeros( 3 );
	expected = [
		0.125, // (2.0 - 1.0) / (9.0 - 1.0)
		-0.75, // (-5.0 - 1.0) / (9.0 - 1.0)
		0.625  // (6.0 - 1.0) / (9.0 - 1.0)
	];

	grescaleUnitRange( 3, 1.0, 9.0, x, 2, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	y = zeros( 3 );
	expected = [
		0.125, // (2.0 - 1.0) / (9.0 - 1.0)
		-0.75, // (-5.0 - 1.0) / (9.0 - 1.0)
		0.625  // (6.0 - 1.0) / (9.0 - 1.0)
	];

	grescaleUnitRange( 3, 1.0, 9.0, toAccessorArray( x ), 2, toAccessorArray( y ), 1 ); // eslint-disable-line max-len
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 3.0, 5.0 ];
	y = [
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	];
	expected = [
		0.0,  // (1.0 - 1.0) / (9.0 - 1.0)
		30.0,
		0.25, // (3.0 - 1.0) / (9.0 - 1.0)
		10.0,
		0.5   // (5.0 - 1.0) / (9.0 - 1.0)
	];

	grescaleUnitRange( 3, 1.0, 9.0, x, 1, y, 2 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 3.0, 5.0 ];
	y = [
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	];
	expected = [
		0.0,  // (1.0 - 1.0) / (9.0 - 1.0)
		30.0,
		0.25, // (3.0 - 1.0) / (9.0 - 1.0)
		10.0,
		0.5   // (5.0 - 1.0) / (9.0 - 1.0)
	];

	grescaleUnitRange( 3, 1.0, 9.0, toAccessorArray( x ), 1, toAccessorArray( y ), 2 ); // eslint-disable-line max-len
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	y = zeros( 5 );
	expected = [
		0.125, // (2.0 - 1.0) / (9.0 - 1.0)
		0.0,
		-0.75, // (-5.0 - 1.0) / (9.0 - 1.0)
		0.0,
		0.625  // (6.0 - 1.0) / (9.0 - 1.0)
	];

	grescaleUnitRange( 3, 1.0, 9.0, x, -2, y, -2 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	y = zeros( 5 );
	expected = [
		0.125, // (2.0 - 1.0) / (9.0 - 1.0)
		0.0,
		-0.75, // (-5.0 - 1.0) / (9.0 - 1.0)
		0.0,
		0.625  // (6.0 - 1.0) / (9.0 - 1.0)
	];

	grescaleUnitRange( 3, 1.0, 9.0, toAccessorArray( x ), -2, toAccessorArray( y ), -2 ); // eslint-disable-line max-len
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
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		5.0
	]);
	y0 = new Float64Array([
		10.0,
		10.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 );

	expected = new Float64Array([
		10.0,
		10.0,
		0.125, // (2.0 - 1.0) / (9.0 - 1.0)
		0.25,  // (3.0 - 1.0) / (9.0 - 1.0)
		0.375  // (4.0 - 1.0) / (9.0 - 1.0)
	]);

	grescaleUnitRange( 3, 1.0, 9.0, x1, 1, y1, 1 );
	t.deepEqual( y0, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently rescales elements', function test( t ) {
	var expected;
	var x;
	var y;
	var a;
	var b;
	var i;

	a = 1.0;
	b = 9.0;
	x = new Float64Array( 100 );
	y = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = ( x[ i ] - a ) / ( b - a );
	}
	grescaleUnitRange( x.length, a, b, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	y = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = ( x[ i ] - a ) / ( b - a );
	}
	grescaleUnitRange( x.length, a, b, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});
