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
var rtrimN = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof rtrimN, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the first argument is not a string primitive, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
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
			rtrimN( value, 2 );
		};
	}
});

tape( 'if the second argument is not a nonnegative integer, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		-3.14,
		null,
		void 0,
		true,
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
			rtrimN( 'beep', value );
		};
	}
});

tape( 'if provided a thirs argument which is not a string or string array, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
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
			rtrimN( 'beep', 2, value );
		};
	}
});

tape( 'the function trims `n` right-most whitespace characters from a string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '\t\tbeep\t\t';
	expected = '\t\tbeep';
	actual = rtrimN( str, 4 );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '\t\tbeep\t\t';
	expected = '\t\tbeep\t';
	actual = rtrimN( str, 1 );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '\t \nbeep\t \n';
	expected = '\t \nbeep';
	actual = rtrimN( str, str.length );

	t.end();
});

tape( 'the function trims `n` right-most whitespace characters from a string (Unicode characters)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '\u00A0\u00A0beep\u00A0\u00A0';
	expected = '\u00A0\u00A0beep';
	actual = rtrimN( str, 4 );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '\u00A0\u00A0beep\u00A0\u00A0';
	expected = '\u00A0\u00A0beep\u00A0';
	actual = rtrimN( str, 1 );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '\u00A0 \nbeep\u00A0 \n';
	expected = '\u00A0 \nbeep';
	actual = rtrimN( str, str.length );

	t.end();
});

tape( 'the function trims `n` right-most custom characters from a string when provided a string array as the third argument', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '\t\tbeep\t\t';
	expected = '\t\tbeep';
	actual = rtrimN( str, 4, [ '\t' ] );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '\t\tbeep\t\t';
	expected = '\t\tbeep\t\t';
	actual = rtrimN( str, 1, [ '\n' ] );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '\t \nbeep\t \n';
	expected = '\t \nbeep\t ';
	actual = rtrimN( str, str.length, [ '\t', '\n' ] );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function trims `n` right-most custom characters from a string when provided a string array as the third argument (Unicode characters)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '\u00A0\u00A0beep\u00A0\u00A0';
	expected = '\u00A0\u00A0beep';
	actual = rtrimN( str, 4, [ '\u00A0' ] );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '🤖👨🏼‍🎨🤖👨🏼‍🎨🤖👨🏼‍🎨';
	expected = '';
	actual = rtrimN( str, str.length, [ '🤖', '👨🏼‍🎨' ] );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function trims `n` right-most custom characters from a string when provided a string as the third argument', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '\t\tbeep\t\t';
	expected = '\t\tbeep';
	actual = rtrimN( str, 4, '\t' );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '\t\tbeep\t\t';
	expected = '\t\tbeep\t\t';
	actual = rtrimN( str, 1, '\n' );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '\t \nbeep\t \n';
	expected = '\t \nbeep\t ';
	actual = rtrimN( str, str.length, '\t\n' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function trims `n` right-most custom characters from a string when provided a string as the third argument (Unicode characters)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '\u00A0\u00A0beep\u00A0\u00A0';
	expected = '\u00A0\u00A0beep';
	actual = rtrimN( str, 4, '\u00A0' );
	t.strictEqual( actual, expected, 'returns expected value' );

	str = '🤖👨🏼‍🎨🤖👨🏼‍🎨🤖👨🏼‍🎨';
	expected = '';
	actual = rtrimN( str, str.length, '👨🏼‍🎨🤖' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
