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
var reRegExp = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reRegExp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a regular expression that detects a regular expression string', function test( t ) {
	var values;
	var RE;
	var i;

	RE = reRegExp();

	values = [
		'/beep/',
		'/(?:)/',
		'/whatever/',
		'/this/g',
		'/that/i',
		'/again/mgi',
		'/^.*$/ig',
		'/^\\/([^\\/]+)\\/(.*)$/',
		'/^\\/((?:\\\\\/|[^\\/])+)\\/(.*)$/' // eslint-disable-line no-useless-escape
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( RE.test( values[i] ), true, values[i] );
	}
	t.end();
});

tape( 'the function returns a regular expression that detects a non-regular expression string', function test( t ) {
	var values;
	var RE;
	var i;

	RE = reRegExp();

	values = [
		'beep',
		'5',
		'',
		'/dir',
		'/dir//',
		'/dir/goo'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( RE.test( values[i] ), false, values[i] );
	}
	t.end();
});
