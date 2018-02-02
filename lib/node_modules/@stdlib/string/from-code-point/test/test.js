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
var Uint16Array = require( '@stdlib/array/uint16' );
var fromCodePoint = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fromCodePoint, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a code point which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		-5,
		3.14,
		-1.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[ 'beep', 'boop' ],
		[ 1, 2, 3, 3.14 ], // arrays are allowed, but must contain nonnegative integers
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fromCodePoint( value );
		};
	}
});

tape( 'the function throws an error if provided an empty array', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		fromCodePoint( [] );
	}
});

tape( 'the function throws an error if provided a code point which exceeds the maximum Unicode code point', function test( t ) {
	var values;
	var i;

	values = [
		1e308,
		2e307,
		[ 1, 2, 3, 1e308 ],
		[ 1, 2, 3, 2e307 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			fromCodePoint( value );
		};
	}
});

tape( 'the arity of the function is 1', function test( t ) {
	t.strictEqual( fromCodePoint.length, 1, 'has length 1' );
	t.end();
});

tape( 'the function returns a string from a sequence of code points (array)', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		[ 0 ],
		[ 9731 ],
		[ 0x1D306 ],
		[ 0x10437 ],
		new Uint16Array( [ 97, 98, 99 ] ),
		[ 0x1D306, 0x61, 0x1D307 ],
		[ 0x61, 0x62, 0x1D307 ]
	];

	expected = [
		'\0',
		'☃',
		'\uD834\uDF06',
		'𐐷',
		'abc',
		'\uD834\uDF06a\uD834\uDF07',
		'ab\uD834\uDF07'
	];

	for ( i = 0; i < values.length; i++ ) {
		out = fromCodePoint( values[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for '+values[i] );
	}
	t.end();
});

tape( 'the function returns a string from a sequence of code points (arguments)', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		[ 0 ],
		[ 9731 ],
		[ 0x1D306 ],
		[ 0x10437 ],
		[ 97, 98, 99 ],
		[ 0x1D306, 0x61, 0x1D307 ],
		[ 0x61, 0x62, 0x1D307 ]
	];

	expected = [
		'\0',
		'☃',
		'\uD834\uDF06',
		'𐐷',
		'abc',
		'\uD834\uDF06a\uD834\uDF07',
		'ab\uD834\uDF07'
	];

	for ( i = 0; i < values.length; i++ ) {
		out = fromCodePoint.apply( null, values[ i ] );
		t.strictEqual( out, expected[ i ], 'returns expected value for '+values[i] );
	}
	t.end();
});
