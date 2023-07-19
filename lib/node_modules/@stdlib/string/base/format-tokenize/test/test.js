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
var formatTokenize = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof formatTokenize, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function tokenizes a string', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello %s!';
	expected = [
		'Hello ',
		{
			'flags': '',
			'mapping': void 0,
			'width': void 0,
			'precision': void 0,
			'specifier': 's'
		},
		'!'
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	str = 'Current year: %d';
	expected = [
		'Current year: ',
		{
			'flags': '',
			'mapping': void 0,
			'width': void 0,
			'precision': void 0,
			'specifier': 'd'
		}
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function tokenizes a string (extracting flags)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello %+s!';
	expected = [
		'Hello ',
		{
			'flags': '+',
			'mapping': void 0,
			'width': void 0,
			'precision': void 0,
			'specifier': 's'
		},
		'!'
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	str = 'Hello %-+s!';
	expected = [
		'Hello ',
		{
			'flags': '-+',
			'mapping': void 0,
			'width': void 0,
			'precision': void 0,
			'specifier': 's'
		},
		'!'
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	str = 'Hello %#+s!';
	expected = [
		'Hello ',
		{
			'flags': '#+',
			'mapping': void 0,
			'width': void 0,
			'precision': void 0,
			'specifier': 's'
		},
		'!'
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function tokenizes a string (extracting positional arguments)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello %1$s!';
	expected = [
		'Hello ',
		{
			'flags': '',
			'mapping': 1,
			'width': void 0,
			'precision': void 0,
			'specifier': 's'
		},
		'!'
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	str = 'Hello %1$s %2$s!';
	expected = [
		'Hello ',
		{
			'flags': '',
			'mapping': 1,
			'width': void 0,
			'precision': void 0,
			'specifier': 's'
		},
		' ',
		{
			'flags': '',
			'mapping': 2,
			'width': void 0,
			'precision': void 0,
			'specifier': 's'
		},
		'!'
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function tokenizes a string (extracting width)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Hello %5s!';
	expected = [
		'Hello ',
		{
			'flags': '',
			'mapping': void 0,
			'width': '5',
			'precision': void 0,
			'specifier': 's'
		},
		'!'
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	str = 'Hello %05s!';
	expected = [
		'Hello ',
		{
			'flags': '0',
			'mapping': void 0,
			'width': '5',
			'precision': void 0,
			'specifier': 's'
		},
		'!'
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	str = 'Hello %5d!';
	expected = [
		'Hello ',
		{
			'flags': '',
			'mapping': void 0,
			'width': '5',
			'precision': void 0,
			'specifier': 'd'
		},
		'!'
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	str = 'Hello %05d!';
	expected = [
		'Hello ',
		{
			'flags': '0',
			'mapping': void 0,
			'width': '5',
			'precision': void 0,
			'specifier': 'd'
		},
		'!'
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});

tape( 'the function tokenizes a string (extracting precision)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = 'Pi: ~%.3f';
	expected = [
		'Pi: ~',
		{
			'flags': '',
			'mapping': void 0,
			'width': void 0,
			'precision': '3',
			'specifier': 'f'
		}
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	str = 'Pi: ~%.3g';
	expected = [
		'Pi: ~',
		{
			'flags': '',
			'mapping': void 0,
			'width': void 0,
			'precision': '3',
			'specifier': 'g'
		}
	];
	actual = formatTokenize( str );
	t.deepEqual( actual, expected, 'deep equal' );

	t.end();
});
