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
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var cis = require( './../lib' );


// FIXTURES //

var pureReal = require( './fixtures/julia/pure_real.json' );
var generalComplex = require( './fixtures/julia/general_complex.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cis, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function accepts an optional output array', function test( t ) {
	var result;
	var out;

	out = [ 0.0, 0.0 ];
	result = cis( out, 0.0, 0.0 );
	t.deepEqual( out, [ 1.0, 0.0 ], 'returns expected values' );
	t.equal( out, result, 'returns output array' );
	t.end();
});

tape( 'the function works without output array specified', function test( t ) {
	var result = cis( 0.0, 0.0 );
	t.deepEqual( result, [ 1.0, 0.0 ], 'returns expected values' );
	t.end();
});

tape( 'the function computes cis(z) for pure real z', function test( t ) {
	var delta;
	var cisre;
	var cisim;
	var tol;
	var re;
	var im;
	var i;
	var q;

	re = pureReal.re;
	im = pureReal.im;
	cisre = pureReal.cisre;
	cisim = pureReal.cisim;

	for ( i = 0; i < re.length; i++ ) {
		q = cis( re[ i ], im[ i ] );

		if ( q[ 0 ] === cisre[ i ] ) {
			t.strictEqual( q[ 0 ], cisre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - cisre[ i ] );
			tol = EPS * abs( cisre[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+cisre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === cisim[ i ] ) {
			t.strictEqual( q[ 1 ], cisim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - cisim[ i ] );
			tol = EPS * abs( cisim[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+cisim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes cis(z) for complex z', function test( t ) {
	var delta;
	var cisre;
	var cisim;
	var tol;
	var re;
	var im;
	var i;
	var q;

	re = generalComplex.re;
	im = generalComplex.im;
	cisre = generalComplex.cisre;
	cisim = generalComplex.cisim;

	for ( i = 0; i < re.length; i++ ) {
		q = cis( re[ i ], im[ i ] );

		if ( q[ 0 ] === cisre[ i ] ) {
			t.strictEqual( q[ 0 ], cisre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - cisre[ i ] );
			tol = EPS * abs( cisre[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+cisre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === cisim[ i ] ) {
			t.strictEqual( q[ 1 ], cisim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - cisim[ i ] );
			tol = EPS * abs( cisim[ i ] );
			t.ok( delta <= tol, 'within tolerance. z: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+cisim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if real component is `+Infinity`, the function returns `[NaN, NaN]`', function test( t ) {
	var v = cis( PINF, 0.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );
	t.end();
});

tape( 'if real component is `-Infinity`, the function returns `[NaN, NaN]`', function test( t ) {
	var v = cis( NINF, 0.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );
	t.end();
});

tape( 'if imaginary component is `+Infinity`, the function returns `[0.0, 0.0]`', function test( t ) {
	var v = cis( 1.0, PINF );
	t.strictEqual( v[ 0 ], 0.0, 'returns 0.0' );
	t.strictEqual( v[ 1 ], 0.0, 'returns 0.0' );
	t.end();
});

tape( 'if imaginary component is `-Infinity`, the function computes the correct result according to IEEE 754 rules', function test( t ) {
	var v = cis( 0.0, NINF );

	// The real component is computed as Infinity * 1.0 = Infinity:
	t.strictEqual( v[ 0 ], PINF, 'returns +Infinity' );

	// The imaginary component is computed as Infinity * 0.0 = NaN:
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );
	t.end();
});

tape( 'if a real or imaginary component is `NaN`, all components are `NaN`', function test( t ) {
	var v;

	v = cis( NaN, 3.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = cis( 5.0, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = cis( NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	t.end();
});
