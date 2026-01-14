/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var data = require( './fixtures/r/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var cdf = factory( 0.0, 1.0 );
	t.strictEqual( typeof cdf, 'function', 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var cdf;
	var y;

	cdf = factory( 0.5 );
	y = cdf( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	cdf = factory( NaN );
	y = cdf( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a valid `n`, the function returns a function which returns `1` when provided `+infinity` for `x`', function test( t ) {
	var cdf;
	var y;

	cdf = factory( 1.0 );
	y = cdf( PINF );
	t.strictEqual( y, 1.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a valid `n`, the function returns a function which returns `0` when provided `-infinity` for `x`', function test( t ) {
	var cdf;
	var y;

	cdf = factory( 1.0 );
	y = cdf( NINF );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if not provided a positive integer for `n`, the created function always returns `NaN`', function test( t ) {
	var cdf;
	var y;

	cdf = factory( -1.0 );

	y = cdf( 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 3.8 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	cdf = factory( NINF );
	y = cdf( 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the created function evaluates the CDF for `x` given `n` observations', function test( t ) {
	var expected;
	var delta;
	var cdf;
	var tol;
	var i;
	var n;
	var x;
	var y;

	expected = data.expected;
	x = data.x;
	n = data.n;
	for ( i = 0; i < x.length; i++ ) {
		cdf = factory( n[i] );
		y = cdf( x[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', n: '+n[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 20.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. n: '+n[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
