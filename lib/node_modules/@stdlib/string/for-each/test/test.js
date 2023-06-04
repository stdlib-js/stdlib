/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var noop = require( '@stdlib/utils/noop' );
var forEach = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof forEach, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		[],
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a function to invoke', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			forEach( 'dummy', value );
		};
	}
});

tape( 'if provided an empty string, the function never invokes a provided function', function test( t ) {
	var str = '';

	function foo() {
		t.fail( 'should not be invoked' );
	}

	forEach( str, foo );

	t.strictEqual( str, '', 'expected result' );
	t.end();
});

tape( 'the function returns the input string', function test( t ) {
	var str;
	var out;

	function foo() {
		t.pass( 'invoked provided function' );
	}

	str = 'dummy';

	out = forEach( str, foo );

	t.strictEqual( out, str, 'returns input string' );
	t.end();
});

tape( 'the function invokes a provided function for each character of the string', function test( t ) {
	var str;
	var out;

	str = 'dummy';
	out = [];

	function copy( value, index ) {
		out[ index ] = value;
	}

	forEach( str, copy );

	t.strictEqual( out.join( '' ), str, 'expected result' );
	t.end();
});

tape( 'the function invokes a provided function for each (visual) character of the string', function test( t ) {
	var str;
	var out;

	str = '\uD834\uDD1E';
	out = [];

	function copy( value, index ) {
		out[ index ] = value;
	}

	forEach( str, copy );

	t.strictEqual( out.join( '' ), '𝄞', 'expected result' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx;
	var str;

	/* eslint-disable no-unused-vars */
	function count( value ) {
		/* eslint-disable no-invalid-this */
		this.count += 1;
	}

	ctx = {
		'count': 0
	};
	str = 'dummy';

	forEach( str, count, ctx );

	t.strictEqual( ctx.count, str.length, 'expected result' );

	t.end();
});
