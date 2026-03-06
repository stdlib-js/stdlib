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
var Float64Array = require( '@stdlib/array/float64' );
var tabulate = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof tabulate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection', function test( t ) {
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
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			tabulate( value );
		};
	}
});

tape( 'the function generates a frequency table (array)', function test( t ) {
	var expected;
	var out;
	var arr;

	arr = [ 'beep', 'boop', 'foo', 'beep' ];

	expected = [
		[ 'beep', 2, 0.5 ],
		[ 'boop', 1, 0.25 ],
		[ 'foo', 1, 0.25 ]
	];
	out = tabulate( arr );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function generates a frequency table (typed array)', function test( t ) {
	var expected;
	var out;
	var arr;

	arr = new Float64Array( [ 0, 1, 1, 0 ] );

	expected = [
		[ 0, 2, 0.5 ],
		[ 1, 2, 0.5 ]
	];
	out = tabulate( arr );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'the function generates a frequency table (array-like object)', function test( t ) {
	var expected;
	var out;
	var arr;

	arr = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'beep'
	};
	expected = [
		[ 'beep', 2, 0.5 ],
		[ 'boop', 1, 0.25 ],
		[ 'foo', 1, 0.25 ]
	];
	out = tabulate( arr );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty array', function test( t ) {
	var expected;
	var out;
	var arr;

	arr = [];
	expected = [];

	out = tabulate( arr );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});
