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
var polyfill = require( './../lib/polyfill.js' );
var builtin = require( './../lib/builtin.js' );
var defineProperty = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof defineProperty, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports `Object.defineProperty`, the exported value is the built-in value', function test( t ) {
	var defineProperty = proxyquire( './../lib', {
		'./has_define_property_support.js': mock
	});

	t.equal( defineProperty, builtin, 'exports built-in' );
	t.end();

	function mock() {
		return true;
	}
});

tape( 'if an environment does not support `Object.defineProperty`, the exported value is a polyfill', function test( t ) {
	var defineProperty = proxyquire( './../lib', {
		'./has_define_property_support.js': mock
	});

	t.equal( defineProperty, polyfill, 'exports polyfill' );
	t.end();

	function mock() {
		return false;
	}
});

tape( 'the function sets a property on a provided object', function test( t ) {
	var obj = {};
	defineProperty( obj, 'foo', {
		'value': 'bar'
	});
	t.equal( obj.foo, 'bar', 'prop foo equals bar' );
	t.end();
});
