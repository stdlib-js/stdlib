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
var dcosineDistance = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcosineDistance, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( dcosineDistance.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the cosine distance between two strided arrays', function test( t ) {
	var c;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	// Test against textbook formula: 1-((8+12+3-20-8+16-10-18)/(10.954*14.071))
	c = dcosineDistance( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( c, 1.1102873504228825, 1 ), true, 'returns expected value' );

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	// Test against textbook formula: 1-((3+8+3)/(5.099*3.741))
	c = dcosineDistance( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( c, 0.26620061429465713, 1 ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var c;
	var x;
	var y;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	c = dcosineDistance( 0, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( c, NaN, 1 ), true, 'returns expected value' );

	c = dcosineDistance( -4, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( c, NaN, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var c;
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

	// Test against textbook formula: 1-(((2*8)+(-5*2)+(6*-3))/(8.062*8.774))
	c = dcosineDistance( 3, x, 2, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( c, 1.1696208382576527, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var c;
	var x;
	var y;

	x = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y = new Float64Array([
		6.0,  // 0
		7.0,  // 1
		8.0,  // 2
		9.0,
		10.0,
		11.0
	]);

	// Test against textbook formula: 1-(((2*6)+(4*7)+(6*8))/(7.483*12.206))
	c = dcosineDistance( 3, x, 2, 1, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( c, 0.03662466183423507, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var c;
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

	// Test against textbook formula: 1-(((2*8)+(-3*-3)+(-5*-4))/(8.062*8.774))
	c = dcosineDistance( 3, x, 1, 0, y, 2, 0 );
	t.strictEqual( isAlmostSameValue( c, 0.22620536879397746, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var c;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float64Array([
		6.0,
		7.0,
		8.0,
		9.0,  // 0
		10.0, // 1
		11.0  // 2
	]);

	// Test against textbook formula: 1-(((1*9)+(3*10)+(5*11))/(5.916*17.378147197))
	c = dcosineDistance( 3, x, 2, 0, y, 1, 3 );
	t.strictEqual( isAlmostSameValue( c, 0.08569654700273344, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var c;
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

	// Test against textbook formula: 1-(((5*8)+(3*7)+(1*6))/(5.916*12.206))
	c = dcosineDistance( 3, x, -2, x.length-1, y, -1, 2 );
	t.strictEqual( isAlmostSameValue( c, 0.07221436006365145, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var c;
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
		6.0,
		7.0,   // 2
		8.0,   // 1
		9.0,   // 0
		10.0
	]);

	// Test against textbook formula: 1-(((1*9)+(3*8)+(5*7))/(5.916*13.928))
	c = dcosineDistance( 3, x, 2, 0, y, -1, y.length-2 );
	t.strictEqual( isAlmostSameValue( c, 0.17477186623694774, 1 ), true, 'returns expected value' );
	t.end();
});
