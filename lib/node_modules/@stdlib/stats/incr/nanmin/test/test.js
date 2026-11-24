/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrnanmin = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrnanmin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrnanmin(), 'function', 'returns a function' );
	t.end();
});

tape( 'if not provided any values, the initial returned minimum value is `null`', function test( t ) {
	var acc = incrnanmin();
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'the accumulator function incrementally computes a minimum value', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var min;
	var N;
	var d;
	var i;

	data = [ 2.0, 3.0, NaN, 1.0, 4.0, NaN, 3.0, 4.0 ];
	N = data.length;

	expected = [];
	actual = [];

	acc = incrnanmin();

	min = data[ 0 ];
	for ( i = 0; i < N; i++ ) {
		d = data[ i ];
		if ( isnan( d ) === false ) {
			if ( min === null || d < min ) {
				min = d;
			}
		}
		expected.push( min );
		actual.push( acc( d ) );
	}
	t.deepEqual( actual, expected, 'returns expected incremental results' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current minimum value', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, NaN, 1.0, NaN, 3.0 ];
	acc = incrnanmin();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), 1.0, 'returns the current accumulated minimum value' );
	t.end();
});

tape( 'the accumulator function correctly handles signed zeros', function test( t ) {
	var acc;
	var v;

	acc = incrnanmin();

	v = acc( 0.0 );
	t.equal( isPositiveZero( v ), true, 'returns expected value' );

	v = acc( -0.0 );
	t.equal( isNegativeZero( v ), true, 'returns expected value' );

	v = acc( 0.0 );
	t.equal( isNegativeZero( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the accumulator function ignores it and maintains the current minimum', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, NaN, 1.0, 2.0, 3.0, NaN, 5.0, 6.0, 7.0 ];
	acc = incrnanmin();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.equal( isnan( acc() ), false, 'returns expected value' );
	t.end();
});
