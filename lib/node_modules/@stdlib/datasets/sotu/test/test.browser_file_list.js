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
var copy = require( '@stdlib/utils/copy' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var FILES = require( './../lib/browser_file_list.js' );


// TESTS //

tape( 'main export is a string array', function test( t ) {
	t.ok( true, __filename );
	t.equal( isStringArray( FILES ), true, 'main export is a string array' );
	t.end();
});

tape( 'as of 2019, the array has a length greater than or equal to 231', function test( t ) {
	t.equal( FILES.length >= 231, true, 'has length greater than or equal to 231 (as of 2019)' );
	t.end();
});

tape( 'the array is sorted', function test( t ) {
	var arr = copy( FILES );
	arr.sort();
	t.deepEqual( FILES, arr, 'array is sorted' );
	t.end();
});
