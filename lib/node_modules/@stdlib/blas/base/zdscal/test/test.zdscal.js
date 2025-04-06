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
var zdscal = require( './../lib/zdscal.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zdscal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( zdscal.length, 4, 'arity of 4' );
	t.end();
});

tape( 'the function scales elements from `zx` by `da`', function test( t ) {
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
		0.2  // 4
	]);

	zdscal( 4, 2.0, zx, 1 );

	expected = new Complex128Array([
		0.6, // 1
		0.2, // 1
		1.0, // 2
		0.0, // 2
		0.0, // 3
		1.0, // 3
		0.0, // 4
		0.4  // 4
	]);
	t.strictEqual( isSameComplex128Array( zx, expected ), true, 'returns expected value' );
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

	zdscal( 3, 2.0, zx, 2 );

	expected = new Complex128Array([
		0.2,  // 1
		0.2,  // 1
		3.0,
		6.0,
		-1.2, // 2
		0.2,  // 2
		4.0,
		7.0,
		0.2,  // 3
		-0.6, // 3
		7.0,
		2.0
	]);
	t.strictEqual( isSameComplex128Array( zx, expected ), true, 'returns expected value' );
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

	zdscal( 3, 2.0, zx, -2 );

	expected = new Complex128Array([
		0.2,  // 3
		0.2,  // 3
		3.0,
		6.0,
		-1.2, // 2
		0.2,  // 2
		4.0,
		7.0,
		0.2,  // 1
		-0.6, // 1
		7.0,
		2.0
	]);
	t.strictEqual( isSameComplex128Array( zx, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var zx;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	out = zdscal( 4, 2.0, zx, 1 );

	t.strictEqual( out, zx, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var zx;

	zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

	expected = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] ); // eslint-disable-line max-len

	zdscal( -1, 2.0, zx, 1 );
	t.strictEqual( isSameComplex128Array( zx, expected ), true, 'returns expected value' );

	zdscal( 0, 2.0, zx, 1 );
	t.strictEqual( isSameComplex128Array( zx, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var zx0;
	var zx1;

	// Initial array:
	zx0 = new Complex128Array([
		0.1,
		-0.3,
		8.0,  // 1
		9.0,  // 1
		0.5,  // 2
		-0.1, // 2
		2.0,  // 3
		5.0,  // 3
		2.0,
		3.0
	]);

	// Create offset view:
	zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	zdscal( 3, 2.0, zx1, 1 );

	expected = new Complex128Array([
		0.1,
		-0.3,
		16.0, // 1
		18.0, // 1
		1.0,  // 2
		-0.2, // 2
		4.0,  // 3
		10.0, // 3
		2.0,
		3.0
	]);
	t.strictEqual( isSameComplex128Array( zx0, expected ), true, 'returns expected value' );
	t.end();
});
