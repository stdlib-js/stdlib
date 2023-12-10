
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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var num2words = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof num2words, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the first argument is not a number, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'123',
		null,
		true,
		void 0,
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
			num2words( value );
		};
	}
});

tape( 'if the first argument is not a number, the function throws an error (options)', function test( t ) {
	var values;
	var i;

	values = [
		'123',
		null,
		true,
		void 0,
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
			num2words( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid options argument', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function zipper() {
			num2words( 8, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid `lang` option', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		[],
		{},
		true,
		void 0,
		NaN,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function zipper() {
			num2words( 8, {
				'lang': value
			});
		};
	}
});

tape( 'the function converts an integer to its word representation (default language)', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		0,
		10,
		23,
		193,
		1000,
		1001,
		100312,
		1000000,
		1000001,
		1000000000,
		1e81
	];
	expected = [
		'zero',
		'ten',
		'twenty-three',
		'one hundred ninety-three',
		'one thousand',
		'one thousand one',
		'one hundred thousand three hundred twelve',
		'one million',
		'one million one',
		'one billion',
		'one sesvigintillion'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( num2words( values[i] ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function converts a decimal number to its word representation (default language)', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		10.3,
		23.1,
		193.12,
		1000.187,
		100312.12,
		1000000.999
	];
	expected = [
		'ten point three',
		'twenty-three point one',
		'one hundred ninety-three point one two',
		'one thousand point one eight seven',
		'one hundred thousand three hundred twelve point one two',
		'one million point nine nine nine'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( num2words( values[i] ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function converts an integer to its word representation (lang=en)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		0,
		10,
		23,
		193,
		1000,
		1001,
		100312,
		1000000,
		1000001,
		1000000000
	];
	expected = [
		'zero',
		'ten',
		'twenty-three',
		'one hundred ninety-three',
		'one thousand',
		'one thousand one',
		'one hundred thousand three hundred twelve',
		'one million',
		'one million one',
		'one billion'
	];
	opts = {
		'lang': 'en'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( num2words( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function converts a decimal number to its word representation (lang=en)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		10.3,
		23.1,
		193.12,
		1000.187,
		100312.12,
		1000000.999
	];
	expected = [
		'ten point three',
		'twenty-three point one',
		'one hundred ninety-three point one two',
		'one thousand point one eight seven',
		'one hundred thousand three hundred twelve point one two',
		'one million point nine nine nine'
	];
	opts = {
		'lang': 'en'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( num2words( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function converts an integer to its word representation (lang=de)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		0,
		10,
		23,
		193,
		1000,
		1001,
		100312,
		1000000,
		1000001,
		1000000000,
		381,
		1066,
		-10,
		-23,
		-193,
		1234567890,
		999999,
		1e102
	];
	expected = [
		'null',
		'zehn',
		'dreiundzwanzig',
		'einhundertdreiundneunzig',
		'eintausend',
		'eintausendeins',
		'einhunderttausenddreihundertzwölf',
		'eine Million',
		'eine Million eins',
		'eine Milliarde',
		'dreihunderteinundachtzig',
		'eintausendsechsundsechzig',
		'minus zehn',
		'minus dreiundzwanzig',
		'minus einhundertdreiundneunzig',
		'eine Milliarde zweihundertvierunddreißig Millionen fünfhundertsiebenundsechzigtausendachthundertneunzig',
		'neunhundertneunundneunzigtausendneunhundertneunundneunzig',
		'eine Septendecillion'
	];

	opts = {
		'lang': 'de'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( num2words( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function converts a decimal number to its word representation (lang=de)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		10.3,
		23.1,
		193.12,
		-10.3,
		-123.11
	];
	expected = [
		'zehn Komma drei',
		'dreiundzwanzig Komma eins',
		'einhundertdreiundneunzig Komma eins zwei',
		'minus zehn Komma drei',
		'minus einhundertdreiundzwanzig Komma eins eins'
	];

	opts = {
		'lang': 'de'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( num2words( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function handles infinity (default language)', function test( t ) {
	t.equal( num2words( PINF ), 'infinity', 'returns expected value' );
	t.equal( num2words( NINF ), 'negative infinity', 'returns expected value' );
	t.end();
});

tape( 'the function handles infinity (lang=en)', function test( t ) {
	var opts = {
		'lang': 'en'
	};
	t.equal( num2words( PINF, opts ), 'infinity', 'returns expected value' );
	t.equal( num2words( NINF, opts ), 'negative infinity', 'returns expected value' );
	t.end();
});

tape( 'the function handles infinity (lang=de)', function test( t ) {
	var opts = {
		'lang': 'de'
	};
	t.equal( num2words( PINF, opts ), 'unendlich', 'returns expected value' );
	t.equal( num2words( NINF, opts ), 'minus unendlich', 'returns expected value' );
	t.end();
});
