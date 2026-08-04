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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var cadd = require( '@stdlib/complex/float64/base/add' );
var zapx = require( './../lib/zapx.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zapx, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( zapx.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function adds a constant to each strided array element', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex128( 5.0, 3.0 );

	x = new Complex128Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	expected = new Complex128Array([
		9.0,
		5.0,
		2.0,
		8.0,
		4.0,
		5.0,
		0.0,
		9.0
	]);

	zapx( x.length, alpha, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var alpha;
	var out;
	var x;

	alpha = new Complex128( 3.0, 3.0 );
	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = zapx( x.length, alpha, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex128( 10.0, 10.0 );
	x = new Complex128Array( [ 3.0, -4.0, 1.0, -2.0 ] );
	expected = new Complex128Array( [ 3.0, -4.0, 1.0, -2.0 ] );

	zapx( 0, alpha, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	zapx( -4, alpha, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a zero constant, the function returns the input array unchanged', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex128( 0.0, 0.0 );
	x = new Complex128Array( [ 3.0, -4.0, 1.0, -2.0 ] );
	expected = new Complex128Array( [ 3.0, -4.0, 1.0, -2.0 ] );

	zapx( x.length, alpha, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex128( 5.0, -5.0 );
	x = new Complex128Array([
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
	expected = new Complex128Array([
		7.0,  // 0
		-8.0, // 0
		0.0,
		0.0,
		0.0,  // 1
		2.0,  // 1
		0.0,
		0.0,
		11.0, // 2
		-13.0 // 2
	]);

	zapx( 3, alpha, x, 2 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex128( 5.0, -5.0 );
	x = new Complex128Array([
		0.0,  // 2
		0.0,  // 2
		-5.0,
		7.0,
		0.0,  // 1
		0.0,  // 1
		6.0,
		-8.0,
		0.0,  // 0
		0.0,  // 0
		2.0,
		-3.0
	]);
	expected = new Complex128Array([
		5.0,  // 2
		-5.0, // 2
		-5.0,
		7.0,
		5.0,  // 1
		-5.0, // 1
		6.0,
		-8.0,
		5.0,  // 0
		-5.0, // 0
		2.0,
		-3.0
	]);

	zapx( 3, alpha, x, -2 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var alpha;
	var x0;
	var x1;

	alpha = new Complex128( 5.0, -5.0 );
	x0 = new Complex128Array([
		1.0,
		-2.0,
		3.0,  // 0
		-4.0, // 0
		6.0,
		-8.0,
		10.0, // 1
		-12.0 // 1
	]);
	expected = new Complex128Array([
		1.0,
		-2.0,
		8.0,  // 0
		-9.0, // 0
		6.0,
		-8.0,
		15.0, // 1
		-17.0 // 1
	]);

	x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	zapx( 2, alpha, x1, 2 );
	t.strictEqual( isSameComplex128Array( x0, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently adds a constant to each element of a strided array', function test( t ) {
	var expected;
	var alpha;
	var x;
	var z;
	var i;

	alpha = new Complex128( 3.0, -1.0 );
	x = new Complex128Array( 100 );
	expected = new Complex128Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		z = new Complex128( i, 0.0 );
		x.set( z, i );
		expected.set( cadd( z, alpha ), i );
	}
	zapx( x.length, alpha, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	x = new Complex128Array( 240 );
	expected = new Complex128Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		z = new Complex128( i, 0.0 );
		x.set( z, i );
		expected.set( cadd( z, alpha ), i );
	}
	zapx( x.length, alpha, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});
