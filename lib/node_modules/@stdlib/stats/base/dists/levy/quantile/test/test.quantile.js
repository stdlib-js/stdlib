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

var positiveMean = require( './fixtures/julia/positive_mean.json' );
var negativeMean = require( './fixtures/julia/negative_mean.json' );
var largeVariance = require( './fixtures/julia/large_variance.json' );


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

tape( 'if provided a number outside `[0,1]` for `p` and a finite `mu` and `c`, the function returns `NaN`', function test( t ) {
	var y = quantile( 1.1, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.1, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'if provided a negative `c`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.5, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.2, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.8, 1.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.7, PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.7, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.2, NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the quantile function at `p` given positive `mu`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var mu;
	var p;
	var c;
	var y;
	var i;

	expected = positiveMean.expected;
	p = positiveMean.p;
	mu = positiveMean.mu;
	c = positiveMean.c;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], mu[i], c[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.equal( y, expected[i], 'p: '+p[i]+', mu:'+mu[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 20.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. mu: '+mu[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile function at `p` given negative `mu`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var mu;
	var p;
	var c;
	var y;
	var i;

	expected = negativeMean.expected;
	p = negativeMean.p;
	mu = negativeMean.mu;
	c = negativeMean.c;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], mu[i], c[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.equal( y, expected[i], 'p: '+p[i]+', mu:'+mu[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 350.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. mu: '+mu[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile function at `p` given large variance ( = large `c` )', function test( t ) {
	var expected;
	var delta;
	var tol;
	var mu;
	var p;
	var c;
	var y;
	var i;

	expected = largeVariance.expected;
	p = largeVariance.p;
	mu = largeVariance.mu;
	c = largeVariance.c;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], mu[i], c[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.equal( y, expected[i], 'p: '+p[i]+', mu:'+mu[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 30.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. mu: '+mu[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});
