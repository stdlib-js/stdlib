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
var stickycase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof stickycase, 'function', 'main export is a function' );
	t.end();
});

tape('the function converts a string to sticky caps case', function test( t ) {
	var actual;

	// Test with default probability (p=0.5)
	actual = stickycase( 'hello world' );
	t.strictEqual( typeof actual, 'string', 'returns a string' );

	// Test with lower probability (p=0.2):
	actual = stickycase( 'hello world', 0.2 );
	t.strictEqual( typeof actual, 'string', 'returns a string' );

	// Test with higher probability (p=0.8):
	actual = stickycase( 'hello world', 0.8 );
	t.strictEqual( typeof actual, 'string', 'returns a string' );

	t.end();
});
