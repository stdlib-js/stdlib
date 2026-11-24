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
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var dsquaredEuclidean = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dsquaredEuclidean, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( dsquaredEuclidean.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the squared Euclidean distance', function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	y = new Float64Array( [ 5.0, 12.0, -8.0, 15.0, 9.0, 0.0 ] );

	z = dsquaredEuclidean( x.length, x, 1, 0, y, 1, 0 );

	// 16+196+16+100+81+9 = 418
	t.strictEqual( isAlmostSameValue( z, 418.0, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ -4.0 ] );
	y = new Float64Array( [ 10.0 ] );

	z = dsquaredEuclidean( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( z, 196.0, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e10, 1.0e10, 1.0e10, 1.0e10 ] );
	y = new Float64Array( [ -1.0e10, 1.0e10, -1.0e10, -1.0e10 ] );

	z = dsquaredEuclidean( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( z, 1.2e+21, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e-15, 1.0e-15, 1.0e-15, 1.0e-15 ] );
	y = new Float64Array( [ -1.0e-15, -1.0e-15, -1.0e-15, -1.0e-15 ] );

	z = dsquaredEuclidean( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( z, 1.6e-29, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e10, 1.0e5, 1.0e10, 1.0e5 ] );
	y = new Float64Array( [ -1.0e10, -1.0e5, -1.0e10, -1.0e5 ] );

	z = dsquaredEuclidean( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( z, 8.0000000008e+20, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.0e-15, 1.0e5, 1.0e-15, 1.0e5 ] );
	y = new Float64Array( [ -1.0e-15, -1.0e5, -1.0e-15, -1.0e5 ] );

	z = dsquaredEuclidean( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( z, 80000000000.0, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 1.4e-14, 1.5e-14, 1.4e-14, 0.0 ] );
	y = new Float64Array( [ -1.4e-14, -1.5e-14, -1.4e-14, 0.0 ] );

	z = dsquaredEuclidean( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( z, 2.468e-27, 1 ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	y = new Float64Array( [ 3.0, -2.0, 1.0, -15.0, 3.0 ] );

	z = dsquaredEuclidean( 0, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( z, NaN, 0 ), true, 'returns expected value' );

	z = dsquaredEuclidean( -1, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( z, NaN, 0 ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride parameters', function test( t ) {
	var x;
	var y;
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
	y = new Float64Array([
		8.0,  // 0
		-2.0,
		3.0,  // 1
		-2.0,
		7.0,  // 2
		-2.0,
		0.0,  // 3
		-1.0
	]);

	z = dsquaredEuclidean( 4, x, 2, 0, y, 2, 0 );

	// 49+1+81+16 = 147
	t.strictEqual( isAlmostSameValue( z, 147.0, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative stride parameters', function test( t ) {
	var x;
	var y;
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
	y = new Float64Array([
		8.0,  // 3
		-2.0,
		3.0,  // 2
		-2.0,
		7.0,  // 1
		-2.0,
		0.0,  // 0
		-1.0
	]);

	z = dsquaredEuclidean( 4, x, -2, x.length-2, y, -2, y.length-2 );

	// 49+1+81+16 = 147
	t.strictEqual( isAlmostSameValue( z, 147.0, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports offset parameters', function test( t ) {
	var x;
	var y;
	var z;

	x = new Float64Array([
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
	y = new Float64Array([
		8.0,
		-2.0, // 0
		3.0,
		-2.0, // 1
		7.0,
		-2.0, // 2
		0.0,
		-1.0, // 3
		4.0
	]);

	z = dsquaredEuclidean( 4, x, 2, 1, y, 2, 1 );

	// 9+0+16+25 = 50
	t.strictEqual( isAlmostSameValue( z, 50.0, 1 ), true, 'returns expected value' );
	t.end();
});
