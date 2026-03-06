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
var builtin = require( './../lib/builtin.js' );
var wrapper = require( './../lib/builtin_wrapper.js' );
var polyfill = require( './../lib/polyfill.js' );
var objectKeys = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof objectKeys, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment has a non-buggy built-in implementation, the export is the built-in implementation', function test( t ) {
	var objectKeys = proxyquire( './../lib/main.js', {
		'./has_builtin.js': true,
		'./has_arguments_bug.js': mock
	});
	t.strictEqual( objectKeys, builtin, 'is expected value' );
	t.end();

	function mock() {
		return false;
	}
});

tape( 'if an environment has a buggy built-in implementation (i.e., does not support `arguments`, as in Safari 5.0), the export is a wrapper which patches the built-in implementation', function test( t ) {
	var objectKeys = proxyquire( './../lib/main.js', {
		'./has_builtin.js': true,
		'./has_arguments_bug.js': mock
	});
	t.strictEqual( objectKeys, wrapper, 'is expected value' );
	t.end();

	function mock() {
		return true;
	}
});

tape( 'if an environment does not have a built-in implementation, the export is a polyfill', function test( t ) {
	var objectKeys = proxyquire( './../lib/main.js', {
		'./has_builtin.js': false
	});
	t.strictEqual( objectKeys, polyfill, 'is expected value' );
	t.end();
});
