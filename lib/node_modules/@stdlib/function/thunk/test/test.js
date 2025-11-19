/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var functionName = require( '@stdlib/utils/function-name' );
var add = require( '@stdlib/number/float64/base/add' );
var thunk = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof thunk, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			thunk( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a function (2 args)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			thunk( value, 2 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a function (3 args)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			thunk( value, 2, 3 );
		};
	}
});

tape( 'the function returns an anonymous function having arity 0', function test( t ) {
	var fcn = thunk( add, 2, 3 );
	t.strictEqual( typeof fcn, 'function', 'returns expected value' );
	t.strictEqual( functionName( fcn ), '', 'returns expected value' );
	t.strictEqual( fcn.length, 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns a thunk (nullary)', function test( t ) {
	var fcn = thunk( constant );
	t.strictEqual( fcn(), 3.14, 'returns expected value' );
	t.strictEqual( fcn(), 3.14, 'returns expected value' );
	t.strictEqual( fcn(), 3.14, 'returns expected value' );
	t.end();

	function constant() {
		return 3.14;
	}
});

tape( 'the function returns a thunk (unary)', function test( t ) {
	var fcn = thunk( scale, 3.0 );
	t.strictEqual( fcn(), 4.0, 'returns expected value' );
	t.strictEqual( fcn(), 4.0, 'returns expected value' );
	t.strictEqual( fcn(), 4.0, 'returns expected value' );
	t.end();

	function scale( v ) {
		return v + 1.0;
	}
});

tape( 'the function returns a thunk (binary)', function test( t ) {
	var fcn = thunk( add, 3.0, 1.0 );
	t.strictEqual( fcn(), 4.0, 'returns expected value' );
	t.strictEqual( fcn(), 4.0, 'returns expected value' );
	t.strictEqual( fcn(), 4.0, 'returns expected value' );
	t.end();

	function add( x, y ) {
		return x + y;
	}
});
