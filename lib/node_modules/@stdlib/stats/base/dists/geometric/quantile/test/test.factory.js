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
var EPS = require( '@stdlib/constants/float64/eps' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var smallP = require( './fixtures/julia/small_p.json' );
var largeP = require( './fixtures/julia/large_p.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var quantile = factory( 0.0, 1.0 );
	t.equal( typeof quantile, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 1.0 );
	y = quantile( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN );
	y = quantile( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a valid success probability `p`, the function returns a function which returns `NaN` when provided a number outside `[0,1]` for `r`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 0.8 );
	y = quantile( -0.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 1.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a valid success probability `p`, the function returns a function which returns `+Infinity` when provided `1.0` for `r`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 0.5 );
	y = quantile( 1.0 );
	t.equal( y, PINF, 'returns +Infinity' );

	t.end();
});

tape( 'if provided a success probability `p` outside `[0,1]`, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( -1.0 );

	y = quantile( 0.4 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.8 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 1.5 );

	y = quantile( 0.4 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.8 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function evaluates the quantile for `r` given small parameter `p`', function test( t ) {
	var expected;
	var quantile;
	var delta;
	var tol;
	var r;
	var p;
	var y;
	var i;

	expected = smallP.expected;
	r = smallP.r;
	p = smallP.p;
	for ( i = 0; i < r.length; i++ ) {
		quantile = factory( p[i] );
		y = quantile( r[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. r: '+r[ i ]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the quantile for `r` given large parameter `p`', function test( t ) {
	var expected;
	var quantile;
	var delta;
	var tol;
	var r;
	var p;
	var y;
	var i;

	expected = largeP.expected;
	r = largeP.r;
	p = largeP.p;
	for ( i = 0; i < r.length; i++ ) {
		quantile = factory( p[i] );
		y = quantile( r[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. r: '+r[ i ]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
