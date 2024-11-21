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
var constantcase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof constantcase, 'function', 'main export is a function' );
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
			constantcase( value );
		};
	}
});

tape( 'the function converts a camel case string to a constant case string', function test( t ) {
	var expected;
	var actual;

	expected = 'CAMEL_CASE';
	actual = constantcase( 'camelCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'IS_MOBILE';
	actual = constantcase( 'isMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function converts a string to constant case', function test( t ) {
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
		'HELLO_WORLD',
		'I_AM_TINY_LITTLE_TEA_POT',
		'BIG_PROBLEMS',
		'THE_QUICK_BROWN_FOX_JUMPS_OVER_THE_LAZY_DOG'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( constantcase( values[i] ), expected[i], 'returns expected value.' );
	}
	t.end();
});

tape( 'the function converts a string with Unicode characters to constant case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'Привет мир',
		'Я маленькая лошадка',
		'Большие проблемы',
		'Быстрый коричневый фонд',
		'Café esuna bella'
	];

	expected = [
		'ПРИВЕТ_МИР',
		'Я_МАЛЕНЬКАЯ_ЛОШАДКА',
		'БОЛЬШИЕ_ПРОБЛЕМЫ',
		'БЫСТРЫЙ_КОРИЧНЕВЫЙ_ФОНД',
		'CAFÉ_ESUNA_BELLA'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( constantcase( values[i] ), expected[i], 'returns expected value.' );
	}
	t.end();
});

tape( 'the function leaves a string that is already in constant case unchanged', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'CAMEL_CASE',
		'IS_MOBILE',
		'THE_QUICK_BROWN_FOX_JUMPS_OVER_THE_LAZY_DOG'
	];

	expected = [
		'CAMEL_CASE',
		'IS_MOBILE',
		'THE_QUICK_BROWN_FOX_JUMPS_OVER_THE_LAZY_DOG'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( constantcase( values[i] ), expected[i], 'returns expected value.' );
	}
	t.end();
});
