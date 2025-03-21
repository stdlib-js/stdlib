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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var smallLambda = require( './fixtures/python/small_lambda.json' );
var largeLambda = require( './fixtures/python/large_lambda.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var logcdf = factory( 0.5 );
	t.equal( typeof logcdf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the returned function returns `NaN`', function test( t ) {
	var logcdf;
	var y;

	logcdf = factory( 0.5 );
	y = logcdf( NaN );
	t.equal( isnan( y ), true, 'returns expected value' );

	logcdf = factory( NaN );
	y = logcdf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a valid `lambda`, the function returns a function which returns `0` when provided `+infinity` for `x`', function test( t ) {
	var logcdf;
	var y;

	logcdf = factory( 0.5 );
	y = logcdf( PINF );
	t.equal( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a valid `lambda`, the function returns a function which returns `-Infinity` when provided a negative number for `x`', function test( t ) {
	var logcdf;
	var y;

	logcdf = factory( 0.5 );
	y = logcdf( NINF );
	t.equal( y, NINF, 'returns expected value' );

	y = logcdf( -20.0 );
	t.equal( y, NINF, 'returns expected value' );

	y = logcdf( -2.0 );
	t.equal( y, NINF, 'returns expected value' );
	y = logcdf( -0.5 );
	t.equal( y, NINF, 'returns expected value' );

	t.end();
});

tape( 'if provided a shape parameter `lambda` which is nonpositive, the returned function always returns `NaN`', function test( t ) {
	var logcdf;
	var y;

	logcdf = factory( 0.0 );

	y = logcdf( 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	logcdf = factory( -1.5 );

	y = logcdf( 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = logcdf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the returned function evaluates the logcdf for `x` given small parameter `lambda`', function test( t ) {
	var expected;
	var logcdf;
	var lambda;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = smallLambda.expected;
	x = smallLambda.x;
	lambda = smallLambda.lambda;
	for ( i = 0; i < x.length; i++ ) {
		logcdf = factory( lambda[ i ] );
		y = logcdf( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', lambda: '+lambda[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. lambda: '+lambda[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function evaluates the logcdf for `x` given small parameter `lambda`', function test( t ) {
	var expected;
	var logcdf;
	var lambda;
	var delta;
	var tol;
	var x;
	var y;
	var i;

	expected = largeLambda.expected;
	x = largeLambda.x;
	lambda = largeLambda.lambda;
	for ( i = 0; i < x.length; i++ ) {
		logcdf = factory( lambda[ i ] );
		y = logcdf( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', lambda: '+lambda[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. lambda: '+lambda[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
