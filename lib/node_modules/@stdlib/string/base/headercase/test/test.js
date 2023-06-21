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
var headercase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof headercase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a string to header case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'foo',
		'foo-bar',
		'FOO BAR',
		'fooBar',
		'foo_bar',
		'fooBarBaz',
		'foo-bar-baz',
		'foo_bar_baz',
		' foo   bar baz ',
		'foo bar baz qux',
		'foo_bar_baz_qux',
		'foo_bar baz qux'
	];

	expected = [
		'Foo',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar-Baz',
		'Foo-Bar-Baz',
		'Foo-Bar-Baz',
		'Foo-Bar-Baz',
		'Foo-Bar-Baz-Qux',
		'Foo-Bar-Baz-Qux',
		'Foo-Bar-Baz-Qux'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( headercase( values[i] ), expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'the function converts a string to header case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'Hello World',
		'I am tiny little tea pot',
		'Big problems',
		'The quick brown fox jumps over the lazy dog'
	];

	expected = [
		'Hello-World',
		'I-Am-Tiny-Little-Tea-Pot',
		'Big-Problems',
		'The-Quick-Brown-Fox-Jumps-Over-The-Lazy-Dog'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( headercase( values[i] ), expected[i], 'returns expected value.' );
	}
	t.end();
});

tape( 'the function converts a string with Unicode characters to header case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'fóoBár',
		'Привет мир',
		'_Світ-прекрасний!',
		'Café esuna bella',
		'meu coração',
		'#🥹  🤨',
		'𩷶$𝒳 ',
		'안녕하@세요'
	];

	expected = [
		'Fóo-Bár',
		'Привет-Мир',
		'Світ-Прекрасний',
		'Café-Esuna-Bella',
		'Meu-Coração',
		'🥹-🤨',
		'𩷶-𝒳',
		'안녕하-세요'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( headercase( values[i] ), expected[i], 'returns expected value.' );
	}
	t.end();
});

tape( 'the function converts a string with special characters to header case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'foo-bar',
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
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar',
		'Foo-Bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( headercase( values[i] ), expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'the function leaves a string that is already in header case unchanged', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'Camel-Case',
		'Is-Mobile',
		'The-Quick-Brown-Fox-Jumps-Over-The-Lazy-Dog',
		'🥹-🤨'
	];

	expected = [
		'Camel-Case',
		'Is-Mobile',
		'The-Quick-Brown-Fox-Jumps-Over-The-Lazy-Dog',
		'🥹-🤨'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( headercase( values[i] ), expected[i], 'returns expected value.' );
	}
	t.end();
});
