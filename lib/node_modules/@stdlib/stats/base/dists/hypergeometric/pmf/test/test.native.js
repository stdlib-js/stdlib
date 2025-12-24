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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );


// VARIABLES //

var pmf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( pmf instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pmf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for input value `x`, the function returns `NaN`', opts, function test( t ) {
	var y = pmf( NaN, 10, 10, 5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an integer `x` greater than `min( n, K )`, the function returns `0` (provided all parameters are valid)', opts, function test( t ) {
	var y = pmf( 11.0, 20, 20, 10 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pmf( 100.0, 20, 20, 10 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an integer for `x` smaller than `max( 0, n + K - N )`, the function returns `0`', opts, function test( t ) {
	var y = pmf( -1.0, 40, 20, 10 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pmf( -2.0, 30, 20, 20 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = pmf( 2.0, -20, 3, 10 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pmf( 2.0, -10, 3, 10 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `K` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = pmf( 2.0, 20, -3, 10 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pmf( 2.0, 20, -10, 10 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = pmf( 2.0, 20, 3, -10 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = pmf( 2.0, 20, 3, -20 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the pmf for `x`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var N;
	var K;
	var n;
	var y;
	var i;

	expected = data.expected;
	x = data.x;
	N = data.N;
	K = data.K;
	n = data.n;
	for ( i = 0; i < x.length; i++ ) {
		y = pmf( x[i], N[i], K[i], n[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', N: '+N[i]+', K: '+K[i]+', n: '+n[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1040.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[i]+'. N: '+N[i]+'. K: '+K[i]+'. n: '+n[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
