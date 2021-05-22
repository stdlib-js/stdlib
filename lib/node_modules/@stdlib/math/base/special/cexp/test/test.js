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
var isArray = require( '@stdlib/assert/is-array' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var cexp = require( './../lib' );


// FIXTURES //

var pureImaginary = require( './fixtures/julia/pure_imaginary.json' );
var generalComplex = require( './fixtures/julia/general_complex.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cexp, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an output array', function test( t ) {
	var result = cexp( 0.0, 0.0 );
	t.strictEqual( isArray( result ), true, 'returns expected value' );
	t.deepEqual( result, [ 1.0, 0.0 ], 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an optional output array', function test( t ) {
	var result;
	var out;

	out = [ 0.0, 0.0 ];
	result = cexp( out, 0.0, 0.0 );
	t.deepEqual( out, [ 1.0, 0.0 ], 'returns expected value' );
	t.strictEqual( out, result, 'returns output array' );
	t.end();
});

tape( 'the function computes exp(z) for pure imaginary z', function test( t ) {
	var delta;
	var expre;
	var expim;
	var tol;
	var re;
	var im;
	var i;
	var q;

	re = pureImaginary.re;
	im = pureImaginary.im;
	expre = pureImaginary.expre;
	expim = pureImaginary.expim;

	for ( i = 0; i < re.length; i++ ) {
		q = cexp( re[ i ], im[ i ] );
		if ( q[ 0 ] === expre[ i ] ) {
			t.strictEqual( q[ 0 ], expre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - expre[ i ] );
			tol = EPS * abs( expre[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+expre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === expim[ i ] ) {
			t.strictEqual( q[ 1 ], expim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - expim[ i ] );
			tol = EPS * abs( expim[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+expim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes exp(z) for complex z', function test( t ) {
	var delta;
	var expre;
	var expim;
	var tol;
	var re;
	var im;
	var i;
	var q;

	re = generalComplex.re;
	im = generalComplex.im;
	expre = generalComplex.expre;
	expim = generalComplex.expim;

	for ( i = 0; i < re.length; i++ ) {
		q = cexp( re[ i ], im[ i ] );
		if ( q[ 0 ] === expre[ i ] ) {
			t.strictEqual( q[ 0 ], expre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - expre[ i ] );
			tol = EPS * abs( expre[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+expre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === expim[ i ] ) {
			t.strictEqual( q[ 1 ], expim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - expim[ i ] );
			tol = EPS * abs( expim[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+expim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if imaginary component is `+Infinity`, the function returns `[NaN, NaN]`', function test( t ) {
	var v = cexp( 0.0, PINF );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );
	t.end();
});

tape( 'if imaginary component is `-Infinity`, the function returns `[NaN, NaN]`', function test( t ) {
	var v = cexp( 0.0, NINF );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );
	t.end();
});

tape( 'if real component is `-Infinity`, the function returns `[0.0, 0.0]`', function test( t ) {
	var v = cexp( NINF, 1.0 );
	t.strictEqual( v[ 0 ], 0.0, 'returns 0.0' );
	t.strictEqual( v[ 1 ], 0.0, 'returns 0.0' );
	t.end();
});

tape( 'if real component is `+Infinity` and imaginary component is `0.0`, the function returns `[+Infinity, 0.0]`', function test( t ) {
	var v = cexp( PINF, 0.0 );
	t.strictEqual( v[ 0 ], PINF, 'returns +Infinity' );
	t.strictEqual( v[ 1 ], 0.0, 'returns 0.0' );
	t.end();
});

tape( 'if real component is `NaN` and imaginary component is `0.0`, the function returns `[NaN, 0.0]`', function test( t ) {
	var v = cexp( NaN, 0.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( v[ 1 ], 0.0, 'returns 0.0' );
	t.end();
});

tape( 'if imaginary component is `NaN`, all components are `NaN`', function test( t ) {
	var v;

	v = cexp( 5.0, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = cexp( 0.0, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = cexp( NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	t.end();
});

tape( 'if imaginary component is `+0.0`, imaginary component of output is `+0.0`', function test( t ) {
	var v = cexp( 3.0, 0.0 );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns +0.0' );
	t.end();
});

tape( 'if imaginary component is `-0.0`, imaginary component of output is `-0.0`', function test( t ) {
	var v = cexp( 3.0, -0.0 );
	t.strictEqual( isNegativeZero( v[ 1 ] ), true, 'returns -0.0' );
	t.end();
});

tape( 'if real component is `NaN` and imaginary component is nonzero, all components are `NaN`', function test( t ) {
	var v = cexp( NaN, 3.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );
	t.end();
});

tape( 'if real component is `NaN` and imaginary component is `+0.0`, imaginary component is `+0.0`', function test( t ) {
	var v = cexp( NaN, 0.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns +0.0' );
	t.end();
});

tape( 'if real component is `NaN` and imaginary component is `-0.0`, imaginary component is `-0.0`', function test( t ) {
	var v = cexp( NaN, -0.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isNegativeZero( v[ 1 ] ), true, 'returns +0.0' );
	t.end();
});

tape( 'if real component is `+Infinity` and imaginary component is `+Infinity`, real part is `-Infinity` and imaginary part is `NaN`', function test( t ) {
	var v = cexp( PINF, PINF );
	t.strictEqual( v[ 0 ], NINF, 'returns -Infinity' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );
	t.end();
});

tape( 'if real component is `-Infinity` and imaginary component is `+Infinity`, real part is `-0.0` and imaginary part is `+0.0`', function test( t ) {
	var v = cexp( NINF, PINF );
	t.strictEqual( isNegativeZero( v[ 0 ] ), true, 'returns -0.0' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns +0.0' );
	t.end();
});

tape( 'if real component is `-Infinity` and imaginary component is `-Infinity`, real part is `-0.0` and imaginary part is `-0.0`', function test( t ) {
	var v = cexp( NINF, NINF );
	t.strictEqual( isNegativeZero( v[ 0 ] ), true, 'returns -0.0' );
	t.strictEqual( isNegativeZero( v[ 1 ] ), true, 'returns -0.0' );
	t.end();
});
