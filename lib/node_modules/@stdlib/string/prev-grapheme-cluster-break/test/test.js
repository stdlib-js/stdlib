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
var prevGraphemeClusterBreak = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof prevGraphemeClusterBreak, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not a string primitive', function test( t ) {
	var values;
	var i;

	values = [
		-5,
		3.14,
		-1.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			prevGraphemeClusterBreak( value );
		};
	}
});

tape( 'the function throws an error if the first argument is not a string primitive (with second argument)', function test( t ) {
	var values;
	var i;

	values = [
		-5,
		3.14,
		-1.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			prevGraphemeClusterBreak( value, 0 );
		};
	}
});

tape( 'the function throws an error if the second argument is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'bar',
		3.14,
		NaN,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3 ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			prevGraphemeClusterBreak( 'foo', value );
		};
	}
});

tape( 'the function returns uses the default position if the provided position is greater than or equal to the string length', function test( t ) {
	var expected;
	var out;

	out = prevGraphemeClusterBreak( 'last man standing', 17 );
	expected = prevGraphemeClusterBreak( 'last man standing' );
	t.strictEqual( out, expected, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'presidential election', 22 );
	expected = prevGraphemeClusterBreak( 'presidential election' );
	t.strictEqual( out, expected, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'अनुच्छेद', 10 );
	expected = prevGraphemeClusterBreak( 'अनुच्छेद' );
	t.strictEqual( out, expected, 'returns expected value' );

	out = prevGraphemeClusterBreak( '🌷', 2 );
	expected = prevGraphemeClusterBreak( '🌷' );
	t.strictEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns -1 if the provided position is in the first extended grapheme cluster of the string', function test( t ) {
	var out;

	out = prevGraphemeClusterBreak( 'last man standing', 0 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'presidential election', 0 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'नुच्छेद', 1 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( '🌷', 1 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( '六', 0 );
	t.strictEqual( out, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the previous grapheme break position in a specified string', function test( t ) {
	var out;

	out = prevGraphemeClusterBreak( 'last man standing', 4 );
	t.strictEqual( out, 3, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'presidential election', 8 );
	t.strictEqual( out, 7, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'अनुच्छेद', 2 );
	t.strictEqual( out, 0, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'अनुच्छेद', 3 );
	t.strictEqual( out, 2, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'अनुच्छेद', 6 );
	t.strictEqual( out, 4, 'returns expected value' );

	out = prevGraphemeClusterBreak( '🌷', 1 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( '🌷🐷', 2 );
	t.strictEqual( out, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns zero when the second argument is a negative integer (equivalent to clamping the second argument to zero)', function test( t ) {
	var out;

	out = prevGraphemeClusterBreak( 'last man standing', -13 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'presidential election', -13 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'अनुच्छेद', -6 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'अनुच्छेद', -5 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'अनुच्छेद', -2 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( '🌷🐷', -2 );
	t.strictEqual( out, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports a default `fromIndex` of `str.length-1` if second argument is not provided', function test( t ) {
	var out;

	out = prevGraphemeClusterBreak( 'last man standing' );
	t.strictEqual( out, 15, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'presidential election' );
	t.strictEqual( out, 19, 'returns expected value' );

	out = prevGraphemeClusterBreak( 'नुच्छे' );
	t.strictEqual( out, 3, 'returns expected value' );

	t.end();
});

tape( 'the function returns -1 if provided an empty string', function test( t ) {
	var out;

	out = prevGraphemeClusterBreak( '', -2 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( '', 2 );
	t.strictEqual( out, -1, 'returns expected value' );

	out = prevGraphemeClusterBreak( '', 0 );
	t.strictEqual( out, -1, 'returns expected value' );

	t.end();
});
