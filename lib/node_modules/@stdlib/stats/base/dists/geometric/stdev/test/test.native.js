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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );


// VARIABLES //

var stdev = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( stdev instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof stdev, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `p`, the function returns `NaN`', opts, function test( t ) {
	var m = stdev( NaN );
	t.equal( isnan( m ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a success probability `p` outside of `[0,1]`, the function returns `NaN`', opts, function test( t ) {
	var m;

	m = stdev( -1.0 );
	t.equal( isnan( m ), true, 'returns NaN' );

	m = stdev( 1.5 );
	t.equal( isnan( m ), true, 'returns NaN' );

	m = stdev( NINF );
	t.equal( isnan( m ), true, 'returns NaN' );

	m = stdev( PINF );
	t.equal( isnan( m ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the standard deviation of a geometric distribution', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var i;
	var p;
	var y;

	expected = data.expected;
	p = data.p;
	for ( i = 0; i < expected.length; i++ ) {
		y = stdev( p[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
