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

tape( 'attached to the prototype of the main export is an `includes` method', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'includes' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.includes ), true, 'has method' );
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
			return arr.includes.call( value, true );
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
			return arr.includes( value );
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
			return arr.includes( true, value );
		};
	}
});

tape( 'the method returns `false` if operating on an empty boolean array', function test( t ) {
	var bool;
	var arr;

	arr = new BooleanArray();
	bool = arr.includes( true );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the method returns `false` if a boolean value is not found', function test( t ) {
	var bool;
	var arr;

	arr = new BooleanArray( 10 );
	bool = arr.includes( true );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the method returns `true` if an array contains a specified boolean value', function test( t ) {
	var bool;
	var arr;

	arr = new BooleanArray( [ true, false, false, true] );
	bool = arr.includes( false );

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the method returns `false` if provided a second argument which exceeds the input array length', function test( t ) {
	var bool;
	var arr;

	arr = new BooleanArray( 10 );
	bool = arr.includes( true, 20 );

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the method supports specifying a starting search index', function test( t ) {
	var bool;
	var arr;

	arr = new BooleanArray( [ true, false, true, true, true ] );

	bool = arr.includes( true, 0 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = arr.includes( false, 1 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = arr.includes( false, 3 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'the method supports specifying a starting search index (negative)', function test( t ) {
	var bool;
	var arr;

	arr = new BooleanArray( [ true, false, true, true, true ] );

	bool = arr.includes( true, -5 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = arr.includes( false, -2 );
	t.strictEqual( bool, false, 'returns expected value' );
	t.end();
});

tape( 'when provided a starting index which resolves to an index which is less than zero, the method searches from the first array element', function test( t ) {
	var bool;
	var arr;

	arr = new BooleanArray( [ true, false, true, true, true ] );

	bool = arr.includes( true, -10 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = arr.includes( false, -10 );
	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});
