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
var hammingDistance = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hammingDistance, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string as its first argument', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			hammingDistance( value, 'foo' );
		};
	}
});

tape( 'the function throws an error if not provided a string as its second argument', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			hammingDistance( 'foo', value );
		};
	}
});

tape( 'the function returns -1 as a sentinel value if provided strings of unequal length', function test( t ) {
	t.strictEqual( hammingDistance( 'length', 'differs' ), -1, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the Hamming distance between two equal-length strings', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		[ '1638452297', '4444884442' ], // 10
		[ '', '' ],            // 0
		[ 'a', 'a' ],          // 0
		[ 'a', 'b' ],          // 1
		[ 'xy', 'xy' ],        // 0
		[ 'xx', 'xy' ],        // 1
		[ 'frog', 'blog' ],    // 2
		[ 'fly', 'ant' ],      // 3
		[ 'hello', 'hallo' ],  // 1
		[ 'congratulations', 'conmgeautlatins' ] // 9
	];

	expected = [ 10, 0, 0, 1, 0, 1, 2, 3, 1, 9 ];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( hammingDistance( values[i][0], values[i][1] ), expected[i], 'returns expected value' );
	}
	t.end();
});
