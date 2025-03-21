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
var noop = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof noop, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function does not take any arguments', function test( t ) {
	t.equal( noop.length, 0, 'number of parameters is equal to zero' );
	t.end();
});

tape( 'the function returns `undefined`', function test( t ) {
	t.equal( noop(), void 0, 'returns undefined' );
	t.end();
});

tape( 'the function should be empty', function test( t ) {
	// NOTE: this will fail if code is instrumented for test coverage.
	// t.equal( noop.toString(), 'function noop(){}', 'is empty' );
	t.end();
});
