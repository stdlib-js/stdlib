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
var proxyquire = require( 'proxyquire' );
var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var polyfill = require( './../lib/polyfill.js' );
var ctor = require( './../lib' );


// VARIABLES //

var hasWebAssembly = hasWebAssemblySupport();


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctor, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports `WebAssembly.Memory`, the export is an alias for `WebAssembly.Memory`', function test( t ) {
	var Foo;

	Foo = proxyquire( './../lib', {
		'@stdlib/assert/has-wasm-support': isTrue,
		'./main.js': Mock
	});
	t.strictEqual( Foo, Mock, 'returns builtin' );

	if ( hasWebAssembly ) {
		t.strictEqual( ctor, WebAssembly.Memory, 'is alias' );
	}

	t.end();

	function Mock() {
		return this;
	}

	function isTrue() {
		return true;
	}
});

tape( 'if an environment does not support `WebAssembly.Memory`, the export is a polyfill', function test( t ) {
	var Foo;

	Foo = proxyquire( './../lib', {
		'@stdlib/assert/has-wasm-support': isFalse
	});

	t.strictEqual( Foo, polyfill, 'returns polyfill' );
	t.end();

	function isFalse() {
		return false;
	}
});
