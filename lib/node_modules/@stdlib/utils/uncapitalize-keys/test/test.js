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
var uncapitalizeKeys = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof uncapitalizeKeys, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a source object argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		undefined,
		true
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			uncapitalizeKeys( value );
		};
	}
});

tape( 'the function lowercases the first letter of each key from a source object, mapping the transformed keys to a destination object having the same key values', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {
		'': 0,
		'beep': 3.14,
		' Boop': -1.0,
		'AA': 1,
		'BB': 2,
		'CC': 3,
		'DD': 4,
		'EE': 5
	};

	obj2 = uncapitalizeKeys( obj1 );

	expected = {
		'': 0,
		'beep': 3.14,
		' Boop': -1.0,
		'aA': 1,
		'bB': 2,
		'cC': 3,
		'dD': 4,
		'eE': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function ignores inherited properties', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function Foo() {
		this.AA = 1;
		this.BB = 2;
		this.CC = 3;
		this.DD = 4;
		this.EE = 5;
		return this;
	}

	Foo.prototype.FF = 6;
	Foo.prototype.GG = 7;

	obj1 = new Foo();

	obj2 = uncapitalizeKeys( obj1 );

	expected = {
		'aA': 1,
		'bB': 2,
		'cC': 3,
		'dD': 4,
		'eE': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function accepts non-plain objects', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = [ 0, 1, 2, 3, 4, 5 ];

	obj2 = uncapitalizeKeys( obj1 );

	expected = {
		'0': 0,
		'1': 1,
		'2': 2,
		'3': 3,
		'4': 4,
		'5': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function shallow copies key values', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {
		'AA': [ 1 ],
		'BB': [ 2 ],
		'CC': [ 3 ],
		'DD': [ 4 ],
		'EE': [ 5 ]
	};

	obj2 = uncapitalizeKeys( obj1 );

	expected = {
		'aA': obj1.AA,
		'bB': obj1.BB,
		'cC': obj1.CC,
		'dD': obj1.DD,
		'eE': obj1.EE
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.strictEqual( obj2.aA, obj1.AA, 'returns shallow copy' );
	t.strictEqual( obj2.bB, obj1.BB, 'returns shallow copy' );
	t.strictEqual( obj2.cC, obj1.CC, 'returns shallow copy' );
	t.strictEqual( obj2.dD, obj1.DD, 'returns shallow copy' );
	t.strictEqual( obj2.eE, obj1.EE, 'returns shallow copy' );

	t.end();
});

tape( 'if provided an empty object, the function returns an empty object', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {};
	expected = {};

	obj2 = uncapitalizeKeys( obj1 );

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});
