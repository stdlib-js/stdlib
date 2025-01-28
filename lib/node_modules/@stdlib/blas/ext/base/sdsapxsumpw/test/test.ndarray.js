/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Float32Array = require( '@stdlib/array/float32' );
var sdsapxsumpw = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sdsapxsumpw, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( sdsapxsumpw.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function adds a constant and calculates the sum of all strided array elements', function test( t ) {
	var x;
	var v;
	var i;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0, 0.0, -3.0, 3.0 ] );
	v = sdsapxsumpw( x.length, 5.0, x, 1, 0 );
	t.strictEqual( v, 48.0, 'returns expected value' );

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	v = sdsapxsumpw( x.length, 5.0, x, 1, 0 );
	t.strictEqual( v, 33.0, 'returns expected value' );

	x = new Float32Array( [ -4.0, -4.0 ] );
	v = sdsapxsumpw( x.length, 5.0, x, 1, 0 );
	t.strictEqual( v, 2.0, 'returns expected value' );

	x = new Float32Array( [ NaN, 4.0 ] );
	v = sdsapxsumpw( x.length, 5.0, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = new Float32Array( [ 1.0, 1.0e38, 1.0, -1.0e38 ] );
	v = sdsapxsumpw( x.length, 5.0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = new Float32Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = i + 1;
	}
	v = sdsapxsumpw( x.length, 5.0, x, 1, 0 );
	t.strictEqual( v, 500500.0 + (5.0*1e3), 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = sdsapxsumpw( 0, 5.0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = sdsapxsumpw( -1, 5.0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first indexed element plus a constant', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = sdsapxsumpw( 1, 5.0, x, 1, 0 );
	t.strictEqual( v, 6.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var x;
	var v;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);

	v = sdsapxsumpw( 4, 5.0, x, 2, 0 );

	t.strictEqual( v, 25.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', function test( t ) {
	var x;
	var v;
	var i;

	x = new Float32Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);

	v = sdsapxsumpw( 4, 5.0, x, -2, 6 );

	t.strictEqual( v, 25.0, 'returns expected value' );

	x = new Float32Array( 1e3 );
	for ( i = 0; i < 1e3; i++ ) {
		x[ i ] = i + 1;
	}
	v = sdsapxsumpw( x.length, 5.0, x, -1, x.length-1 );
	t.strictEqual( v, 500500.0 + (5.0*1e3), 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the first element plus a constant repeated N times', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = sdsapxsumpw( x.length, 5.0, x, 0, 0 );
	t.strictEqual( v, x.length * (x[0]+5.0), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter', function test( t ) {
	var x;
	var v;

	x = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);

	v = sdsapxsumpw( 4, 5.0, x, 2, 1 );
	t.strictEqual( v, 25.0, 'returns expected value' );

	t.end();
});
