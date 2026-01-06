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
var dchebychev = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dchebychev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( dchebychev.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the Chebychev distance between two strided arrays', function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0, 2.0, -5.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0, 8.0, 2.0, -3.0 ] );

	// Test against textbook formula: max(2,4,2,9,9,6,7,9)
	d = dchebychev( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 9.0, 0 ), true, 'returns expected value' );

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	// Test against textbook formula: max(2,2,2)
	d = dchebychev( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 2.0, 0 ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var d;
	var x;
	var y;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, -2.0, 3.0 ] );

	d = dchebychev( 0, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, NaN, 0 ), true, 'returns expected value' );

	d = dchebychev( -4, x, 1, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, NaN, 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var d;
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

	// Test against textbook formula: max(6,7,9)
	d = dchebychev( 3, x, 2, 0, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 9.0, 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var d;
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

	// Test against textbook formula: max(4,3,2)
	d = dchebychev( 3, x, 2, 1, y, 1, 0 );
	t.strictEqual( isAlmostSameValue( d, 4.0, 0 ), true, 'returns expected value' + d );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var d;
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

	// Test against textbook formula: max(6,0,1)
	d = dchebychev( 3, x, 1, 0, y, 2, 0 );
	t.strictEqual( isAlmostSameValue( d, 6.0, 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var d;
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

	// Test against textbook formula: max(8,7,6)
	d = dchebychev( 3, x, 2, 0, y, 1, 3 );
	t.strictEqual( isAlmostSameValue( d, 8.0, 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var d;
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

	// Test against textbook formula: max(3,4,5)
	d = dchebychev( 3, x, -2, x.length-1, y, -1, 2 );
	t.strictEqual( isAlmostSameValue( d, 5.0, 0 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var d;
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

	// Test against textbook formula: max(8,5,2)
	d = dchebychev( 3, x, 2, 0, y, -1, y.length-2 );
	t.strictEqual( isAlmostSameValue( d, 8.0, 0 ), true, 'returns expected value' );
	t.end();
});
