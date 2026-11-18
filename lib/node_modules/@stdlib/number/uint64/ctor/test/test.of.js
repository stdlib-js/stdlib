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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var format = require( '@stdlib/string/format' );
var Uint64 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Uint64, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a read-only `of` method', function test( t ) {
	t.ok( hasOwnProp( Uint64, 'of' ), 'has property' );
	t.ok( isFunction( Uint64.of ), 'has method' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		Uint64.of = null;
	}
});

tape( 'the method throws an error if not provided two unsigned 32-bit integers', function test( t ) {
	var values;
	var i;

	values = [
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {},
		'foo',
		-1,
		UINT32_MAX + 1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( 0, values[i] ), TypeError, format( 'throws an error when provided %s, %s', 0, values[i] ) );
		t.throws( badValue( values[i], 0 ), TypeError, format( 'throws an error when provided %s, %s', values[i], 0 ) );
		t.throws( badValue( values[i], values[i] ), TypeError, format( 'throws an error when provided %s, %s', values[i], values[i] ) );
	}
	t.end();

	function badValue( value1, value2 ) {
		return function badValue() {
			var x = Uint64.of( value1, value2 ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the method returns a 64-bit unsigned integer', function test( t ) {
	var x;

	x = Uint64.of( 0, 1 );
	t.ok( x instanceof Uint64, 'returns expected value' );
	t.strictEqual( x.hi, 0, 'returns expected value' );
	t.strictEqual( x.lo, 1, 'returns expected value' );

	x = Uint64.of( UINT32_MAX, UINT32_MAX );
	t.ok( x instanceof Uint64, 'returns expected value' );
	t.strictEqual( x.hi, UINT32_MAX, 'returns expected value' );
	t.strictEqual( x.lo, UINT32_MAX, 'returns expected value' );

	t.end();
});
