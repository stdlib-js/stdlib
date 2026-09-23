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
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterSome = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterSome, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an iterator as a first argument', function test( t ) {
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterSome( value, 2 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterSome( array2iterator( [ 1, 2, 3 ] ), value );
		};
	}
});

tape( 'if provided an "empty" iterator, the function returns `false`', function test( t ) {
	var bool;
	var arr;

	arr = array2iterator( [] );
	bool = iterSome( arr, 1 );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if at least `n` iterated values are truthy', function test( t ) {
	var bool;
	var arr;

	arr = array2iterator( [ 0, 0, 1, 1, 1 ] );
	bool = iterSome( arr, 3 );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `false` if less than `n` elements are truthy', function test( t ) {
	var bool;
	var arr;

	arr = array2iterator( [ 0, 0, 0 ] );
	bool = iterSome( arr, 2 );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});
