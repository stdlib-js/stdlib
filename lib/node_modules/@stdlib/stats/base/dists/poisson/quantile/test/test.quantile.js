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
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var quantile = require( './../lib' );


// FIXTURES //

var smallMean = require( './fixtures/julia/small_mean.json' );
var mediumMean = require( './fixtures/julia/medium_mean.json' );
var largeMean = require( './fixtures/julia/large_mean.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
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

tape( 'if provided `p = 0` and a finite `lambda`, the function returns `0`', function test( t ) {
	var y = quantile( 0.0, 3.0 );
	t.equal( y, 0.0, 'returns 0' );
	y = quantile( 0.0, 6.9 );
	t.equal( y, 0.0, 'returns 0' );
	t.end();
});

tape( 'if provided `p = 1` and a finite `lambda`, the function returns `+infinity`', function test( t ) {
	var y = quantile( 1.0, 3.0 );
	t.equal( y, PINF, 'returns +infinity' );
	y = quantile( 1.0, 6.9 );
	t.equal( y, PINF, 'returns +infinity' );
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

tape( 'if provided a `lambda` equal to `0`, the function always returns `0`', function test( t ) {
	var y;

	y = quantile( 2.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 3.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 5.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the quantile for `p` given small parameter `lambda`', function test( t ) {
	var expected;
	var lambda;
	var i;
	var p;
	var y;

	expected = smallMean.expected;
	p = smallMean.p;
	lambda = smallMean.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], lambda[i] );
		t.equal( y, expected[i], 'p: '+p[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the quantile for `p` given medium parameter `lambda`', function test( t ) {
	var expected;
	var lambda;
	var i;
	var p;
	var y;

	expected = mediumMean.expected;
	p = mediumMean.p;
	lambda = mediumMean.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], lambda[i] );
		t.equal( y, expected[i], 'p: '+p[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the quantile for `p` given large parameter `lambda`', function test( t ) {
	var expected;
	var lambda;
	var i;
	var p;
	var y;

	expected = largeMean.expected;
	p = largeMean.p;
	lambda = largeMean.lambda;
	for ( i = 0; i < p.length; i++ ) {
		y = quantile( p[i], lambda[i] );
		t.equal( y, expected[i], 'p: '+p[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
