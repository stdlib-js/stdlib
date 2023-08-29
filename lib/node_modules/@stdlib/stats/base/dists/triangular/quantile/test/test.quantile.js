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

var smallRange = require( './fixtures/julia/small_range.json' );
var mediumRange = require( './fixtures/julia/medium_range.json' );
var largeRange = require( './fixtures/julia/large_range.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = quantile( NaN, 0.0, 1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.1, NaN, 1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.1, 0.0, NaN, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.1, 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p` and valid parameters, the function returns `NaN`', function test( t ) {
	var y = quantile( 1.1, 0.0, 1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.1, 0.0, 1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'if provided parameters not satisfying `a <= c <= b`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.5, PINF, NINF, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 2.0, 1.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, -10.0, 10.0, 11.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, -10.0, 10.0, -11.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if `p` is equal to the inflection point `( c - a ) / ( b - a )`, the function returns mode `c`', function test( t ) {
	var pInflect;
	var y;
	var a;
	var b;
	var c;

	a = 0.0;
	b = 4.0;
	c = 3.0;
	pInflect = ( c - a ) / ( b - a );
	y = quantile( pInflect, a, b, c );
	t.equal( y, c, 'returns c' );

	a = -10.0;
	b = 10.0;
	c = 0.0;
	pInflect = ( c - a ) / ( b - a );
	y = quantile( pInflect, a, b, c );
	t.equal( y, c, 'returns c' );

	t.end();
});

tape( 'the function evaluates the quantile for `x` given a small range `b - a`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var i;
	var p;
	var y;

	expected = smallRange.expected;
	p = smallRange.p;
	a = smallRange.a;
	b = smallRange.b;
	c = smallRange.c;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile for `x` given a medium range `b - a`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var i;
	var p;
	var y;

	expected = mediumRange.expected;
	p = mediumRange.p;
	a = mediumRange.a;
	b = mediumRange.b;
	c = mediumRange.c;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile for `x` given a large range `b - a`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var c;
	var i;
	var p;
	var y;

	expected = largeRange.expected;
	p = largeRange.p;
	a = largeRange.a;
	b = largeRange.b;
	c = largeRange.c;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
