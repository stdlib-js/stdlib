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
var tryRequire = require( '@stdlib/utils/try-require' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var largeScale = require( './fixtures/julia/large_scale.json' );
var largeShape = require( './fixtures/julia/large_shape.json' );
var bothLarge = require( './fixtures/julia/both_large.json' );


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
	var y = logpdf( NaN, 1.0, 1.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = logpdf( 0.0, NaN, 1.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = logpdf( 0.0, 1.0, NaN, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = logpdf( 0.0, 1.0, 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `x <= m` and a valid `alpha` and `s`, the function returns `-Infinity`', opts, function test( t ) {
	var y = logpdf( NINF, 1.0, 1.0, 1.0 );
	t.strictEqual( y, NINF, 'returns expected value' );

	y = logpdf( 0.0, 1.0, 1.0, 1.0 );
	t.strictEqual( y, NINF, 'returns expected value' );

	y = logpdf( 1.0, 1.0, 1.0, 1.0 );
	t.strictEqual( y, NINF, 'returns expected value' );

	y = logpdf( 2.0, 1.0, 1.0, 3.0 );
	t.strictEqual( y, NINF, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `alpha`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpdf( 2.0, -1.0, 1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0, -1.0, 1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, 0.0, 1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0, 0.0, 1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NINF, 1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NINF, PINF, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NINF, NaN, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `s`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpdf( 2.0, 2.0, -1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0, 2.0, -1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, 2.0, 0.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0, 2.0, 0.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, 1.0, NINF, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, PINF, NINF, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NaN, NINF, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the logPDF for `x` given large `alpha`', opts, function test( t ) {
	var expected;
	var alpha;
	var delta;
	var tol;
	var s;
	var x;
	var y;
	var i;

	expected = largeShape.expected;
	x = largeShape.x;
	alpha = largeShape.alpha;
	s = largeShape.s;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], alpha[i], s[i], 0.0 );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', alpha: '+alpha[i]+', s: '+s[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 5.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. alpha: '+alpha[i]+'. s: '+s[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logPDF for `x` given large `s`', opts, function test( t ) {
	var expected;
	var alpha;
	var delta;
	var tol;
	var s;
	var x;
	var y;
	var i;

	expected = largeScale.expected;
	x = largeScale.x;
	alpha = largeScale.alpha;
	s = largeScale.s;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], alpha[i], s[i], 0.0 );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', alpha: '+alpha[i]+', s: '+s[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 5.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. alpha: '+alpha[i]+'. s: '+s[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logPDF for `x` given large `alpha` and `s`', opts, function test( t ) {
	var expected;
	var alpha;
	var delta;
	var tol;
	var s;
	var x;
	var y;
	var i;

	expected = bothLarge.expected;
	x = bothLarge.x;
	alpha = bothLarge.alpha;
	s = bothLarge.s;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], alpha[i], s[i], 0.0 );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', alpha: '+alpha[i]+', s: '+s[i]+', m: 0, y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 20.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. alpha: '+alpha[i]+'. s: '+s[i]+'. y: '+y+'. m: 0. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
