/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


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
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = logpdf( 0.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `sigma <= 0`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = logpdf( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `x < 0`, the function returns `-Infinity`', opts, function test( t ) {
	var y = logpdf( -1.0, 1.0 );
	t.strictEqual( y, NINF, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates the logpdf', opts, function test( t ) {
	var expected;
	var delta;
	var sigma;
	var tol;
	var x;
	var y;
	var i;

	x = data.x;
	sigma = data.sigma;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], sigma[i] );
		if ( expected[i] !== null ) {
			if ( y === expected[i] ) {
				t.strictEqual( y, expected[i], 'x: '+x[i]+', sigma: '+sigma[i]+', y: '+y+', expected: '+expected[i] );
			} else {
				delta = abs( y - expected[ i ] );
				tol = 40.0 * EPS * abs( expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. sigma: '+sigma[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});
