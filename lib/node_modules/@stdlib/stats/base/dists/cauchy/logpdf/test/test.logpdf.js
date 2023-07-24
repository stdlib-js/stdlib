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
var logpdf = require( './../lib' );


// FIXTURES //

var largeGamma = require( './fixtures/julia/large_gamma.json' );
var negativeMedian = require( './fixtures/julia/negative_median.json' );
var positiveMedian = require( './fixtures/julia/positive_median.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logpdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y;

	y = logpdf( NaN, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 0.0, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 0.0, NaN, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( NaN, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( NaN, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( NaN, NaN, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `+infinity` for `x` and a finite `x0` and `gamma`, the function returns `-Infinity`', function test( t ) {
	var y = logpdf( PINF, 0.0, 1.0 );
	t.equal( y, NINF, 'returns -Infinity' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a finite `x0` and `gamma`, the function returns `-Infinity`', function test( t ) {
	var y = logpdf( NINF, 0.0, 1.0 );
	t.equal( y, NINF, 'returns -Infinity' );
	t.end();
});

tape( 'if provided a nonpositive `gamma`, the function always returns `NaN`', function test( t ) {
	var y;

	y = logpdf( 2.0, 0.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 0.0, 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, 0.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the logpdf for `x` given `x0` and `gamma` (large `gamma`)', function test( t ) {
	var expected;
	var delta;
	var gamma;
	var tol;
	var x0;
	var x;
	var y;
	var i;

	expected = largeGamma.expected;
	x = largeGamma.x;
	x0 = largeGamma.x0;
	gamma = largeGamma.gamma;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], x0[i], gamma[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', x0 :'+x0[i]+', gamma: '+gamma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 6.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. x0: '+x0[i]+'. gamma: '+gamma[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given `x0` and `gamma` (`x0 < 0`)', function test( t ) {
	var expected;
	var gamma;
	var delta;
	var tol;
	var x0;
	var x;
	var y;
	var i;

	expected = negativeMedian.expected;
	x = negativeMedian.x;
	x0 = negativeMedian.x0;
	gamma = negativeMedian.gamma;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], x0[i], gamma[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', x0 :'+x0[i]+', gamma: '+gamma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. x0: '+x0[i]+'. gamma: '+gamma[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given `x0` and `gamma` (`x0 > 0`)', function test( t ) {
	var expected;
	var delta;
	var gamma;
	var tol;
	var x0;
	var x;
	var y;
	var i;

	expected = positiveMedian.expected;
	x = positiveMedian.x;
	x0 = positiveMedian.x0;
	gamma = positiveMedian.gamma;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], x0[i], gamma[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', x0 :'+x0[i]+', gamma: '+gamma[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. x0: '+x0[i]+'. gamma: '+gamma[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
