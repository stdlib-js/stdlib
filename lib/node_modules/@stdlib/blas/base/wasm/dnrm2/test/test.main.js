/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var Float64Array = require( '@stdlib/array/float64' );
var dnrm2 = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dnrm2, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `main` method has an arity of 3', function test( t ) {
	t.strictEqual( dnrm2.main.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the `main` method calculates the L2-norm of a vector', function test( t ) {
	var x;
	var z;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	z = dnrm2.main( x.length, x, 1 );
	t.strictEqual( z, sqrt( 55.0 ), 'returns expected value' );

	x = new Float64Array( [ -4.0 ] );

	z = dnrm2.main( x.length, x, 1 );
	t.strictEqual( z, 4.0, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports a `stride` parameter', function test( t ) {
	var x;
	var z;

	x = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);

	z = dnrm2.main( 4, x, 2 );

	t.strictEqual( z, 5.0, 'returns expected value' );
	t.end();
});

tape( 'the `main` method supports a negative `stride` parameter', function test( t ) {
	var x;
	var z;

	x = new Float64Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);

	z = dnrm2.main( 4, x, -2 );

	t.strictEqual( z, 5.0, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `main` method returns `0`', function test( t ) {
	var x;
	var z;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	z = dnrm2.main( 0, x, 1 );
	t.strictEqual( z, 0.0, 'returns expected value' );

	z = dnrm2.main( -1, x, 1 );
	t.strictEqual( z, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the `main` method supports view offsets', function test( t ) {
	var x0;
	var x1;
	var z;

	x0 = new Float64Array([
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

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	z = dnrm2.main( 4, x1, 2 );
	t.strictEqual( z, 5.0, 'returns expected value' );

	t.end();
});
