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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var mean = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mean, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for `lambda`, the function returns `NaN`', function test( t ) {
	var v = mean( NaN );
	t.equal( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a success probability `lambda` which is nonpositive, the function returns `NaN`', function test( t ) {
	var v;

	v = mean( 0.0 );
	t.equal( isnan( v ), true, 'returns expected value' );

	v = mean( -1.0 );
	t.equal( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the mean of a Planck distribution', function test( t ) {
	var expected;
	var lambda;
	var delta;
	var tol;
	var i;
	var y;

	expected = data.expected;
	lambda = data.lambda;
	for ( i = 0; i < expected.length; i++ ) {
		y = mean( lambda[ i ] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'lambda: '+lambda[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. lambda: '+lambda[ i ]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
