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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );
var i;

for ( i = 0; i < data.expected.length; i++ ) {
	if ( data.expected[ i ] === null ) {
		data.expected[ i ] = NINF;
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var logpmf = factory( 20, 20, 10 );
	t.equal( typeof logpmf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var logpmf;
	var y;

	logpmf = factory( 40, 20, 10 );
	y = logpmf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( NaN, 20, 10 );
	y = logpmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( 40, NaN, 10 );
	y = logpmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( 40, 10, NaN );
	y = logpmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( NaN, NaN, 10 );
	y = logpmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( 40, NaN, NaN );
	y = logpmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( NaN, 20, NaN );
	y = logpmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( NaN, NaN, NaN );
	y = logpmf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided valid parameters, the function returns a function which returns `-Infinity` when provided an integer `x` greater than `min( n, K )`', function test( t ) {
	var logpmf;
	var y;

	logpmf = factory( 40, 20, 10 );
	y = logpmf( PINF );
	t.equal( y, NINF, 'returns -Infinity' );

	y = logpmf( 12.0 );
	t.equal( y, NINF, 'returns -Infinity' );

	y = logpmf( 11.0 );
	t.equal( y, NINF, 'returns -Infinity' );

	t.end();
});

tape( 'if provided valid parameters, the function returns a function which returns `0` when provided an integer `x` smaller than `max( 0, n + K - N )`', function test( t ) {
	var logpmf;
	var y;

	logpmf = factory( 40, 30, 15 );

	y = logpmf( 1.0 );
	t.equal( y, NINF, 'returns -Infinity' );

	y = logpmf( 4.0 );
	t.equal( y, NINF, 'returns -Infinity' );

	t.end();
});

tape( 'if provided an `N` which is not a nonnegative integer, the created function always returns `NaN`', function test( t ) {
	var logpmf;
	var y;

	logpmf = factory( 20.5, 20, 10 );

	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( -10, 20, 10 );
	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( PINF, 20, 10 );
	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( NINF, 20, 10 );
	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a `K` which is not a nonnegative integer, the created function always returns `NaN`', function test( t ) {
	var logpmf;
	var y;

	logpmf = factory( 40, 20.5, 10 );

	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( 40, -10, 10 );
	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( 40, PINF, 10 );
	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( 40, NINF, 10 );
	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the created function always returns `NaN`', function test( t ) {
	var logpmf;
	var y;

	logpmf = factory( 40, 20, 10.5 );

	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpmf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( 40, 20, -10 );
	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( 30, 20, PINF );
	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpmf = factory( 30, 20, NINF );
	y = logpmf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function evaluates the logpmf for `x`', function test( t ) {
	var expected;
	var logpmf;
	var delta;
	var tol;
	var i;
	var N;
	var K;
	var n;
	var x;
	var y;

	expected = data.expected;
	x = data.x;
	N = data.N;
	K = data.K;
	n = data.n;
	for ( i = 0; i < x.length; i++ ) {
		logpmf = factory( N[i], K[i], n[i] );
		y = logpmf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', N: '+N[i]+', K: '+K[i]+', n: '+n[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 3600.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. N: '+N[i]+'. K: '+K[i]+'. n: '+n[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
