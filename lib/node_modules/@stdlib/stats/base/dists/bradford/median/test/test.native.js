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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var median = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( median instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof median, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `c`, the function returns `NaN`', opts, function test( t ) {
	var v = median( NaN );
	t.equal( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided a nonpositive `c`, the function returns `NaN`', opts, function test( t ) {
	var v;

	v = median( 0.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = median( -1.0 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = median( NINF );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the median of a Bradford distribution', opts, function test( t ) {
	var expected;
	var c;
	var i;

	expected = data.expected;
	c = data.x;
	for ( i = 0; i < c.length; i++ ) {
		t.equal( median( c[i] ), expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns the median of a Bradford distribution (test fixtures)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var c;
	var v;
	var i;

	// We test against more stringent tolerance here given the sqrt in the implementation
	tol = 5.0 * EPS; // ~1.11e-15
	expected = data.expected;
	c = data.x;
	for ( i = 0; i < expected.length; i++ ) {
		v = median( c[i] );
		if ( v === expected[ i ] ) {
			t.equal( v, expected[ i ], 'returns expected value' );
		} else {
			delta = abs( v - expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. c: ' + c[i] + '. Expected: ' + expected[i] + '. Actual: ' + v + '. Tolerance: ' + tol + '.' );
		}
	}
	t.end();
});
