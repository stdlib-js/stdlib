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
var capitalizeKeys = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof capitalizeKeys, 'function', 'main export is a function' );
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
			capitalizeKeys( value );
		};
	}
});

tape( 'the function uppercases the first letter of each key from a source object, mapping the transformed keys to a destination object having the same key values', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {
		'': 0,
		'Beep': 3.14,
		' boop': -1.0,
		'aa': 1,
		'bb': 2,
		'cc': 3,
		'dd': 4,
		'ee': 5
	};

	obj2 = capitalizeKeys( obj1 );

	expected = {
		'': 0,
		'Beep': 3.14,
		' boop': -1.0,
		'Aa': 1,
		'Bb': 2,
		'Cc': 3,
		'Dd': 4,
		'Ee': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function ignores inherited properties', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	function Foo() {
		this.aa = 1;
		this.bb = 2;
		this.cc = 3;
		this.dd = 4;
		this.ee = 5;
		return this;
	}

	Foo.prototype.ff = 6;
	Foo.prototype.gg = 7;

	obj1 = new Foo();

	obj2 = capitalizeKeys( obj1 );

	expected = {
		'Aa': 1,
		'Bb': 2,
		'Cc': 3,
		'Dd': 4,
		'Ee': 5
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});

tape( 'the function accepts non-plain objects', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = [ 0, 1, 2, 3, 4, 5 ];

	obj2 = capitalizeKeys( obj1 );

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
		'aa': [ 1 ],
		'bb': [ 2 ],
		'cc': [ 3 ],
		'dd': [ 4 ],
		'ee': [ 5 ]
	};

	obj2 = capitalizeKeys( obj1 );

	expected = {
		'Aa': obj1.aa,
		'Bb': obj1.bb,
		'Cc': obj1.cc,
		'Dd': obj1.dd,
		'Ee': obj1.ee
	};

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.strictEqual( obj2.Aa, obj1.aa, 'returns shallow copy' );
	t.strictEqual( obj2.Bb, obj1.bb, 'returns shallow copy' );
	t.strictEqual( obj2.Cc, obj1.cc, 'returns shallow copy' );
	t.strictEqual( obj2.Dd, obj1.dd, 'returns shallow copy' );
	t.strictEqual( obj2.Ee, obj1.ee, 'returns shallow copy' );

	t.end();
});

tape( 'if provided an empty object, the function returns an empty object', function test( t ) {
	var expected;
	var obj1;
	var obj2;

	obj1 = {};
	expected = {};

	obj2 = capitalizeKeys( obj1 );

	t.deepEqual( obj2, expected, 'returns expected object' );
	t.end();
});
