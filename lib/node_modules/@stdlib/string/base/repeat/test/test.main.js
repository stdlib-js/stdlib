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
var HAS_BUILTIN = require( './../lib/has_builtin.js' );
var repeat = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': !HAS_BUILTIN
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof repeat, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function repeats an input string a specified number of times', opts, function test( t ) {
	var str;

	str = repeat( 'a', 5 );
	t.strictEqual( str, 'aaaaa', 'repeated 5 times' );

	str = repeat( 'beep', 2 );
	t.strictEqual( str, 'beepbeep', 'repeated 2 times' );

	t.end();
});

tape( 'if provided an empty string, the function returns an empty string', opts, function test( t ) {
	t.strictEqual( repeat( '', 100 ), '', 'returns an empty string' );
	t.end();
});

tape( 'if repeat number is 0, the function returns an empty string', opts, function test( t ) {
	t.strictEqual( repeat( 'a', 0 ), '', 'returns empty string' );
	t.end();
});
