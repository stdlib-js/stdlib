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
var csignum = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof csignum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the signum function', function test( t ) {
	var delta;
	var ere;
	var eim;
	var tol;
	var re;
	var im;
	var y;
	var i;

	re = data.re;
	im = data.im;
	ere = data.expected_re;
	eim = data.expected_im;

	for ( i = 0; i < re.length; i++ ) {
		y = csignum( re[ i ], im[ i ] );
		if ( y[ 0 ] === ere[ i ] && y[ 1 ] === eim[ i ] ) {
			t.equal( y[ 0 ], ere[ i ], 're: '+re[ i ]+'. Expected: '+ere[ i ] );
			t.equal( y[ 1 ], eim[ i ], 'im: '+im[ i ]+'. Expected: '+eim[ i ] );
		} else {
			delta = abs( y[ 0 ] - ere[ i ] );
			tol = EPS * abs( ere[ i ] );
			t.ok( delta <= tol, 'within tolerance. re: '+re[ i ]+'. im: '+im[ i ]+'. Actual re: '+y[ 0 ]+'. Expected re: '+ere[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );

			delta = abs( y[ 1 ] - eim[ i ] );
			tol = EPS * abs( eim[ i ] );
			t.ok( delta <= tol, 'within tolerance. re: '+re[ i ]+'. im: '+im[ i ]+'. Actual im: '+y[ 1 ]+'. Expected im: '+eim[ i ]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the signum function (output array)', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = new Array( 2 );
	actual = csignum( out, -4.2, 5.5 );

	expected = [ -0.6069136033622302, 0.79476781392673 ];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function evaluates the signum function (output typed array)', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = new Float64Array( 2 );
	actual = csignum( out, 9.99999, 0.1 );

	expected = new Float64Array( [ 0.9999500036497025, 0.009999510036007062 ] );

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function evaluates the signum function (output object)', function test( t ) {
	var expected;
	var actual;
	var out;

	// Tested against Julia...
	out = {};
	actual = csignum( out, 4.2, -5.5 );

	expected = {
		'0': 0.6069136033622302,
		'1': -0.79476781392673
	};

	t.deepEqual( actual, expected, 'returns expected value' );
	t.strictEqual( actual, out, 'returns output value' );

	t.end();
});

tape( 'the function returns a `NaN` if provided a `NaN`', function test( t ) {
	var val = csignum( NaN, NaN );
	t.strictEqual( isnan( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var val = csignum( +0.0, +0.0 );
	t.strictEqual( isPositiveZero( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var val = csignum( -0.0, -0.0 );
	t.strictEqual( isNegativeZero( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a `NaN` if provided `infinity`', function test( t ) {
	var val = csignum( PINF, PINF );
	t.strictEqual( isnan( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns a `NaN` if provided `-infinity`', function test( t ) {
	var val = csignum( NINF, NINF );
	t.strictEqual( isnan( val[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( val[ 1 ] ), true, 'returns expected value' );
	t.end();
});
