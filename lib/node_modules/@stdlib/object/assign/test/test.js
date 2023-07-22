/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var assign = require( './../lib' );
var native = require( './../lib/main.js' );
var polyfill = require( './../lib/polyfill.js' );


// TESTS //

tape( 'module exports a function ', function test( t ) {
	t.equal( typeof assign, 'function', 'main export is a function' );
	t.end();
});

tape( 'module exports the native function in environments with `Object.assign` support', function test( t ) {
	var assign = proxyquire( './../lib', {
		'./has_object_assign.js': true
	});

	t.equal(assign, native, 'exports native function'); //
	t.end();
});

tape( 'module exports a polyfill function in environments without `Object.assign` support', function test( t ) {
	var assign = proxyquire( './../lib', {
		'./has_object_assign.js': false
	});

	t.equal(assign, polyfill, 'exports polyfill function');
	t.end();
});
