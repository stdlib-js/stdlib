/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// FIXTURES //

var positiveLocation = require( './fixtures/julia/positive_location.json' );
var negativeLocation = require( './fixtures/julia/negative_location.json' );
var largeVariance = require( './fixtures/julia/large_variance.json' );


// VARIABLES //

var logpdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( logpdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logpdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = logpdf( NaN, 0.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = logpdf( 0.0, NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = logpdf( 0.0, 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `Infinity` for `x` and a finite `mu` and `sigma`, the function returns `-Infinity`', opts, function test( t ) {
	var y = logpdf( PINF, 0.0, 1.0 );
	t.strictEqual( y, NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `-Infinity` for `x` and a finite `mu` and `sigma`, the function returns `-Infinity`', opts, function test( t ) {
	var y = logpdf( NINF, 0.0, 1.0 );
	t.strictEqual( y, NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided a nonpositive `sigma`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpdf( 2.0, 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0, 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the logpdf for `x` given positive `mu`', opts, function test( t ) {
	var expected;
	var sigma;
	var mu;
	var x;
	var y;
	var i;

	expected = positiveLocation.expected;
	x = positiveLocation.x;
	mu = positiveLocation.mu;
	sigma = positiveLocation.sigma;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], mu[i], sigma[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.strictEqual( y, expected[i], 'x: '+x[i]+', mu:'+mu[i]+', sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				t.ok( isAlmostSameValue( y, expected[i], 1500 ), 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. sigma: '+sigma[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given negative `mu`', opts, function test( t ) {
	var expected;
	var sigma;
	var mu;
	var x;
	var y;
	var i;

	expected = negativeLocation.expected;
	x = negativeLocation.x;
	mu = negativeLocation.mu;
	sigma = negativeLocation.sigma;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], mu[i], sigma[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.strictEqual( y, expected[i], 'x: '+x[i]+', mu:'+mu[i]+', sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				t.ok( isAlmostSameValue( y, expected[i], 1500 ), 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. sigma: '+sigma[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
			}
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given large variance ( = large `sigma` )', opts, function test( t ) {
	var expected;
	var sigma;
	var mu;
	var x;
	var y;
	var i;

	expected = largeVariance.expected;
	x = largeVariance.x;
	mu = largeVariance.mu;
	sigma = largeVariance.sigma;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], mu[i], sigma[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.strictEqual( y, expected[i], 'x: '+x[i]+', mu:'+mu[i]+', sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				t.ok( isAlmostSameValue( y, expected[i], 1500 ), 'within tolerance. x: '+x[ i ]+'. mu: '+mu[i]+'. sigma: '+sigma[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
			}
		}
	}
	t.end();
});
