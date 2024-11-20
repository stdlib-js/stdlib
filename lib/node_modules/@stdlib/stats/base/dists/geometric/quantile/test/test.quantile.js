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

var smallP = require( './fixtures/julia/small_p.json' );
var largeP = require( './fixtures/julia/large_p.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = quantile( NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `r` and a valid `p`, the function returns `NaN`', function test( t ) {
	var y = quantile( 2.2, 0.8 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.2, 0.8 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'if provided `1.0` for `r` and a valid `p`, the function returns `+Infinity`', function test( t ) {
	var y = quantile( 1.0, 0.5 );
	t.equal( y, PINF, 'returns +Infinity' );
	y = quantile( 1.0, 0.5 );
	t.equal( y, PINF, 'returns +Infinity' );
	t.end();
});

tape( 'if provided a success probability `p` outside `[0,1]`, the function always returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.8, 1.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.9, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.8, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the quantile for `r` given small parameter `p`', function test( t ) {
	var expected;
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
		y = quantile( r[i], p[i] );
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

tape( 'the function evaluates the quantile for `r` given large parameter `p`', function test( t ) {
	var expected;
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
		y = quantile( r[i], p[i] );
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
