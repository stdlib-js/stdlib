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
var proxyquire = require( 'proxyquire' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var zlacpy = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zlacpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method providing an ndarray interface', function test( t ) {
	t.strictEqual( typeof zlacpy.ndarray, 'function', 'method is a function' );
	t.end();
});

tape( 'if a native implementation is available, the main export is the native implementation', opts, function test( t ) {
	var zlacpy = proxyquire( './../lib', {
		'@stdlib/utils/try-require': tryRequire
	});

	t.strictEqual( zlacpy, mock, 'returns expected value' );
	t.end();

	function tryRequire() {
		return mock;
	}

	function mock() {
		// Mock...
	}
});

tape( 'if a native implementation is not available, the main export is a JavaScript implementation', opts, function test( t ) {
	var zlacpy;
	var main;

	main = require( './../lib/zlacpy.js' );

	zlacpy = proxyquire( './../lib', {
		'@stdlib/utils/try-require': tryRequire
	});

	t.strictEqual( zlacpy, main, 'returns expected value' );
	t.end();

	function tryRequire() {
		return new Error( 'Cannot find module' );
	}
});
