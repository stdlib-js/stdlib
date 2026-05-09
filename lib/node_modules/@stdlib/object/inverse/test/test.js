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
var invert = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof invert, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object-like value', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			invert( value );
		};
	}
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			invert( {}, value );
		};
	}
});

tape( 'the function throws an error if provided a duplicates option which is not a boolean primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
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
			invert( {}, {
				'duplicates': value
			});
		};
	}
});

tape( 'the function returns an empty object if provided an empty object', function test( t ) {
	t.deepEqual( invert( {} ), {}, 'returns empty object' );
	t.end();
});

tape( 'the function inverts an object', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': 'beep',
		'b': 'boop',
		'c': true,
		'd': null,
		'e': [ 1, 2, 3 ],
		'f': {
			'a': 'b'
		},
		'g': 1
	};
	expected = {
		'beep': 'a',
		'boop': 'b',
		'true': 'c',
		'null': 'd',
		'1,2,3': 'e',
		'[object Object]': 'f',
		'1': 'g'
	};

	actual = invert( obj );
	t.deepEqual( actual, expected, 'returns inverted object' );
	t.end();
});

tape( 'the function handles duplicate values', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': 'beep',
		'b': 'beep',
		'c': 'boop',
		'd': 'boop',
		'e': 'boop'
	};
	expected = {
		'beep': [ 'a', 'b' ],
		'boop': [ 'c', 'd', 'e' ]
	};
	actual = invert( obj );

	t.deepEqual( actual, expected, 'returns inverted object' );
	t.end();
});

tape( 'the function supports overriding duplicate values', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': 'beep',
		'b': 'beep'
	};
	expected = {
		'beep': 'b'
	};
	actual = invert( obj, {
		'duplicates': false
	});

	t.deepEqual( actual, expected, 'returns inverted object' );
	t.end();
});

tape( 'the function ignores unknown options', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'a': 'beep',
		'b': 'beep'
	};
	expected = {
		'beep': [ 'a', 'b' ]
	};
	actual = invert( obj, {
		'bee': 'bop'
	});

	t.deepEqual( actual, expected, 'ignores unknown options' );
	t.end();
});
