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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var now = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof now, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function does not take any arguments', function test( t ) {
	t.strictEqual( now.length, 0, 'number of parameters is equal to zero' );
	t.end();
});

tape( 'the function returns a nonnegative integer', function test( t ) {
	t.strictEqual( isNonNegativeInteger( now() ), true, 'returns a nonnegative integer' );
	t.end();
});

tape( 'the function uses a polyfill if an environment lacks native support', function test( t ) {
	var now = proxyquire( './../lib', {
		'./detect.js': false
	});
	t.strictEqual( now.length, 0, 'number of parameters is equal to zero' );
	t.strictEqual( isNonNegativeInteger( now() ), true, 'returns a nonnegative integer' );
	t.end();
});
