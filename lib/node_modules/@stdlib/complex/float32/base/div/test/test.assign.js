/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/* eslint-disable id-length */

'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isNegativeZerof = require( '@stdlib/math/base/assert/is-negative-zerof' );
var isPositiveZerof = require( '@stdlib/math/base/assert/is-positive-zerof' );
var isSameFloat32Array = require( '@stdlib/assert/is-same-float32array' );
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var Float32Array = require( '@stdlib/array/float32' );
var div = require( './../lib/assign.js' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );
var componentScales1 = require( './fixtures/julia/component_scales1.json' );
var componentScales2 = require( './fixtures/julia/component_scales2.json' );
var imaginaryComponentScales = require( './fixtures/julia/imaginary_component_scales.json' );
var realComponentScales = require( './fixtures/julia/real_component_scales.json' );
var largeNegativeImaginaryComponents = require( './fixtures/julia/large_negative_imaginary_components.json' );
var largeNegativeRealComponents = require( './fixtures/julia/large_negative_real_components.json' );
var largePositiveImaginaryComponents = require( './fixtures/julia/large_positive_imaginary_components.json' );
var largePositiveRealComponents = require( './fixtures/julia/large_positive_real_components.json' );
var tinyNegativeImaginaryComponents = require( './fixtures/julia/tiny_negative_imaginary_components.json' );
var tinyNegativeRealComponents = require( './fixtures/julia/tiny_negative_real_components.json' );
var tinyPositiveImaginaryComponents = require( './fixtures/julia/tiny_positive_imaginary_components.json' );
var tinyPositiveRealComponents = require( './fixtures/julia/tiny_positive_real_components.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof div, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function divides two complex numbers', function test( t ) {
	var expected;
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( -13.0, -1.0, -2.0, 1.0, out, 1, 0 );

	expected = new Float32Array( [ 5.0, 3.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( out, expected ), true, 'returns expected value' );

	out = new Float32Array( 4 );
	v = div( -13.0, -1.0, -2.0, 1.0, out, 2, 0 );

	expected = new Float32Array( [ 5.0, 0.0, 3.0, 0.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( out, expected ), true, 'returns expected value' );

	out = new Float32Array( 4 );
	v = div( -13.0, -1.0, -2.0, 1.0, out, 2, 1 );

	expected = new Float32Array( [ 0.0, 5.0, 0.0, 3.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( out, expected ), true, 'returns expected value' );

	out = new Float32Array( 4 );
	v = div( -13.0, -1.0, -2.0, 1.0, out, -2, 3 );

	expected = new Float32Array( [ 0.0, 3.0, 0.0, 5.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function computes a complex quotient (tested against fixtures)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	// Note: fixture values were generated using Julia, whose `Complex{Float32}` division implements the same algorithm, and results are thus expected to be identical (here and in subsequent fixture tests).
	re1 = new Float32Array( data.re1 );
	im1 = new Float32Array( data.im1 );
	re2 = new Float32Array( data.re2 );
	im2 = new Float32Array( data.im2 );
	qre = new Float32Array( data.qre );
	qim = new Float32Array( data.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (different component scales)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( componentScales1.re1 );
	im1 = new Float32Array( componentScales1.im1 );
	re2 = new Float32Array( componentScales1.re2 );
	im2 = new Float32Array( componentScales1.im2 );
	qre = new Float32Array( componentScales1.qre );
	qim = new Float32Array( componentScales1.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (different component scales)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( componentScales2.re1 );
	im1 = new Float32Array( componentScales2.im1 );
	re2 = new Float32Array( componentScales2.re2 );
	im2 = new Float32Array( componentScales2.im2 );
	qre = new Float32Array( componentScales2.qre );
	qim = new Float32Array( componentScales2.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (different imaginary component scales)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( imaginaryComponentScales.re1 );
	im1 = new Float32Array( imaginaryComponentScales.im1 );
	re2 = new Float32Array( imaginaryComponentScales.re2 );
	im2 = new Float32Array( imaginaryComponentScales.im2 );
	qre = new Float32Array( imaginaryComponentScales.qre );
	qim = new Float32Array( imaginaryComponentScales.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (different real component scales)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( realComponentScales.re1 );
	im1 = new Float32Array( realComponentScales.im1 );
	re2 = new Float32Array( realComponentScales.re2 );
	im2 = new Float32Array( realComponentScales.im2 );
	qre = new Float32Array( realComponentScales.qre );
	qim = new Float32Array( realComponentScales.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (large negative imaginary components)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( largeNegativeImaginaryComponents.re1 );
	im1 = new Float32Array( largeNegativeImaginaryComponents.im1 );
	re2 = new Float32Array( largeNegativeImaginaryComponents.re2 );
	im2 = new Float32Array( largeNegativeImaginaryComponents.im2 );
	qre = new Float32Array( largeNegativeImaginaryComponents.qre );
	qim = new Float32Array( largeNegativeImaginaryComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (large negative real components)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( largeNegativeRealComponents.re1 );
	im1 = new Float32Array( largeNegativeRealComponents.im1 );
	re2 = new Float32Array( largeNegativeRealComponents.re2 );
	im2 = new Float32Array( largeNegativeRealComponents.im2 );
	qre = new Float32Array( largeNegativeRealComponents.qre );
	qim = new Float32Array( largeNegativeRealComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (large positive imaginary components)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( largePositiveImaginaryComponents.re1 );
	im1 = new Float32Array( largePositiveImaginaryComponents.im1 );
	re2 = new Float32Array( largePositiveImaginaryComponents.re2 );
	im2 = new Float32Array( largePositiveImaginaryComponents.im2 );
	qre = new Float32Array( largePositiveImaginaryComponents.qre );
	qim = new Float32Array( largePositiveImaginaryComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (large positive real components)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( largePositiveRealComponents.re1 );
	im1 = new Float32Array( largePositiveRealComponents.im1 );
	re2 = new Float32Array( largePositiveRealComponents.re2 );
	im2 = new Float32Array( largePositiveRealComponents.im2 );
	qre = new Float32Array( largePositiveRealComponents.qre );
	qim = new Float32Array( largePositiveRealComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny negative imaginary components)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( tinyNegativeImaginaryComponents.re1 );
	im1 = new Float32Array( tinyNegativeImaginaryComponents.im1 );
	re2 = new Float32Array( tinyNegativeImaginaryComponents.re2 );
	im2 = new Float32Array( tinyNegativeImaginaryComponents.im2 );
	qre = new Float32Array( tinyNegativeImaginaryComponents.qre );
	qim = new Float32Array( tinyNegativeImaginaryComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny negative real components)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( tinyNegativeRealComponents.re1 );
	im1 = new Float32Array( tinyNegativeRealComponents.im1 );
	re2 = new Float32Array( tinyNegativeRealComponents.re2 );
	im2 = new Float32Array( tinyNegativeRealComponents.im2 );
	qre = new Float32Array( tinyNegativeRealComponents.qre );
	qim = new Float32Array( tinyNegativeRealComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny positive imaginary components)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( tinyPositiveImaginaryComponents.re1 );
	im1 = new Float32Array( tinyPositiveImaginaryComponents.im1 );
	re2 = new Float32Array( tinyPositiveImaginaryComponents.re2 );
	im2 = new Float32Array( tinyPositiveImaginaryComponents.im2 );
	qre = new Float32Array( tinyPositiveImaginaryComponents.qre );
	qim = new Float32Array( tinyPositiveImaginaryComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny positive real components)', function test( t ) {
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var out;
	var i;
	var q;

	re1 = new Float32Array( tinyPositiveRealComponents.re1 );
	im1 = new Float32Array( tinyPositiveRealComponents.im1 );
	re2 = new Float32Array( tinyPositiveRealComponents.re2 );
	im2 = new Float32Array( tinyPositiveRealComponents.im2 );
	qre = new Float32Array( tinyPositiveRealComponents.qre );
	qim = new Float32Array( tinyPositiveRealComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		q = div( re1[ i ], im1[ i ], re2[ i ], im2[ i ], out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function handles large and small numbers', function test( t ) {
	var expected;
	var out;
	var v;

	// Note: expected values were computed using Julia's `Complex{Float32}` division (here and in subsequent tests).

	out = new Float32Array( 2 );
	v = div( f32( 1.0e38 ), f32( 5.0e37 ), 1.0, 0.5, out, 1, 0 );
	expected = new Float32Array( [ 1.0e38, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 1.0, 0.5, f32( 1.0e38 ), f32( 5.0e37 ), out, 1, 0 );
	expected = new Float32Array( [ 1.0000001e-38, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( f32( 1.0e-38 ), f32( 2.0e-38 ), 1.0, 2.0, out, 1, 0 );
	expected = new Float32Array( [ 1.0e-38, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 1.0, 2.0, f32( 1.0e-38 ), f32( 2.0e-38 ), out, 1, 0 );
	expected = new Float32Array( [ 1.0e38, -2.802597e30 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 2.0, 4.0, 0.0, 2.0, out, 1, 0 );
	expected = new Float32Array( [ 2.0, -1.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( f32( 1.0e-20 ), f32( 1.0e-20 ), 1.0, f32( 1.0e-20 ), out, 1, 0 );
	expected = new Float32Array( [ 1.0e-20, 1.0e-20 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function handles equal-magnitude denominator components', function test( t ) {
	var expected;
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( 7.0, 3.0, 5.0, 5.0, out, 1, 0 );
	expected = new Float32Array( [ 1.0, -0.4 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 7.0, 3.0, 5.0, -5.0, out, 1, 0 );
	expected = new Float32Array( [ 0.4, 1.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 1.0, 1.0, 1.0, 1.0, out, 1, 0 );
	expected = new Float32Array( [ 1.0, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function handles purely real and purely imaginary operands', function test( t ) {
	var expected;
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( 6.0, 0.0, 3.0, 0.0, out, 1, 0 );
	expected = new Float32Array( [ 2.0, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 0.0, 6.0, 0.0, 3.0, out, 1, 0 );
	expected = new Float32Array( [ 2.0, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 6.0, 0.0, 0.0, 3.0, out, 1, 0 );
	expected = new Float32Array( [ 0.0, -2.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, 0.0, 2.0, out, 1, 0 );
	expected = new Float32Array( [ 1.5, -2.5 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
	expected = new Float32Array( [ -1.4, -2.2 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function handles extreme finite operands', function test( t ) {
	var expected;
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( f32( 3.4028235e38 ), 1.0, 1.0, f32( 3.4028235e38 ), out, 1, 0 );
	expected = new Float32Array( [ 5.877472e-39, -1.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( f32( 3.4028235e38 ), f32( 3.4028235e38 ), f32( 3.4028235e38 ), f32( 3.4028235e38 ), out, 1, 0 ); // eslint-disable-line max-len
	expected = new Float32Array( [ 1.0, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( f32( 1.0e18 ), 5.0, f32( 2.0e18 ), -3.0, out, 1, 0 );
	expected = new Float32Array( [ 0.5, 3.25e-18 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports gradual underflow (subnormal results)', function test( t ) {
	var expected;
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( f32( 1.0e-38 ), f32( 1.0e-38 ), 3.0, 4.0, out, 1, 0 );
	expected = new Float32Array( [ 2.8e-39, -4.0e-40 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( f32( 1.1754944e-38 ), 0.0, 1.0, 1.0, out, 1, 0 );
	expected = new Float32Array( [ 5.877472e-39, -5.877472e-39 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( f32( 1.4e-45 ), 0.0, 2.0, 0.0, out, 1, 0 );
	expected = new Float32Array( [ 0.0, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 1.0, 1.0, f32( 1.4e-45 ), 0.0, out, 1, 0 );
	expected = new Float32Array( [ PINF, PINF ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function may overflow during complex division', function test( t ) {
	var expected;
	var out;
	var lg;
	var tn;
	var v;

	lg = f32( 1.0e38 );
	tn = f32( 5.0e-45 );

	out = new Float32Array( 2 );
	v = div( lg, lg, tn, tn, out, 1, 0 );
	expected = new Float32Array( [ PINF, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( lg, lg, -tn, tn, out, 1, 0 );
	expected = new Float32Array( [ 0.0, NINF ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( lg, -lg, tn, tn, out, 1, 0 );
	expected = new Float32Array( [ 0.0, NINF ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -lg, lg, tn, tn, out, 1, 0 );
	expected = new Float32Array( [ 0.0, PINF ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( lg, lg, tn, -tn, out, 1, 0 );
	expected = new Float32Array( [ 0.0, PINF ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -lg, lg, -tn, tn, out, 1, 0 );
	expected = new Float32Array( [ PINF, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( lg, -lg, tn, -tn, out, 1, 0 );
	expected = new Float32Array( [ PINF, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( lg, -lg, -tn, tn, out, 1, 0 );
	expected = new Float32Array( [ NINF, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -lg, lg, tn, -tn, out, 1, 0 );
	expected = new Float32Array( [ NINF, 0.0 ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -lg, -lg, -tn, tn, out, 1, 0 );
	expected = new Float32Array( [ 0.0, PINF ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( lg, -lg, -tn, -tn, out, 1, 0 );
	expected = new Float32Array( [ 0.0, PINF ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -lg, lg, -tn, -tn, out, 1, 0 );
	expected = new Float32Array( [ 0.0, NINF ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -lg, -lg, tn, -tn, out, 1, 0 );
	expected = new Float32Array( [ 0.0, NINF ] );
	t.strictEqual( isSameFloat32Array( v, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function preserves the sign of zero numerator components', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( 0.0, -0.0, 2.0, 0.0, out, 1, 0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -0.0, -0.0, 2.0, 0.0, out, 1, 0 );
	t.strictEqual( isNegativeZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -0.0, 0.0, 2.0, 0.0, out, 1, 0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 0.0, 0.0, -2.0, 0.0, out, 1, 0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns signed zeros when dividing a finite complex number by an infinite complex number', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, PINF, 1.0, out, 1, 0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, NINF, 1.0, out, 1, 0 );
	t.strictEqual( isNegativeZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -5.0, 3.0, 1.0, PINF, out, 1, 0 );
	t.strictEqual( isNegativeZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, -3.0, 1.0, NINF, out, 1, 0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -5.0, -3.0, PINF, 1.0, out, 1, 0 );
	t.strictEqual( isNegativeZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 0.0, 0.0, PINF, 1.0, out, 1, 0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( -0.0, 3.0, PINF, 1.0, out, 1, 0 );
	t.strictEqual( isNegativeZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, PINF, PINF, out, 1, 0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, NINF, NINF, out, 1, 0 );
	t.strictEqual( isNegativeZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZerof( v[ 1 ] ), true, 'returns expected value' );

	// Denominators having an infinite component and a `NaN` component:
	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, PINF, NaN, out, 1, 0 );
	t.strictEqual( isPositiveZerof( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, NaN, PINF, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZerof( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` components when dividing a non-finite complex number by an infinite complex number', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( PINF, 1.0, PINF, 1.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( NaN, 1.0, 1.0, PINF, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 1.0, NaN, PINF, 1.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( PINF, NaN, PINF, PINF, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( NINF, 2.0, PINF, 1.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` components when dividing by complex zero', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( 1.0, 2.0, 0.0, 0.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 1.0, 2.0, -0.0, 0.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 0.0, 0.0, 0.0, 0.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( PINF, 2.0, 0.0, 0.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns non-finite components when dividing an infinite complex number by a finite complex number', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( PINF, 0.0, 1.0, 0.0, out, 1, 0 );
	t.strictEqual( v[ 0 ], PINF, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( PINF, 2.0, 1.0, 1.0, out, 1, 0 );
	t.strictEqual( v[ 0 ], PINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], NINF, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 0.0, PINF, 1.0, 1.0, out, 1, 0 );
	t.strictEqual( v[ 0 ], PINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( NINF, PINF, 2.0, 3.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, all components are `NaN`', function test( t ) {
	var out;
	var v;

	out = new Float32Array( 2 );
	v = div( NaN, 3.0, -2.0, 1.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, NaN, -2.0, 1.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, NaN, 1.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, -2.0, NaN, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( 5.0, 3.0, NaN, NaN, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( NaN, NaN, -2.0, 1.0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	v = div( NaN, NaN, NaN, NaN, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});
