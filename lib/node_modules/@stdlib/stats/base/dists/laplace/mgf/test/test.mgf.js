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
var mgf = require( './../lib' );


// FIXTURES //

var positiveMean = require( './fixtures/julia/positive_mean.json' );
var negativeMean = require( './fixtures/julia/negative_mean.json' );
var largeVariance = require( './fixtures/julia/large_variance.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mgf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = mgf( NaN, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = mgf( 0.0, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = mgf( 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a nonpositive `b`, the function returns `NaN`', function test( t ) {
	var y;

	y = mgf( 2.0, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 2.0, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.0, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 2.0, 1.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 2.0, PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 2.0, NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `NaN` for any `x` outside `(-1/b,1/b)', function test( t ) {
	var y;

	y = mgf( -1.0, 0.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( -0.8, 0.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.8, 0.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 1.0, 0.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( -0.5, 0.0, 4.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( -0.3, 0.0, 4.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.5, 0.0, 4.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mgf( 0.3, 0.0, 4.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the MGF for `x` given positive `mu`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var mu;
	var x;
	var b;
	var y;
	var i;

	expected = positiveMean.expected;
	x = positiveMean.x;
	mu = positiveMean.mu;
	b = positiveMean.b;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], mu[i], b[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.equal( y, expected[i], 'x: '+x[i]+', mu:'+mu[i]+', b: '+b[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 20.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. b: '+b[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given negative `mu`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var mu;
	var x;
	var b;
	var y;
	var i;

	expected = negativeMean.expected;
	x = negativeMean.x;
	mu = negativeMean.mu;
	b = negativeMean.b;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], mu[i], b[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.equal( y, expected[i], 'x: '+x[i]+', mu:'+mu[i]+', b: '+b[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 60.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. b: '+b[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given large variance (large `b` )', function test( t ) {
	var expected;
	var delta;
	var tol;
	var mu;
	var x;
	var b;
	var y;
	var i;

	expected = largeVariance.expected;
	x = largeVariance.x;
	mu = largeVariance.mu;
	b = largeVariance.b;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], mu[i], b[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.equal( y, expected[i], 'x: '+x[i]+', mu:'+mu[i]+', b: '+b[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 80.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. b: '+b[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});
