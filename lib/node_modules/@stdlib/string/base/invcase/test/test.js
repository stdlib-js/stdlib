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
var invcase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof invcase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a camel case string to an inverse case string', function test( t ) {
	var expected;
	var actual;

	expected = 'CAMELcASE';
	actual = invcase( 'camelCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'ISmOBILE';
	actual = invcase( 'isMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function converts a string to inverse case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'Hello World',
		'I am tiny little tea pot',
		'BIG problems',
		'THE quick BROWN fox JUMPS over THE lazy DOG',
		'  Whitespace  '
	];

	expected = [
		'hELLO wORLD',
		'i AM TINY LITTLE TEA POT',
		'big PROBLEMS',
		'the QUICK brown FOX jumps OVER the LAZY dog',
		'  wHITESPACE  '
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( invcase( values[i] ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function converts a string with Unicode characters to inverse case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'привет МИР',
		'Я МаЛеНьКаЯ лОшАдКа',
		'БОЛЬШИЕ проблемы',
		'БЫСТРЫЙ коричневый ФОНД',
		'Café ESUNA bEllA'
	];

	expected = [
		'ПРИВЕТ мир',
		'я мАлЕнЬкАя ЛоШаДкА',
		'большие ПРОБЛЕМЫ',
		'быстрый КОРИЧНЕВЫЙ фонд',
		'cAFÉ esuna BeLLa'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( invcase( values[i] ), expected[i], 'returns expected value' );
	}
	t.end();
});
