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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPSILON = require( '@stdlib/constants/float64/eps' );
var incrnanhmean = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrnanhmean, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrnanhmean(), 'function', 'returns a function' );
	t.end();
});

tape( 'the initial accumulated value is null', function test( t ) {
	var acc = incrnanhmean();
	t.equal( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function incrementally computes a harmonic mean', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var tol;
	var acc;
	var sum;
	var N;
	var d;
	var i;
	var j;

	data = [ 2.0, 3.0, NaN, 2.0, 4.0, NaN, 3.0, 4.0 ];
	N = data.length;

	acc = incrnanhmean();

	sum = 0;
	j = 0;
	for ( i = 0; i < N; i++ ) {
		d = data[ i ];
		if ( !isnan( d ) ) {
			sum += 1.0 / d;
			expected = (j+1) / sum;
			j += 1;
		}
		actual = acc( d );
		if ( actual === expected ) {
			t.strictEqual( actual, expected, 'returns expected result' );
		} else {
			delta = abs( expected - actual );
			tol = EPSILON * expected;
			t.strictEqual( delta <= tol, true, 'within tolerance. Expected: '+expected+'. Actual: '+actual+'. Delta: '+delta+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current harmonic mean', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 1.0 ];
	acc = incrnanhmean();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), 1.6363636363636365, 'returns the current accumulated harmonic mean' );
	t.end();
});
