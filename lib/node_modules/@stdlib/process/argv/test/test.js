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

var proc = require( 'process' );
var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var ARGV = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is an object', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ARGV, 'object', 'main export is an object' );
	t.end();
});

tape( 'the export is an alias for `process.argv`', opts, function test( t ) {
	t.strictEqual( ARGV, proc.argv, 'is an alias' );
	t.end();
});

tape( 'the export is an array of strings', opts, function test( t ) {
	t.strictEqual( isStringArray( ARGV ), true, 'is an array of strings' );
	t.end();
});
