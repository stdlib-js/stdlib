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
var Uint8Array = require( '@stdlib/array/uint8' );
var IS_BIG_ENDIAN = require( './../lib' );


// TESTS //

tape( 'main export is a boolean', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof IS_BIG_ENDIAN, 'boolean', 'main export is a boolean' );
	t.end();
});

tape( 'the boolean is `true` if an environment is big endian', function test( t ) {
	var IS_BIG_ENDIAN = proxyquire( './../lib/main.js', {
		'./ctors.js': {
			'uint8': Foo
		}
	});

	t.equal( IS_BIG_ENDIAN, true, 'is big endian' );

	t.end();

	// Mock big endian byte order, where least significant bits come last...
	function Foo() {
		return new Uint8Array( [ 18, 52 ] );
	}
});

tape( 'the boolean is `false` if an environment is not big endian (e.g., little endian)', function test( t ) {
	var IS_BIG_ENDIAN = proxyquire( './../lib/main.js', {
		'./ctors.js': {
			'uint8': Foo
		}
	});

	t.equal( IS_BIG_ENDIAN, false, 'is not big endian' );
	t.end();

	// Mock big endian byte order, where most significant bits are last...
	function Foo() {
		return new Uint8Array( [ 52, 18 ] );
	}
});
