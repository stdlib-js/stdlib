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
var Uint8Array = require( '@stdlib/array/uint8' );
var Module = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !hasWebAssemblySupport()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Module, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment does not support `WebAssembly`, the function throws an error', function test( t ) {
	var Module;

	Module = proxyquire( './../lib', {
		'@stdlib/assert/has-wasm-support': isFalse
	});

	t.throws( ctor1, Error, 'throws an error' );
	t.throws( ctor2, Error, 'throws an error' );
	t.end();

	function isFalse() {
		return false;
	}

	function ctor1() {
		return new Module( new Uint8Array( 10 ), {} );
	}

	function ctor2() {
		return new Module( new Uint8Array( 10 ), {}, {} );
	}
});

tape( 'the function is a constructor', opts, function test( t ) {
	// TODO: write tests

	t.end();
});

// TODO: add tests
