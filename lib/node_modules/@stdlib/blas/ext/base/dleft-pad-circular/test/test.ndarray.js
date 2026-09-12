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
var dleftPadCircular = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dleftPadCircular, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( dleftPadCircular.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function prepends elements to a strided array by circularly repeating existing elements', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	dleftPadCircular( x.length, 6, x, 1, 0, y, 1, 0 );
	expected = new Float64Array( [ 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	dleftPadCircular( x.length, 2, x, 1, 0, y, 1, 0 );
	expected = new Float64Array( [ 2.0, 3.0, 1.0, 2.0, 3.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	dleftPadCircular( x.length, 4, x, 1, 0, y, 1, 0 );
	expected = new Float64Array( [ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var x;
	var y;
	var v;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	v = dleftPadCircular( x.length, 2, x, 1, 0, y, 1, 0 );

	t.strictEqual( v, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	expected = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	dleftPadCircular( -1, 2, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	dleftPadCircular( 0, 2, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `k` parameter less than `0`, the function copies indexed elements in `x` to `y` without padding', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float64Array( [ 6.0, 7.0, 8.0 ] );

	expected = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dleftPadCircular( x.length, -1, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
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
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	dleftPadCircular( 3, 2, x, 2, 0, y, 1, 0 );

	expected = new Float64Array( [ 3.0, 5.0, 1.0, 3.0, 5.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	y = new Float64Array([
		0.0, // 1
		0.0,
		0.0, // 2
		0.0,
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0, // 2
		0.0
	]);

	dleftPadCircular( 3, 2, x, 1, 0, y, 2, 0 );

	expected = new Float64Array( [ 2.0, 0.0, 3.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
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
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0, // 2
		0.0  // 1
	]);

	dleftPadCircular( 3, 2, x, -2, 4, y, -1, 4 );

	expected = new Float64Array( [ 1.0, 3.0, 5.0, 1.0, 3.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);
	y = new Float64Array([
		0.0, // 2
		0.0, // 3
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0  // 3
	]);

	dleftPadCircular( 4, 2, x, 2, 1, y, 1, 0 );

	expected = new Float64Array( [ 2.0, 4.0, 1.0, -2.0, 2.0, 4.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	y = new Float64Array([
		0.0,
		0.0,
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	dleftPadCircular( 3, 2, x, 1, 0, y, 1, 2 );

	expected = new Float64Array( [ 0.0, 0.0, 2.0, 3.0, 1.0, 2.0, 3.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a zero `x` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array([
		1.0,
		2.0, // 0, 1, 2
		3.0
	]);
	y = new Float64Array([
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	dleftPadCircular( 3, 2, x, 0, 1, y, 1, 0 );

	expected = new Float64Array( [ 2.0, 2.0, 2.0, 2.0, 2.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
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
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0, // 2
		0.0  // 1
	]);

	dleftPadCircular( 3, 2, x, 2, 0, y, -1, 4 );

	expected = new Float64Array( [ 5.0, 3.0, 1.0, 5.0, 3.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});
