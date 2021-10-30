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
var maxViewBufferIndex = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof maxViewBufferIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the maximum accessible index based on a set of strided array parameters', function test( t ) {
	var expected;
	var values;
	var v;
	var i;

	values = [
		[ 3, -2, 10 ],  // 10
		[ 3, 2, 10 ],   // 14
		[ 1, 1, 5 ],    // 5
		[ 1, 0, 5 ],    // 5
		[ 1, -1, 5 ],   // 5
		[ 2, -1, 5 ],   // 5
		[ 2, 1, 5 ],    // 6
		[ 2, -10, 10 ], // 10
		[ 2, 10, 10 ],  // 20
		[ 0, -2, 10 ],  // 10
		[ 0, 2, 10 ]    // 10
	];

	expected = [
		10,
		14,
		5,
		5,
		5,
		5,
		6,
		10,
		20,
		10,
		10
	];

	for ( i = 0; i < values.length; i++ ) {
		v = maxViewBufferIndex.apply( null, values[ i ] );
		t.strictEqual( v, expected[ i ], 'returns expected value when provided '+values[ i ].join( ', ' ) );
	}
	t.end();
});
