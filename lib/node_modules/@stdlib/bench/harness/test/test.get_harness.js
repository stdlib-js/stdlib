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
var proxyquire = require( 'proxyquire' );
var noop = require( '@stdlib/utils/noop' );
var getHarness = require( './../lib/get_harness.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getHarness, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function, which is cached and returned for subsequent calls', function test( t ) {
	var getHarness;
	var harness;
	var v;

	getHarness = proxyquire( './../lib/get_harness.js', {} );

	t.notEqual( getHarness.cached, true, 'does not have a cached harness' );

	harness = getHarness( {}, noop );
	t.strictEqual( typeof harness, 'function', 'returns a function' );

	t.strictEqual( getHarness.cached, true, 'has a cached harness' );

	v = getHarness( {} );
	t.strictEqual( v, harness, 'returns cached value' );

	v = getHarness();
	t.strictEqual( v, harness, 'returns cached value' );

	t.end();
});
