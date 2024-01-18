/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var zeroTo = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zeroTo, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a linearly spaced array', function test( t ) {
	var expected;
	var actual;

	actual = zeroTo( 10 );
	expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = zeroTo( 5 );
	expected = [ 0, 1, 2, 3, 4 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a linearly spaced array (fractional argument)', function test( t ) {
	var expected;
	var actual;

	actual = zeroTo( 10.5 );
	expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = zeroTo( 5.0000001 );
	expected = [ 0, 1, 2, 3, 4, 5 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty array if provided a value which is less than or equal to zero', function test( t ) {
	t.deepEqual( zeroTo( -1 ), [], 'returns expected value' );
	t.deepEqual( zeroTo( 0 ), [], 'returns expected value' );
	t.end();
});
