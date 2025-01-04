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
var ln = require( '@stdlib/math/base/special/ln' );
var abs = require( '@stdlib/math/base/special/abs' );
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

tape( 'main export is a function', opts, opts, opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = logpdf( NaN, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = logpdf( 0.0, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = logpdf( 0.0, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `+infinity` for `x` and a finite `lambda` and `k`, the function returns `-Infinity`', opts, function test( t ) {
	var y = logpdf( PINF, 1.0, 1.0 );
	t.equal( y, NINF, 'returns -Infinity' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a finite `lambda` and `k`, the function returns `-Infinity`', opts, function test( t ) {
	var y = logpdf( NINF, 1.0, 1.0 );
	t.equal( y, NINF, 'returns -Infinity' );
	t.end();
});

tape( 'if provided `lambda <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpdf( 2.0, 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 0.0, 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, 2.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, NaN, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `k <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpdf( 2.0, 0.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 0.0, -1.0, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, NINF, 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, NINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, NINF, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `0.0` for `x`, a positive `lambda` and `k` equal to one, the function returns `ln(k/lambda)`', opts, function test( t ) {
	var lambda;
	var y;
	var k;

	k = 1.0;
	lambda = 3.0;
	y = logpdf( 0.0, k, lambda );
	t.equal( y, ln(k/lambda), 'returns ln(k / lambda)' );
	t.end();
});

tape( 'if provided `0.0` for `x`, a positive `lambda` and `k` not equal to one, the function returns `-Infinity`', opts, function test( t ) {
	var y = logpdf( 0.0, 2.0, 1.0 );
	t.equal( y, NINF, 'returns -Infinity' );
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given large `lambda` and `k`', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var i;
	var k;
	var x;
	var y;

	expected = bothLarge.expected;
	x = bothLarge.x;
	lambda = bothLarge.lambda;
	k = bothLarge.k;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', k: '+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. Expected: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given large scale parameter `lambda`', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var i;
	var k;
	var x;
	var y;

	expected = largeScale.expected;
	x = largeScale.x;
	lambda = largeScale.lambda;
	k = largeScale.k;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', k: '+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. Expected: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given large shape parameter `k`', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var i;
	var k;
	var x;
	var y;

	expected = largeShape.expected;
	x = largeShape.x;
	lambda = largeShape.lambda;
	k = largeShape.k;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', k: '+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. Expected: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
