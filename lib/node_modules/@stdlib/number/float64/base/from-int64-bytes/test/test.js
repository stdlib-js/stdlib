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
var fromInt64Bytes = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fromInt64Bytes, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a signed 64-bit integer byte array to a double-precision floating-point number (big endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var bytes;
	var f;

	f = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-little-endian': false
	});

	expected = 0;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 254;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 254 ] );
	actual = f( bytes, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 4097;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 16, 1 ] );
	actual = f( bytes, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -1;
	bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
	actual = f( bytes, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -4098;
	bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 239, 254 ] );
	actual = f( bytes, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	t.end();
});

tape( 'the function converts a signed 64-bit integer byte array to a double-precision floating-point number (little endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var bytes;
	var f;

	f = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-little-endian': true
	});

	expected = 0;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 254;
	bytes = new Uint8Array( [ 254, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 4097;
	bytes = new Uint8Array( [ 1, 16, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -1;
	bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255 ] );
	actual = f( bytes, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -4098;
	bytes = new Uint8Array( [ 254, 239, 255, 255, 255, 255, 255, 255 ] );
	actual = f( bytes, 1, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	t.end();
});

tape( 'the function supports specifying a stride (big endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var bytes;
	var f;

	f = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-little-endian': false
	});

	expected = 0;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 2, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 254;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254, 0 ] );
	actual = f( bytes, 2, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 4097;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 1, 0 ] );
	actual = f( bytes, 2, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -1;
	bytes = new Uint8Array( [ 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0 ] );
	actual = f( bytes, 2, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -4098;
	bytes = new Uint8Array( [ 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 239, 255, 254, 255 ] );
	actual = f( bytes, 2, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	t.end();
});

tape( 'the function supports specifying a stride (little endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var bytes;
	var f;

	f = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-little-endian': true
	});

	expected = 0;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 2, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 254;
	bytes = new Uint8Array( [ 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 2, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 4097;
	bytes = new Uint8Array( [ 1, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 2, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -1;
	bytes = new Uint8Array( [ 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0 ] );
	actual = f( bytes, 2, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -4098;
	bytes = new Uint8Array( [ 254, 255, 239, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] );
	actual = f( bytes, 2, 0 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	t.end();
});

tape( 'the function supports specifying an index offset (big endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var bytes;
	var f;

	f = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-little-endian': false
	});

	expected = 0;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 2, 1 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 254;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 254 ] );
	actual = f( bytes, 2, 1 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 4097;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 1 ] );
	actual = f( bytes, 2, 1 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -1;
	bytes = new Uint8Array( [ 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255 ] );
	actual = f( bytes, 2, 1 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -4098;
	bytes = new Uint8Array( [ 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 239, 255, 254 ] );
	actual = f( bytes, 2, 1 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	t.end();
});

tape( 'the function supports specifying an index offset (little endian; two\'s complement)', function test( t ) {
	var expected;
	var actual;
	var bytes;
	var f;

	f = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-little-endian': true
	});

	expected = 0;
	bytes = new Uint8Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 2, 1 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 254;
	bytes = new Uint8Array( [ 0, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 2, 1 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = 4097;
	bytes = new Uint8Array( [ 0, 1, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] );
	actual = f( bytes, 2, 1 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -1;
	bytes = new Uint8Array( [ 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255 ] );
	actual = f( bytes, 2, 1 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	expected = -4098;
	bytes = new Uint8Array( [ 255, 254, 255, 239, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255 ] );
	actual = f( bytes, 2, 1 );
	t.deepEqual( actual, expected, 'returns expected value. bytes: ' + bytes + '. expected: ' + expected + '. actual: ' + actual + '.' );

	t.end();
});
