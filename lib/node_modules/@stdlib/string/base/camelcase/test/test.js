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
var camelcase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof camelcase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a string to camel case', function test( t ) {
	var expected;
	var actual;

	expected = 'fooBar';
	actual = camelcase( 'foo_bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'fooBar';
	actual = camelcase( 'foo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'fooBar';
	actual = camelcase( 'foo.bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'helloWorld';
	actual = camelcase( 'Hello World!' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'bEepBOop';
	actual = camelcase( 'bEep bOOP' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string with Unicode characters to camelcase', function test( t ) {
	var expected;
	var actual;

	expected = 'fóoBar';
	actual = camelcase( 'fóo_bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'fóoBar';
	actual = camelcase( 'fóo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'fóoBar';
	actual = camelcase( 'fóo.bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'hélloWórld';
	actual = camelcase( 'héllo Wórld!' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in constant case to camel case', function test( t ) {
	var expected;
	var actual;

	expected = 'fooBar';
	actual = camelcase( 'FOO_BAR' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isMostlyCamelCase';
	actual = camelcase( 'IS_MOSTLY_CAMEL_CASE' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isMobile';
	actual = camelcase( 'IS_MOBILE' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isNodeRepl';
	actual = camelcase( 'IS_NODE_REPL' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in kebab case to camel case', function test( t ) {
	var expected;
	var actual;

	expected = 'fooBar';
	actual = camelcase( 'foo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isMostlyCamelCase';
	actual = camelcase( 'is-mostly-camel-case' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isMobile';
	actual = camelcase( 'is-mobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isNodeRepl';
	actual = camelcase( 'is-node-repl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in pascal case to camel case', function test( t ) {
	var expected;
	var actual;

	expected = 'fooBar';
	actual = camelcase( 'FooBar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isMostlyCamelCase';
	actual = camelcase( 'IsMostlyCamelCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isMobile';
	actual = camelcase( 'IsMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isNodeRepl';
	actual = camelcase( 'IsNodeRepl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function leaves a string that is already in camel case unchanged', function test( t ) {
	var expected;
	var actual;

	expected = 'fooBar';
	actual = camelcase( 'fooBar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isMostlyCamelCase';
	actual = camelcase( 'isMostlyCamelCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isMobile';
	actual = camelcase( 'isMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'isNodeRepl';
	actual = camelcase( 'isNodeRepl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
