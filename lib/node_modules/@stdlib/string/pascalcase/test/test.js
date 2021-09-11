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
var pascalcase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pascalcase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			pascalcase( value );
		};
	}
});

tape( 'the function converts a string to Pascal case', function test( t ) {
	var expected;
	var actual;

	expected = 'FooBar';
	actual = pascalcase( 'foo_bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'FooBar';
	actual = pascalcase( 'foo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'FooBar';
	actual = pascalcase( 'foo.bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'HelloWorld';
	actual = pascalcase( 'Hello World!' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'BEepBOop';
	actual = pascalcase( 'bEep bOOP' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string with Unicode characters to Pascal case', function test( t ) {
	var expected;
	var actual;

	expected = 'FóoBar';
	actual = pascalcase( 'fóo_bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'FóoBar';
	actual = pascalcase( 'fóo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'FóoBar';
	actual = pascalcase( 'fóo.bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'HélloWórld';
	actual = pascalcase( 'héllo Wórld!' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in constant case to Pascal case', function test( t ) {
	var expected;
	var actual;

	expected = 'FooBar';
	actual = pascalcase( 'FOO_BAR' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsMostlyCamelCase';
	actual = pascalcase( 'IS_MOSTLY_CAMEL_CASE' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsMobile';
	actual = pascalcase( 'IS_MOBILE' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsNodeRepl';
	actual = pascalcase( 'IS_NODE_REPL' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in kebab case to Pascal case', function test( t ) {
	var expected;
	var actual;

	expected = 'FooBar';
	actual = pascalcase( 'foo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsMostlyCamelCase';
	actual = pascalcase( 'is-mostly-camel-case' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsMobile';
	actual = pascalcase( 'is-mobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsNodeRepl';
	actual = pascalcase( 'is-node-repl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in camel case to Pascal case', function test( t ) {
	var expected;
	var actual;

	expected = 'FooBar';
	actual = pascalcase( 'fooBar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsMostlyCamelCase';
	actual = pascalcase( 'isMostlyCamelCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsMobile';
	actual = pascalcase( 'isMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsNodeRepl';
	actual = pascalcase( 'isNodeRepl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function leaves a string that is already in Pascal case unchanged', function test( t ) {
	var expected;
	var actual;

	expected = 'FooBar';
	actual = pascalcase( 'FooBar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsMostlyCamelCase';
	actual = pascalcase( 'IsMostlyCamelCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsMobile';
	actual = pascalcase( 'IsMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IsNodeRepl';
	actual = pascalcase( 'IsNodeRepl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
