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
var Float64Array = require( '@stdlib/array/float64' );
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var dcosineSimilarity = require( './../lib/dcosine_similarity.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcosineSimilarity, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( dcosineSimilarity.length, 5, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the cosine similarity of two strided arrays', function test( t ) {
	var sim;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	// Test against textbook algorithm for computing cosine similarity:
	sim = dcosineSimilarity( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( sim, -0.11028735042288243, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	// Test against textbook algorithm for computing cosine similarity:
	sim = dcosineSimilarity( x.length, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( sim, 0.7337993857053429, 1 ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var sim;
	var x;
	var y;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	sim = dcosineSimilarity( 0, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( sim, NaN, 1 ), true, 'returns expected value' );

	sim = dcosineSimilarity( -4, x, 1, y, 1 );
	t.strictEqual( isAlmostSameValue( sim, NaN, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var sim;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	y = new Float64Array([
		8.0,  // 0
		2.0,  // 1
		-3.0, // 2
		3.0,
		-4.0,
		1.0
	]);

	// Test against textbook algorithm for computing cosine similarity:
	sim = dcosineSimilarity( 3, x, 2, y, 1 );
	t.strictEqual( isAlmostSameValue( sim, -0.1696208382576527, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var sim;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 0
		-3.0, // 1
		-5.0, // 2
		7.0,
		6.0
	]);
	y = new Float64Array([
		8.0,  // 0
		2.0,
		-3.0, // 1
		3.0,
		-4.0, // 2
		1.0
	]);

	// Test against textbook algorithm for computing cosine similarity:
	sim = dcosineSimilarity( 3, x, 1, y, 2 );
	t.strictEqual( isAlmostSameValue( sim, 0.7737946312060225, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var sim;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]);

	// Test against textbook algorithm for computing cosine similarity:
	sim = dcosineSimilarity( 3, x, -2, y, -1 );
	t.strictEqual( isAlmostSameValue( sim, 0.9277856399363485, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var sim;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]);

	// Test against textbook algorithm for computing cosine similarity:
	sim = dcosineSimilarity( 3, x, 2, y, -1 );
	t.strictEqual( isAlmostSameValue( sim, 0.8170052650185755, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var sim;
	var x0;
	var y0;
	var x1;
	var y1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y0 = new Float64Array([
		6.0,
		7.0,
		8.0,
		9.0,  // 0
		10.0, // 1
		11.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 );

	// Test against textbook algorithm for computing cosine similarity:
	sim = dcosineSimilarity( 3, x1, 2, y1, 1 );
	t.strictEqual( isAlmostSameValue( sim, 0.953507690477341, 1 ), true, 'returns expected value' );
	t.end();
});
