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


// VARIABLES //

var quantile = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( quantile instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/r/data.json' );
var i;
for ( i = 0; i < data.expected.length; i++ ) {
	if ( data.expected[ i ] === 'Inf' ) {
		data.expected[ i ] = PINF;
	}
	if ( data.expected[ i ] === '-Inf' ) {
		data.expected[ i ] = NINF;
	}
}


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = quantile( NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p` and a finite `lambda`, the function returns `NaN`', function test( t ) {
	var y = quantile( 2.2, 1.0 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.2, 1.0 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'if provided `+infinity` for `lambda`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.0, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( NaN, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( PINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( NINF, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a negative `lambda`, the function always returns `NaN`', function test( t ) {
	var y;

	y = quantile( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 2.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the quantile for `x` given parameter `lambda`', function test( t ) {
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
		y = quantile( x[i], lambda[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 110.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
