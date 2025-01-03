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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );


// FIXTURES //

var smallRange = require( './fixtures/julia/small_range.json' );
var mediumRange = require( './fixtures/julia/medium_range.json' );
var largeRange = require( './fixtures/julia/large_range.json' );


// VARIABLES //

var pdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( pdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = pdf( NaN, 0.0, 1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( 0.0, NaN, 1.0, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( 0.0, 1.0, NaN, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( 0.0, 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a number greater than `b` for `x` and valid parameters, the function returns `0`', opts, function test( t ) {
	var y = pdf( PINF, 0.0, 1.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pdf( 20.0, 0.0, 1.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pdf( 2.0, 0.0, 1.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pdf( 1.1, 0.0, 1.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a number smaller than `a` for `x` and valid parameters, the function returns `0`', opts, function test( t ) {
	var y = pdf( NINF, 0.0, 1.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pdf( -20.0, 0.0, 1.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pdf( -2.0, 0.0, 1.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	y = pdf( -0.5, 0.0, 1.0, 0.5 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided parameters not satisfying `a <= c <= b`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = pdf( 2.0, 3.0, 2.0, 2.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( 0.0, 2.0, 3.0, 4.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( 2.0, 2.0, 3.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( 2.0, PINF, NINF, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `2/(b-a)` if provided `x = c`', opts, function test( t ) {
	var a = 0.0;
	var b = 2.0;
	var c = 1.5;
	t.equal( pdf( c, a, b, c ), 2/(b-a), 'returns 2/(b-a)' );
	t.end();
});

tape( 'the function evaluates the pdf for `x` given a small range `b - a`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = smallRange.expected;
	x = smallRange.x;
	a = smallRange.a;
	b = smallRange.b;
	c = smallRange.c;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pdf for `x` given a medium range `b - a`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = mediumRange.expected;
	x = mediumRange.x;
	a = mediumRange.a;
	b = mediumRange.b;
	c = mediumRange.c;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pdf for `x` given a large range `b - a`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = largeRange.expected;
	x = largeRange.x;
	a = largeRange.a;
	b = largeRange.b;
	c = largeRange.c;
	for ( i = 0; i < x.length; i++ ) {
		y = pdf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
