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

var variance = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( variance instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof variance, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var v = variance( 10, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided an `n` which is not a nonnegative integer, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = variance( -2, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = variance( -1, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `p < 0` or `p > 1`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = variance( 10, -0.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = variance( 10, 1.1 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the variance of a binomial distribution', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var n;
	var p;
	var i;
	var y;

	expected = data.expected;
	n = data.n;
	p = data.p;
	for ( i = 0; i < expected.length; i++ ) {
		y = variance( n[i], p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'n: '+n[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. n: '+n[i]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
