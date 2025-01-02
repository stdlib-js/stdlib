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
var PINF = require( '@stdlib/constants/float64/pinf' );
var quantile = require( './../lib' );


// FIXTURES //

var smallLambda = require( './fixtures/python/small_lambda.json' );
var largeLambda = require( './fixtures/python/large_lambda.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = quantile( NaN, 1.0 );
	t.equal( isnan( y ), true, 'returns expected value' );
	y = quantile( 0.0, NaN );
	t.equal( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p` and a valid `lambda`, the function returns `NaN`', function test( t ) {
	var y = quantile( 2.2, 0.8 );
	t.equal( isnan( y ), true, 'returns expected value' );
	y = quantile( -0.2, 0.8 );
	t.equal( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `1.0` for `p` and a valid `lambda`, the function returns `+Infinity`', function test( t ) {
	var y = quantile( 1.0, 0.5 );
	t.equal( y, PINF, 'returns expected value' );
	y = quantile( 1.0, 1.5 );
	t.equal( y, PINF, 'returns expected value' );
	t.end();
});

tape( 'if provided a shape parameter `lambda` which is nonpositive, the function always returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.8, -1.5 );
	t.equal( isnan( y ), true, 'returns expected value' );

	y = quantile( 0.9, 0.0 );
	t.equal( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the quantile for `p` given small parameter `lambda`', function test( t ) {
	var expected;
	var lambda;
	var p;
	var y;
	var i;

	expected = smallLambda.expected;
	p = smallLambda.r;
	lambda = smallLambda.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[ i ], lambda[ i ] );
		t.equal( y, expected[ i ], 'p: '+p[ i ]+', lambda: '+lambda[ i ]+', y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});

tape( 'the function evaluates the quantile for `p` given large parameter `lambda`', function test( t ) {
	var expected;
	var lambda;
	var p;
	var y;
	var i;

	expected = largeLambda.expected;
	p = largeLambda.r;
	lambda = largeLambda.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[ i ], lambda[ i ] );
		t.equal( y, expected[ i ], 'p: '+p[ i ]+', lambda: '+lambda[ i ]+', y: '+y+', expected: '+expected[ i ] );
	}
	t.end();
});
