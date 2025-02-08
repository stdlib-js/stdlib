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
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var smskmax = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof smskmax, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( smskmax.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the maximum value of a strided array according to a mask', function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ] );
	mask = new Uint8Array( [ 0, 0, 0, 1, 0, 0, 0 ] );
	v = smskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	x = new Float32Array( [ -4.0, NaN, -5.0 ] );
	mask = new Uint8Array( [ 0, 1, 0 ] );
	v = smskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = new Float32Array( [ -0.0, 0.0, NaN, -0.0 ] );
	mask = new Uint8Array( [ 0, 0, 1, 0 ] );
	v = smskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isPositiveZerof( v ), true, 'returns expected value' );

	x = new Float32Array( [ -4.0, 0.0, NaN, 5.0 ] );
	mask = new Uint8Array( [ 0, 0, 0, 0 ] );
	v = smskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN ] );
	mask = new Uint8Array( [ 0 ] );
	v = smskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN ] );
	mask = new Uint8Array( [ 1 ] );
	v = smskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 1, 1 ] );
	v = smskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 1, 0 ] );
	v = smskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 0, 1 ] );
	v = smskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );
	mask = new Uint8Array( [ 0, 0 ] );
	v = smskmax( x.length, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	mask = new Uint8Array( x.length );

	v = smskmax( 0, x, 1, 0, mask, 1, 0 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = smskmax( -1, x, 1, 0, mask, 1 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element', function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	mask = new Uint8Array( x.length );

	v = smskmax( 1, x, 1, 0, mask, 1, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports `stride` parameters', function test( t ) {
	var mask;
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
		2.0,
		5.0,  // 4
		6.0
	]);
	mask = new Uint8Array([
		0, // 0
		0,
		0, // 1
		0,
		0, // 2
		0,
		0, // 3
		0,
		1, // 4
		1
	]);

	v = smskmax( 5, x, 2, 0, mask, 2, 0 );

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative `stride` parameters', function test( t ) {
	var mask;
	var x;
	var v;

	x = new Float32Array([
		5.0,  // 4
		6.0,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	mask = new Uint8Array([
		1, // 4
		1,
		0, // 3
		0,
		0, // 2
		0,
		0, // 1
		0,
		0, // 0
		0
	]);

	v = smskmax( 5, x, -2, 8, mask, -2, 8 );

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports `offset` parameters', function test( t ) {
	var mask;
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
		4.0,  // 3
		5.0,
		6.0   // 4
	]);
	mask = new Uint8Array([
		0,
		0, // 0
		0,
		0, // 1
		0,
		0, // 2
		0,
		0, // 3
		1,
		1  // 4
	]);

	v = smskmax( 5, x, 2, 1, mask, 2, 1 );
	t.strictEqual( v, 4.0, 'returns expected value' );

	t.end();
});
