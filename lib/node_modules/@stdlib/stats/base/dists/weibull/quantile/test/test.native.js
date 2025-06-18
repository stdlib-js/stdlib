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
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var bothLarge = require( './fixtures/julia/both_large.json' );
var largeScale = require( './fixtures/julia/large_scale.json' );
var largeShape = require( './fixtures/julia/large_shape.json' );


// VARIABLES //

var quantile = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( quantile instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = quantile( NaN, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.5, NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.5, 1.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `+infinity` for `p`, the function returns `NaN`', opts, function test( t ) {
	var y = quantile( PINF, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `-infinity` for `p`, the function returns `NaN`', opts, function test( t ) {
	var y = quantile( NINF, 1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `k <= 0` or `lambda <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = quantile( 0.5, -1.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 1.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 0.0, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 1.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the quantile for `p` given large `k` and `lambda`', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var p;
	var k;
	var y;
	var i;

	expected = bothLarge.expected;
	p = bothLarge.p;
	k = bothLarge.k;
	lambda = bothLarge.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[ i ], k[ i ], lambda[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'p: ' + p[ i ] + ', k: ' + k[ i ] + ', lambda: ' + lambda[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: ' + p[ i ] + '. k: ' + k[ i ] + '. lambda: ' + lambda[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile for `p` given large `lambda`', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var p;
	var k;
	var y;
	var i;

	expected = largeScale.expected;
	p = largeScale.p;
	k = largeScale.k;
	lambda = largeScale.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[ i ], k[ i ], lambda[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'p: ' + p[ i ] + ', k: ' + k[ i ] + ', lambda: ' + lambda[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			if ( k[ i ] > 4.0 ||
				lambda[ i ] > 4.0 ||
				p[ i ] < 0.01 ||
				p[ i ] > 0.99 ) {
				tol = 8.0 * EPS * abs( expected[ i ] ); // Increase the tolerance factor for extreme values
			} else {
				tol = 2.0 * EPS * abs( expected[ i ] );
			}
			t.ok( delta <= tol, 'within tolerance. p: ' + p[ i ] + '. k: ' + k[ i ] + '. lambda: ' + lambda[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the quantile for `p` given large `k`', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var p;
	var k;
	var y;
	var i;

	expected = largeShape.expected;
	p = largeShape.p;
	k = largeShape.k;
	lambda = largeShape.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[ i ], k[ i ], lambda[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'p: ' + p[ i ] + ', k: ' + k[ i ] + ', lambda: ' + lambda[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: ' + p[ i ] + '. k: ' + k[ i ] + '. lambda: ' + lambda[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});
