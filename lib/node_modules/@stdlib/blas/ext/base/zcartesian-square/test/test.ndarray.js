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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var zcartesianSquare = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zcartesianSquare, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( zcartesianSquare.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function computes the Cartesian square', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex128Array( 8 );
	expected = new Complex128Array([
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0
	]);

	zcartesianSquare( x.length, x, 1, 0, out, 2, 1, 0 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = new Complex128Array( 18 );
	expected = new Complex128Array([
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		1.0,
		2.0,
		5.0,
		6.0,
		3.0,
		4.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		3.0,
		4.0,
		5.0,
		6.0,
		5.0,
		6.0,
		1.0,
		2.0,
		5.0,
		6.0,
		3.0,
		4.0,
		5.0,
		6.0,
		5.0,
		6.0
	]);

	zcartesianSquare( x.length, x, 1, 0, out, 2, 1, 0 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 9.0, 10.0 ] );
	out = new Complex128Array( 2 );
	expected = new Complex128Array( [ 9.0, 10.0, 9.0, 10.0 ] );

	zcartesianSquare( 1, x, 1, 0, out, 2, 1, 0 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex128Array( 8 );
	y = zcartesianSquare( x.length, x, 1, 0, out, 2, 1, 0 );

	t.strictEqual( y, out, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex128Array( [ 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
	expected = new Complex128Array( [ 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

	zcartesianSquare( 0, x, 1, 0, out, 2, 1, 0 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x`', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex128Array([
		1.0, // 0
		2.0,
		0.0,
		0.0,
		3.0, // 1
		4.0,
		0.0,
		0.0
	]);
	out = new Complex128Array( 8 );
	expected = new Complex128Array([
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0
	]);

	zcartesianSquare( 2, x, 2, 0, out, 2, 1, 0 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x`', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex128Array([
		3.0, // 1
		4.0,
		1.0, // 0
		2.0
	]);
	out = new Complex128Array( 8 );
	expected = new Complex128Array([
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0
	]);

	zcartesianSquare( 2, x, -1, 1, out, 2, 1, 0 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for the first dimension of the output array', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex128Array( 16 );
	expected = new Complex128Array([
		1.0,
		2.0,
		1.0,
		2.0,
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		2.0,
		3.0,
		4.0,
		0.0,
		0.0,
		0.0,
		0.0,
		3.0,
		4.0,
		1.0,
		2.0,
		0.0,
		0.0,
		0.0,
		0.0,
		3.0,
		4.0,
		3.0,
		4.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	zcartesianSquare( 2, x, 1, 0, out, 4, 1, 0 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for the first dimension of the output array', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex128Array( 8 );
	expected = new Complex128Array([
		3.0,
		4.0,
		3.0,
		4.0,
		3.0,
		4.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		1.0,
		2.0,
		1.0,
		2.0
	]);

	zcartesianSquare( 2, x, 1, 0, out, -2, 1, 6 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for the second dimension of the output array', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex128Array( 8 );
	expected = new Complex128Array([
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		3.0,
		4.0
	]);

	zcartesianSquare( 2, x, 1, 0, out, 2, -1, 1 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter for `x`', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex128Array( [ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex128Array( 8 );
	expected = new Complex128Array([
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0
	]);

	zcartesianSquare( 2, x, 1, 1, out, 2, 1, 0 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter for the output array', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex128Array( 10 );
	expected = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0
	]);

	zcartesianSquare( 2, x, 1, 0, out, 2, 1, 2 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a column-major output layout', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Complex128Array( 8 );
	expected = new Complex128Array([
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		1.0,
		2.0,
		3.0,
		4.0,
		1.0,
		2.0,
		3.0,
		4.0
	]);

	zcartesianSquare( 2, x, 1, 0, out, 1, 4, 0 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});
