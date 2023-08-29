/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var BYTE_ORDER = require( './../lib' );


// TESTS //

tape( 'main export is a string', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BYTE_ORDER, 'string', 'main export is a string' );
	t.end();
});

tape( 'if the platform is little-endian, the value should be `little-endian`', function test( t ) {
	var BYTE_ORDER;

	BYTE_ORDER = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-little-endian': true,
		'@stdlib/assert/is-big-endian': false
	});
	t.equal( BYTE_ORDER, 'little-endian', 'returns expected value' );
	t.end();
});

tape( 'if the platform is big-endian, the value should be `big-endian`', function test( t ) {
	var BYTE_ORDER;

	BYTE_ORDER = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-little-endian': false,
		'@stdlib/assert/is-big-endian': true
	});
	t.equal( BYTE_ORDER, 'big-endian', 'returns expected value' );
	t.end();
});

tape( 'if the platform is both little-endian and big-endian, the value should be `mixed-endian`', function test( t ) {
	var BYTE_ORDER;

	BYTE_ORDER = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-little-endian': true,
		'@stdlib/assert/is-big-endian': true
	});
	t.equal( BYTE_ORDER, 'mixed-endian', 'returns expected value' );
	t.end();
});

tape( 'if the platform is neither little-endian nor big-endian, the value should be `unknown`', function test( t ) {
	var BYTE_ORDER;

	BYTE_ORDER = proxyquire( './../lib/main.js', {
		'@stdlib/assert/is-little-endian': false,
		'@stdlib/assert/is-big-endian': false
	});
	t.equal( BYTE_ORDER, 'unknown', 'returns expected value' );
	t.end();
});
