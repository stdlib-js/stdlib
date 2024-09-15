/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var atob = require( './../lib/polyfill.js' ); // eslint-disable-line stdlib/no-redeclare


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof atob, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function decodes a Base64 encoded string', function test( t ) {
	var out;
	var str;

	str = 'SGVsbG8sIHdvcmxk';
	out = atob( str );
	t.strictEqual( out, 'Hello, world', 'returns expected value' );

	t.end();
});

tape( 'the function returns `null` if provided a string containing non-ASCII characters', function test( t ) {
	var out;
	var str;

	str = 'SGVsbG8s ∏⨖∵😃 IHdvcmxk';
	out = atob( str );
	t.strictEqual( out, null, 'returns expected value' );

	t.end();
});
