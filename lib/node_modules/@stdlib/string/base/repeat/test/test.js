/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var main = require( './../lib/main.js' );
var repeat = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof repeat, 'function', 'main export is a function' );
	t.end();
});

tape( 'the main export is a polyfill if an environment does not support String.prototype.repeat', function test( t ) {
	var repeat = proxyquire( './../lib', {
		'./has_builtin.js': false
	});
	t.equal( repeat, polyfill, 'returns expected value' );
	t.end();
});

tape( 'the main export is a wrapper around a builtin if an environment supports String.prototype.repeat', function test( t ) {
	var repeat = proxyquire( './../lib', {
		'./has_builtin.js': true
	});
	t.equal( repeat, main, 'returns expected value' );
	t.end();
});

tape( 'the function repeats an input string a specified number of times', function test( t ) {
	var str;

	str = repeat( 'a', 5 );
	t.equal( str, 'aaaaa', 'repeated 5 times' );

	str = repeat( 'beep', 2 );
	t.equal( str, 'beepbeep', 'repeated 2 times' );

	t.end();
});

tape( 'if provided an empty string, the function returns an empty string', function test( t ) {
	t.equal( repeat( '', 100 ), '', 'returns an empty string' );
	t.end();
});

tape( 'if repeat number is 0, the function returns an empty string', function test( t ) {
	t.equal( repeat( 'a', 0 ), '', 'returns empty string' );
	t.end();
});
