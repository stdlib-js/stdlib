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
var nans = require( '@stdlib/array/nans' );
var random = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof random, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is an `assign` method', function test( t ) {
	t.strictEqual( typeof random.assign, 'function', 'has method' );
	t.end();
});

tape( 'the method throws an error if provided a third argument which is not an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		NaN,
		null,
		true,
		false,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			random.assign( 2, 5.0, value );
		};
	}
});

tape( 'the method fills an output array with pseudorandom numbers (dtype=float64)', function test( t ) {
	var actual;
	var out;
	var i;

	out = nans( 10, 'float64' );
	actual = random.assign( 2, 5.0, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], actual[ i ], 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the method fills an output array with pseudorandom numbers (dtype=float32)', function test( t ) {
	var actual;
	var out;
	var i;

	out = nans( 10, 'float32' );
	actual = random.assign( 2, 5.0, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], actual[ i ], 'returns expected value for index '+i );
	}
	t.end();
});

tape( 'the method fills an output array with pseudorandom numbers (dtype=generic)', function test( t ) {
	var actual;
	var out;
	var i;

	out = nans( 10, 'generic' );
	actual = random.assign( 2, 5.0, out );

	t.strictEqual( out, actual, 'returns expected value' );
	t.strictEqual( actual.length, 10, 'returns expected value' );

	for ( i = 0; i < actual.length; i++ ) {
		t.strictEqual( actual[ i ], actual[ i ], 'returns expected value for index '+i );
	}
	t.end();
});
