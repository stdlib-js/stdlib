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
var splitGraphemeClusters = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof splitGraphemeClusters, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
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
			splitGraphemeClusters( value );
		};
	}
});

tape( 'the function returns an empty array if provided an empty string', function test( t ) {
	t.deepEqual( splitGraphemeClusters( '' ), [], 'returns an empty array' );
	t.end();
});

tape( 'the function returns an array of grapheme clusters', function test( t ) {
	var expected;
	var actual;
	var str;
	var i;

	str = 'abc';
	expected = [ 'a', 'b', 'c' ];
	actual = splitGraphemeClusters( str );

	t.strictEqual( actual.length, expected.length, 'expected length' );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], expected[ i ], 'expected value' );
	}
	t.end();
});

tape( 'the function returns an array of grapheme clusters when provided a string with combining marks', function test( t ) {
	var expected;
	var actual;
	var str;
	var i;

	str = 'a\u0300b\u0301c\u0302';
	expected = [ 'à', 'b́', 'ĉ' ];
	actual = splitGraphemeClusters( str );

	t.strictEqual( actual.length, expected.length, 'expected length' );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], expected[ i ], 'expected value' );
	}
	t.end();
});

tape( 'the function returns an array of grapheme clusters when provided a string with combining marks and a surrogate pair', function test( t ) {
	var expected;
	var actual;
	var str;
	var i;

	str = 'a\u0300b\u0301c\u0302\uD834\uDD1E!';
	expected = [ 'à', 'b́', 'ĉ', '𝄞', '!' ];
	actual = splitGraphemeClusters( str );

	t.strictEqual( actual.length, expected.length, 'expected length' );
	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], expected[ i ], 'expected value' );
	}
	t.end();
});
