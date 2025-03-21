/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var noop = require( '@stdlib/utils/noop' );
var try2exec = require( './../lib/try2exec.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof try2exec, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if able to call a `RegExp` method', function test( t ) {
	var try2exec = proxyquire( './../lib/try2exec.js', {
		'./exec.js': noop
	});
	t.strictEqual( try2exec(), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if unable to call a `RegExp` method', function test( t ) {
	var try2exec = proxyquire( './../lib/try2exec.js', {
		'./exec.js': mock
	});
	t.strictEqual( try2exec(), false, 'returns expected value' );
	t.end();

	function mock() {
		throw new Error( 'not supported' );
	}
});
