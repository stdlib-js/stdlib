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

var proxyquire = require( 'proxyquire' );
var tape = require( 'tape' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var NUM_CPUS = require( './../lib/browser.js' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof NUM_CPUS, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is always a positive integer', function test( t ) {
	t.equal( isPositiveInteger( NUM_CPUS ), true, 'returns a positive integer' );
	t.end();
});

tape( 'if a web browser does not support hardware concurrency, the exported value is `1`', function test( t ) {
	var NUM_CPUS = proxyquire( './../lib/browser.js', {
		'./navigator.js': {}
	});

	t.equal( NUM_CPUS, 1, 'returns 1' );
	t.end();
});
