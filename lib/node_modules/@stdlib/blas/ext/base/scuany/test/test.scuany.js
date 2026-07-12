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
var BooleanArray = require( '@stdlib/array/bool' );
var isEqualBooleanArray = require( '@stdlib/assert/is-equal-booleanarray' );
var scuany = require( './../lib/scuany.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scuany, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( scuany.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	y = new BooleanArray( 4 );

	out = scuany( x.length, x, 1, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	y = new BooleanArray( [ false, false, false, false ] );
	expected = new BooleanArray( [ false, false, false, false ] );

	out = scuany( 0, x, 1, y, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	out = scuany( -4, x, 1, y, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether at least one element is truthy', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	out = new BooleanArray( 4 );
	expected = new BooleanArray( [ false, false, true, true ] );

	scuany( x.length, x, 1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	out = new BooleanArray( 5 );
	expected = new BooleanArray( [ false, false, false, false, false ] );

	scuany( x.length, x, 1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	x = new Float32Array( [ 1.0, 0.0, 0.0 ] );
	out = new BooleanArray( 3 );
	expected = new BooleanArray( [ true, true, true ] );

	scuany( x.length, x, 1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	x = new Float32Array( [ 0.0, 1.0, 0.0, 1.0 ] );
	out = new BooleanArray( 4 );
	expected = new BooleanArray( [ false, true, true, true ] );

	scuany( x.length, x, 1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 0.0, 999.0, 0.0, 999.0, 1.0, 999.0, 1.0 ] );
	out = new BooleanArray( 4 );
	expected = new BooleanArray( [ false, false, true, true ] );

	scuany( 4, x, 2, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	out = new BooleanArray( [ false, false, false, false, false, false, false, false ] ); // eslint-disable-line max-len
	expected = new BooleanArray( [ false, false, false, false, true, false, true, false ] ); // eslint-disable-line max-len

	scuany( 4, x, 1, out, 2 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 1.0, 0.0, 0.0 ] );
	out = new BooleanArray( 4 );
	expected = new BooleanArray( [ false, false, true, true ] );

	scuany( 4, x, -1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `out` stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	out = new BooleanArray( [ false, false, false, false ] );
	expected = new BooleanArray( [ true, true, false, false ] );

	scuany( 4, x, 1, out, -1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function treats `NaN` as a falsy element', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ NaN, NaN, 1.0, 0.0 ] );
	out = new BooleanArray( 4 );
	expected = new BooleanArray( [ false, false, true, true ] );

	scuany( x.length, x, 1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	x = new Float32Array( [ NaN, NaN, NaN, NaN ] );
	out = new BooleanArray( 4 );
	expected = new BooleanArray( [ false, false, false, false ] );

	scuany( x.length, x, 1, out, 1 );
	t.ok( isEqualBooleanArray( out, expected ), 'returns expected value' );

	t.end();
});
