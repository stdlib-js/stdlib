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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var AccessorArray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof AccessorArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var arr = new AccessorArray( [ 1, 2, 3 ] );
	t.strictEqual( arr instanceof AccessorArray, true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var ctor;
	var arr;

	ctor = AccessorArray;

	arr = ctor( [ 1, 2, 3 ] );
	t.strictEqual( arr instanceof AccessorArray, true, 'returns an instance' );

	t.end();
});

tape( 'attached to the constructor is a property returning the constructor name', function test( t ) {
	t.strictEqual( hasOwnProp( AccessorArray, 'name' ), true, 'has property' );
	t.strictEqual( AccessorArray.name, 'AccessorArray', 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance having a `length` property for returning the number of array elements', function test( t ) {
	var arr = new AccessorArray( [ 1, 2, 3 ] );
	t.strictEqual( arr.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the constructor throws an error if not provided an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		-1,
		NaN,
		true,
		false,
		null,
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
			return new AccessorArray( value );
		};
	}
});
