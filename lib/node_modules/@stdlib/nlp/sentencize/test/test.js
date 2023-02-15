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

/* eslint-disable no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isArray = require( '@stdlib/assert/is-array' );
var sentencize = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof sentencize, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the first argument is not a string primitive, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		new String( 'beep' ),
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
			sentencize( value );
		};
	}
});

tape( 'the function splits a string into an array of sentences', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello World! How are you?';
	expected = [ 'Hello World!', 'How are you?' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'Hello World! How are you? I am fine. Thank you.';
	expected = [ 'Hello World!', 'How are you?', 'I am fine.', 'Thank you.' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'The quick brown fox jumped over the lazy dog. The end.';
	expected = [ 'The quick brown fox jumped over the lazy dog.', 'The end.' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	expected = [
		'To be or not to be, that is the question.',
		'Whether \'tis nobler in the mind to suffer.',
		'The slings and arrows of outrageous fortune.',
		'Or to take arms against a sea of troubles.',
		'And by opposing end them.',
		'To die, to sleep, no more.'
	];
	str = expected.join( ' ' );
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	t.end();
});

tape( 'the function splits a string into an array of sentences (ellipsis)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello... how are you?';
	expected = [ 'Hello... how are you?' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'Hello there.... How are you?';
	expected = [ 'Hello there....', 'How are you?' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	t.end();
});

tape( 'the function splits a string into an array of sentences (honorifics)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello Mr. Smith, how are you?';
	expected = [ 'Hello Mr. Smith, how are you?' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'Hello Prof. Dr. Smith, what do you think of the new paper?';
	expected = [ 'Hello Prof. Dr. Smith, what do you think of the new paper?' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	t.end();
});

tape( 'the function splits a string into an array of sentences (abbreviations)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'We got a new paper in J. Am. Chem. Soc. today. It is awesome!';
	expected = [ 'We got a new paper in J. Am. Chem. Soc. today.', 'It is awesome!' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'e.g. this is an example. i.e. this is an instance.';
	expected = [ 'e.g. this is an example.', 'i.e. this is an instance.' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'Dr. Chutra, Ph.D., is a professor at CMU. She is awesome!';
	expected = [ 'Dr. Chutra, Ph.D., is a professor at CMU.', 'She is awesome!' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'Let us travel to the U.S.A. today. It is a beautiful day.';
	expected = [ 'Let us travel to the U.S.A. today.', 'It is a beautiful day.' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	t.end();
});

tape( 'the function splits a string into an array of sentences (contractions)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'I can\'t believe it. I\'m so happy.';
	expected = [ 'I can\'t believe it.', 'I\'m so happy.' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'She\'s a great person; I\'m so happy to know her.';
	expected = [ 'She\'s a great person; I\'m so happy to know her.' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	t.end();
});

tape( 'the function splits a string into an array of sentences (brackets, parentheses, and quotes)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'The boy said to his mother, "You are the best mother in the world."';
	expected = [ 'The boy said to his mother, "You are the best mother in the world."' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	expected = [
		'The first witch said, \'When shall we three meet again In thunder, lightning, or in rain?',
		'The second witch replied, \'When the hurlyburly\'s done, When the battle\'s lost and won.\'',
		'The third witch chimed in, \'That will be ere the set of sun.\''
	];
	str = expected.join( ' ' );
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	t.end();
});

tape( 'the function splits a string into an array of sentences (lists)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'There are three things I\'ve learned never to discuss with people: 1. religion, 2. politics, and 3. the Great Pumpkin.';
	actual = sentencize( str );
	expected = [ 'There are three things I\'ve learned never to discuss with people: 1. religion, 2. politics, and 3. the Great Pumpkin.' ];
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'My TODO list: 1. Buy milk, 2. Buy eggs, 3. Buy bread. I\'m going to the store now.';
	actual = sentencize( str );
	expected = [ 'My TODO list: 1. Buy milk, 2. Buy eggs, 3. Buy bread.', 'I\'m going to the store now.' ];
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'The following are some of the things I\'ve learned: A. Never go in against a Sicilian when death is on the line, B. Never get involved in a land war in Asia, C. Never go against a Sicilian when death is on the line!';
	actual = sentencize( str );
	expected = [ 'The following are some of the things I\'ve learned: A. Never go in against a Sicilian when death is on the line, B. Never get involved in a land war in Asia, C. Never go against a Sicilian when death is on the line!' ];
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	t.end();
});

tape( 'the function splits a string into an array of sentences (phone numbers, currency, and dates)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'The price is $1,000.00. I\'ll pay you the amount on 1.1.2016.';
	actual = sentencize( str );
	expected = [ 'The price is $1,000.00.', 'I\'ll pay you the amount on 1.1.2016.' ];
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'Please call me at 1-800-123-4567. I\'ll be waiting.';
	actual = sentencize( str );
	expected = [ 'Please call me at 1-800-123-4567.', 'I\'ll be waiting.' ];
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'Please call me at +1.800.123.4567. I\'ll be waiting.';
	actual = sentencize( str );
	expected = [ 'Please call me at +1.800.123.4567.', 'I\'ll be waiting.' ];
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	t.end();
});

tape( 'the function splits a string into an array of sentences (emails, URLs, etc.)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Please visit http://www.google.com. I\'ll be waiting.';
	actual = sentencize( str );
	expected = [ 'Please visit http://www.google.com.', 'I\'ll be waiting.' ];
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'You can email me at help@example.com if you have any questions. I am happy to help.';
	actual = sentencize( str );
	expected = [ 'You can email me at help@example.com if you have any questions.', 'I am happy to help.' ];
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'You can buy the book at http://www.amazon.com for $10.00. I highly recommend it.';
	actual = sentencize( str );
	expected = [ 'You can buy the book at http://www.amazon.com for $10.00.', 'I highly recommend it.' ];
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	t.end();
});

tape( 'the function splits a string into an array of sentences (unfinished last sentence)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'I can\'t believe it. I\'m so happy';
	expected = [ 'I can\'t believe it.', 'I\'m so happy' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	str = 'She\'s a great person. I\'m so happy to know her';
	expected = [ 'She\'s a great person.', 'I\'m so happy to know her' ];
	actual = sentencize( str );
	t.deepEqual( actual, expected, 'returns an array of sentences' );

	t.end();
});

tape( 'the function returns an empty array if provided an empty string', function test( t ) {
	var out = sentencize( '' );
	t.equal( isArray( out ), true, 'returns an array' );
	t.equal( out.length, 0, 'array length is zero' );
	t.end();
});
