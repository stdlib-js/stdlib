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
var minard = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minard, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if unable to load data (no options)', function test( t ) {
	var minard = proxyquire( './../lib/main.js', {
		'@stdlib/fs/read-json': {
			'sync': readJSON
		}
	});
	t.throws( minard, Error, 'throws an error' );
	t.end();

	function readJSON() {
		return new Error( 'unable to read data' );
	}
});

tape( 'the function throws an error if unable to load data (options)', function test( t ) {
	var minard = proxyquire( './../lib/main.js', {
		'@stdlib/fs/read-json': {
			'sync': readJSON
		}
	});
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		minard({
			'data': 'army'
		});
	}

	function readJSON() {
		return new Error( 'unable to read data' );
	}
});
