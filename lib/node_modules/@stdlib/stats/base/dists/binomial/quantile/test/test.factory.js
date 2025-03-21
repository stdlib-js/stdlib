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
var factory = require( './../lib/factory.js' );


// FIXTURES //

var smallSmall = require( './fixtures/julia/small_small.json' );
var smallHigh = require( './fixtures/julia/small_high.json' );
var highSmall = require( './fixtures/julia/high_small.json' );
var highHigh = require( './fixtures/julia/high_high.json' );


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

	quantile = factory( 20, 0.5 );
	y = quantile( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, 0.5 );
	y = quantile( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 20, NaN );
	y = quantile( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, NaN );
	y = quantile( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, NaN );
	y = quantile( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a valid `n` and `p`, the function returns a function which returns `NaN` when provided a number outside `[0,1]` for `p`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 20, 0.5 );
	y = quantile( -0.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 1.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a success probability `p` outside of `[0,1]`, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 20, -1.0 );

	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 20, NINF );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 20, PINF );
	y = quantile( 0.3 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 20, 1.5 );
	y = quantile( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a `n` which is not a nonnegative integer, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 20.5, 0.5 );

	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( -1.0, 0.5 );

	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NINF, 0.5 );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( PINF, 0.5 );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if `p` or `n` equals `0`, the created function evaluates a degenerate distribution centered at `0`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 0, 0.5 );

	y = quantile( 0.3 );
	t.equal( y, 0, 'returns 0 for r inside [0,1]' );

	y = quantile( 0.9 );
	t.equal( y, 0, 'returns 0 for r inside [0,1]' );

	y = quantile( 1.1 );
	t.equal( isnan( y ), true, 'returns NaN for r outside [0,1]' );

	y = quantile( -0.1 );
	t.equal( isnan( y ), true, 'returns NaN for r outside [0,1]' );

	quantile = factory( 8, 0.0 );

	y = quantile( 0.3 );
	t.equal( y, 0, 'returns 0 for r inside [0,1]' );

	y = quantile( 0.9 );
	t.equal( y, 0, 'returns 0 for r inside [0,1]' );

	y = quantile( 1.1 );
	t.equal( isnan( y ), true, 'returns NaN for r outside [0,1]' );

	y = quantile( -0.1 );
	t.equal( isnan( y ), true, 'returns NaN for r outside [0,1]' );

	t.end();
});

tape( 'if `p` equals `1.0`, the created function evaluates a degenerate distribution centered at `n`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 8, 1.0 );

	y = quantile( 0.3 );
	t.equal( y, 8, 'returns 8 for r inside [0,1]' );

	y = quantile( 0.9 );
	t.equal( y, 8, 'returns 8 for r inside [0,1]' );

	y = quantile( 1.1 );
	t.equal( isnan( y ), true, 'returns NaN for r outside [0,1]' );

	y = quantile( -0.1 );
	t.equal( isnan( y ), true, 'returns NaN for r outside [0,1]' );

	t.end();
});

tape( 'given valid parameters, the created function evaluates the 0% and 100% as 0 and n, respectively', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 8, 0.5 );

	y = quantile( 0.0 );
	t.equal( y, 0, 'returns 0' );

	y = quantile( 1.0 );
	t.equal( y, 8, 'returns 8' );

	t.end();
});

tape( 'the created function evaluates the quantile for `r` given large `n` and `p`', function test( t ) {
	var expected;
	var quantile;
	var r;
	var n;
	var p;
	var y;
	var i;

	expected = highHigh.expected;
	r = highHigh.r;
	n = highHigh.n;
	p = highHigh.p;
	for ( i = 0; i < r.length; i++ ) {
		quantile = factory( n[i], p[i] );
		y = quantile( r[i] );
		t.equal( y, expected[i], 'r: '+r[i]+', n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the created function evaluates the quantile for `r` given large `n` and small `p`', function test( t ) {
	var expected;
	var quantile;
	var r;
	var n;
	var p;
	var y;
	var i;

	expected = highSmall.expected;
	r = highSmall.r;
	n = highSmall.n;
	p = highSmall.p;
	for ( i = 0; i < r.length; i++ ) {
		quantile = factory( n[i], p[i] );
		y = quantile( r[i] );
		t.equal( y, expected[i], 'r: '+r[i]+', n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the created function evaluates the quantile for `r` given small `n` and large `p`', function test( t ) {
	var expected;
	var quantile;
	var r;
	var n;
	var p;
	var y;
	var i;

	expected = smallHigh.expected;
	r = smallHigh.r;
	n = smallHigh.n;
	p = smallHigh.p;
	for ( i = 0; i < r.length; i++ ) {
		quantile = factory( n[i], p[i] );
		y = quantile( r[i] );
		t.equal( y, expected[i], 'r: '+r[i]+', n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'the created function evaluates the quantile for `r` given small `n` and `p`', function test( t ) {
	var expected;
	var quantile;
	var r;
	var n;
	var p;
	var y;
	var i;

	expected = smallSmall.expected;
	r = smallSmall.r;
	n = smallSmall.n;
	p = smallSmall.p;
	for ( i = 0; i < r.length; i++ ) {
		quantile = factory( n[i], p[i] );
		y = quantile( r[i] );
		t.equal( y, expected[i], 'r: '+r[i]+', n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
