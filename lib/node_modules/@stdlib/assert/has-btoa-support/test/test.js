/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var string2buffer = require( '@stdlib/buffer/from-string' );
var detect = require( './../lib' );


// VARIABLES //

var hasBtoa = ( typeof btoa === 'function' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof detect, 'function', 'main export is a function' );
	t.end();
});

tape( 'feature detection result is a boolean', function test( t ) {
	t.strictEqual( typeof detect(), 'boolean', 'returns expected value' );
	t.end();
});

tape( 'if `btoa` is supported, detection result is `true`', function test( t ) {
	var mocked;
	if ( hasBtoa ) {
		t.strictEqual( detect(), true, 'returns expected value' );
	} else {
		t.strictEqual( detect(), false, 'returns expected value' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./btoa.js': Mock
	});
	t.strictEqual( mocked(), true, 'returns expected value' );

	t.end();

	function Mock( ascii ) {
		return string2buffer( ascii, 'utf8' ).toString( 'base64' );
	}
});

tape( 'if `btoa` is not supported, detection result is `false`', function test( t ) {
	var mocked;
	if ( hasBtoa ) {
		t.strictEqual( detect(), true, 'returns expected value' );
	} else {
		t.strictEqual( detect(), false, 'returns expected value' );
	}
	mocked = proxyquire( './../lib/main.js', {
		'./btoa.js': {}
	});
	t.strictEqual( mocked(), false, 'returns expected value' );

	mocked = proxyquire( './../lib/main.js', {
		'./btoa.js': Mock1
	});
	t.strictEqual( mocked(), false, 'returns expected value' );

	mocked = proxyquire( './../lib/main.js', {
		'./btoa.js': Mock2
	});
	t.strictEqual( mocked(), false, 'returns expected value' );

	t.end();

	function Mock1() {
		return 'foo';
	}

	function Mock2() {
		throw new Error( 'beep' );
	}
});
