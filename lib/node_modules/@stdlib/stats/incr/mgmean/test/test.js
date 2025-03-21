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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPSILON = require( '@stdlib/constants/float64/eps' );
var incrmgmean = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmgmean, 'function', 'main export is a function' );
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
			incrmgmean( value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmgmean( 3 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function computes a moving geometric mean incrementally', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var tol;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	N = data.length;

	acc = incrmgmean( 3 );

	actual = [];
	for ( i = 0; i < N; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	// Note: computed by hand using textbook formula:
	expected = [
		2.0,
		2.449489742783178,
		2.2894284851066637,
		2.8844991406148166,
		2.8844991406148166,
		3.634241185664279
	];

	for ( i = 0; i < N; i++ ) {
		if ( actual[ i ] === expected[ i ] ) {
			t.equal( actual[ i ], expected[ i ], 'returns expected value' );
		} else {
			delta = abs( expected[ i ] - actual[ i ] );
			tol = 1.2 * EPSILON * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance. Expected: '+expected[ i ]+'. Actual: '+actual[ i ]+'. Delta: '+delta+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current geometric mean', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var acc;
	var tol;
	var i;

	data = [ 2.0, 3.0, 5.0 ];
	acc = incrmgmean( 2 );
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	actual = acc();
	expected = 3.872983346207417; // Note: computed by hand using textbook formula
	delta = abs( expected - actual );
	tol = 1.0 * EPSILON * abs( expected );
	t.equal( delta <= tol, true, 'within tolerance. Expected: '+expected+'. Actual: '+actual+'. Delta: '+delta+'. Tol: '+tol+'.' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null`', function test( t ) {
	var acc = incrmgmean( 3 );
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'if provided `NaN`, the accumulated value is `NaN` for at least `W` invocations', function test( t ) {
	var expected;
	var delta;
	var data;
	var acc;
	var tol;
	var v;
	var i;

	acc = incrmgmean( 3 );

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
		} else if ( v === expected[ i ] ) {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
		} else {
			delta = abs( expected[ i ] - v );
			tol = 1.0 * EPSILON * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance for window '+i+'. Expected: '+expected[ i ]+'. Actual: '+v+'. Delta: '+delta+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});
