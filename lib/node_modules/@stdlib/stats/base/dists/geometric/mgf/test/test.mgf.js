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
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var isfinite = require( '@stdlib/math/base/assert/is-finite' );
var ln = require( '@stdlib/math/base/special/ln' );
var exp = require( '@stdlib/math/base/special/exp' );
var mgf = require( './../lib' );


// FIXTURES //

var smallP = require( './fixtures/julia/small_p.json' );
var largeP = require( './fixtures/julia/large_p.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mgf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = mgf( NaN, 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = mgf( 4.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a value outside `[0,1]` for success probability `p`, the function returns `NaN`', function test( t ) {
	var y;

	y = mgf( 3.0, PINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mgf( 3.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mgf( 3.0, -0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mgf( 3.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the MGF for `x` given small parameter `p`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var p;
	var y;
	var i;

	expected = smallP.expected;
	x = smallP.x;
	p = smallP.p;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], p[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 3.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given large parameter `p`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var p;
	var y;
	var i;

	expected = largeP.expected;
	x = largeP.x;
	p = largeP.p;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], p[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', p: '+p[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. p: '+p[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function returns NaN when t equals the boundary condition t = -ln(1-p)', function test( t ) {
	var boundary;
	var p;
	var y;

	p = 0.5;
	boundary = -ln( 1 - p );
	y = mgf( boundary, p );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a finite value when t is just below the boundary condition', function test( t ) {
	var boundary;
	var p;
	var y;

	p = 0.5;
	boundary = -ln( 1 - p );
	y = mgf( boundary - 1e-15, p );
	t.strictEqual( isnan( y ), false, 'returns expected value' );
	t.ok( isfinite( y ), 'value is finite' );
	t.end();
});

tape( 'the function returns NaN when t is just above the boundary condition', function test( t ) {
	var boundary;
	var p;
	var y;

	p = 0.5;
	boundary = -ln( 1 - p );
	y = mgf( boundary + 1e-15, p );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns NaN when p equals 0', function test( t ) {
	var y;

	y = mgf( 0.5, 0.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns e^t when p equals 1', function test( t ) {
	var y;

	y = mgf( 0.5, 1.0 );
	t.strictEqual( y, exp( 0.5 ), 'returns expected value' );
	t.end();
});

tape( 'the function returns NaN for very small p values due to boundary condition', function test( t ) {
	var y;

	y = mgf( 0.001, 1e-10 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});
