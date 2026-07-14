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

var tape = require( 'tape' );
var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var mean = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mean, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `sigma`, the function returns `NaN`', function test( t ) {
	var y = mean( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a nonpositive `sigma`, the function returns `NaN`', function test( t ) {
	var y;

	y = mean( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mean( NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the expected value of a half-normal distribution', function test( t ) {
	var expected;
	var delta;
	var sigma;
	var tol;
	var y;
	var i;

	sigma = data.sigma;
	expected = data.expected;

	for ( i = 0; i < sigma.length; i++ ) {
		y = mean( sigma[i] );
		delta = abs( y - expected[i] );
		tol = 1.0 * EPS * abs( expected[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'sigma: '+sigma[i] );
		} else {
			t.ok( delta <= tol, 'within tolerance. σ: '+sigma[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
