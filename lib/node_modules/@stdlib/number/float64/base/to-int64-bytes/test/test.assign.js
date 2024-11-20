/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var Uint8Array = require( '@stdlib/array/uint8' );
var float64ToInt64Bytes = require( './../lib/assign.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof float64ToInt64Bytes, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts an integer-valued double-precision floating-point number to a signed 64-bit integer byte array (big endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var out;
	var f;
	var x;

	f = proxyquire( './../lib/assign.js', {
		'@stdlib/assert/is-little-endian': false
	});

	x = 0;
	out = new Uint8Array( 8 );
	expected = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( x, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 254;
	out = new Uint8Array( 8 );
	expected = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 254 ] );
	actual = f( x, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 4097;
	out = new Uint8Array( 8 );
	expected = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 16, 1 ] );
	actual = f( x, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -1;
	out = new Uint8Array( 8 );
	expected = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
	actual = f( x, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -4098;
	out = new Uint8Array( 8 );
	expected = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 239, 254 ] );
	actual = f( x, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	t.end();
});

tape( 'the function converts an integer-valued double-precision floating-point number to a signed 64-bit integer byte array (little endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var out;
	var f;
	var x;

	f = proxyquire( './../lib/assign.js', {
		'@stdlib/assert/is-little-endian': true
	});

	x = 0;
	out = new Uint8Array( 8 );
	expected = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( x, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 254;
	out = new Uint8Array( 8 );
	expected = new Uint8Array( [ 254, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( x, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 4097;
	out = new Uint8Array( 8 );
	expected = new Uint8Array( [ 1, 16, 0, 0, 0, 0, 0, 0 ] );
	actual = f( x, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -1;
	out = new Uint8Array( 8 );
	expected = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
	actual = f( x, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -4098;
	out = new Uint8Array( 8 );
	expected = new Uint8Array( [ 254, 239, 255, 255, 255, 255, 255, 255 ] );
	actual = f( x, out, 1, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	t.end();
});

tape( 'the function supports specifying a stride (big endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var out;
	var f;
	var x;

	f = proxyquire( './../lib/assign.js', {
		'@stdlib/assert/is-little-endian': false
	});

	x = 0;
	out = new Uint8Array( [ 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8 ] );
	expected = new Uint8Array( [ 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8 ] );
	actual = f( x, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 254;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254, 0 ] );
	actual = f( x, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 4097;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 1, 0 ] );
	actual = f( x, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -1;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0 ] );
	actual = f( x, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -4098;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 239, 0, 254, 0 ] );
	actual = f( x, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	t.end();
});

tape( 'the function supports specifying a stride (little endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var out;
	var f;
	var x;

	f = proxyquire( './../lib/assign.js', {
		'@stdlib/assert/is-little-endian': true
	});

	x = 0;
	out = new Uint8Array( [ 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8 ] );
	expected = new Uint8Array( [ 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8 ] );
	actual = f( x, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 254;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( x, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 4097;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 1, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( x, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -1;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0 ] );
	actual = f( x, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -4098;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 254, 0, 239, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0 ] );
	actual = f( x, out, 2, 0 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	t.end();
});

tape( 'the function supports specifying an index offset (big endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var out;
	var f;
	var x;

	f = proxyquire( './../lib/assign.js', {
		'@stdlib/assert/is-little-endian': false
	});

	x = 0;
	out = new Uint8Array( [ 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0 ] );
	expected = new Uint8Array( [ 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0 ] );
	actual = f( x, out, 2, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 254;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254 ] );
	actual = f( x, out, 2, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 4097;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 1 ] );
	actual = f( x, out, 2, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -1;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255 ] );
	actual = f( x, out, 2, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -4098;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 239, 0, 254 ] );
	actual = f( x, out, 2, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	t.end();
});

tape( 'the function supports specifying an index offset (little endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var out;
	var f;
	var x;

	f = proxyquire( './../lib/assign.js', {
		'@stdlib/assert/is-little-endian': true
	});

	x = 0;
	out = new Uint8Array( [ 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0 ] );
	expected = new Uint8Array( [ 1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0 ] );
	actual = f( x, out, 2, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 254;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 0, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( x, out, 2, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = 4097;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 0, 1, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( x, out, 2, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -1;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255 ] );
	actual = f( x, out, 2, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	x = -4098;
	out = new Uint8Array( 16 );
	expected = new Uint8Array( [ 0, 254, 0, 239, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255 ] );
	actual = f( x, out, 2, 1 );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value. x: ' + x + '.' );

	t.end();
});
