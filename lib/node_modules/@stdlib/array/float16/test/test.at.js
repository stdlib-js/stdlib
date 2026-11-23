/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var isFunction = require( '@stdlib/assert/is-function' );
var float64ToFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var Float16Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Float16Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is an `at` method for returning an array element', function test( t ) {
	t.strictEqual( isFunction( Float16Array.prototype.at ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a floating-point number array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Float16Array( 5 );

	values = [
		'5',
		5,
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
			return arr.at.call( value, 0 );
		};
	}
});

tape( 'the method returns `undefined` if provided an index which exceeds array dimensions', function test( t ) {
	var arr;
	var v;
	var i;

	arr = new Float16Array( 10 );
	for ( i = -arr.length; i < arr.length; i++ ) {
		if ( i < 0 ) {
			v = arr.at( i-arr.length );
			t.strictEqual( v, void 0, 'returns expected value for index '+(i-arr.length) );
		} else {
			v = arr.at( arr.length+i );
			t.strictEqual( v, void 0, 'returns expected value for index '+(arr.length+i) );
		}
	}
	t.end();
});

tape( 'the method returns an array element', function test( t ) {
	var arr;
	var v;
	var i;

	arr = [];
	for ( i = 0; i < 10; i++ ) {
		arr.push( i+0.05 );
	}

	arr = new Float16Array( arr );

	for ( i = -arr.length; i < arr.length; i++ ) {
		v = arr.at( i );
		if ( i < 0 ) {
			t.strictEqual( v, float64ToFloat16( arr.length + i + 0.05 ), 'returns expected value for index '+i );
		} else {
			t.strictEqual( v, float64ToFloat16( i + 0.05 ), 'returns expected value for index '+i );
		}
	}
	t.end();
});
