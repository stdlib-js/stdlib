/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrmmin = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmmin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		3.14,
		true,
		false,
		null,
		void 0,
		NaN,
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
			incrmmin( value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmmin( 3 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function computes a moving minimum incrementally', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0, 2.0, 2.0, 2.0, 1.0, 4.0 ];
	N = data.length;

	acc = incrmmin( 3 );

	actual = [];
	for ( i = 0; i < N; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	expected = [ 2.0, 2.0, 2.0, 2.0, 2.0, 3.0, 2.0, 2.0, 2.0, 1.0, 1.0 ];

	t.deepEqual( actual, expected, 'returns expected incremental results' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current minimum value', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 5.0, 4.0 ];
	acc = incrmmin( 2 );
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), 4.0, 'returns expected value' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null`', function test( t ) {
	var acc = incrmmin( 3 );
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'the accumulator function correctly handles signed zeros', function test( t ) {
	var expected;
	var data;
	var acc;
	var v;
	var i;

	acc = incrmmin( 3 );

	data = [
		0.0,  // 0
		-0.0, // 0, -0
		0.0,  // 0, -0, 0
		0.0,  // -0, 0, 0
		0.0,  // 0, 0, 0
		-0.0, // 0, 0, -0
		0.0,  // 0, -0, 0
		0.0,  // -0, 0, 0
		0.0,  // 0, 0, 0
		-0.0, // 0, 0, -0
		-0.0, // 0, -0, -0
		-0.0, // -0, -0, -0
		0.0   // -0, -0, 0
	];
	expected = [
		0.0,
		-0.0,
		-0.0,
		-0.0,
		0.0,
		-0.0,
		-0.0,
		-0.0,
		0.0,
		-0.0,
		-0.0,
		-0.0,
		-0.0
	];
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ] );
		if ( isNegativeZero( expected[ i ] ) ) {
			t.equal( isNegativeZero( v ), true, 'returns expected value for window '+i );
		} else {
			t.equal( isPositiveZero( v ), true, 'returns expected value for window '+i );
		}
	}
	t.end();
});

tape( 'if provided `NaN`, the accumulated value is `NaN` for at least `W` invocations', function test( t ) {
	var expected;
	var data;
	var acc;
	var v;
	var i;

	acc = incrmmin( 3 );

	data = [
		NaN,  // NaN
		3.14, // NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		3.14, // 3.14, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		3.14, // 3.14, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		NaN,  // 3.14, NaN, NaN
		NaN,  // NaN, NaN, NaN
		NaN,  // NaN, NaN, NaN
		3.14  // NaN, NaN, 3.14
	];
	expected = [
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		3.14,
		NaN,
		NaN,
		NaN,
		3.14,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN
	];
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ] );
		if ( isnan( expected[ i ] ) ) {
			t.equal( isnan( v ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
		}
	}
	t.end();
});
