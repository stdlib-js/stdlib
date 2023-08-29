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
var unzip = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof unzip, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an array', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function thrower() {
			unzip( value );
		};
	}
});

tape( 'the function throws an error if not provided a zipped array', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function thrower() {
			unzip( [ value ] );
		};
	}
});

tape( 'the function throws an error if not provided an array of tuple element indices', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function thrower() {
			unzip( [[]], value );
		};
	}
});

tape( 'the function throws an error if not provided integer indices', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
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
		return function thrower() {
			unzip( [[]], [value] );
		};
	}
});

tape( 'the function throws an error if provided indices which are less than 0 or greater than the maximum possible index', function test( t ) {
	var values;
	var i;

	values = [
		-5,
		5
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}

	t.end();

	function badValue( value ) {
		return function thrower() {
			unzip( [ [ 1, 'a' ] ], [value] );
		};
	}
});

tape( 'the function unzips a zipped array', function test( t ) {
	var expected;
	var actual;
	var data;

	data = [
		[ 1, 'a', 3 ],
		[ 2, 'b', 4 ]
	];

	expected = [
		[ 1, 2 ],
		[ 'a', 'b' ],
		[ 3, 4 ]
	];

	actual = unzip( data );

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function unzips specific tuple elements from a zipped array', function test( t ) {
	var expected;
	var actual;
	var data;

	data = [
		[ 1, 'a', 3 ],
		[ 2, 'b', 4 ]
	];

	expected = [
		[ 1, 2 ],
		[ 3, 4 ]
	];

	actual = unzip( data, [ 0, 2 ] );

	t.deepEqual( actual, expected );
	t.end();
});
