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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var Float64Array = require( '@stdlib/array/float64' );
var cflipsign = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cflipsign, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the flipsign function', function test( t ) {
	var delta;
	var ans;
	var ere;
	var eim;
	var tol;
	var re;
	var im;
	var y;
	var i;

	re = data.re;
	im = data.im;
	y = data.y;
	ere = data.expected_re;
	eim = data.expected_im;

	for ( i = 0; i < re.length; i++ ) {
		ans = cflipsign( re[ i ], im[ i ], y[ i ] );
		if ( ans[ 0 ] === ere[ i ] && ans[ 1 ] === eim[ i ] ) {
			t.equal( ans[ 0 ], ere[ i ], 're: '+re[ i ]+'. Expected: '+ere[ i ] );
			t.equal( ans[ 1 ], eim[ i ], 'im: '+im[ i ]+'. Expected: '+eim[ i ] );
		} else {
			delta = abs( ans[ 0 ] - ere[ i ] );
			tol = EPS * abs( ere[ i ] );
			t.ok( delta <= tol, 'within tolerance. re: '+re[ i ]+'. im: '+im[ i ]+'. Actual re: '+ans[ 0 ]+'. Expected re: '+ere[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );

			delta = abs( ans[ 1 ] - eim[ i ] );
			tol = EPS * abs( eim[ i ] );
			t.ok( delta <= tol, 'within tolerance. re: '+re[ i ]+'. im: '+im[ i ]+'. Actual im: '+ans[ 1 ]+'. Expected im: '+eim[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the flipsign function (output array)', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = new Array( 2 );
	actual = cflipsign( out, -4.2, 5.5, -8 );

	expected = [ 4.2, -5.5 ];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function evaluates the flipsign function (output typed array)', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = new Float64Array( 2 );
	actual = cflipsign( out, 9.99999, 0.1, 9 );

	expected = new Float64Array( [ 9.99999, 0.1 ] );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function evaluates the flipsign function (output object)', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = {};
	actual = cflipsign( out, 4.2, -5.5, -7 );

	expected = {
		'0': -4.2,
		'1': 5.5
	};

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function does not flip the sign of real and imaginary input arguments if `y` is `NaN`', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = new Array( 2 );
	actual = cflipsign( out, -4.2, 5.5, NaN );

	expected = [ -4.2, 5.5 ];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function does not flip the sign of real and imaginary input arguments if `y` is `+infinity`', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = new Array( 2 );
	actual = cflipsign( out, -4.2, 5.5, PINF );

	expected = [ -4.2, 5.5 ];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function flips the sign of real and imaginary input arguments if `y` is `-infinity`', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = new Array( 2 );
	actual = cflipsign( out, -4.2, 5.5, NINF );

	expected = [ 4.2, -5.5 ];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function flips the sign of real and imaginary input arguments if `y` is `-0`', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = new Array( 2 );
	actual = cflipsign( out, -4.2, 5.5, -0.0 );

	expected = [ 4.2, -5.5 ];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function does not flip the sign of real and imaginary input arguments if `y` is `+0`', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = new Array( 2 );
	actual = cflipsign( out, -4.2, 5.5, +0.0 );

	expected = [ -4.2, 5.5 ];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function returns a `NaN` if provided a `NaN` independent of `y`', function test( t ) {
	var val;

	val = cflipsign( NaN, NaN, 2 );
	t.strictEqual( isnan( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( val[ 1 ] ), true, 'returns expected value' );

	val = cflipsign( NaN, NaN, -2 );
	t.strictEqual( isnan( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( val[ 1 ] ), true, 'returns expected value' );

	val = cflipsign( NaN, NaN, NaN );
	t.strictEqual( isnan( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( val[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0` and a positive `y`', function test( t ) {
	var val = cflipsign( +0.0, +0.0, 4 );
	t.strictEqual( isPositiveZero( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0` and a positive `y`', function test( t ) {
	var val = cflipsign( -0.0, -0.0, 55 );
	t.strictEqual( isNegativeZero( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `-0` and a negative `y`', function test( t ) {
	var val = cflipsign( -0.0, -0.0, -4 );
	t.strictEqual( isPositiveZero( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `+0` and a negative `y`', function test( t ) {
	var val = cflipsign( +0.0, +0.0, -55 );
	t.strictEqual( isNegativeZero( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity` and a positive `y`', function test( t ) {
	var val = cflipsign( PINF, PINF, 4 );
	t.equal( val[ 0 ], PINF, 'returns +infinity' );
	t.equal( val[ 1 ], PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity` and a positive `y`', function test( t ) {
	var val = cflipsign( NINF, NINF, 55 );
	t.equal( val[ 0 ], NINF, 'returns -infinity' );
	t.equal( val[ 1 ], NINF, 'returns -infinity' );
	t.end();
});

tape( 'the function returns `+infinity` if provided `-infinity` and a negative `y`', function test( t ) {
	var val = cflipsign( NINF, NINF, -4 );
	t.equal( val[ 0 ], PINF, 'returns +infinity' );
	t.equal( val[ 1 ], PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `+infinity` and a negative `y`', function test( t ) {
	var val = cflipsign( PINF, PINF, -55 );
	t.equal( val[ 0 ], NINF, 'returns -infinity' );
	t.equal( val[ 1 ], NINF, 'returns -infinity' );
	t.end();
});
