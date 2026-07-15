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
var ln = require( '@stdlib/math/base/special/ln' );
var exp = require( '@stdlib/math/base/special/exp' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pow = require( '@stdlib/math/base/special/pow' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPSILON = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var incrnangmean = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrnangmean, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.strictEqual( typeof incrnangmean(), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function incrementally computes a geometric mean', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var prod;
	var tol;
	var acc;
	var N;
	var d;
	var i;
	var j;

	data = [ 2.0, 3.0, NaN, 2.0, 4.0, NaN, 3.0, 4.0 ];
	N = data.length;

	acc = incrnangmean();

	prod = 1.0;
	j = 0;
	for ( i = 0; i < N; i++ ) {
		d = data[ i ];
		if ( !isnan( d ) ) {
			prod *= d;
			expected = pow( prod, 1.0/(j+1) );
			j += 1;
		}
		actual = acc( d );
		if ( actual === expected ) {
			t.strictEqual( actual, expected, 'returns expected value. d: '+d+'.' );
		} else {
			delta = abs( expected - actual );
			tol = 1.5 * EPSILON * abs( expected );
			t.strictEqual( delta <= tol, true, 'within tolerance. d: '+d+'. Expected: '+expected+'. Actual: '+actual+'. Delta: '+delta+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current geometric mean', function test( t ) {
	var expected;
	var delta;
	var data;
	var acc;
	var tol;
	var i;

	data = [ 2.0, NaN, 3.0, 1.0 ];

	acc = incrnangmean();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	expected = 1.8171205928321397;
	delta = abs( expected - acc() );
	tol = EPSILON * abs( expected );

	t.strictEqual( delta <= tol, true, 'within tolerance. Expected: '+expected+'. Actual: '+acc()+'. Delta: '+delta+'. Tol: '+tol+'.' );
	t.end();
});

tape( 'the accumulator function can return a result which overflows', function test( t ) {
	var acc = incrnangmean();
	var i;

	for ( i = 0; i < 10000; i++ ) {
		acc( 1.7976931348623157e+308 );
	}
	t.strictEqual( acc(), PINF, 'returns infinity' );
	t.end();
});

tape( 'the accumulator function can return a result which underflows', function test( t ) {
	var acc = incrnangmean();
	var i;

	for ( i = 0; i < 10000; i++ ) {
		acc( 5.0e-324 );
	}
	t.strictEqual( acc(), 0.0, 'returns 0' );
	t.end();
});

tape( 'if provided a `NaN`, the accumulator function ignores it', function test( t ) {
	var acc;

	acc = incrnangmean();
	acc( 5.0 );

	t.strictEqual( acc(), 5.0, 'returns expected value' );

	acc( NaN );
	t.strictEqual( isnan( acc() ), false, 'does not return NaN' );

	acc( 3.14 );
	t.strictEqual( acc(), exp( ( ln( 5.0 ) + ln( 3.14 ) ) / 2 ), 'correctly updates after NaN');
	t.end();
});

tape( 'if the accumulator function has not been provided any data, the accumulator function returns `null`', function test( t ) {
	var acc = incrnangmean();
	t.strictEqual( acc(), null, 'returns expected value' );
	t.end();
});
