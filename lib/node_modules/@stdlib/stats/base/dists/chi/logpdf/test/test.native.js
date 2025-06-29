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

var data = require( './fixtures/julia/decimal_decimal.json' );


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

tape( 'if provided a non-positive `k`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpdf( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = logpdf( 2.0, -2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `k` equal to 0, the function returns `+infinity` or `-infinity` depending on `x`', opts, function test( t ) {
	var y;

	y = logpdf( 0.0, 0.0 );
	t.equal( y, PINF, 'returns +infinity' );

	y = logpdf( 2.0, 0.0 );
	t.equal( y, NINF, 'returns -infinity' );

	t.end();
});

tape( 'if provided `+infinity` for `x` and a valid `k`, the function returns `-infinity`', opts, function test( t ) {
	var y = logpdf( PINF, 1.0 );
	t.equal( y, NINF, 'returns -infinity' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a valid `k`, the function returns `-infinity`', opts, function test( t ) {
	var y = logpdf( NINF, 1.0 );
	t.equal( y, NINF, 'returns -infinity' );
	t.end();
});

tape( 'the function evaluates the logpdf for given `x` and `k`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var k;
	var y;
	var i;

	expected = data.expected;
	x = data.x;
	k = data.k;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[ i ], k[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: ' + x[ i ] + ', k: ' + k[ i ] + ', y: ' + y + ', expected: ' + expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 40.0 * EPS * abs( expected[ i ] ); // Higher tolerance needed due to accumulated floating-point precision differences between JS and C implementations
			t.ok( delta <= tol, 'within tolerance. x: ' + x[ i ] + '. k: ' + k[ i ] + '. y: ' + y + '. E: ' + expected[ i ] + '. Δ: ' + delta + '. tol: ' + tol + '.' );
		}
	}
	t.end();
});
