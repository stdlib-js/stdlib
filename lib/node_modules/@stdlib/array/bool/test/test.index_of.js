/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var BooleanArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof BooleanArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is an `indexOf` method for returning an array element', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'indexOf' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.indexOf ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a boolean array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 5 );

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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.indexOf.call( value, true );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not a boolean value', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 5 );

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.indexOf( value );
		};
	}
});

tape( 'the method throws an error if provided a second argument which is not an integer', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new BooleanArray( 10 );

	values = [
		'5',
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.indexOf( true, value );
		};
	}
});

tape( 'the method returns `-1` if operating on an empty boolean array', function test( t ) {
	var arr;
	var idx;

	arr = new BooleanArray();
	idx = arr.indexOf( true );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method returns `-1` if a boolean value is not found', function test( t ) {
	var idx;
	var arr;

	arr = new BooleanArray( 10 );
	idx = arr.indexOf( true );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method returns the index of the first match if a boolean value is found', function test( t ) {
	var idx;
	var arr;

	arr = new BooleanArray( [ true, false, false, true ] );
	idx = arr.indexOf( false );

	t.strictEqual( idx, 1, 'returns expected value' );
	t.end();
});

tape( 'the method returns `-1` if provided a second argument which exceeds the input array length', function test( t ) {
	var idx;
	var arr;

	arr = new BooleanArray( 10 );
	idx = arr.indexOf( false, 20 );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method supports specifying a starting search index', function test( t ) {
	var idx;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true ] );

	idx = arr.indexOf( false, 0 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( true, 2 );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = arr.indexOf( false, 3 );
	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method supports specifying a starting search index (negative)', function test( t ) {
	var idx;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true ] );

	idx = arr.indexOf( false, -5 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( false, -2 );
	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'when provided a starting index which resolves to an index which is less than zero, the method searches from the first array element', function test( t ) {
	var idx;
	var arr;

	arr = new BooleanArray( [ true, false, false, true, true ] );

	idx = arr.indexOf( false, -10 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( true, -10 );
	t.strictEqual( idx, 0, 'returns expected value' );
	t.end();
});
