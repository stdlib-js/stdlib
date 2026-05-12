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
	var wasm;
	var mod;

	wasm = new Uint8Array( [ 0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00 ] );
	mod = new Module( wasm, null );

	t.strictEqual( mod instanceof Module, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns an instance having an `initialize` method which returns a promise', opts, function test( t ) {
	var wasm;
	var mod;
	var p;

	wasm = new Uint8Array( [ 0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00 ] );
	mod = new Module( wasm, null );
	p = mod.initialize();

	t.strictEqual( typeof p.then, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function returns an instance having an `initialize` method which returns a promise resolving with the module instance', opts, function test( t ) {
	var wasm;
	var mod;

	wasm = new Uint8Array( [ 0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00 ] );
	mod = new Module( wasm, null );

	mod.initialize().then( onResolve, onReject );

	function onResolve( result ) {
		t.strictEqual( result, mod, 'resolves expected value' );
		t.strictEqual( typeof result.exports, 'object', 'returns expected value' );
		t.end();
	}

	function onReject( error ) {
		t.fail( 'should not reject: ' + error.message );
		t.end();
	}
});

tape( 'the function returns an instance having an `initializeAsync` method which invokes a callback', opts, function test( t ) {
	var wasm;
	var mod;

	wasm = new Uint8Array( [ 0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00 ] );
	mod = new Module( wasm, null );

	mod.initializeAsync( clbk );

	function clbk( error ) {
		if ( error ) {
			t.fail( 'callback received an error: ' + error.message );
		} else {
			t.pass( 'callback invoked without error' );
		}
		t.end();
	}
});

tape( 'the function returns an instance having an `initializeAsync` method which invokes a callback with the module instance', opts, function test( t ) {
	var wasm;
	var mod;

	wasm = new Uint8Array( [ 0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00 ] );
	mod = new Module( wasm, null );

	mod.initializeAsync( clbk );

	function clbk( error, result ) {
		if ( error ) {
			t.fail( 'callback received an error: ' + error.message );
			t.end();
			return;
		}
		t.strictEqual( result, mod, 'returns expected value' );
		t.strictEqual( typeof result.exports, 'object', 'returns expected value' );
		t.end();
	}
});

tape( 'the function returns an instance having an `exports` property which is available after initialization', opts, function test( t ) {
	var wasm;
	var mod;

	wasm = new Uint8Array( [ 0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00 ] );
	mod = new Module( wasm, null );

	mod.initialize().then( onResolve, onReject );

	function onResolve( result ) {
		var exports = result.exports;
		t.strictEqual( typeof exports, 'object', 'returns expected value' );
		t.end();
	}

	function onReject( error ) {
		t.fail( 'should not reject: ' + error.message );
		t.end();
	}
});
