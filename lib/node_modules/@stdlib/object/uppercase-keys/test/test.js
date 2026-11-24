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
var uppercaseKeys = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof uppercaseKeys, 'function', 'main export is a function' );
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
		void 0,
		true
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			uppercaseKeys( value );
		};
	}
});

tape( 'the function uppercases keys from a source object, mapping the transformed keys to a destination object having the same key values', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {
		'': 3.14,
		'Beep': 0,
		'a': 1,
		'b': 2,
		'c': 3,
		'd': 4,
		'e': 5
	};

	obj2 = uppercaseKeys( obj1 );

	expected = {
		'': 3.14,
		'BEEP': 0,
		'A': 1,
		'B': 2,
		'C': 3,
		'D': 4,
		'E': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function ignores inherited properties', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function Foo() {
		this.a = 1;
		this.b = 2;
		this.c = 3;
		this.d = 4;
		this.e = 5;
		return this;
	}

	Foo.prototype.f = 6;
	Foo.prototype.g = 7;

	obj1 = new Foo();

	obj2 = uppercaseKeys( obj1 );

	expected = {
		'A': 1,
		'B': 2,
		'C': 3,
		'D': 4,
		'E': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function accepts non-plain objects', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = [ 0, 1, 2, 3, 4, 5 ];

	obj2 = uppercaseKeys( obj1 );

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
		'a': [ 1 ],
		'b': [ 2 ],
		'c': [ 3 ],
		'd': [ 4 ],
		'e': [ 5 ]
	};

	obj2 = uppercaseKeys( obj1 );

	expected = {
		'A': obj1.a,
		'B': obj1.b,
		'C': obj1.c,
		'D': obj1.d,
		'E': obj1.e
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.strictEqual( obj2.A, obj1.a, 'returns shallow copy' );
	t.strictEqual( obj2.B, obj1.b, 'returns shallow copy' );
	t.strictEqual( obj2.C, obj1.c, 'returns shallow copy' );
	t.strictEqual( obj2.D, obj1.d, 'returns shallow copy' );
	t.strictEqual( obj2.E, obj1.e, 'returns shallow copy' );

	t.end();
});

tape( 'if provided an empty object, the function returns an empty object', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {};
	expected = {};

	obj2 = uppercaseKeys( obj1 );

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});
