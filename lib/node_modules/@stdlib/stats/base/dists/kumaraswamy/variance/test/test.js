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
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var variance = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof variance, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var v = variance( NaN, 0.5 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = variance( 10.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `a`, the function returns `NaN`', function test( t ) {
	var y;

	y = variance( 0.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, PINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a nonpositive `b`, the function returns `NaN`', function test( t ) {
	var y;

	y = variance( 2.0, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( 2.0, -1/0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = variance( NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the variance of a Kumaraswamy\'s double bounded distribution', function test( t ) {
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
		y = variance( a[i], b[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'a: '+a[i]+', b: '+b[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 15000.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. a: '+a[i]+'. b: '+b[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
