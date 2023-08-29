/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var removeWords = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof removeWords, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the first argument is not a string primitive, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
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
			removeWords( value, [ 'abc' ] );
		};
	}
});

tape( 'if the second argument is not an array of strings, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
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
			removeWords( 'Beep boop', value );
		};
	}
});

tape( 'if provided a third argument that is not a boolean primitive, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		void 0,
		NaN,
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
			removeWords( 'Beep boop', [ 'boop' ], value );
		};
	}
});

tape( 'the function returns an empty string if provided an empty string', function test( t ) {
	t.equal( removeWords( '', [ 'beep' ] ), '', 'returns empty string' );
	t.end();
});

tape( 'the function removes a list of words from a string (case-sensitive)', function test( t ) {
	var expected;
	var words;
	var str;
	var out;

	str = 'A noble craft, but somehow a most melancholy! All noble things are touched with that.';
	words = [ 'all', 'noble' ];
	out = removeWords( str, words );
	expected = 'A  craft, but somehow a most melancholy! All  things are touched with that.';
	t.equal( out, expected, 'removes words' );

	str = 'Even though I walk through the valley of the shadow of death, I fear no evil';
	words = [ 'death', 'i', 'of' ];
	out = removeWords( str, words );
	expected = 'Even though I walk through the valley  the shadow  , I fear no evil';
	t.equal( out, expected, 'removes words' );

	str = 'You, you will see no more the pain I suffered, all the pain I caused!';
	words = [ 'pain', 'you' ];
	out = removeWords( str, words );
	expected = 'You,  will see no more the  I suffered, all the  I caused!';
	t.equal( out, expected, 'removes words' );

	t.end();
});

tape( 'the function removes a list of words from a string (case-insensitive)', function test( t ) {
	var expected;
	var words;
	var str;
	var out;

	str = 'A noble craft, but somehow a most melancholy! All noble things are touched with that.';
	words = [ 'all', 'noble' ];
	out = removeWords( str, words, true );
	expected = 'A  craft, but somehow a most melancholy!   things are touched with that.';
	t.equal( out, expected, 'removes words' );

	str = 'Even though I walk through the valley of the shadow of death, I fear no evil';
	words = [ 'death', 'i', 'of' ];
	out = removeWords( str, words, true );
	expected = 'Even though  walk through the valley  the shadow  ,  fear no evil';
	t.equal( out, expected, 'removes words' );

	str = 'You, you will see no more the pain I suffered, all the pain I caused!';
	words = [ 'pain', 'you' ];
	out = removeWords( str, words, true );
	expected = ',  will see no more the  I suffered, all the  I caused!';
	t.equal( out, expected, 'removes words' );
	t.end();
});
