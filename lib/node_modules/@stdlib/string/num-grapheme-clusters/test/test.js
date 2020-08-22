/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var numGraphemeClusters = require( './../lib' );


// FIXTURES //

var fixtures = require( './fixtures/test_data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof numGraphemeClusters, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
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
			numGraphemeClusters( value );
		};
	}
});

tape( 'the function returns 0 if provided an empty string', function test( t ) {
	t.strictEqual( numGraphemeClusters( '' ), 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns the Unicode aware length of a provided string', function test( t ) {
	var out;

	out = numGraphemeClusters( 'hello world' );
	t.strictEqual( out, 11, 'returns expected value' );

	out = numGraphemeClusters( '!!!' );
	t.strictEqual( out, 3, 'returns expected value' );

	out = numGraphemeClusters( 'अनुच्छेद' );
	t.strictEqual( out, 5, 'returns expected value' );

	out = numGraphemeClusters( '🌷' );
	t.strictEqual( out, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the number of grapheme clusters (Unicode 13 test cases)', function test( t ) {
	var actual;
	var d;
	var i;

	for ( i = 0; i < fixtures.length; i++ ) {
		d = fixtures[ i ];
		actual = numGraphemeClusters( d.input );
		t.strictEqual( actual, d.expected.length, 'returns expected value. Index: '+i+'. Input: '+d.input+'. Actual: '+actual+'. Expected: '+d.expected.length+'.' );
	}
	t.end();
});
