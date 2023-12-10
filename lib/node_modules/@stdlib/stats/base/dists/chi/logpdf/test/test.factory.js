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
var randu = require( '@stdlib/random/base/randu' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var decimalDecimal = require( './fixtures/julia/decimal_decimal.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var logpdf = factory( 0.0, 1.0 );
	t.equal( typeof logpdf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( 1.0 );
	y = logpdf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	logpdf = factory( NaN );
	y = logpdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a finite `k`, the function returns a function which returns `-Infinity` when provided `Infinity` for `x`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( 1.0 );
	y = logpdf( PINF );
	t.equal( y, NINF, 'returns -Infinity' );

	t.end();
});

tape( 'if provided a finite `k`, the function returns a function which returns `-Infinity` when provided `-Infinity` for `x`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( 1.0 );
	y = logpdf( NINF );
	t.equal( y, NINF, 'returns -Infinity' );

	t.end();
});

tape( 'if provided a negative `k`, the created function always returns `NaN`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( -1.0 );

	y = logpdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if `k` equals `0`, the created function evaluates a degenerate distribution centered at `0.0`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( 0.0 );

	y = logpdf( -2.0 );
	t.equal( y, NINF, 'returns -Infinity' );

	y = logpdf( 0.0 );
	t.equal( y, PINF, 'returns Infinity for x equal to 0' );

	y = logpdf( 1.0 );
	t.equal( y, NINF, 'returns -Infinity' );

	y = logpdf( PINF );
	t.equal( y, NINF, 'returns -Infinity' );

	y = logpdf( NINF );
	t.equal( y, NINF, 'returns -Infinity' );

	y = logpdf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the returned function returns `-Infinity` for all `x < 0`', function test( t ) {
	var logpdf;
	var x;
	var y;
	var i;

	logpdf = factory( 1.0 );
	for ( i = 0; i < 100; i++ ) {
		x = -( randu()*100.0 ) - EPS;
		y = logpdf( x );
		t.equal( y, NINF, 'returns -Infinity for x='+x );
	}
	t.end();
});

tape( 'the created function evaluates the logpdf for `x` given degrees of freedom `k`', function test( t ) {
	var expected;
	var logpdf;
	var delta;
	var tol;
	var k;
	var x;
	var y;
	var i;

	expected = decimalDecimal.expected;
	x = decimalDecimal.x;
	k = decimalDecimal.k;
	for ( i = 0; i < x.length; i++ ) {
		logpdf = factory( k[i] );
		y = logpdf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. k:'+k[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. k: '+k[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
