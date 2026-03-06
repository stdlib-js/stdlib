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
var polyfill = require( './../lib/polyfill.js' );
var getOwnPropertyDescriptor = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getOwnPropertyDescriptor, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment has a built-in implementation, the export is the built-in implementation', function test( t ) {
	var getOwnPropertyDescriptor = proxyquire( './../lib/index.js', {
		'./has_builtin.js': true
	});
	t.strictEqual( getOwnPropertyDescriptor, builtin, 'is expected value' );
	t.end();
});

tape( 'if an environment does not have a built-in implementation, the export is a polyfill', function test( t ) {
	var getOwnPropertyDescriptor = proxyquire( './../lib/index.js', {
		'./has_builtin.js': false
	});
	t.strictEqual( getOwnPropertyDescriptor, polyfill, 'is expected value' );
	t.end();
});
