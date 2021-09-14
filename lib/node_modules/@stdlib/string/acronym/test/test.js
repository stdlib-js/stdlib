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
var acronym = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof acronym, 'function', 'main export is a function' );
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			acronym( value );
		};
	}
});

tape( 'the function returns an acronym for a string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'the quick brown fox';
	expected = 'QBF';
	actual = acronym( str );
	t.strictEqual( actual, expected, 'returns an acronym for a string' );

	str = 'National Association of Securities Dealers Automated Quotation';
	expected = 'NASDAQ';
	actual = acronym( str );
	t.strictEqual( actual, expected, 'returns an acronym for a string' );

	str = 'United States of America';
	expected = 'USA';
	actual = acronym( str );
	t.strictEqual( actual, expected, 'returns an acronym for a string' );

	str = 'The National Association for the Advancement of Colored People';
	expected = 'NAACP';
	actual = acronym( str );
	t.strictEqual( actual, expected, 'returns an acronym for a string' );

	str = 'The National Association of the Blind';
	expected = 'NAB';
	actual = acronym( str );
	t.strictEqual( actual, expected, 'returns an acronym for a string' );

	str = 'The Association of Petroleum Geologists';
	expected = 'APG';
	actual = acronym( str );
	t.strictEqual( actual, expected, 'returns an acronym for a string' );

	str = 'The National Aeronautics and Space Administration';
	expected = 'NASA';
	actual = acronym( str );
	t.strictEqual( actual, expected, 'returns an acronym for a string' );

	t.end();
});

tape( 'if the second argument is not an object, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		NaN,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			acronym( 'beep boop', value );
		};
	}
});

tape( 'if provided an invalid option, the function will throw', function test( t ) {
	t.throws( foo, Error, 'throws Error' );
	t.end();
	function foo() {
		acronym( 'beep', {
			'stopwords': 2
		});
	}
});

tape( 'the function returns an acronym for a string (custom stopwords)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'the quick brown fox';
	expected = '';
	actual = acronym( str, {
		'stopwords': [ 'the', 'quick', 'brown', 'fox' ]
	});
	t.strictEqual( actual, expected, 'returns an acronym for a string' );

	str = 'the quick brown fox';
	expected = 'TQBF';
	actual = acronym( str, {
		'stopwords': []
	});
	t.strictEqual( actual, expected, 'returns an acronym for a string' );

	t.end();
});
