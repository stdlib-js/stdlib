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
var indexOf = require( '@stdlib/utils/index-of' );
var union = require( './../lib/union.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof union, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the union of array elements', function test( t ) {
	var expected;
	var actual;
	var arr1;
	var arr2;
	var arr3;
	var i;

	arr1 = [ 1, 5, 2, 3 ];
	arr2 = [ 2, 7, 3, 7 ];
	arr3 = [ 11, 9, 11, 2, 3, 7 ];

	actual = union( arr1, arr2, arr3 );
	expected = [ '1', '5', '2', '3', '7', '11', '9' ];

	t.equal( actual.length, expected.length, 'has expected length' );
	for ( i = 0; i < expected.length; i++ ) {
		t.equal( indexOf( actual, expected[ i ] ) !== -1, true, 'has element '+expected[i] );
	}
	t.end();
});
