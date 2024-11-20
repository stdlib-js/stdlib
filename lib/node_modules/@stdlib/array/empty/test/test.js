/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var proxyquire = require( 'proxyquire' );
var main = require( './../lib/main.js' );
var polyfill = require( './../lib/polyfill.js' );
var empty = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof empty, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports Node.js buffer instances inheriting from Uint8Array, the main export supports returning arrays having uninitialized memory', function test( t ) {
	var empty = proxyquire( './../lib', {
		'./is_buffer_uint8array.js': mock
	});
	t.strictEqual( empty, main, 'returns expected value' );
	t.end();

	function mock() {
		return true;
	}
});

tape( 'if an environment does not support Node.js buffer instances inheriting from Uint8Array, the main export supports returning zero-filled arrays', function test( t ) {
	var empty = proxyquire( './../lib', {
		'./is_buffer_uint8array.js': mock
	});
	t.strictEqual( empty, polyfill, 'returns expected value' );
	t.end();

	function mock() {
		return false;
	}
});
