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
var polyfill = require( './../lib/polyfill.js' );
var createObject = require( './../lib/detect.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof createObject, 'function', 'main export is a function' );
	t.end();
});

tape( 'if an environment supports a native object create method, the function returns the native method', function test( t ) {
	var createObject = proxyquire( './../lib/detect.js', {
		'./native.js': create
	});

	t.strictEqual( createObject, create, 'returns native method' );
	t.end();

	function create() {
		return {};
	}
});

tape( 'if an environment lack supports for a native object create method, the function returns a polyfill', function test( t ) {
	var createObject = proxyquire( './../lib/detect.js', {
		'./native.js': false
	});

	t.strictEqual( createObject, polyfill, 'returns polyfill' );
	t.end();
});
