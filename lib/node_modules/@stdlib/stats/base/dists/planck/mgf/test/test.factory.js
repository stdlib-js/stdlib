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
	var mgf = factory( 0.5 );
	t.equal( typeof mgf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the returned function returns `NaN`', function test( t ) {
	var mgf;
	var y;

	mgf = factory( 0.5 );
	y = mgf( NaN );
	t.equal( isnan( y ), true, 'returns expected value' );

	mgf = factory( NaN );
	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a shape parameter `lambda` which is nonpositive, the returned function always returns `NaN`', function test( t ) {
	var mgf;
	var y;

	mgf = factory( 0.0 );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );
	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	mgf = factory( -1.0 );
	y = mgf( 2.0 );
	t.equal( isnan( y ), true, 'returns expected value' );
	y = mgf( 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the returned function evaluates the mgf for `x` given small parameter `lambda`', function test( t ) {
	var expected;
	var lambda;
	var delta;
	var mgf;
	var tol;
	var x;
	var y;
	var i;

	expected = smallLambda.expected;
	x = smallLambda.x;
	lambda = smallLambda.lambda;
	for ( i = 0; i < x.length; i++ ) {
		mgf = factory( lambda[ i ] );
		y = mgf( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', lambda: '+lambda[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. lambda: '+lambda[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function evaluates the mgf for `x` given large parameter `lambda`', function test( t ) {
	var expected;
	var lambda;
	var delta;
	var mgf;
	var tol;
	var x;
	var y;
	var i;

	expected = largeLambda.expected;
	x = largeLambda.x;
	lambda = largeLambda.lambda;
	for ( i = 0; i < x.length; i++ ) {
		mgf = factory( lambda[ i ] );
		y = mgf( x[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[ i ]+', lambda: '+lambda[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. lambda: '+lambda[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
