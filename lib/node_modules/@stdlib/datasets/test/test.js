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
var isArray = require( '@stdlib/assert/is-array' );
var isObjectArray = require( '@stdlib/assert/is-plain-object-array' );
var datasets = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof datasets, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns datasets', function test( t ) {
	var data = datasets( 'MONTH_NAMES_EN' );
	t.equal( isArray( data ), true, 'returns an array' );
	t.equal( data.length, 12, 'has length of 12' );
	t.end();
});

tape( 'the function supports dataset options', function tests( t ) {
	var data;
	var opts;

	opts = {
		'name': 'Barack Obama'
	};
	data = datasets( 'SOTU', opts );

	t.equal( isObjectArray( data ), true, 'returns an object array' );
	t.end();
});

tape( 'if provided an unrecognized or unsupported dataset name, the function throws an error', function test( t ) {
	t.throws( foo, RangeError, 'throws an error' );
	t.end();

	function foo() {
		datasets( 'beep_boop_beepity_boopity_123456789000' );
	}
});
