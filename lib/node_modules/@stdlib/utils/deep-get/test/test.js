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
var deepGet = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof deepGet, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function exports a factory function', function test( t ) {
	t.strictEqual( typeof deepGet.factory, 'function', 'exports a factory function' );
	t.end();
});

tape( 'the function returns `undefined` if provided a non-object or null', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		void 0,
		NaN,
		true,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( deepGet( values[ i ], 'a.b.c' ), void 0, 'returns undefined' );
	}
	t.end();
});

tape( 'the function throws an error if provided a key path argument which is not either a string primitive or a key array', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		void 0,
		NaN,
		true,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided a ' + ( typeof values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 5
			};
			deepGet( obj, value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		true,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided a ' + ( typeof values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 5
			};
			deepGet( obj, 'a', value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		NaN,
		{},
		void 0,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws when provided a ' + ( typeof values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'a': 5
			};
			deepGet( obj, 'a', {
				'sep': value
			});
		};
	}
});

tape( 'the function deep gets', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': {
			'b': 999
		}
	};

	// String path:
	actual = deepGet( obj, 'a.b' );
	expected = 999;

	t.strictEqual( actual, expected, 'deep gets value' );

	// String path with custom separator:
	actual = deepGet( obj, 'a/b', {
		'sep': '/'
	});
	expected = 999;

	t.strictEqual( actual, expected, 'deep gets value' );

	// Array path:
	actual = deepGet( obj, ['a', 'b'] );
	expected = 999;

	t.strictEqual( actual, expected, 'deep gets value' );

	// Non-existent path:
	actual = deepGet( obj, ['a', 'c'] );
	expected = undefined;

	t.strictEqual( actual, expected, 'deep gets value' );
	t.end();
});
