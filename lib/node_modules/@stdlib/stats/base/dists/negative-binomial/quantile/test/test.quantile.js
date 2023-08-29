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
var NINF = require( '@stdlib/constants/float64/ninf' );
var quantile = require( './../lib' );


// FIXTURES //

var smallSmall = require( './fixtures/julia/small_small.json' );
var smallHigh = require( './fixtures/julia/small_high.json' );
var highSmall = require( './fixtures/julia/high_small.json' );
var highHigh = require( './fixtures/julia/high_high.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = quantile( NaN, 20, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.0, NaN, 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.0, 20, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `k` and a valid `r` and `p`, the function returns `NaN`', function test( t ) {
	var y = quantile( 1.1, 20, 0.5 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.1, 20, 0.5 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'if provided a `r` which is not a positive number, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.5, NINF, 0.8 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, -2.0, 0.8 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, -0.5, 0.8 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a success probability `p` outside `[0,1]`, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.5, 20, 1.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a valid `r` and `p`, the function accurately computes the 0% and 100% quantiles', function test( t ) {
	var y;

	y = quantile( 1.0, 20, 0.5 );
	t.equal( y, PINF, 'returns +Infinity' );

	y = quantile( 0.0, 20, 0.5 );
	t.equal( y, 0.0, 'returns 0.0' );

	t.end();
});

tape( 'the function evaluates the quantile for `x` given large parameters `r` and `p`', function test( t ) {
	var expected;
	var r;
	var k;
	var p;
	var y;
	var i;

	expected = highHigh.expected;
	k = highHigh.k;
	r = highHigh.r;
	p = highHigh.p;
	for ( i = 0; i < k.length; i++ ) {
		y = quantile( k[i], r[i], p[i] );
		t.equal( y, expected[i], 'k: '+k[i]+', r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the quantile for `x` given large parameter `r` and small `p`', function test( t ) {
	var expected;
	var r;
	var k;
	var p;
	var y;
	var i;

	expected = highSmall.expected;
	k = highSmall.k;
	r = highSmall.r;
	p = highSmall.p;
	for ( i = 0; i < k.length; i++ ) {
		y = quantile( k[i], r[i], p[i] );
		t.equal( y, expected[i], 'k: '+k[i]+', r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the quantile for `x` given small `r` and large `p`', function test( t ) {
	var expected;
	var r;
	var k;
	var p;
	var y;
	var i;

	expected = smallHigh.expected;
	k = smallHigh.k;
	r = smallHigh.r;
	p = smallHigh.p;
	for ( i = 0; i < k.length; i++ ) {
		y = quantile( k[i], r[i], p[i] );
		t.equal( y, expected[i], 'k: '+k[i]+', r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the quantile for `x` given small `r` and `p`', function test( t ) {
	var expected;
	var r;
	var k;
	var p;
	var y;
	var i;

	expected = smallSmall.expected;
	k = smallSmall.k;
	r = smallSmall.r;
	p = smallSmall.p;
	for ( i = 0; i < k.length; i++ ) {
		y = quantile( k[i], r[i], p[i] );
		t.equal( y, expected[i], 'k: '+k[i]+', r: '+r[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
