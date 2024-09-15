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
var hasMethod = require( '@stdlib/assert/is-method-in' );
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

tape( 'a memory instance has a `grow` method for increasing the underlying memory size', opts, function test( t ) {
	var mem = new Memory({
		'initial': 0
	});
	t.strictEqual( hasProp( mem, 'grow' ), true, 'returns expected value' );
	t.strictEqual( hasMethod( mem, 'grow' ), true, 'returns expected value' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a memory instance', opts, function test( t ) {
	var values;
	var mem;
	var i;

	mem = new Memory({
		'initial': 0
	});

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return mem.grow.call( value, 1 );
		};
	}
});

tape( 'the method throws an error if provided a requested size exceeds the maximum allowed memory size', opts, function test( t ) {
	var values;
	var mem;
	var i;

	mem = new Memory({
		'initial': 0,
		'maximum': 1
	});

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
			return mem.grow( value );
		};
	}
});

tape( 'the method grows memory and returns the size of the previous `ArrayBuffer`', opts, function test( t ) {
	var page;
	var buf1;
	var buf2;
	var mem;
	var out;

	page = 64 * 1024;

	mem = new Memory({
		'initial': 1
	});
	buf1 = mem.buffer;
	t.strictEqual( isArrayBuffer( buf1 ), true, 'returns expected value' );
	t.strictEqual( buf1.byteLength, page, 'returns expected value' );

	out = mem.grow( 1 );
	t.strictEqual( out, 1, 'returns expected value' );

	buf2 = mem.buffer;
	t.notEqual( buf1, buf2, 'returns expected value' );
	t.strictEqual( buf1.byteLength, 0, 'returns expected value' );
	t.strictEqual( buf2.byteLength, 2*page, 'returns expected value' );

	t.end();
});
