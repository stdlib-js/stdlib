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

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quantile, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = quantile( NaN, 20, 20, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.2, NaN, 10, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.2, 20, NaN, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );
	y = quantile( 0.2, 20, 20, NaN );
	t.equal( isnan( y ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a number outside `[0,1]` for `p` and valid parameters, the function returns `NaN`', function test( t ) {
	var y = quantile( 1.1, 20, 10, 10 );
	t.equal( isnan( y ), true, 'returns true' );
	y = quantile( -0.1, 20, 10, 10 );
	t.equal( isnan( y ), true, 'returns true' );
	t.end();
});

tape( 'if provided an `N` which is not a nonnegative integer, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.5, 10.5, 10, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 10.5, 10, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, PINF, 10, 5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, NINF, 10, 5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, -2.0, 10, 5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, -0.5, 10, 5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a `K` which is not a nonnegative integer, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.5, 20, 10.5, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, 1.5, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, PINF, 5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, NINF, 5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, -2.0, 5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, -0.5, 5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the function returns `NaN`', function test( t ) {
	var y;

	y = quantile( 0.5, 20, 10, 10.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, 10, 1.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, 10, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, 10, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, 5, -2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = quantile( 0.5, 20, 5, -0.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'given valid parameters, the function returns `max( 0, n + K - N )` as the 0% quantile', function test( t ) {
	var y = quantile( 0.0, 20, 10, 5 );
	t.equal( y, 0, 'returns 0' );

	y = quantile( 0.0, 20, 10, 15 );
	t.equal( y, 5, 'returns 5' );
	t.end();
});

tape( 'given valid parameters, the function returns `min( n, K )` as the 100% quantile', function test( t ) {
	var y = quantile( 1.0, 30, 20, 15 );
	t.equal( y, 15, 'returns 15' );

	y = quantile( 1.0, 30, 20, 25 );
	t.equal( y, 20, 'returns 20' );

	y = quantile( 1.0, 30, 20, 5 );
	t.equal( y, 5, 'returns 5' );

	t.end();
});

tape( 'the function evaluates the quantile for `p` given valid parameters', function test( t ) {
	var expected;
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
		y = quantile( p[i], N[i], K[i], n[i] );
		t.equal( y, expected[i], 'p: '+p[i]+', N: '+N[i]+', K: '+K[i]+', n: '+n[i]+', y: '+y+', expected: '+expected[i] );
	}
	t.end();
});
