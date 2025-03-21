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
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var objectFromEntries = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof objectFromEntries, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array of arrays', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		void 0,
		function noop() {},
		[],
		[ [], {} ],
		[ {}, {} ],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			objectFromEntries( value );
		};
	}
});

tape( 'the function returns an object created from key-value pairs', function test( t ) {
	var expected;
	var entries;
	var actual;

	expected = {
		'beep': 'boop',
		'a': {
			'b': 'c'
		},
		'foo': [ 'bar' ]
	};

	entries = [
		[ 'beep', expected.beep ],
		[ 'a', expected.a ],
		[ 'foo', expected.foo ]
	];

	actual = objectFromEntries( entries );

	t.strictEqual( isPlainObject( actual ), true, 'returns a plain object' );
	t.notEqual( actual, expected, 'different object references' );
	t.strictEqual( actual.a, expected.a, 'same object references' );
	t.strictEqual( actual.foo, expected.foo, 'same object references' );
	t.deepEqual( actual, expected, 'returns expected object' );

	t.end();
});

tape( 'the function accepts providing an array containing arrays which do not have exactly 2 elements', function test( t ) {
	var expected;
	var entries;
	var actual;

	// Empty arrays...
	entries = [ [], [] ];
	expected = {
		'undefined': void 0
	};

	actual = objectFromEntries( entries );

	t.deepEqual( actual, expected, 'returns expected object' );

	// 1-element arrays...
	entries = [ [ 'beep' ], [ 'boop' ] ];
	expected = {
		'beep': void 0,
		'boop': void 0
	};

	actual = objectFromEntries( entries );

	t.deepEqual( actual, expected, 'returns expected object' );

	// >2 element arrays...
	entries = [ [ 'beep', 1, 2 ], [ 'boop', 'a', 'b' ] ];
	expected = {
		'beep': 1,
		'boop': 'a'
	};

	actual = objectFromEntries( entries );

	t.deepEqual( actual, expected, 'returns expected object' );

	t.end();
});
