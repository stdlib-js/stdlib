/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// VARIABLES //

var median = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( median instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof median, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var v = median( NaN, 0.5 );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = median( 10, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = median( NaN, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a nonpositive `gamma`, the function always returns `NaN`', opts, function test( t ) {
	var y;

	y = median( 0.0, 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = median( 0.0, -1.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = median( 0.0, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = median( PINF, NINF );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns the median of a Kumaraswamy distribution', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var a;
	var b;
	var i;
	var y;

	expected = data.expected;
	a = data.a;
	b = data.b;
	for ( i = 0; i < expected.length; i++ ) {
		y = median( a[i], b[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'a: '+a[i]+', b: '+b[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 10.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. a: '+a[i]+'. b: '+b[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
