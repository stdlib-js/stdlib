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
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var csubf = require( '@stdlib/complex/float32/base/sub' );
var cxsa = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cxsa, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( cxsa.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function subtracts a constant from each strided array element', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex64( 5.0, 3.0 );

	x = new Complex64Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	expected = new Complex64Array([
		-1.0,
		-1.0,
		-8.0,
		2.0,
		-6.0,
		-1.0,
		-10.0,
		3.0
	]);

	cxsa( x.length, alpha, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var alpha;
	var out;
	var x;

	alpha = new Complex64( 3.0, 3.0 );
	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = cxsa( x.length, alpha, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex64( 10.0, 10.0 );
	x = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0 ] );
	expected = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0 ] );

	cxsa( 0, alpha, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	cxsa( -4, alpha, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a zero constant, the function returns the input array unchanged', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex64( 0.0, 0.0 );
	x = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0 ] );
	expected = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0 ] );

	cxsa( x.length, alpha, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex64( 5.0, -5.0 );
	x = new Complex64Array([
		2.0,  // 0
		-3.0, // 0
		0.0,
		0.0,
		-5.0, // 1
		7.0,  // 1
		0.0,
		0.0,
		6.0,  // 2
		-8.0  // 2
	]);
	expected = new Complex64Array([
		-3.0,  // 0
		2.0,   // 0
		0.0,
		0.0,
		-10.0, // 1
		12.0,  // 1
		0.0,
		0.0,
		1.0,   // 2
		-3.0   // 2
	]);

	cxsa( 3, alpha, x, 2, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex64( 5.0, -5.0 );
	x = new Complex64Array([
		0.0,
		0.0,
		-5.0, // 2
		7.0,  // 2
		0.0,
		0.0,
		6.0,  // 1
		-8.0, // 1
		0.0,
		0.0,
		2.0, // 0
		-3.0 // 0
	]);
	expected = new Complex64Array([
		0.0,
		0.0,
		-10.0, // 2
		12.0,  // 2
		0.0,
		0.0,
		1.0,   // 1
		-3.0,  // 1
		0.0,
		0.0,
		-3.0,  // 0
		2.0    // 0
	]);

	cxsa( 3, alpha, x, -2, x.length-1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex64( 5.0, -5.0 );
	x = new Complex64Array([
		1.0,
		-2.0,
		3.0,  // 0
		-4.0, // 0
		0.0,  // 1
		0.0,  // 1
		5.0,
		6.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	expected = new Complex64Array([
		1.0,
		-2.0,
		-2.0,  // 0
		1.0,   // 0
		-5.0,  // 1
		5.0,   // 1
		5.0,
		6.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	cxsa( 2, alpha, x, 1, 1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently subtracts a constant from each element', function test( t ) {
	var expected;
	var alpha;
	var x;
	var z;
	var i;

	alpha = new Complex64( 3.0, -1.0 );
	x = new Complex64Array( 100 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		z = new Complex64( i, 0.0 );
		x.set( z, i );
		expected.set( csubf( z, alpha ), i );
	}
	cxsa( x.length, alpha, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	x = new Complex64Array( 240 );
	expected = new Complex64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		z = new Complex64( i, 0.0 );
		x.set( z, i );
		expected.set( csubf( z, alpha ), i );
	}
	cxsa( x.length, alpha, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});
