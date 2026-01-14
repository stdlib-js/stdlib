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
var altcase = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof altcase, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a camel case string to alternate case', function test( t ) {
	var expected;
	var actual;

	expected = 'cAmElCaSe';
	actual = altcase( 'camelCase' );
	t.strictEqual( actual, expected, 'returns expected value' );

	expected = 'iSmObIlE';
	actual = altcase( 'isMobile' );
	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function converts a string to alternate case', function test( t ) {
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
		'hElLo wOrLd',
		'i aM TiNy lItTlE TeA PoT',
		'bIg pRoBlEmS',
		'tHe qUiCk bRoWn fOx jUmPs oVeR ThE LaZy dOg'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( altcase( values[i] ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function converts a string with Unicode characters to alternate case', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'Привет мир',
		'Я маленькая лошадка',
		'Большие проблемы',
		'Быстрый коричневый фонд',
		'Café esuna bella',
		'fóoBár',
		'😀😀-😀',
		'신규 서비스'
	];

	expected = [
		'пРиВеТ МиР',
		'я мАлЕнЬкАя лОшАдКа',
		'бОлЬшИе пРоБлЕмЫ',
		'бЫсТрЫй кОрИчНеВыЙ ФоНд',
		'cAfÉ EsUnA BeLlA',
		'fÓoBáR',
		'😀😀-😀',
		'신규 서비스'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( altcase( values[i] ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function converts a string with special characters to alternate case', function test( t ) {
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
		'fOo-bAr',
		'fOo!bAr',
		'fOo@bAr',
		'fOo#bAr',
		'fOo$bAr',
		'fOo%bAr',
		'fOo^bAr',
		'fOo&bAr',
		'fOo*bAr',
		'fOo(bAr',
		'fOo)bAr',
		'fOo[bAr',
		'fOo]bAr',
		'fOo{bAr',
		'fOo}bAr',
		'fOo|bAr',
		'fOo~bAr',
		'fOo:"BaR',
		'fOo\'bAr',
		'fOo<bAr',
		'fOo\\bAr',
		'fOo>bAr',
		'fOo?bAr',
		'fOo/bAr'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( altcase( values[i] ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function leaves a string that is already in alternate case unchanged', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'cAmElCaSe',
		'iSmObIlE',
		'tHe qUiCk bRoWn fOx jUmPs oVeR ThE LaZy dOg'
	];

	expected = [
		'cAmElCaSe',
		'iSmObIlE',
		'tHe qUiCk bRoWn fOx jUmPs oVeR ThE LaZy dOg'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( altcase( values[i] ), expected[i], 'returns expected value' );
	}
	t.end();
});
