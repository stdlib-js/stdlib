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
var Uint32Array = require( '@stdlib/array/uint32' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var format = require( '@stdlib/string/format' );
var Int64 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Int64, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a read-only `from` method', function test( t ) {
	t.ok( hasOwnProp( Int64, 'from' ), 'has property' );
	t.ok( isFunction( Int64.from ), 'has method' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		Int64.from = null;
	}
});

tape( 'the method throws an error if not provided an array-like object containing two 32-bit unsigned integers', function test( t ) {
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
		0,
		[ 1 ],
		[ 1, 2, 3 ],
		[ 0, -1 ],
		[ 0, UINT32_MAX + 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, format( 'throws an error when provided %s', values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = Int64.from( value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the method returns a 64-bit signed integer', function test( t ) {
	var x;

	x = Int64.from( [ 0, 1 ] );
	t.ok( x instanceof Int64, 'returns expected value' );
	t.strictEqual( x.hi, 0, 'returns expected value' );
	t.strictEqual( x.lo, 1, 'returns expected value' );

	x = Int64.from( [ UINT32_MAX, UINT32_MAX ] );
	t.ok( x instanceof Int64, 'returns expected value' );
	t.strictEqual( x.hi, UINT32_MAX, 'returns expected value' );
	t.strictEqual( x.lo, UINT32_MAX, 'returns expected value' );

	x = Int64.from( new Uint32Array( [ 0, 1 ] ) );
	t.ok( x instanceof Int64, 'returns expected value' );
	t.strictEqual( x.hi, 0, 'returns expected value' );
	t.strictEqual( x.lo, 1, 'returns expected value' );

	x = Int64.from({
		'0': 10,
		'1': 20,
		'length': 2
	});
	t.ok( x instanceof Int64, 'returns expected value' );
	t.strictEqual( x.hi, 10, 'returns expected value' );
	t.strictEqual( x.lo, 20, 'returns expected value' );

	t.end();
});
