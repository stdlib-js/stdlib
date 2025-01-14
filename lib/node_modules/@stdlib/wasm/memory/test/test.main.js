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
var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var hasProp = require( '@stdlib/assert/has-property' );
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var Memory = require( './../lib/main.js' );


// VARIABLES //

var opts = {
	'skip': !hasWebAssemblySupport()
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Memory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor which returns a memory instance', opts, function test( t ) {
	var mem = new Memory({
		'initial': 0
	});
	t.strictEqual( mem instanceof Memory, true, 'returns expected value' );
	t.end();
});

tape( 'the constructor throws an error if not provided a descriptor argument', opts, function test( t ) {
	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		var mem = new Memory(); // eslint-disable-line no-unused-vars
	}
});

tape( 'the constructor throws an error if not provided an invalid descriptor argument', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Memory( value );
		};
	}
});

tape( 'the constructor throws an error if `initial` exceeds `maximum`', opts, function test( t ) {
	var values;
	var i;

	values = [
		2,
		3,
		4,
		5
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return new Memory({
				'initial': value,
				'maximum': 1
			});
		};
	}
});

tape( 'a memory instance has a `buffer` property which returns an associated `ArrayBuffer`', opts, function test( t ) {
	var mem = new Memory({
		'initial': 0
	});
	t.strictEqual( hasProp( mem, 'buffer' ), true, 'returns expected value' );
	t.strictEqual( isArrayBuffer( mem.buffer ), true, 'returns expected value' );
	t.end();
});
