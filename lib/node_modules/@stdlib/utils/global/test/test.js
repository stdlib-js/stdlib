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
var getGlobal = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getGlobal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws a type error if provided an argument which is not a boolean primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			getGlobal( value );
		};
	}
});

tape( 'if the `codegen` argument is `true`, the function returns an object', function test( t ) {
	t.strictEqual( typeof getGlobal( true ), 'object', 'returns an object' );
	t.end();
});

tape( 'if the `globalThis` global variable is defined, the function returns the `globalThis` global object', function test( t ) {
	var GlobalThis;
	var getGlobal;

	GlobalThis = {};
	getGlobal = proxyquire( './../lib/main.js', {
		'./global_this.js': GlobalThis,
		'./global.js': false,
		'./window.js': false,
		'./self.js': false
	});

	t.strictEqual( getGlobal(), GlobalThis, 'returns expected value' );
	t.end();
});

tape( 'the `globalThis` global variable takes precedence over other potential global objects', function test( t ) {
	var GlobalThis;
	var getGlobal;

	GlobalThis = {};
	getGlobal = proxyquire( './../lib/main.js', {
		'./global_this.js': GlobalThis,
		'./global.js': {},
		'./window.js': {},
		'./self.js': {}
	});

	t.strictEqual( getGlobal(), GlobalThis, 'returns expected value' );
	t.end();
});

tape( 'if the `self` global variable is defined, the function returns the `self` global object', function test( t ) {
	var getGlobal;
	var Self;

	Self = {};
	getGlobal = proxyquire( './../lib/main.js', {
		'./self.js': Self,
		'./global.js': false,
		'./window.js': false,
		'./global_this.js': false
	});

	t.strictEqual( getGlobal(), Self, 'returns expected value' );
	t.end();
});

tape( 'the `self` global variable takes precedence over other potential global objects', function test( t ) {
	var getGlobal;
	var Self;

	Self = {};
	getGlobal = proxyquire( './../lib/main.js', {
		'./self.js': Self,
		'./global.js': {},
		'./window.js': {},
		'./global_this.js': false
	});

	t.strictEqual( getGlobal(), Self, 'returns expected value' );
	t.end();
});

tape( 'if the `window` global variable is defined, the function returns the `window` global object', function test( t ) {
	var getGlobal;
	var Window;

	Window = {};
	getGlobal = proxyquire( './../lib/main.js', {
		'./self.js': false,
		'./global.js': false,
		'./window.js': Window,
		'./global_this.js': false
	});

	t.strictEqual( getGlobal(), Window, 'returns expected value' );
	t.end();
});

tape( 'the `window` global variable takes precedence over the Node.js `global` variable', function test( t ) {
	var getGlobal;
	var Window;

	Window = {};
	getGlobal = proxyquire( './../lib/main.js', {
		'./self.js': false,
		'./global.js': {},
		'./window.js': Window,
		'./global_this.js': false
	});

	t.strictEqual( getGlobal(), Window, 'returns expected value' );
	t.end();
});

tape( 'if the `global` global variable is defined, the function returns the `global` global object', function test( t ) {
	var getGlobal;
	var Global;

	Global = {};
	getGlobal = proxyquire( './../lib/main.js', {
		'./self.js': false,
		'./global.js': Global,
		'./window.js': false,
		'./global_this.js': false
	});

	t.strictEqual( getGlobal(), Global, 'returns expected value' );
	t.end();
});

tape( 'if unable to resolve a global object, the function throws an error (default)', function test( t ) {
	var getGlobal = proxyquire( './../lib/main.js', {
		'./self.js': false,
		'./global.js': false,
		'./window.js': false,
		'./global_this.js': false
	});
	t.throws( getGlobal, Error, 'throws an error' );
	t.end();
});

tape( 'if unable to resolve a global object, the function throws an error (codegen=false)', function test( t ) {
	var getGlobal = proxyquire( './../lib/main.js', {
		'./self.js': false,
		'./global.js': false,
		'./window.js': false,
		'./global_this.js': false
	});
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		getGlobal( false );
	}
});
