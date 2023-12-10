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
var dotcase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dotcase, 'function', 'main export is a function' );
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
		false,
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
			dotcase( value );
		};
	}
});

tape( 'the function converts a string to dot case', function test( t ) {
	var expected;
	var actual;

	expected = 'foo.bar';
	actual = dotcase( 'foo_bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'foo.bar';
	actual = dotcase( 'foo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'foo.bar';
	actual = dotcase( 'foo.bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'hello.world';
	actual = dotcase( 'Hello World!' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'b.eep.b.oop';
	actual = dotcase( 'bEep bOOP' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string with Unicode characters to dot case', function test( t ) {
	var expected;
	var actual;

	expected = 'fóo.bar';
	actual = dotcase( 'fóo_bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'fóo.bar';
	actual = dotcase( 'fóo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'fóo.bar';
	actual = dotcase( 'fóoBar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'héllo.wórld';
	actual = dotcase( 'héllo Wórld!' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in camel case to dot case', function test( t ) {
	var expected;
	var actual;

	expected = 'foo.bar';
	actual = dotcase( 'fooBar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.mostly.some.case';
	actual = dotcase( 'isMostlySomeCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.mobile';
	actual = dotcase( 'isMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.node.repl';
	actual = dotcase( 'isNodeRepl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in constant case to dot case', function test( t ) {
	var expected;
	var actual;

	expected = 'foo.bar';
	actual = dotcase( 'FOO_BAR' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.mostly.constant.case';
	actual = dotcase( 'IS_MOSTLY_CONSTANT_CASE' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.mobile';
	actual = dotcase( 'IS_MOBILE' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.node.repl';
	actual = dotcase( 'IS_NODE_REPL' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in kebab case to dot case', function test( t ) {
	var expected;
	var actual;

	expected = 'foo.bar';
	actual = dotcase( 'foo-bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.mostly.some.case';
	actual = dotcase( 'is-mostly-some-case' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.mobile';
	actual = dotcase( 'is-mobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.node.repl';
	actual = dotcase( 'is-node-repl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function converts a string in pascal case to dot case', function test( t ) {
	var expected;
	var actual;

	expected = 'foo.bar';
	actual = dotcase( 'FooBar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.mostly.some.case';
	actual = dotcase( 'IsMostlySomeCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.mobile';
	actual = dotcase( 'IsMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.node.repl';
	actual = dotcase( 'IsNodeRepl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function leaves a string that is already in dot case unchanged', function test( t ) {
	var expected;
	var actual;

	expected = 'foo.bar';
	actual = dotcase( 'foo.bar' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.mostly.some.case';
	actual = dotcase( 'is.mostly.some.case' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.mobile';
	actual = dotcase( 'is.mobile' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'is.node.repl';
	actual = dotcase( 'is.node.repl' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
