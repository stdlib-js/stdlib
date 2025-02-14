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

var data = require( './fixtures/r/data.json' );


// VARIABLES //

var cdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = cdf( NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = cdf( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `+infinity` for `x` and a finite `lambda`, the function returns `1`', opts, function test( t ) {
	var y = cdf( PINF, 1.0 );
	t.equal( y, 1.0, 'returns 1' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a finite `lambda`, the function returns `0`', opts, function test( t ) {
	var y = cdf( NINF, 1.0 );
	t.equal( y, 0.0, 'returns 0' );
	t.end();
});

tape( 'if provided `+infinity` for `lambda`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( 0.0, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( NaN, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( PINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( NINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a negative `lambda`, the function always returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = cdf( 2.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the cdf for `x` given parameter `lambda`', opts, function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = data.expected;
	x = data.x;
	lambda = data.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', lambda:'+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 4.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
