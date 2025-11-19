/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var headerDir = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a string', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof headerDir, 'string', 'main export is a string' );
	t.end();
});

tape( 'the exported value corresponds to the package directory containing header files', opts, function test( t ) {
	var dir = resolve( __dirname, '..', 'include' );
	t.strictEqual( headerDir, dir, 'exports expected value' );
	t.end();
});
