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
var format = require( '@stdlib/string/format' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var Uint64 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Uint64, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a read-only `of` method', function test( t ) {
	t.strictEqual( hasOwnProp( Uint64, 'of' ), true, 'has property' );
	t.strictEqual( isFunction( Uint64.of ), true, 'has method' );
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
		[ 0, null ],
		[ 0, void 0 ],
		[ 0, true ],
		[ 0, false ],
		[ 0, [] ],
		[ 0, {} ],
		[ 0, function noop() {} ],
		[ 0, 'foo' ],
		[ 0, -1 ],
		[ 0, UINT32_MAX + 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i][0], values[i][1] ), TypeError, format( 'throws an error when provided %s, %s', values[i][0], values[i][1] ) );
		t.throws( badValue( values[i][1], values[i][0] ), TypeError, format( 'throws an error when provided %s, %s', values[i][1], values[i][0] ) );
	}
	t.end();

	function badValue( value1, value2 ) {
		return function badValue() {
			var x = Uint64.of( value1, value2 ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the method returns an unsigned 64-bit integer', function test( t ) {
	var x;

	x = Uint64.of( 0, 1 );
	t.strictEqual( x instanceof Uint64, true, 'returns expected value' );

	x = Uint64.of( UINT32_MAX, UINT32_MAX );
	t.strictEqual( x instanceof Uint64, true, 'returns expected value' );

	t.end();
});
