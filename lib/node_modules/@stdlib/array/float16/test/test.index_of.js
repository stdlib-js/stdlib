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

tape( 'attached to the prototype of the main export is an `indexOf` method for returning the index of an array element', function test( t ) {
	t.strictEqual( isFunction( Float16Array.prototype.indexOf ), true, 'has method' );
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
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.indexOf.call( value, 1.0 );
		};
	}
});

tape( 'the method returns `-1` if operating on an empty floating-point number array', function test( t ) {
	var arr;
	var idx;

	arr = new Float16Array();
	idx = arr.indexOf( 1.0 );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method returns `-1` if a numeric value is not found', function test( t ) {
	var idx;
	var arr;

	arr = new Float16Array( 10 );
	idx = arr.indexOf( 1.0 );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method returns the index of the first match if a numeric value is found', function test( t ) {
	var idx;
	var arr;

	arr = new Float16Array( [ 1.05, 2.05, 3.05, 4.05 ] );
	idx = arr.indexOf( float64ToFloat16( 2.05 ) );

	t.strictEqual( idx, 1, 'returns expected value' );
	t.end();
});

tape( 'the method returns `-1` if provided a second argument which exceeds the input array length', function test( t ) {
	var idx;
	var arr;

	arr = new Float16Array( 10 );
	idx = arr.indexOf( 1.0, 20 );

	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method supports specifying a starting search index', function test( t ) {
	var idx;
	var arr;

	arr = new Float16Array( [ 1.05, 2.05, 3.05, 2.05, 5.05 ] );

	idx = arr.indexOf( float64ToFloat16( 2.05 ), 0 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( float64ToFloat16( 2.05 ), 2 );
	t.strictEqual( idx, 3, 'returns expected value' );

	idx = arr.indexOf( float64ToFloat16( 2.05 ), 4 );
	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'the method supports specifying a starting search index (negative)', function test( t ) {
	var idx;
	var arr;

	arr = new Float16Array( [ 1.05, 2.05, 3.05, 2.05, 5.05 ] );

	idx = arr.indexOf( float64ToFloat16( 2.05 ), -5 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( float64ToFloat16( 2.05 ), -1 );
	t.strictEqual( idx, -1, 'returns expected value' );
	t.end();
});

tape( 'when provided a starting index which resolves to an index which is less than zero, the method searches from the first array element', function test( t ) {
	var idx;
	var arr;

	arr = new Float16Array( [ 1.05, 2.05, 3.05, 2.05, 5.05 ] );

	idx = arr.indexOf( float64ToFloat16( 2.05 ), -10 );
	t.strictEqual( idx, 1, 'returns expected value' );

	idx = arr.indexOf( float64ToFloat16( 1.05 ), -10 );
	t.strictEqual( idx, 0, 'returns expected value' );
	t.end();
});
