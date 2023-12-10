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

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var quantile = factory( 4, 4, 2 );
	t.equal( typeof quantile, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 8, 4, 2 );
	y = quantile( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, 4, 2 );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 8, NaN, 2 );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 8, 4, NaN );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 8, NaN, NaN );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, 4, NaN );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, NaN, 2 );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, NaN, NaN );
	y = quantile( 0.2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NaN, NaN, NaN );
	y = quantile( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided valid parameters, the function returns a function which returns `NaN` when provided a number outside `[0,1]` for `p`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 6, 4, 2 );
	y = quantile( -0.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 1.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `N` which is not a nonnegative integer, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 20.5, 4, 2 );

	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( -1.0, 4, 2 );

	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( NINF, 4, 2 );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( PINF, 4, 2 );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a `K` which is not a nonnegative integer, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 40, 20.5, 2 );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 40, -1.0, 2 );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 40, NINF, 2 );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 40, PINF, 2 );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the created function always returns `NaN`', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 20, 10, 2.5 );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 4, 2, -1.0 );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 4, 2, NINF );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	quantile = factory( 4, 2, PINF );
	y = quantile( 0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'given valid parameters, the created function returns `max( 0, n + K - N )` as the 0% quantile', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 20, 10, 5 );
	y = quantile( 0.0 );
	t.equal( y, 0, 'returns 0' );

	quantile = factory( 20, 10, 15 );
	y = quantile( 0.0 );
	t.equal( y, 5, 'returns 5' );
	t.end();
});

tape( 'given valid parameters, the created function returns `min( n, K )` as the 100% quantile', function test( t ) {
	var quantile;
	var y;

	quantile = factory( 30, 20, 15 );
	y = quantile( 1.0 );
	t.equal( y, 15, 'returns 15' );

	quantile = factory( 30, 20, 25 );
	y = quantile( 1.0 );
	t.equal( y, 20, 'returns 20' );

	quantile = factory( 30, 20, 5 );
	y = quantile( 1.0 );
	t.equal( y, 5, 'returns 5' );

	t.end();
});

tape( 'the created function evaluates the quantile for `p` given valid parameters', function test( t ) {
	var expected;
	var quantile;
	var p;
	var N;
	var K;
	var n;
	var y;
	var i;

	expected = data.expected;
	p = data.p;
	N = data.N;
	K = data.K;
	n = data.n;
	for ( i = 0; i < p.length; i++ ) {
		quantile = factory( N[i], K[i], n[i] );
		y = quantile( p[i] );
		t.equal( y, expected[i], 'p: '+p[i]+', N: '+N[i]+', K: '+K[i]+', n: '+n[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
