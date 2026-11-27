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
var Float32Array = require( '@stdlib/array/float32' );
var scopyWithin = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scopyWithin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( scopyWithin.length, 10, 'returns expected value' );
	t.end();
});

tape( 'the function copies values within the provided single-precision floating-point strided array', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 6 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ] );

	actual = scopyWithin( 6, 3, 1, 4, x, 1, 0, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 6 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 3.0 ] );

	actual = scopyWithin( 6, 3, 0, 3, x, 1, 0, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	w = new Float32Array( 5 );
	expected = new Float32Array( [ 1.0, 2.0, 1.0, 2.0, 3.0 ] );

	actual = scopyWithin( 5, 2, 0, 5, x, 1, 0, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided `target` parameter is greater than or equal to the `N` parameter, the function returns the strided array unchanged', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 6 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	actual = scopyWithin( 6, 6, 0, 3, x, 1, 0, w, 1, 0 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	actual = scopyWithin( 6, 10, 0, 3, x, 1, 0, w, 1, 0 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	actual = scopyWithin( 4, 5, 0, 3, x, 1, 0, w, 1, 0 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided `N` parameter is less than or equal to `0`, the function returns the strided array unchanged', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 6 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	actual = scopyWithin( 0, 3, 1, 4, x, 1, 0, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	actual = scopyWithin( -1, 3, 1, 4, x, 1, 0, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided `start` parameter is greater than or equal to the `end` parameter, the function returns the strided array unchanged', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 6 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	actual = scopyWithin( 6, 0, 3, 1, x, 1, 0, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 6 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	actual = scopyWithin( 6, 0, 2, 2, x, 1, 0, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'if provided `end` parameter is greater than the number of indexed elements, the function copies elements up to the last indexed element', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	w = new Float32Array( 5 );
	expected = new Float32Array( [ 3.0, 4.0, 5.0, 4.0, 5.0 ] );

	actual = scopyWithin( 5, 0, 2, 10, x, 1, 0, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an `x` stride parameter', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	w = new Float32Array( 4 );
	expected = new Float32Array( [ 5.0, 2.0, 7.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	actual = scopyWithin( 4, 0, 2, 4, x, 2, 0, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an `x` negative stride parameter', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 3 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 4.0, 5.0, 6.0 ] );

	actual = scopyWithin( 3, 0, 1, 3, x, -1, 2, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	w = new Float32Array( 4 );
	expected = new Float32Array( [ 1.0, 2.0, 1.0, 2.0, 5.0, 6.0, 7.0, 8.0 ] );

	actual = scopyWithin( 4, 0, 2, 4, x, -1, 3, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of zero', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 6 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	actual = scopyWithin( 6, 1, 0, 2, x, 0, 0, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an `x` offset parameter', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 4 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 3.0, 6.0 ] );

	actual = scopyWithin( 4, 2, 0, 2, x, 1, 1, w, 1, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a `workspace` stride parameter', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 5 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 4.0, 5.0, 6.0 ] );

	actual = scopyWithin( 3, 1, 0, 2, x, 1, 0, w, 2, 0 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a `workspace` negative stride parameter', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 6 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ] );

	actual = scopyWithin( 6, 3, 1, 4, x, 1, 0, w, -1, 5 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a `workspace` offset parameter', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	w = new Float32Array( 5 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 4.0, 5.0, 6.0 ] );

	actual = scopyWithin( 3, 1, 0, 2, x, 1, 0, w, 1, 2 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
