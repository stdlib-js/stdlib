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
var MAX_UINT32 = require( '@stdlib/constants/uint32/max' );
var add = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof add, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function adds two numbers', function test( t ) {
	t.strictEqual( add( 2, 4 ), 6, 'returns expected value' );
	t.strictEqual( add( 3, 0 ), 3, 'returns expected value' );
	t.strictEqual( add( 0, 0 ), 0, 'returns expected value' );
	t.strictEqual( add( MAX_UINT32, 5 ), 4, 'returns expected value' );
	t.end();
});
