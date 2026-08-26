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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var logpdf = factory( 1.0 );
	t.strictEqual( typeof logpdf, 'function', 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN` for `sigma`, the created function returns `NaN`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( NaN );
	y = logpdf( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `sigma <= 0`, the created function always returns `NaN`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( -1.0 );

	y = logpdf( 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	logpdf = factory( 0.0 );

	y = logpdf( 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the created function returns `-Infinity` if provided `x < 0`', function test( t ) {
	var logpdf;
	var y;

	logpdf = factory( 1.0 );
	y = logpdf( -1.0 );
	t.strictEqual( y, NINF, 'returns expected value' );

	t.end();
});

tape( 'the created function evaluates the logpdf', function test( t ) {
	var logpdf;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	x = data.x;
	for ( i = 0; i < x.length; i++ ) {
		logpdf = factory( data.sigma[i] );
		y = logpdf( x[i] );
		if ( data.expected[i] !== null ) {
			if ( y === data.expected[i] ) {
				t.strictEqual( y, data.expected[i], 'x: '+x[i]+', sigma: '+data.sigma[i]+', y: '+y+', expected: '+data.expected[i] );
			} else {
				delta = abs( y - data.expected[ i ] );
				tol = 40.0 * EPS * abs( data.expected[ i ] );
				t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. sigma: '+data.sigma[i]+'. y: '+y+'. E: '+data.expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}
	t.end();
});
