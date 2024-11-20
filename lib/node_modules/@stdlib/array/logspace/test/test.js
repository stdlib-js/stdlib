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
var logspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not a numeric value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logspace( value, 10 );
		};
	}
});

tape( 'the function throws an error if the second argument is not a numeric value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logspace( 0, value );
		};
	}
});

tape( 'the function throws an error if the `length` value is not a numeric value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			logspace( 0, 10, value );
		};
	}
});

tape( 'the function returns a logarithmically spaced array', function test( t ) {
	var expected;
	var actual;
	var a;
	var b;

	a = 0;
	b = 3;

	// Default behavior:
	actual = logspace( a, b );
	t.strictEqual( actual.length, 10 );
	t.strictEqual( actual[0], 1 );
	t.strictEqual( actual[actual.length-1], 1000 );

	// Specify the length:
	actual = logspace( a, b, 10 );
	t.strictEqual( actual.length, 10 );
	t.strictEqual( actual[0], 1 );
	t.strictEqual( actual[actual.length-1], 1000 );

	// Verify correct values:
	actual = logspace( a, b, 4 );
	expected = [ 1, 10, 100, 1000 ];

	t.deepEqual( actual, expected );

	// Decrement:
	actual = logspace( b, a, 4 );
	expected = [ 1000, 100, 10, 1 ];

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'if the length is set to `0`, the function returns an empty array', function test( t ) {
	t.deepEqual( logspace(0, 10, 0), [] );
	t.end();
});
