/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var objectKeys = require( '@stdlib/utils/keys' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var table = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof table, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an object', opts, function test( t ) {
	var tbl = table();
	t.equal( isPlainObject( tbl ), true, 'returns an object' );
	t.end();
});

tape( 'the returned object has keys', opts, function test( t ) {
	var tbl = table();
	t.equal( objectKeys( tbl ).length > 0, true, 'has keys' );
	t.end();
});

tape( 'the returned object maps emoji codes to pictographs', function test( t ) {
	var tbl = table();
	t.equal( tbl[ ':smile:' ], '😄', 'returns expected value' );
	t.equal( tbl[ ':unicorn:' ], '🦄', 'returns expected value' );
	t.end();
});
