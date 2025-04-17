/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var smallC = require( './fixtures/python/small_c.json' );
var mediumC = require( './fixtures/python/medium_c.json' );
var largeC = require( './fixtures/python/large_c.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `c <= 0`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.0, 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.5, -1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = quantile( 1.0, NINF );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p` and a valid `c`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 2.0, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = quantile( -0.5, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = quantile( NINF, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = quantile( PINF, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the quantile for `p` given small parameter `c`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var p;
	var c;
	var y;
	var i;

	expected = smallC.expected;
	p = smallC.p;
	c = smallC.c;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+'. c:'+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 3.2 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile for `p` given medium parameter `c`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var p;
	var c;
	var y;
	var i;

	expected = mediumC.expected;
	p = mediumC.p;
	c = mediumC.c;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+'. c:'+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 3.2 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile for `p` given large parameter `c`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var p;
	var c;
	var y;
	var i;

	expected = largeC.expected;
	p = largeC.p;
	c = largeC.c;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+'. c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 4.8 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
