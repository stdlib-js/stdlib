/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var nativeClass = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nativeClass, 'function', 'export is a function' );
	t.end();
});

tape( 'if an environment has `Symbol.toStringTag` support, the main export is a function which attempts to uncover the native `Symbol.toStringTag`', function test( t ) {
	var nativeClass = proxyquire( './../lib/index.js', {
		'@stdlib/assert/has-tostringtag-support': hasSupport,
		'./polyfill.js': polyfill
	});
	t.strictEqual( nativeClass, polyfill, 'exports expected function' );
	t.end();

	function hasSupport() {
		return true;
	}

	function polyfill() {
		// Polyfill...
	}
});

tape( 'if an environment does not have `Symbol.toStringTag` support, the main export is a function which returns the value of the internal `[[Class]]` property', function test( t ) {
	var nativeClass = proxyquire( './../lib/index.js', {
		'@stdlib/assert/has-tostringtag-support': hasSupport,
		'./native_class.js': foo
	});

	t.strictEqual( nativeClass, foo, 'exports expected function' );
	t.end();

	function hasSupport() {
		return false;
	}

	function foo() {
		// Native class...
	}
});
