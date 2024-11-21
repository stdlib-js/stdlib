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
var Float64Array = require( '@stdlib/array/float64' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var dlassq = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlassq, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( dlassq.length, 9, 'returns expected value' );
	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form', function test( t ) {
	var expected;
	var actual;
	var out;
	var X;

	X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Float64Array( [ 0.0, 0.0 ] );
	expected = new Float64Array( [ 1.0, 30.0 ] );

	actual = dlassq( 4, X, 1, 0, 1.0, 0.0, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function computes an updated sum of squares represented in scaled form (sumsq > 0)', function test( t ) {
	var expected;
	var actual;
	var out;
	var X;

	X = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Float64Array( [ 0.0, 0.0 ] );
	expected = new Float64Array( [ 1.0, 31.0 ] );

	actual = dlassq( 4, X, 1, 0, 1.0, 1.0, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var actual;
	var out;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	out = new Float64Array( [ 0.0, 0.0 ] );
	expected = new Float64Array( [ 1.0, 31.0 ] );

	actual = dlassq( 4, X, -1, 3, 1.0, 1.0, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	out = new Float64Array( [ 0.0, 0.0 ] );
	expected = new Float64Array( [ 31.0, 1.0 ] );

	actual = dlassq( 4, X, 1, 0, 1.0, 1.0, out, -1, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns initialized values if provided an `N` argument less than or equal to `0`', function test( t ) {
	var expected;
	var actual;
	var out;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	out = new Float64Array( [ 0.0, 0.0 ] );
	expected = new Float64Array( [ 1.0, 1.0 ] );

	actual = dlassq( 0, X, 1, 0, 1.0, 1.0, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	actual = dlassq( -5, X, 1, 0, 1.0, 1.0, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	out = new Float64Array( [ 0.0, 0.0 ] );
	expected = new Float64Array( [ 1.0, 0.0 ] );

	actual = dlassq( 0, X, 1, 0, 0.0, 999.0, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function does not compute an updated sum of squares if the scale factor is `NaN`', function test( t ) {
	var expected;
	var actual;
	var out;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	out = new Float64Array( [ 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0 ] );

	actual = dlassq( 4, X, 1, 0, NaN, 1.0, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function does not compute an updated sum of squares if the sum of squares is `NaN`', function test( t ) {
	var expected;
	var actual;
	var out;
	var X;

	X = new Float64Array( [ 4.0, 3.0, 2.0, 1.0 ] );
	out = new Float64Array( [ 0.0, 0.0 ] );
	expected = new Float64Array( [ 0.0, 0.0 ] );

	actual = dlassq( 4, X, 1, 0, 1.0, NaN, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.strictEqual( isSameFloat64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var actual;
	var out;
	var X;

	X = new Float64Array( [ 0.0, 0.0, 4.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 1.0 ] ); // eslint-disable-line max-len
	out = new Float64Array( [ 0.0, 0.0, 0.0, 999.9, 0.0, 0.0, 999.9 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 30.0 ] );

	actual = dlassq( 4, X, -4, 14, 1.0, 0.0, out, 3, 3 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
