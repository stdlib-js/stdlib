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

tape( 'attached to the prototype of the main export is a `reduceRight` method', function test( t ) {
	t.strictEqual( hasOwnProp( BooleanArray.prototype, 'reduceRight' ), true, 'has property' );
	t.strictEqual( isFunction( BooleanArray.prototype.reduceRight ), true, 'has method' );
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
			return arr.reduceRight.call( value, reducer );
		};
	}

	function reducer( acc, value ) {
		if ( value ) {
			return acc + 1;
		}
		return acc;
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
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
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.reduceRight( value );
		};
	}
});

tape( 'the method throws an error if not provided an initial value when operating on an empty boolean array', function test( t ) {
	var arr;

	arr = new BooleanArray( 0 );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		arr.reduceRight( reducer );
	}

	function reducer( acc, value ) {
		if ( value ) {
			return acc + 1;
		}
		return acc;
	}
});

tape( 'the method uses the last element of the array as the initial value when an initial value is not provided', function test( t ) {
	var valueArray;
	var accArray;
	var expected;
	var actual;
	var arr;
	var len;

	arr = new BooleanArray( [ true, false, true, false ] );
	len = arr.length;
	accArray = [ false, false, false ];
	valueArray = [ true, false, true ];
	expected = false;
	actual = arr.reduceRight( reducer );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();

	function reducer( acc, value, index ) {
		var ind = (len-index-2);
		t.strictEqual( acc, accArray[ ind ], 'returns expected value' );
		t.strictEqual( value, valueArray[ ind ], 'returns expected value' );
		return ( acc && value );
	}
});

tape( 'the method supports providing an initial value as the second argument', function test( t ) {
	var valueArray;
	var accArray;
	var expected;
	var actual;
	var arr;
	var len;

	arr = new BooleanArray( [ true, false, false, true ] );
	len = arr.length;
	accArray = [ 0, 1, 1, 1 ];
	valueArray = [ true, false, false, true ];
	expected = 2;
	actual = arr.reduceRight( reducer, 0 );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();

	function reducer( acc, value, index ) {
		var ind = (len-index-1);
		t.strictEqual( acc, accArray[ ind ], 'returns expected value' );
		t.strictEqual( value, valueArray[ ind ], 'returns expected value' );
		if ( value ) {
			return acc + 1;
		}
		return acc;
	}
});

tape( 'the method returns the accumulated result', function test( t ) {
	var expected;
	var actual;
	var arr;

	arr = new BooleanArray( [ true, false, true, true ] );
	expected = false;
	actual = arr.reduceRight( reducer );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();

	function reducer( acc, value ) {
		return ( acc && value );
	}
});
