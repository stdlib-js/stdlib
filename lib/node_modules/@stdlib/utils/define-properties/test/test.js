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
var defineProperties = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof defineProperties, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports `Object.defineProperties`, the exported value is the built-in value', function test( t ) {
	var defineProperties = proxyquire( './../lib', {
		'@stdlib/assert/has-define-properties-support': mock
	});

	t.equal( defineProperties, builtin, 'exports built-in' );
	t.end();

	function mock() {
		return true;
	}
});

tape( 'if an environment does not support `Object.defineProperties`, the exported value is a polyfill', function test( t ) {
	var defineProperties = proxyquire( './../lib', {
		'@stdlib/assert/has-define-properties-support': mock
	});

	t.equal( defineProperties, polyfill, 'exports polyfill' );
	t.end();

	function mock() {
		return false;
	}
});

tape( 'the function sets properties on a provided object', function test( t ) {
	var obj = {};
	defineProperties( obj, {
		'foo': {
			'value': 'bar'
		},
		'baz': {
			'value': 13
		}
	});
	t.strictEqual( obj.foo, 'bar', 'prop foo equals bar' );
	t.strictEqual( obj.baz, 13, 'prop foo equals 13' );
	t.end();
});
