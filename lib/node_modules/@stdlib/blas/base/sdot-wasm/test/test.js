/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var sdot = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sdot, 'object', 'returns expected value' );
	t.end();
});

tape( 'attached to the main export is a `main` method', function test( t ) {
	t.strictEqual( typeof sdot.main, 'function', 'returns expected value' );
	t.end();
});

tape( 'attached to the main export is an `ndarray` method', function test( t ) {
	t.strictEqual( typeof sdot.ndarray, 'function', 'returns expected value' );
	t.end();
});

tape( 'attached to the main export is a `Module` constructor', function test( t ) {
	t.strictEqual( typeof sdot.Module, 'function', 'returns expected value' );
	t.end();
});

tape( 'the main export is a `Module` instance', function test( t ) {
	t.strictEqual( sdot instanceof sdot.Module, true, 'returns expected value' );
	t.end();
});
