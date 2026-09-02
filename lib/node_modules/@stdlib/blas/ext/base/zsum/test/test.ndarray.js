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
var isSameComplex128 = require( '@stdlib/assert/is-same-complex128' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var zsum = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zsum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( zsum.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the sum of all strided array elements', function test( t ) {
	var x;
	var v;

	x = new Complex128Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0, 0.0, -3.0 ] );
	v = zsum( x.length, x, 1, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( -3.0, 3.0 ) ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	v = zsum( x.length, x, 1, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( -3.0, 6.0 ) ), true, 'returns expected value' );

	x = new Complex128Array( [ -4.0, -4.0, -4.0, -4.0 ] );
	v = zsum( x.length, x, 1, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( -8.0, -8.0 ) ), true, 'returns expected value' );

	x = new Complex128Array( [ NaN, 4.0, 4.0, NaN ] );
	v = zsum( x.length, x, 1, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( NaN, NaN ) ), true, 'returns expected value' );

	x = new Complex128Array( [ 1.0, 1.0e100, -1.0e100, 1.0, 1.0e100, -1.0e100 ] ); // eslint-disable-line max-len
	v = zsum( x.length, x, 1, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( 1.0, 1.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function preserves the sign of zero', function test( t ) {
	var x;
	var v;

	x = new Complex128Array( [ -0.0, -0.0, -0.0, -0.0 ] );

	v = zsum( x.length, x, 1, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( -0.0, -0.0 ) ), true, 'returns expected value' );

	x = new Complex128Array( [ 0.0, -0.0, -0.0, 0.0 ] );

	v = zsum( x.length, x, 1, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( 0.0, 0.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', function test( t ) {
	var x;
	var v;

	x = new Complex128Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, 3.0 ] );

	v = zsum( 0, x, 1, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( 0.0, 0.0 ) ), true, 'returns expected value' );

	v = zsum( -1, x, 1, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( 0.0, 0.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first indexed element', function test( t ) {
	var x;
	var v;

	x = new Complex128Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, 3.0 ] );

	v = zsum( 1, x, 1, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( 1.0, -2.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var x;
	var v;

	x = new Complex128Array([
		1.0,  // 0
		2.0,  // 0
		2.0,
		-7.0,
		-2.0, // 1
		3.0,  // 1
		4.0,
		2.0,
		3.0,  // 2
		-5.0  // 2
	]);

	v = zsum( 3, x, 2, 0 );

	t.strictEqual( isSameComplex128( v, new Complex128( 2.0, 0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', function test( t ) {
	var x;
	var v;

	x = new Complex128Array([
		1.0,  // 2
		2.0,  // 2
		2.0,
		-7.0,
		-2.0, // 1
		3.0,  // 1
		4.0,
		2.0,
		3.0,  // 0
		-5.0  // 0
	]);

	v = zsum( 3, x, -2, 4 );

	t.strictEqual( isSameComplex128( v, new Complex128( 2.0, 0.0 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the sum of the first element repeated N times', function test( t ) {
	var x;
	var v;

	x = new Complex128Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, 4.0 ] );

	v = zsum( x.length, x, 0, 0 );
	t.strictEqual( isSameComplex128( v, new Complex128( 3.0, -6.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter', function test( t ) {
	var x;
	var v;

	x = new Complex128Array([
		2.0,
		1.0,
		2.0,  // 0
		-2.0, // 0
		-2.0,
		2.0,
		3.0,  // 1
		4.0,  // 1
		6.0,
		7.0,
		-8.0, // 2
		9.0   // 2
	]);

	v = zsum( 3, x, 2, 1 );
	t.strictEqual( isSameComplex128( v, new Complex128( -3.0, 11.0 ) ), true, 'returns expected value' );

	t.end();
});
