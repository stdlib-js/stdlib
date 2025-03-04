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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pmf = require( './../lib/main.js' );


// FIXTURES //

var smallLambda = require( './fixtures/python/small_lambda.json' );
var largeLambda = require( './fixtures/python/large_lambda.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pmf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = pmf( NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );
	y = pmf( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity` for `x` and a valid `lambda`, the function returns `0`', function test( t ) {
	var y = pmf( PINF, 0.01 );
	t.equal( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a negative integer for `x` and a valid `lambda`, the function returns `0`', function test( t ) {
	var y = pmf( -20.0, 0.5 );
	t.equal( y, 0.0, 'returns expected value' );

	y = pmf( -4.0, 1.5 );
	t.equal( y, 0.0, 'returns expected value' );

	y = pmf( -1.0, 2.5 );
	t.equal( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a non-integer for `x` and a valid `lambda`, the function returns `0`', function test( t ) {
	var y = pmf( -1.3, 0.5 );
	t.equal( y, 0.0, 'returns expected value' );

	y = pmf( 2.4, 0.5 );
	t.equal( y, 0.0, 'returns expected value' );

	y = pmf( 0.5, 0.5 );
	t.equal( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a shape parameter `lambda` which is nonpositive, the function always returns `NaN`', function test( t ) {
	var y;

	y = pmf( 2.0, -1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = pmf( 0.0, -1.5 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the pmf for `x` given small parameter `lambda`', function test( t ) {
	var expected;
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
		y = pmf( x[ i ], lambda[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+'. lambda:'+lambda[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. lambda: '+lambda[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the pmf for `x` given large parameter `lambda`', function test( t ) {
	var expected;
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
		y = pmf( x[ i ], lambda[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+'. lambda:'+lambda[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. lambda: '+lambda[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
