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
var isFunction = require( '@stdlib/assert/is-function' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var grapheme = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof grapheme, 'object', 'main export is an object' );
	t.end();
});

tape( 'the exported object contains a `emojiProperty` method which is a function', function test( t ) {
	t.equal( isFunction( grapheme.emojiProperty ), true, 'has function' );
	t.end();
});

tape( 'the exported object contains a `breakProperty` method which is a function', function test( t ) {
	t.equal( isFunction( grapheme.breakProperty ), true, 'has function' );
	t.end();
});

tape( 'the exported object contains a `breakType` method which is a function', function test( t ) {
	t.equal( isFunction( grapheme.breakType ), true, 'has function' );
	t.end();
});

tape( 'the exported object contains a `constants` object mapping break type names to integers', function test( t ) {
	t.equal( isPlainObject( grapheme.constants ), true, 'is an object' );
	t.end();
});
