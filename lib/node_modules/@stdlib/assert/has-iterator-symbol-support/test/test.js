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
var Symbol = require( '@stdlib/symbol/ctor' );
var detect = require( './../lib' );


// VARIABLES //

var hasIteratorSymbol = ( typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' );


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

tape( 'if `Symbol.iterator` is supported, detection result is `true`', function test( t ) {
	if ( hasIteratorSymbol ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	t.end();
});

tape( 'the function guards against a `Symbol` global variable which does not produce `symbols`', function test( t ) {
	var detect = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/ctor': mock
	});
	t.strictEqual( detect(), false, 'detection result is `false`' );
	t.end();

	function mock() {
		return {};
	}
});
