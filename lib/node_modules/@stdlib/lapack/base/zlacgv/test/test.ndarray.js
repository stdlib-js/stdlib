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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var zlacgv = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zlacgv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( zlacgv.length, 4, 'arity of 4' );
	t.end();
});

tape( 'the function conjugates elements in a strided array', function test( t ) {
	var expected;
	var zx;

	zx = new Complex128Array([
		0.3, // 1
		0.1, // 1
		0.5, // 2
		0.0, // 2
		0.0, // 3
		0.5, // 3
		0.0, // 4
		0.2, // 4
		2.0,
		3.0,
		2.0,
		3.0
	]);

	zlacgv( 4, zx, 1, 0 );

	expected = new Complex128Array([
		0.3,  // 1
		-0.1, // 1
		0.5,  // 2
		-0.0, // 2
		0.0,  // 3
		-0.5, // 3
		0.0,  // 4
		-0.2, // 4
		2.0,
		3.0,
		2.0,
		3.0
	]);

	t.ok( isSameComplex128Array( zx, expected ), 'returns expected value' );
	t.end();
});

tape( 'the function supports a `zx` stride', function test( t ) {
	var expected;
	var zx;

	zx = new Complex128Array([
		0.1,  // 1
		0.1,  // 1
		3.0,
		6.0,
		-0.6, // 2
		0.1,  // 2
		4.0,
		7.0,
		0.1,  // 3
		-0.3, // 3
		7.0,
		2.0
	]);

	zlacgv( 3, zx, 2, 0 );

	expected = new Complex128Array([
		0.1,   // 1
		-0.1,  // 1
		3.0,
		6.0,
		-0.6,  // 2
		-0.1,  // 2
		4.0,
		7.0,
		0.1,   // 3
		0.3,   // 3
		7.0,
		2.0
	]);

	t.ok( isSameComplex128Array( zx, expected ), 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `zx` stride', function test( t ) {
	var expected;
	var zx;

	zx = new Complex128Array([
		0.1,  // 3
		0.1,  // 3
		3.0,
		6.0,
		-0.6, // 2
		0.1,  // 2
		4.0,
		7.0,
		0.1,  // 1
		-0.3, // 1
		7.0,
		2.0
	]);

	zlacgv( 3, zx, -2, 4 );

	expected = new Complex128Array([
		0.1,   // 3
		-0.1,  // 3
		3.0,
		6.0,
		-0.6,  // 2
		-0.1,  // 2
		4.0,
		7.0,
		0.1,   // 1
		0.3,   // 1
		7.0,
		2.0
	]);

	t.ok( isSameComplex128Array( zx, expected ), 'returns expected value' );
	t.end();
});

tape( 'the function supports a `zx` offset', function test( t ) {
	var expected;
	var zx;

	zx = new Complex128Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0,  // 1
		6.0,  // 1
		0.1,  // 2
		-0.3, // 2
		7.0,  // 3
		2.0   // 3
	]);

	zlacgv( 3, zx, 1, 3 );

	expected = new Complex128Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0,  // 1
		-6.0, // 1
		0.1,  // 2
		0.3,  // 2
		7.0,  // 3
		-2.0  // 3
	]);

	t.ok( isSameComplex128Array( zx, expected ), 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var zx;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	out = zlacgv( 4, zx, 1, 0 );

	t.strictEqual( out, zx, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var zx;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	expected = new Complex128Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0
	]);

	zlacgv( -1, zx, 1, 0 );
	t.ok( isSameComplex128Array( zx, expected ), 'returns expected value' );

	zlacgv( 0, zx, 1, 0 );
	t.ok( isSameComplex128Array( zx, expected ), 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var zx;

	zx = new Complex128Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0, // 1
		6.0, // 1
		0.1,
		-0.3,
		7.0,
		2.0,
		2.0, // 2
		3.0  // 2
	]);

	zlacgv( 2, zx, -3, 6 );

	expected = new Complex128Array([
		0.1,
		0.1,
		3.0,
		6.0,
		-0.6,
		0.1,
		4.0,  // 1
		-6.0, // 1
		0.1,
		-0.3,
		7.0,
		2.0,
		2.0,  // 2
		-3.0  // 2
	]);

	t.ok( isSameComplex128Array( zx, expected ), 'returns expected value' );

	t.end();
});
