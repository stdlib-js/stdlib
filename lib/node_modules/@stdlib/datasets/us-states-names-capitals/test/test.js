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
var objectKeys = require( '@stdlib/utils/keys' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var isObject = require( '@stdlib/assert/is-plain-object' );
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
	t.equal( isObject( tbl ), true, 'returns an object' );
	t.end();
});

tape( 'the returned object has 50 keys', opts, function test( t ) {
	var tbl = table();
	t.equal( objectKeys( tbl ).length, 50, 'has 50 keys' );
	t.end();
});

tape( 'the returned object maps US state names to state capitals', opts, function test( t ) {
	var tbl = table();
	t.equal( tbl[ 'Missouri' ], 'Jefferson City', 'returns capital of Missouri' );
	t.equal( tbl[ 'New Jersey' ], 'Trenton', 'returns capital of New Jersey' );
	t.equal( tbl[ 'California' ], 'Sacramento', 'returns capital of California' );
	t.end();
});
