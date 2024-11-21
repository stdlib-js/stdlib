/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var factory = require( './../lib/factory.js' );


// FIXTURES //

var smallMean = require( './fixtures/julia/small_mean.json' );
var mediumMean = require( './fixtures/julia/medium_mean.json' );
var largeMean = require( './fixtures/julia/large_mean.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var quantile = factory( 0.0, 1.0 );
	t.equal( typeof quantile, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 1.0 );
	y = quantile( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN );
	y = quantile( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a finite `lambda`, the function returns a function which returns `NaN` when provided a number outside `[0,1]` for `p`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 1.0 );
	y = quantile( -0.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 1.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a negative `lambda`, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( -1.0 );

	y = quantile( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a finite `lambda`, the created function returns `0` for `p = 0`', function test( t ) {
	var quantile = factory( 3.0 );
	var y = quantile( 0.0 );
	t.equal( y, 0.0, 'returns 0' );

	quantile = factory( 6.9 );
	y = quantile( 0.0 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a finite `lambda`, the created function returns `+infinity` for `p = 1`', function test( t ) {
	var quantile = factory( 3.0 );
	var y = quantile( 1.0 );
	t.equal( y, PINF, 'returns +infinity' );

	quantile = factory( 6.9 );
	y = quantile( 1.0 );
	t.equal( y, PINF, 'returns +infinity' );

	t.end();
});

tape( 'the created function evaluates the quantile for `p` given small parameter `lambda`', function test( t ) {
	var expected;
	var quantile;
	var lambda;
	var i;
	var p;
	var y;

	expected = smallMean.expected;
	p = smallMean.p;
	lambda = smallMean.lambda;
	for ( i = 0; i < p.length; i++ ) {
		quantile = factory( lambda[i] );
		y = quantile( p[i] );
		t.equal( y, expected[i], 'p: '+p[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the created function evaluates the quantile for `p` given medium parameter `lambda`', function test( t ) {
	var expected;
	var quantile;
	var lambda;
	var i;
	var p;
	var y;

	expected = mediumMean.expected;
	p = mediumMean.p;
	lambda = mediumMean.lambda;
	for ( i = 0; i < p.length; i++ ) {
		quantile = factory( lambda[i] );
		y = quantile( p[i] );
		t.equal( y, expected[i], 'p: '+p[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the created function evaluates the quantile for `p` given large parameter `lambda`', function test( t ) {
	var expected;
	var quantile;
	var lambda;
	var i;
	var p;
	var y;

	expected = largeMean.expected;
	p = largeMean.p;
	lambda = largeMean.lambda;
	for ( i = 0; i < p.length; i++ ) {
		quantile = factory( lambda[i] );
		y = quantile( p[i] );
		t.equal( y, expected[i], 'p: '+p[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
