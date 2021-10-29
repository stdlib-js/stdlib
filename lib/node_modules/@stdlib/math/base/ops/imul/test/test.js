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
var imul = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/c/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof imul, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports `Math.imul` (ES2015+), the main export is the built-in method', function test( t ) {
	var imul = proxyquire( './../lib', {
		'./main.js': foo
	});
	t.equal( imul, foo, 'returns expected value' );
	t.end();

	function foo() {
		// No-op...
	}
});

tape( 'if an environment does not support `Math.imul` (non-ES2015+), the main export is a polyfill', function test( t ) {
	var imul = proxyquire( './../lib', {
		'./main.js': false
	});
	t.equal( imul, polyfill, 'returns expected value' );
	t.end();
});

tape( 'the function emulates C-like multiplication of two signed 32-bit integers', function test( t ) {
	var expected;
	var actual;
	var a;
	var b;
	var i;

	a = data.a;
	b = data.b;
	expected = data.expected;
	for ( i = 0; i < expected.length; i++ ) {
		actual = imul( a[ i ], b[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value. a: '+a[i]+'. b: '+b[i]+'. expected: '+expected[i]+'. actual: '+actual+'.' );
	}
	t.end();
});
