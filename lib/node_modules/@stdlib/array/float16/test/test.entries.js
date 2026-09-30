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
var isArray = require( '@stdlib/assert/is-array' );
var isNumber = require( '@stdlib/assert/is-number' );
var float64ToFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var Float16Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Float16Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is an `entries` method for returning an iterator for iterating over array key-value pairs', function test( t ) {
	t.strictEqual( isFunction( Float16Array.prototype.entries ), true, 'has method' );
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
			return arr.entries.call( value );
		};
	}
});

tape( 'the method returns an iterator protocol-compliant object', function test( t ) {
	var buf;
	var arr;
	var it;
	var v;
	var i;

	buf = [ 1.05, 2.05, 3.05, 4.05 ];
	arr = new Float16Array( buf );

	it = arr.entries();
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < arr.length; i++ ) {
		v = it.next();
		t.strictEqual( isArray( v.value ), true, 'returns expected value' );
		t.strictEqual( v.value[ 0 ], i, 'returns expected value' );
		t.strictEqual( isNumber( v.value[ 1 ] ), true, 'returns expected value' );
		t.strictEqual( v.value[ 1 ], float64ToFloat16( buf[ i ] ), 'returns expected value' );
		t.strictEqual( typeof v.done, 'boolean', 'returns expected value' );
	}
	t.end();
});
