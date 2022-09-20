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

var join = require( 'path' ).join;
var tape = require( 'tape' );
var tryRequire = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof tryRequire, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a resolved module', function test( t ) {
	var out;

	// Warning: this is not resolving the current directory, but from the source directory!
	out = tryRequire( './../lib' );
	t.strictEqual( out, tryRequire, 'returns resolved module' );

	out = tryRequire( './../lib/main.js' );
	t.strictEqual( out, tryRequire, 'returns resolved module' );

	t.end();
});

tape( 'the function returns an error if unable to resolve a module', function test( t ) {
	var out = tryRequire( '_abcdefghijklmnopqrstuvwxyz12345678999999999999_' );
	t.strictEqual( out instanceof Error, true, 'returns an error' );
	t.end();
});

tape( 'the function handles the throwing of literals (string)', function test( t ) {
	var out = tryRequire( join( __dirname, './fixtures/string.js' ) );
	t.strictEqual( out instanceof Error, true, 'returns an error' );
	t.strictEqual( out.message, 'beep', 'sets error message' );
	t.end();
});

tape( 'the function handles the throwing of literals (number)', function test( t ) {
	var out = tryRequire( join( __dirname, './fixtures/number.js' ) );
	t.strictEqual( out instanceof Error, true, 'returns an error' );
	t.strictEqual( out.message, '3.14', 'sets error message' );
	t.end();
});

tape( 'the function handles the throwing of literals (boolean)', function test( t ) {
	var out = tryRequire( join( __dirname, './fixtures/boolean.js' ) );
	t.strictEqual( out instanceof Error, true, 'returns an error' );
	t.strictEqual( out.message, 'false', 'sets error message' );
	t.end();
});

tape( 'the function handles the throwing of literals (object)', function test( t ) {
	var out = tryRequire( join( __dirname, './fixtures/object.js' ) );
	t.strictEqual( out instanceof Error, true, 'returns an error' );
	t.strictEqual( out.message, '{"beep":"boop"}', 'sets error message' );
	t.end();
});
