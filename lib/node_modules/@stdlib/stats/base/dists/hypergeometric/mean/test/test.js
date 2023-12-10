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
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var mean = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mean, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var v = mean( NaN, 10, 4 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mean( 20, NaN, 4 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mean( 20, 10, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `N` which is not a nonnegative integer, the function returns `NaN`', function test( t ) {
	var v;

	v = mean( 10.5, 4, 2 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mean( -2, 4, 2 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mean( -1, 4, 2 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mean( 20.5, 10, 5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = mean( PINF, 10, 5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `K` which is not a nonnegative integer, the function returns `NaN`', function test( t ) {
	var y;

	y = mean( 20, 3.5, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 20, -2, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 20, -1, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 20, 2.5, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 20, PINF, 10 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the function returns `NaN`', function test( t ) {
	var y;

	y = mean( 40, 20, 3.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 40, 20, -2 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 40, 20, -1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 40, 20, 2.5 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = mean( 40, 20, PINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the mean of a hypergeometric distribution', function test( t ) {
	var expected;
	var delta;
	var tol;
	var N;
	var K;
	var n;
	var y;
	var i;

	expected = data.expected;
	N = data.N;
	K = data.K;
	n = data.n;
	for ( i = 0; i < n.length; i++ ) {
		y = mean( N[i], K[i], n[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'N: '+N[i]+', K: '+K[i]+', n: '+n[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. N: '+N[i]+'. K: '+K[i]+'. n: '+n[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
