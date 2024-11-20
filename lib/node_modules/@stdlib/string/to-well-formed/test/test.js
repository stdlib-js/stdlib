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
var str2wellformed = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof str2wellformed, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a well-formed string by replacing lone surrogates with Unicode replacement character', function test( t ) {
	t.equal( str2wellformed(''), '', 'returns an empty string for an empty input' );
	t.equal( str2wellformed('\uDBFF'), '�', 'replaces lone high surrogate with Unicode replacement character' );
	t.equal( str2wellformed('\uDBFFFF\uDBFF'), '�FF�', 'replaces multiple lone surrogates with Unicode replacement characters' );
	t.equal( str2wellformed('Hello \uDBFFWorld'), 'Hello �World', 'replaces lone high surrogate in a string with Unicode replacement character' );
	t.equal( str2wellformed('\uDBFF'), '�', 'replaces lone high surrogate with Unicode replacement character' );
	t.equal( str2wellformed('\uDBFFFFF'), '�FFF', 'replaces lone high surrogate with Unicode replacement character' );
	t.equal( str2wellformed('\uDC00\uDC00'), '��', 'replaces lone low surrogate with Unicode replacement character' );
	t.equal( str2wellformed('5\uDBFF'), '5�', 'replaces lone high surrogate with Unicode replacement character' );

	t.end();
});
