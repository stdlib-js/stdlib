/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var largeLarge = require( './fixtures/julia/large_large.json' );
var largeSmall = require( './fixtures/julia/large_small.json' );
var smallLarge = require( './fixtures/julia/small_large.json' );
var smallSmall = require( './fixtures/julia/small_small.json' );


// VARIABLES //

var logpdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( logpdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logpdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = logpdf( NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = logpdf( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `Infinity` for `x` and a finite `v`, the function returns `-Infinity`', opts, function test( t ) {
	var y = logpdf( PINF, 1.0 );
	t.equal( y, NINF, 'returns -Infinity' );
	t.end();
});

tape( 'if provided `-Infinity` for `x` and a finite `v`, the function returns `-Infinity`', opts, function test( t ) {
	var y = logpdf( NINF, 1.0 );
	t.equal( y, NINF, 'returns -Infinity' );
	t.end();
});

tape( 'if provided `Infinity` for `v`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpdf( 0.0, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( NaN, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( PINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( NINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a nonpositive `v`, the function always returns `NaN`', opts, function test( t ) {
	var y;

	y = logpdf( 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the logpdf for `x` given parameter `v` (when `x` and `v` are small)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var y;
	var i;

	expected = smallSmall.expected;
	x = smallSmall.x;
	v = smallSmall.v;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], v[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. v: '+v[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 10.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. v: '+v[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given parameter `v` (when `x` is large and `v` small)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var y;
	var i;

	expected = largeSmall.expected;
	x = largeSmall.x;
	v = largeSmall.v;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], v[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. v: '+v[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 10.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. v: '+v[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given parameter `v` (when `x` is small and `v` large)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var y;
	var i;

	expected = smallLarge.expected;
	x = smallLarge.x;
	v = smallLarge.v;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], v[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. v: '+v[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 50.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. v: '+v[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given parameter `v` (when `x` and `v` are large)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var v;
	var y;
	var i;

	expected = largeLarge.expected;
	x = largeLarge.x;
	v = largeLarge.v;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], v[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+'. v: '+v[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 40.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. v: '+v[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
