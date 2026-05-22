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
var dediff = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dediff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 15', function test( t ) {
	t.strictEqual( dediff.length, 15, 'returns expected value' );
	t.end();
});

tape( 'the function calculates differences between consecutive elements of a double-precision floating-point strided array', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = new Float64Array( [ 4.0, 8.0, 12.0, 16.0, 20.0 ] );
	p = new Float64Array( [ 10.0, 15.0 ] );
	a = new Float64Array( [ 30.0, 35.0 ] );
	o = new Float64Array( 8 );

	out = dediff( x.length, x, 1, 0, 2, p, 1, 0, 2, a, 1, 0, o, 1, 0 );
	expected = new Float64Array([
		10.0,
		15.0,
		4.0,
		4.0,
		4.0,
		4.0,
		30.0,
		35.0
	]);
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'if the sum of the `N`, `N1`, and `N2` parameters is less than or equal to `1`, the function returns `out` unchanged', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = new Float64Array( [ 4.0, 8.0, 12.0, 16.0, 20.0 ] );
	p = new Float64Array( [ 10.0, 15.0 ] );
	a = new Float64Array( [ 30.0, 35.0 ] );
	o = new Float64Array( 8 );

	out = dediff( 1, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, o, 1, 0 );
	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride parameters', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = new Float64Array( [ 4.0, 8.0, 12.0, 16.0, 20.0 ] );
	p = new Float64Array( [ 10.0, 15.0, 25.0 ] );
	a = new Float64Array( [ 30.0, 35.0, 45.0 ] );
	o = new Float64Array( 11 );

	out = dediff( 3, x, 2, 0, 2, p, 2, 0, 2, a, 2, 0, o, 2, 0 );
	expected = new Float64Array([
		10.0,
		0.0,
		25.0,
		0.0,
		8.0,
		0.0,
		8.0,
		0.0,
		30.0,
		0.0,
		45.0
	]);
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative stride parameters', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = new Float64Array( [ 4.0, 8.0, 12.0, 16.0, 20.0 ] );
	p = new Float64Array( [ 10.0, 15.0, 25.0 ] );
	a = new Float64Array( [ 30.0, 35.0, 45.0 ] );
	o = new Float64Array( 11 );

	out = dediff( 3, x, -2, 4, 2, p, -2, 2, 2, a, -2, 2, o, -2, 10 );
	expected = new Float64Array([
		30.0,
		0.0,
		45.0,
		0.0,
		-8.0,
		0.0,
		-8.0,
		0.0,
		10.0,
		0.0,
		25.0
	]);
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports no prepend and no append', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	x = new Float64Array( [ 1.0, 3.0, 6.0, 10.0 ] );
	p = new Float64Array( 0 );
	a = new Float64Array( 0 );
	o = new Float64Array( 3 );

	out = dediff( x.length, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, o, 1, 0 );
	expected = new Float64Array( [ 2.0, 3.0, 4.0 ] );
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports multiple prepend and append values', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	// Multiple prepend (N1=2), no append:
	x = new Float64Array( [ 6.0, 8.0 ] );
	p = new Float64Array( [ 1.0, 3.0 ] );
	a = new Float64Array( 0 );
	o = new Float64Array( 3 );

	out = dediff( x.length, x, 1, 0, 2, p, 1, 0, 0, a, 1, 0, o, 1, 0 );
	expected = new Float64Array( [ 1.0, 3.0, 2.0 ] );
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	// Prepend (N1=1), x, and multiple append (N2=2):
	x = new Float64Array( [ 2.0, 4.0 ] );
	p = new Float64Array( [ 1.0 ] );
	a = new Float64Array( [ 6.0, 10.0 ] );
	o = new Float64Array( 4 );

	out = dediff( x.length, x, 1, 0, 1, p, 1, 0, 2, a, 1, 0, o, 1, 0 );
	expected = new Float64Array( [ 1.0, 2.0, 6.0, 10.0 ] );
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});

tape( 'the function supports append without prepend', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var o;

	// No prepend, x present, single append:
	x = new Float64Array( [ 2.0, 5.0 ] );
	p = new Float64Array( 0 );
	a = new Float64Array( [ 10.0 ] );
	o = new Float64Array( 2 );

	out = dediff( x.length, x, 1, 0, 0, p, 1, 0, 1, a, 1, 0, o, 1, 0 );
	expected = new Float64Array( [ 3.0, 10.0 ] );
	t.deepEqual( o, expected, 'returns expected value' );
	t.strictEqual( out, o, 'returns expected value' );

	t.end();
});
