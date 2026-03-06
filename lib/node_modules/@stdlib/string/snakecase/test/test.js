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
var snakecase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof snakecase, 'function', 'main export is a function' );
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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			snakecase( value );
		};
	}
});

tape( 'the function converts a string to snake case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'foo',
		'foo-bar',
		'fooBar',
		'foo_bar',
		'foo-bar-baz',
		'foo_bar_baz',
		'foo bar baz',
		'foo bar baz qux',
		'foo_bar_baz_qux',
		'foo_bar baz qux'
	];

	expected = [
		'foo',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar_baz',
		'foo_bar_baz',
		'foo_bar_baz',
		'foo_bar_baz_qux',
		'foo_bar_baz_qux',
		'foo_bar_baz_qux'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( snakecase( values[i] ), expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'the function converts a camel case string to snake case', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'helloWorld';
	expected = 'hello_world';
	actual = snakecase( str );

	str = 'isMobile';
	expected = 'is_mobile';
	actual = snakecase( str );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function converts a string with Unicode characters to snake case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'fóoBár',
		'ру́сский язык',
		'😀😀 😀',
		'ру́сский язы́к',
		'Привет мир',
		'안녕하세요',
		'你好世界',
		'신규 서비스'
	];
	expected = [
		'fóo_bár',
		'ру́сский_язык',
		'😀😀_😀',
		'ру́сский_язы́к',
		'привет_мир',
		'안녕하세요',
		'你好世界',
		'신규_서비스'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( snakecase( values[i] ), expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'the function converts a string with special characters to snake case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'foo!bar',
		'foo@bar',
		'foo#bar',
		'foo$bar',
		'foo%bar',
		'foo^bar',
		'foo&bar',
		'foo*bar',
		'foo(bar',
		'foo)bar',
		'foo[bar',
		'foo]bar',
		'foo{bar',
		'foo}bar',
		'foo|bar',
		'foo~bar',
		'foo:"bar',
		'foo\'bar',
		'foo<bar',
		'foo\\bar',
		'foo>bar',
		'foo?bar',
		'foo/bar'
	];

	expected = [
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar',
		'foo_bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( snakecase( values[i] ), expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'the function returns a string unchanged if already in snake case', function test( t ) {
	var expected;
	var actual;

	expected = 'foo_bar';
	actual = snakecase( expected );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'client_side_rendering';
	actual = snakecase( expected );
	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});
