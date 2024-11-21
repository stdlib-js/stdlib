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
var reColorHexadecimal = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reColorHexadecimal, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a regular expression to match full hexadecimal colors', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( reColorHexadecimal.REGEXP instanceof RegExp, true, '`REGEXP` export is a regular expression' );
	t.end();
});

tape( 'attached to the main export is a regular expression to match shorthand hexadecimal colors', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( reColorHexadecimal.REGEXP_SHORTHAND instanceof RegExp, true, '`REGEXP_SHORTHAND` export is a regular expression' );
	t.end();
});

tape( 'attached to the main export is a regular expression to match shorthand or full length hexadecimal colors', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( reColorHexadecimal.REGEXP_EITHER instanceof RegExp, true, '`REGEXP_EITHER` export is a regular expression' );
	t.end();
});

tape( 'the regular expression matches full length hexadecimal colors', function test( t ) {
	var values;
	var i;

	values = [
		'ffffff',
		'000000',
		'474747',
		'ababab',
		'e0e0e0',
		'd7d4bd',
		'FFFFFF',
		'EEEECA',
		'EAeac4'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( reColorHexadecimal.REGEXP.test( values[ i ] ), true, 'matches when provided '+values[i] );
	}
	t.end();
});

tape( 'the regular expression does not match non-full length hexadecimal colors', function test( t ) {
	var values;
	var i;

	values = [
		'fffff',
		'0000000',
		'4747',
		'ababaz',
		'beep',
		'boop',
		'ggg',
		'GGGGGG',
		'A7bb-1',
		'######',
		'#aaaaaa'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( reColorHexadecimal.REGEXP.test( values[ i ] ), false, 'does not match when provided '+values[i] );
	}
	t.end();
});

tape( 'the shorthand regular expression matches shorthand hexadecimal colors', function test( t ) {
	var values;
	var i;

	values = [
		'fff',
		'000',
		'474',
		'aba',
		'e0e',
		'd7e',
		'FFF',
		'ACe'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( reColorHexadecimal.REGEXP_SHORTHAND.test( values[ i ] ), true, 'matches when provided '+values[i] );
	}
	t.end();
});

tape( 'the shorthand regular expression does not match non-shorthand hexadecimal colors', function test( t ) {
	var values;
	var i;

	values = [
		'ff',
		'0000',
		'474747',
		'ababaa',
		'ffffff',
		'boop',
		'ggg',
		'GGG',
		'A-b',
		'###',
		'#aaa'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( reColorHexadecimal.REGEXP_SHORTHAND.test( values[ i ] ), false, 'does not match when provided '+values[i] );
	}
	t.end();
});

tape( 'the either regular expression matches either full length or shorthand hexadecimal colors', function test( t ) {
	var values;
	var i;

	values = [
		'ffffff',
		'fff',
		'000000',
		'000',
		'474747',
		'474',
		'ababab',
		'aba',
		'e0e0e0',
		'e0e',
		'd7ebb3',
		'd7e',
		'FFFFFF',
		'FFF',
		'ACebb5',
		'ACe'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( reColorHexadecimal.REGEXP_EITHER.test( values[ i ] ), true, 'matches when provided '+values[i] );
	}
	t.end();
});

tape( 'the either regular expression does not match non-shorthand or non-full length hexadecimal colors', function test( t ) {
	var values;
	var i;

	values = [
		'fffffz',
		'fffP',
		'000000)',
		'00-',
		'474z47',
		'#474',
		'abab',
		'aba2',
		'e0e0e0e',
		'##e0e',
		'beeper',
		'zzz',
		'FFFFFFF',
		'FFFF',
		'ACebb5-',
		'A-Ce'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( reColorHexadecimal.REGEXP_EITHER.test( values[ i ] ), false, 'does not match when provided '+values[i] );
	}
	t.end();
});
