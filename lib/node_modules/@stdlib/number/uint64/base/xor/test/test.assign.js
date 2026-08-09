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
var isEqualUint32Array = require( '@stdlib/assert/is-equal-uint32array' );
var Uint32Array = require( '@stdlib/array/uint32' );
var xor = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof xor, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the bitwise xor of two 64-bit unsigned integers', function test( t ) {
	var expected;
	var out;
	var v;

	// Trivial stride and offset:
	out = new Uint32Array( 2 );
	v = xor( 1, 2, 3, 4, out, 1, 0 );
	expected = new Uint32Array( [ 2, 6 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.ok( isEqualUint32Array( out, expected ), 'returns expected value' );

	// Positive stride:
	out = new Uint32Array( 4 );
	v = xor( 1, 2, 3, 4, out, 2, 0 );
	expected = new Uint32Array( [ 2, 0, 6, 0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.ok( isEqualUint32Array( out, expected ), 'returns expected value' );

	// Positive stride and non-zero offset:
	out = new Uint32Array( 4 );
	v = xor( 1, 2, 3, 4, out, 2, 1 );
	expected = new Uint32Array( [ 0, 2, 0, 6 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.ok( isEqualUint32Array( out, expected ), 'returns expected value' );

	// Negative stride and non-zero offset:
	out = new Uint32Array( 2 );
	v = xor( 1, 2, 3, 4, out, -1, 1 );
	expected = new Uint32Array( [ 6, 2 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.ok( isEqualUint32Array( out, expected ), 'returns expected value' );

	t.end();
});
