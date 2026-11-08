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
var gxsadb = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gxsadb, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( gxsadb.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function subtracts a scalar constant from each element and divides each result by a scalar constant', function test( t ) {
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
		0.5,  // (4.0 - 3.0) / 2.0
		-0.5, // (2.0 - 3.0) / 2.0
		-3.0, // ((-3.0) - 3.0) / 2.0
		1.0,  // (5.0 - 3.0) / 2.0
		-2.0, // ((-1.0) - 3.0) / 2.0
		-0.5, // (2.0 - 3.0) / 2.0
		-4.0, // ((-5.0) - 3.0) / 2.0
		1.5   // (6.0 - 3.0) / 2.0
	];

	gxsadb( x.length, 3.0, 2.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	expected = [ -1.0, -0.5 ];

	gxsadb( x.length, 3.0, 2.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function subtracts a scalar constant from each element and divides each result by a scalar constant (accessors)', function test( t ) {
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
		0.5,
		-0.5,
		-3.0,
		1.0,
		-2.0,
		-0.5,
		-4.0,
		1.5
	];

	gxsadb( x.length, 3.0, 2.0, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	expected = [ -1.0, -0.5 ];

	gxsadb( x.length, 3.0, 2.0, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = gxsadb( x.length, 3.0, 2.0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	gxsadb( 0, 3.0, 2.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	gxsadb( -4, 3.0, 2.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'when `beta` equals `1.0`, the function subtracts `alpha` from each element', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];
	expected = [ -2.0, -9.0, -4.0, 10.0, -1.0, -2.0 ]; // x - 5.0

	gxsadb( x.length, 5.0, 1.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'when `alpha` equals `0.0`, the function divides each element by `beta`', function test( t ) {
	var expected;
	var x;

	x = [ 10.0, -5.0, 15.0, 20.0, -10.0, 25.0 ];
	expected = [ 2.0, -1.0, 3.0, 4.0, -2.0, 5.0 ]; // x / 5.0

	gxsadb( x.length, 0.0, 5.0, x, 1, 0 );
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
		-0.5, // (2.0 - 3.0) / 2.0
		-3.0,
		-4.0, // ((-5.0) - 3.0) / 2.0
		7.0,
		1.5   // (6.0 - 3.0) / 2.0
	];

	gxsadb( 3, 3.0, 2.0, x, 2, 0 );
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
		-0.5,
		-3.0,
		-4.0,
		7.0,
		1.5
	];

	gxsadb( 3, 3.0, 2.0, toAccessorArray( x ), 2, 0 );
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
		-0.5, // (2.0 - 3.0) / 2.0
		-3.0,
		-4.0, // ((-5.0) - 3.0) / 2.0
		7.0,
		1.5   // (6.0 - 3.0) / 2.0
	];

	gxsadb( 3, 3.0, 2.0, x, -2, x.length-1 );
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
		-0.5,
		-3.0,
		-4.0,
		7.0,
		1.5
	];

	gxsadb( 3, 3.0, 2.0, toAccessorArray( x ), -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	];
	expected = [
		1.0,
		-0.5, // (2.0 - 3.0) / 2.0
		3.0,
		0.5,  // (4.0 - 3.0) / 2.0
		5.0,
		1.5   // (6.0 - 3.0) / 2.0
	];

	gxsadb( 3, 3.0, 2.0, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	];
	expected = [
		1.0,
		-0.5,
		3.0,
		0.5,
		5.0,
		1.5
	];

	gxsadb( 3, 3.0, 2.0, toAccessorArray( x ), 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently subtracts a constant from and divides each element by a constant', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var i;

	alpha = 3.0;
	beta = 2.0;
	x = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = ( x[ i ] - alpha ) / beta;
	}
	gxsadb( x.length, alpha, beta, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = ( x[ i ] - alpha ) / beta;
	}
	gxsadb( x.length, alpha, beta, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});
