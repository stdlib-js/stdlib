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
var quantile = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/r/data.json' );
var i;
for ( i = 0; i < data.expected.length; i++ ) {
	if ( data.expected[ i ] === 'Inf' ) {
		data.expected[ i ] = PINF;
	}
	if ( data.expected[ i ] === '-Inf' ) {
		data.expected[ i ] = NINF;
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = quantile( NaN, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.0, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p` and a valid `mu` and `sigma`, the function returns `NaN`', function test( t ) {
	var y = quantile( 1.1, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.1, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'if provided a negative `sigma`, the function always returns `NaN`', function test( t ) {
	var y;

	y = quantile( 2.0, 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, 0.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `sigma` equals `0`, the function evaluates a degenerate distribution centered at `mu`', function test( t ) {
	var y;

	y = quantile( 0.3, 2.0, 0.0 );
	t.equal( y, 2.0, 'returns mu for p inside [0,1]' );

	y = quantile( 0.9, 2.0, 0.0 );
	t.equal( y, 2.0, 'returns mu for p inside [0,1]' );

	y = quantile( 1.1, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN for p outside [0,1]' );

	y = quantile( -0.1, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN for p outside [0,1]' );

	t.end();
});

tape( 'the function evaluates the quantile for `x` given parameters `mu` and `sigma`', function test( t ) {
	var expected;
	var delta;
	var sigma;
	var tol;
	var mu;
	var x;
	var y;
	var i;

	expected = data.expected;
	x = data.x;
	mu = data.mu;
	sigma = data.sigma;
	for ( i = 0; i < x.length; i++ ) {
		y = quantile( x[i], mu[i], sigma[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', mu:'+mu[i]+', sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2100.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. sigma: '+sigma[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
