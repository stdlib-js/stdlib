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

var fs = require( 'fs' );
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var readDir = require( './../lib/sync.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof readDir, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function reads a directory', opts, function test( t ) {
	var expected;
	var actual;

	expected = fs.readdirSync( __dirname );
	actual = readDir( __dirname );

	t.deepEqual( expected, actual, 'returns directory contents' );

	t.end();
});

tape( 'if the function encounters an error, the function returns the error', opts, function test( t ) {
	var out = readDir( 'beepboopbapbop' );

	t.equal( out instanceof Error, true, 'returns an error' );

	t.end();
});
