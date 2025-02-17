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
var Memory = require( '@stdlib/wasm/memory' );
var ModuleWrapper = require( '@stdlib/wasm/module-wrapper' );
var Module = require( './../lib' ).Module;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Module, 'function', 'returns expected value' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );
	t.strictEqual( mod instanceof Module, true, 'returns expected value' );
	t.end();
});

tape( 'the function is a constructor which does not require `new`', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = Module( mem ); // eslint-disable-line new-cap
	t.strictEqual( mod instanceof Module, true, 'returns expected value' );
	t.end();
});

tape( 'the module constructor throws an error if provided a first argument which is not a WebAssembly memory instance (new)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Module( value );
		};
	}
});

tape( 'the module constructor throws an error if provided a first argument which is not a WebAssembly memory instance (no new)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return Module( value ); // eslint-disable-line new-cap
		};
	}
});

tape( 'the module instance returned by the module constructor inherits from a module wrapper', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );

	t.strictEqual( mod instanceof ModuleWrapper, true, 'returns expected value' );
	t.end();
});

tape( 'attached to a module instance is a `main` method', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );

	t.strictEqual( typeof mod.main, 'function', 'returns expected value' );
	t.end();
});

tape( 'attached to a module instance is an `ndarray` method', function test( t ) {
	var mem;
	var mod;

	mem = new Memory({
		'initial': 0
	});
	mod = new Module( mem );

	t.strictEqual( typeof mod.ndarray, 'function', 'returns expected value' );
	t.end();
});
