/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var MAX_UINT8 = require( '@stdlib/constants/uint8/max' );
var sub = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sub, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function subtracts two numbers', function test( t ) {
	t.strictEqual( sub( 4, 2 ), 2, 'returns expected value' );
	t.strictEqual( sub( 3, 0 ), 3, 'returns expected value' );
	t.strictEqual( sub( 0, 0 ), 0, 'returns expected value' );
	t.strictEqual( sub( 5, MAX_UINT8 ), 6, 'returns expected value' );
	t.end();
});
