/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var ones = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ones, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a "generic" array filled with ones', function test( t ) {
	var expected;
	var actual;

	expected = [ 1.0, 1.0, 1.0 ];
	actual = ones( 3 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an empty array if provided a length of `0`', function test( t ) {
	var expected;
	var actual;

	expected = [];
	actual = ones( 0 );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});
