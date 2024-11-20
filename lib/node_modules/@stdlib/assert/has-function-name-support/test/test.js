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
var detect = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof detect, 'function', 'main export is a function' );
	t.end();
});

tape( 'feature detection result is a boolean', function test( t ) {
	t.strictEqual( typeof detect(), 'boolean', 'detection result is a boolean' );
	t.end();
});

tape( 'if functions have a `name` property, detection result is `true`', function test( t ) {
	var detect;
	var stub;

	stub = {};
	stub.name = 'foo';

	detect = proxyquire( './../lib/main.js', {
		'./foo.js': stub
	});

	t.strictEqual( detect(), true, 'detection result is `true`' );
	t.end();
});

tape( 'if functions do not have a `name` property, detection result is `false`', function test( t ) {
	var detect;
	var stub;

	stub = {};
	stub.name = null;

	detect = proxyquire( './../lib/main.js', {
		'./foo.js': stub
	});

	t.strictEqual( detect(), false, 'detection result is `false`' );
	t.end();
});
