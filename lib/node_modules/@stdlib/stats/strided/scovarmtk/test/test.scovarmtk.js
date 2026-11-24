/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var Float32Array = require( '@stdlib/array/float32' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var scovarmtk = require( './../lib/scovarmtk.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scovarmtk, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( scovarmtk.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the population covariance', function test( t ) {
	var x;
	var y;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	y = new Float32Array( [ -2.0, 1.0, 5.0, -4.0, 3.0, 0.0 ] );
	v = scovarmtk( x.length, 0, 0.5, x, 1, 0.5, y, 1 );
	t.strictEqual( v, f32( -45.5/x.length ), 'returns expected value' );

	x = new Float32Array( [ -4.0, -4.0 ] );
	v = scovarmtk( x.length, 0, -4.0, x, 1, -4.0, x, 1 );
	t.strictEqual( v, f32( 0.0 ), 'returns expected value' );

	x = new Float32Array( [ NaN, 4.0 ] );
	v = scovarmtk( x.length, 0, 4.0, x, 1, 4.0, x, 1 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample covariance', function test( t ) {
	var x;
	var y;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	y = new Float32Array( [ -2.0, 1.0, 5.0, -4.0, 3.0, 0.0 ] );
	v = scovarmtk( x.length, 1, 0.5, x, 1, 0.5, y, 1 );
	t.strictEqual( v, f32( -45.5/(x.length-1) ), 'returns expected value' );

	x = new Float32Array( [ -4.0, -4.0 ] );
	v = scovarmtk( x.length, 1, -4.0, x, 1, -4.0, x, 1 );
	t.strictEqual( v, f32( 0.0 ), 'returns expected value' );

	x = new Float32Array( [ NaN, 4.0 ] );
	v = scovarmtk( x.length, 1, 4.0, x, 1, 4.0, x, 1 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = scovarmtk( 0, 1, 0.6, x, 1, 0.6, x, 1 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = scovarmtk( -1, 1, 0.6, x, 1, 0.6, x, 1 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `correction` parameter yielding `N-correction` less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = scovarmtk( x.length, x.length, 0.6, x, 1, 0.6, x, 1 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	v = scovarmtk( x.length, x.length+1, 0.6, x, 1, 0.6, x, 1 );
	t.strictEqual( isnanf( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride parameters', function test( t ) {
	var x;
	var y;
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

	y = new Float32Array([
		2.0,  // 0
		2.0,
		1.0,  // 1
		-7.0,
		4.0,  // 2
		3.0,
		-2.0, // 3
		2.0
	]);

	v = scovarmtk( 4, 1, 1.25, x, 2, 1.25, y, 2 );

	t.strictEqual( v, f32( -18.25/3 ), 'returns expected value' );
	t.end();
});

tape( 'the function supports negative stride parameters', function test( t ) {
	var x;
	var y;
	var v;

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

	y = new Float32Array([
		2.0,  // 3
		2.0,
		1.0,  // 2
		-7.0,
		4.0,  // 1
		3.0,
		-2.0, // 0
		2.0
	]);

	v = scovarmtk( 4, 1, 1.25, x, -2, 1.25, y, -2 );

	t.strictEqual( v, f32( -18.25/3 ), 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var x0;
	var x1;
	var y0;
	var y1;
	var v;

	x0 = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0
	]);

	y0 = new Float32Array([
		2.0,
		-2.0, // 0
		2.0,
		1.0,  // 1
		-2.0,
		4.0,  // 2
		3.0,
		2.0,  // 3
		6.0
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
	y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	v = scovarmtk( 4, 1, 1.25, x1, 2, 1.25, y1, 2 );
	t.strictEqual( v, f32( 5.75/3 ), 'returns expected value' );

	t.end();
});
