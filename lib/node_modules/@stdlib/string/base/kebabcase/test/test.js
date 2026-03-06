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
var kebabcase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kebabcase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a string to kebab case', function test( t ) {
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
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar-baz',
		'foo-bar-baz',
		'foo-bar-baz',
		'foo-bar-baz-qux',
		'foo-bar-baz-qux',
		'foo-bar-baz-qux'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( kebabcase( values[i] ), expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'the function converts a camel case string to kebab case', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'helloWorld';
	expected = 'hello-world';
	actual = kebabcase( str );

	str = 'isMobile';
	expected = 'is-mobile';
	actual = kebabcase( str );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function converts a string with Unicode characters to kebab case', function test( t ) {
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
		'fóo-bár',
		'ру́сский-язык',
		'😀😀-😀',
		'ру́сский-язы́к',
		'привет-мир',
		'안녕하세요',
		'你好世界',
		'신규-서비스'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( kebabcase( values[i] ), expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'the function converts a string with special characters to kebab case', function test( t ) {
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
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar',
		'foo-bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( kebabcase( values[i] ), expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'the function leaves a string unchanged that is already in kebab case', function test( t ) {
	var expected;
	var actual;

	expected = 'foo-bar';
	actual = kebabcase( expected );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'client-side-rendering';
	actual = kebabcase( expected );
	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});
