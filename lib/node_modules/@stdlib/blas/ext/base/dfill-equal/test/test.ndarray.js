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
var dfillEqual = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dfillEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( dfillEqual.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function replaces values equal to the provided `searchElement` in a strided array', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		1.0,
		2.0,
		1.0,
		5.0,
		-1.0,
		1.0,
		-5.0,
		6.0
	]);
	expected = new Float64Array([
		5.0,
		2.0,
		5.0,
		5.0,
		-1.0,
		5.0,
		-5.0,
		6.0
	]);

	dfillEqual( x.length, 1.0, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0 ] );
	expected = new Float64Array( [ 5.0, 2.0 ] );

	dfillEqual( x.length, 1.0, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Float64Array( [ 1.0, 1.0, 3.0, 1.0, 5.0 ] );
	out = dfillEqual( x.length, 1.0, 5.0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float64Array( [ 1.0, -4.0, 1.0 ] );
	expected = new Float64Array( [ 1.0, -4.0, 1.0 ] );

	out = dfillEqual( 0, 1.0, 5.0, x, 1, 0 );
	t.strictEqual( out, x, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		1.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		1.0   // 2
	]);
	expected = new Float64Array([
		5.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		5.0   // 2
	]);

	dfillEqual( 3, 1.0, 5.0, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		1.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		1.0   // 0
	]);
	expected = new Float64Array([
		5.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		5.0   // 0
	]);

	dfillEqual( 3, 1.0, 5.0, x, -2, 4 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		1.0,
		1.0,  // 0
		3.0,
		1.0,  // 1
		5.0,
		6.0   // 2
	]);
	expected = new Float64Array([
		1.0,
		5.0,  // 0
		3.0,
		5.0,  // 1
		5.0,
		6.0   // 2
	]);

	dfillEqual( 3, 1.0, 5.0, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});
