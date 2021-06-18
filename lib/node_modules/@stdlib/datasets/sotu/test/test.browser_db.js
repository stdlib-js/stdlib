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
var isObjectArray = require( '@stdlib/assert/is-plain-object-array' );
var db = require( './../lib/browser_db.js' );


// TESTS //

tape( 'main export is an object array', function test( t ) {
	t.ok( true, __filename );
	t.equal( isObjectArray( db ), true, 'main export is an object array' );
	t.end();
});

tape( 'as of 2021, export has a length greater than or equal to 233', function test( t ) {
	t.equal( db.length >= 233, true, 'has length greater than or equal to 233 (as of 2021)' );
	t.end();
});
