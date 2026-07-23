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
var EPS = require( '@stdlib/constants/float64/eps' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var smallC = require( './fixtures/python/small_c.json' );
var mediumC = require( './fixtures/python/medium_c.json' );
var largeC = require( './fixtures/python/large_c.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var quantile = factory( 1.0 );
	t.strictEqual( typeof quantile, 'function', 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 1.0 );
	y = quantile( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NaN );
	y = quantile( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	quantile = factory( NaN );
	y = quantile( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `c <= 0`, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( -1.0 );

	y = quantile( 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a finite `c`, the function returns a function which returns `NaN` when provided a number outside `[0,1]` for `p`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 1.0 );

	y = quantile( -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( -0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 1.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = quantile( 10.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the created function evaluates the quantile for `p` given small `c`', function test( t ) {
	var expected;
	var quantile;
	var delta;
	var tol;
	var c;
	var i;
	var p;
	var y;

	expected = smallC.expected;
	p = smallC.p;
	c = smallC.c;
	for ( i = 0; i < expected.length; i++ ) {
		quantile = factory( c[i] );
		y = quantile( p[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'p: '+p[i]+'. c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 3.2 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the quantile for `p` given a medium `c`', function test( t ) {
	var expected;
	var quantile;
	var delta;
	var tol;
	var c;
	var i;
	var p;
	var y;

	expected = mediumC.expected;
	p = mediumC.p;
	c = mediumC.c;
	for ( i = 0; i < expected.length; i++ ) {
		quantile = factory( c[i] );
		y = quantile( p[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'p: '+p[i]+'. c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 3.2 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the quantile for `p` given a large `c`', function test( t ) {
	var expected;
	var quantile;
	var delta;
	var tol;
	var c;
	var i;
	var p;
	var y;

	expected = largeC.expected;
	p = largeC.p;
	c = largeC.c;
	for ( i = 0; i < expected.length; i++ ) {
		quantile = factory( c[i] );
		y = quantile( p[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'p: '+p[i]+'. c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 4.8 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[ i ]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
