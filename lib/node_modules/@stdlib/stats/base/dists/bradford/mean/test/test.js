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
var mean = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mean, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `c`, the function returns `NaN`', function test( t ) {
	var v = mean( NaN );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `c <= 0`, the function returns `NaN`', function test( t ) {
	var v;

	v = mean( 0.0 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = mean( -1.0 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = mean( NINF );
	t.equal( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the mean of a Bradford distribution', function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var c;
	var y;

	expected = data.expected;
	c = data.x;
	for ( i = 0; i < expected.length; i++ ) {
		y = mean( c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 4.7 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
