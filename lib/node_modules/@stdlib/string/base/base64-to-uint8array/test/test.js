/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isUint8Array = require( '@stdlib/assert/is-uint8array' );
var Uint8Array = require( '@stdlib/array/uint8' );
var base64ToUint8Array = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof base64ToUint8Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a base64-encoded string to a Uint8Array', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'SGVsbG8sIHdvcmxk';
	actual = base64ToUint8Array( str );
	t.strictEqual( isUint8Array( actual ), true, 'returns expected value' );

	expected = new Uint8Array( [ 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100 ] ); // eslint-disable-line max-len
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty Uint8Array if provided an empty string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '';
	actual = base64ToUint8Array( str );
	t.strictEqual( isUint8Array( actual ), true, 'returns expected value' );

	expected = new Uint8Array( [] );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns `null` if provided a string containing non-ASCII characters', function test( t ) {
	var out;
	var str;

	str = 'SGVsbG8s ∏⨖∵😃 IHdvcmxk';
	out = base64ToUint8Array( str );
	t.strictEqual( out, null, 'returns expected value' );

	t.end();
});
