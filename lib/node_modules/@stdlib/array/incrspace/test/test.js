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
var incrspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `start` value is not a number primitive', function test( t ) {
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
			incrspace( value, 10 );
		};
	}
});

tape( 'the function throws an error if the `stop` value is not a number primitive', function test( t ) {
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
			incrspace( 0, value );
		};
	}
});

tape( 'the function throws an error if the `increment` value is not a number primitive', function test( t ) {
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
			incrspace( 0, 10, value );
		};
	}
});

tape( 'the function returns a linearly spaced array', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;

	start = 0;
	stop = 10;

	// Default behavior:
	actual = incrspace( start, stop );
	expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	t.deepEqual( actual, expected );

	// Specify the increment:
	actual = incrspace( start, stop, 2 );
	expected = [ 0, 2, 4, 6, 8 ];
	t.deepEqual( actual, expected );

	actual = incrspace( start, 11, 2 );
	expected = [ 0, 2, 4, 6, 8, 10 ];
	t.deepEqual( actual, expected );

	// Decrement:
	actual = incrspace( stop, start, -2 );
	expected = [ 10, 8, 6, 4, 2 ];
	t.deepEqual( actual, expected );

	// Large array:
	actual = incrspace( start, 1e6, 1 );
	t.equal( actual.length, 1e6 );

	t.end();
});

tape( 'the function throws an error if the maximum array length is exceeded', function test( t ) {
	var values;
	var i;

	values = [
		0.000000000000001,
		0.00000000000000000000001,
		0.000000000000000000000000001,
		0
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			incrspace( 0, 10, value );
		};
	}
});

tape( 'the function returns a single element array for incompatible increments', function test( t ) {
	t.deepEqual( incrspace(0, 10, -1), [ 0 ] );
	t.deepEqual( incrspace(0, 10, 11), [ 0 ] );
	t.end();
});
