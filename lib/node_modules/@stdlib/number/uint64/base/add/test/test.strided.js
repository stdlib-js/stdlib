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
var add = require( './../lib/strided.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof add, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function adds two 64-bit unsigned integers', function test( t ) {
	var expected;
	var out;
	var a;
	var b;
	var v;

	// Trivial stride and offset:
	a = new Uint32Array( [ 1, 2 ] );
	b = new Uint32Array( [ 3, 4 ] );
	out = new Uint32Array( 2 );
	v = add( a, 1, 0, b, 1, 0, out, 1, 0 );
	expected = new Uint32Array( [ 4, 6 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.ok( isEqualUint32Array( out, expected ), 'returns expected value' );

	// Positive stride:
	a = new Uint32Array( [ 1, 0, 0, 2, 0, 0 ] );
	b = new Uint32Array( [ 3, 0, 4, 0 ] );
	out = new Uint32Array( 2 );
	v = add( a, 3, 0, b, 2, 0, out, 1, 0 );
	expected = new Uint32Array( [ 4, 6 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.ok( isEqualUint32Array( out, expected ), 'returns expected value' );

	// Positive stride and non-zero offset:
	a = new Uint32Array( [ 0, 0, 1, 0, 0, 2 ] );
	b = new Uint32Array( [ 0, 3, 0, 4 ] );
	out = new Uint32Array( 2 );
	v = add( a, 3, 2, b, 2, 1, out, 1, 0 );
	expected = new Uint32Array( [ 4, 6 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.ok( isEqualUint32Array( out, expected ), 'returns expected value' );

	// Negative stride and non-zero offset:
	a = new Uint32Array( [ 0, 0, 2, 0, 0, 1 ] );
	b = new Uint32Array( [ 0, 4, 0, 3 ] );
	out = new Uint32Array( 2 );
	v = add( a, -3, 5, b, -2, 3, out, 1, 0 );
	expected = new Uint32Array( [ 4, 6 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.ok( isEqualUint32Array( out, expected ), 'returns expected value' );

	t.end();
});
