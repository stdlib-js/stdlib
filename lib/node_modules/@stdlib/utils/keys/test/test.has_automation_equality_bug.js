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
var bool = require( './../lib/has_automation_equality_bug.js' );


// TESTS //

tape( 'main export is a boolean', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bool, 'boolean', 'main export is a boolean' );
	t.end();
});

tape( 'the exported value is `false` if an environment does not have a `window` global', function test( t ) {
	var bool = proxyquire( './../lib/has_automation_equality_bug.js', {
		'@stdlib/utils/type-of': mock
	});

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();

	function mock() {
		return 'undefined';
	}
});

tape( 'the exported value is `true` if an environment throws an error when comparing a value to the prototype of its constructor', function test( t ) {
	var bool = proxyquire( './../lib/has_automation_equality_bug.js', {
		'./window.js': {
			'a': 1,
			'b': 2,
			'c': 3,
			'd': {}
		},
		'./is_constructor_prototype.js': mock
	});

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();

	function mock() {
		throw new Error( 'beep!' );
	}
});

tape( 'the exported value is `false` if an environment does not throw an error when comparing a value to the prototype of its constructor', function test( t ) {
	var bool = proxyquire( './../lib/has_automation_equality_bug.js', {
		'./window.js': {
			'a': 1,
			'b': 2,
			'c': 3,
			'd': {}
		},
		'./is_constructor_prototype.js': mock
	});

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();

	function mock() {
		return false;
	}
});
