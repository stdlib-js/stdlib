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
var Float16Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Float16Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `keys` method', function test( t ) {
	t.strictEqual( isFunction( Float16Array.prototype.keys ), true, 'has method' );
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
			return arr.keys.call( value );
		};
	}
});

tape( 'the method returns an iterator protocol-compliant object', function test( t ) {
	var expected;
	var arr;
	var it;
	var i;
	var r;
	var e;

	arr = new Float16Array( [ 1.05, 2.05 ] );
	expected = [
		{
			'value': 0,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'done': true
		}
	];
	it = arr.keys();

	t.strictEqual( typeof it, 'object', 'returns expected value' );
	t.strictEqual( typeof it.next, 'function', 'has next method' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.strictEqual( r.value, e.value, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		} else {
			t.strictEqual( r.value, e.value, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}

	t.end();
});

tape( 'the method returns an iterator which does not iterate over empty arrays', function test( t ) {
	var expected;
	var arr;
	var it;
	var i;
	var v;

	arr = new Float16Array( [] );
	expected = [
		{
			'done': true
		},
		{
			'done': true
		},
		{
			'done': true
		}
	];
	it = arr.keys();

	t.strictEqual( typeof it, 'object', 'returns expected value' );
	t.strictEqual( typeof it.next, 'function', 'has next method' );

	for ( i = 0; i < expected.length; i++ ) {
		v = it.next();
		t.strictEqual( v.value, expected[ i ].value, 'returns expected value' );
		t.strictEqual( v.done, expected[ i ].done, 'returns expected value' );
	}
	t.end();
});
