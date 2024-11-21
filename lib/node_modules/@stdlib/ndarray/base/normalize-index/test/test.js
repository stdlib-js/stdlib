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
var normalizeIndex = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof normalizeIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function normalizes an index to the interval `[0,max]`', function test( t ) {
	t.strictEqual( normalizeIndex( 2, 10 ), 2, 'returns expected value' );
	t.strictEqual( normalizeIndex( 5, 10 ), 5, 'returns expected value' );
	t.strictEqual( normalizeIndex( 0, 10 ), 0, 'returns expected value' );
	t.strictEqual( normalizeIndex( 7, 10 ), 7, 'returns expected value' );
	t.strictEqual( normalizeIndex( 1, 10 ), 1, 'returns expected value' );
	t.strictEqual( normalizeIndex( -5, 10 ), 6, 'returns expected value' );
	t.strictEqual( normalizeIndex( -1, 10 ), 10, 'returns expected value' );
	t.strictEqual( normalizeIndex( -2, 10 ), 9, 'returns expected value' );
	t.strictEqual( normalizeIndex( -10, 10 ), 1, 'returns expected value' );
	t.strictEqual( normalizeIndex( -11, 10 ), 0, 'returns expected value' );
	t.end();
});

tape( 'if provided an out-of-bounds index, the function returns `-1`', function test( t ) {
	t.strictEqual( normalizeIndex( 15, 10 ), -1, 'returns expected value' );
	t.strictEqual( normalizeIndex( -15, 10 ), -1, 'returns expected value' );
	t.end();
});
