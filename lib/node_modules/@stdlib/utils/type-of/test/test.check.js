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
var check = require( './../lib/check.js' );


// FUNCTIONS //

function noop() {}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof check, 'function', 'export is a function' );
	t.end();
});

tape( 'the function returns `true` if the built-in `typeof` operator returns `\'function\'` when operating on a regular expression', function test( t ) {
	var check = proxyquire( './../lib/check.js', {
		'./fixtures/re.js': noop
	});

	t.equal( check(), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if the built-in `typeof` operator returns `\'object\'` when operating on a typed array', function test( t ) {
	var check = proxyquire( './../lib/check.js', {
		'./fixtures/typedarray.js': {}
	});

	t.equal( check(), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if the built-in `typeof` operator returns `\'function\'` when operating on a node list', function test( t ) {
	var check = proxyquire( './../lib/check.js', {
		'./fixtures/nodelist.js': noop
	});

	t.equal( check(), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if the built-in `typeof` operator behaves according to specification', function test( t ) {
	var check = proxyquire( './../lib/check.js', {
		'./fixtures/re.js': {}, // rough proxy, as should return same result
		'./fixtures/typedarray.js': noop, // rough proxy, as should return same result
		'./fixtures/nodelist.js': {} // rough proxy, as should return same result
	});

	t.equal( check(), false, 'returns false' );
	t.end();
});
