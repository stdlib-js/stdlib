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
var MAX_SAFE_INTEGER = require( '@stdlib/constants/float64/max-safe-integer' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var Int64 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Int64, 'function', 'main export is a function' );
	t.end();
});

tape( 'the constructor returns an instance having a `toString` method for serializing an instance as a string', function test( t ) {
	var x;

	x = new Int64( 5 );
	t.strictEqual( x.toString(), '5', 'returns expected value' );

	x = new Int64( -5 );
	t.strictEqual( x.toString(), '-5', 'returns expected value' );

	x = Int64.from( [ 1, 0 ] );
	t.strictEqual( x.toString(), '4294967296', 'returns expected value' );

	t.end();
});

tape( 'the method accepts a radix parameter for serializing an instance as a string in bases 2 through 36', function test( t ) {
	var values;
	var radix;
	var i;
	var x;
	var z;

	values = [
		0,
		1,
		2,
		3,
		5,
		7,
		11,
		97,
		101,
		997,
		1009,
		UINT32_MAX,
		UINT32_MAX + 1,
		MAX_SAFE_INTEGER - 1,
		MAX_SAFE_INTEGER
	];

	for ( i = 0; i < values.length; i++ ) {
		z = values[i];
		x = new Int64( z );

		for ( radix = 2; radix <= 36; radix++ ) {
			t.strictEqual( x.toString( radix ), z.toString( radix ), 'returns expected value' );
		}
	}

	// Negative values:
	for ( i = 0; i < values.length; i++ ) {
		z = -values[i];
		x = new Int64( z );

		for ( radix = 2; radix <= 36; radix++ ) {
			t.strictEqual( x.toString( radix ), z.toString( radix ), 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the method throws an error if provided an invalid radix', function test( t ) {
	var values;
	var i;
	var x;

	x = new Int64( 5 );

	values = [
		0,
		1,
		37,
		-1,
		2.5,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var y = x.toString( value ); // eslint-disable-line no-unused-vars
		};
	}
});
