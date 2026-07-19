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
var zoneTo = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zoneTo, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( zoneTo.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = zoneTo( x.length, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Complex128Array( [ 3.0, -4.0, 1.0, -2.0 ] );
	expected = new Complex128Array( [ 3.0, -4.0, 1.0, -2.0 ] );

	zoneTo( 0, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	zoneTo( -4, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function fills a strided array', function test( t ) {
	var expected;
	var x;

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
		1.0,
		0.0,
		2.0,
		0.0,
		3.0,
		0.0,
		4.0,
		0.0
	]);

	zoneTo( x.length, x, 1, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		2.0,  // 0
		-3.0, // 0
		4.0,
		-6.0,
		8.0,  // 1
		-9.0  // 1
	]);
	expected = new Complex128Array([
		1.0,  // 0
		0.0,  // 0
		4.0,
		-6.0,
		2.0,  // 1
		0.0   // 1
	]);

	zoneTo( 2, x, 2, 0 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		2.0,  // 1
		-3.0, // 1
		4.0,
		-6.0,
		8.0,  // 0
		-9.0  // 0
	]);
	expected = new Complex128Array([
		2.0,  // 1
		0.0,  // 1
		4.0,
		-6.0,
		1.0,  // 0
		0.0   // 0
	]);

	zoneTo( 2, x, -2, x.length-1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
		1.0,
		-2.0,
		3.0,  // 0
		-4.0, // 0
		6.0,  // 1
		-8.0, // 1
		10.0,
		-12.0
	]);
	expected = new Complex128Array([
		1.0,
		-2.0,
		1.0,  // 0
		0.0,  // 0
		2.0,  // 1
		0.0,  // 1
		10.0,
		-12.0
	]);

	zoneTo( 2, x, 1, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});
