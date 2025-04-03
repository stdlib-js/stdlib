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
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var stdev = require( './../lib' );


// FIXTURES //

var smallC = require( './fixtures/python/small_c.json' );
var largeC = require( './fixtures/python/large_c.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof stdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `c`, the function returns `NaN`', function test( t ) {
	var v = stdev( NaN );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `c <= 0`, the function returns `NaN`', function test( t ) {
	var v;

	v = stdev( 0.0 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = stdev( -1.0 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = stdev( NINF );
	t.equal( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the standard deviation of a Bradford distribution given small parameter `c`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var c;
	var y;

	expected = smallC.expected;
	c = smallC.c;
	for ( i = 0; i < expected.length; i++ ) {
		y = stdev( c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );

			/*
			* NOTE: the tolerance is set high in this case due to:
			*
			* 1. The shape parameter being very small which causes differences in the `ln` calculations when compared to the test fixtures by SciPy.
			* 2. The expected values being very small.
			*/
			tol = 322.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns the standard deviation of a Bradford distribution given large parameter `c`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var c;
	var y;

	expected = largeC.expected;
	c = largeC.c;
	for ( i = 0; i < expected.length; i++ ) {
		y = stdev( c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 8.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
