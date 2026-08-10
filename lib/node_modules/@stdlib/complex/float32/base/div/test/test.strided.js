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
var isnanf = require( '@stdlib/math/base/assert/is-nanf' );
var isSameFloat32Array = require( '@stdlib/assert/is-same-float32array' );
var Float32Array = require( '@stdlib/array/float32' );
var div = require( './../lib/strided.js' );


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
	var z1;
	var z2;
	var v;

	z1 = new Float32Array( [ -13.0, -1.0 ] );
	z2 = new Float32Array( [ -2.0, 1.0 ] );
	out = new Float32Array( 2 );
	v = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );

	expected = new Float32Array( [ 5.0, 3.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( out, expected ), true, 'returns expected value' );

	z1 = new Float32Array( [ -13.0, 0.0, -1.0, 0.0 ] );
	z2 = new Float32Array( [ -2.0, 1.0 ] );
	out = new Float32Array( 4 );
	v = div( z1, 2, 0, z2, 1, 0, out, 2, 0 );

	expected = new Float32Array( [ 5.0, 0.0, 3.0, 0.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( out, expected ), true, 'returns expected value' );

	z1 = new Float32Array( [ -13.0, -1.0 ] );
	z2 = new Float32Array( [ 0.0, -2.0, 0.0, 1.0 ] );
	out = new Float32Array( 4 );
	v = div( z1, 1, 0, z2, 2, 1, out, 2, 1 );

	expected = new Float32Array( [ 0.0, 5.0, 0.0, 3.0 ] );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( out, expected ), true, 'returns expected value' );

	z1 = new Float32Array( [ -1.0, -13.0 ] );
	z2 = new Float32Array( [ 1.0, -2.0 ] );
	out = new Float32Array( 4 );
	v = div( z1, -1, 1, z2, -1, 1, out, -2, 3 );

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
	var z1;
	var z2;
	var i;
	var q;

	// Note: fixture values were generated using Julia, whose `Complex{Float32}` division implements the same algorithm, and results are thus expected to be identical (here and in subsequent fixture tests).
	re1 = data.re1;
	im1 = data.im1;
	re2 = data.re2;
	im2 = data.im2;
	qre = new Float32Array( data.qre );
	qim = new Float32Array( data.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = componentScales1.re1;
	im1 = componentScales1.im1;
	re2 = componentScales1.re2;
	im2 = componentScales1.im2;
	qre = new Float32Array( componentScales1.qre );
	qim = new Float32Array( componentScales1.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = componentScales2.re1;
	im1 = componentScales2.im1;
	re2 = componentScales2.re2;
	im2 = componentScales2.im2;
	qre = new Float32Array( componentScales2.qre );
	qim = new Float32Array( componentScales2.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = imaginaryComponentScales.re1;
	im1 = imaginaryComponentScales.im1;
	re2 = imaginaryComponentScales.re2;
	im2 = imaginaryComponentScales.im2;
	qre = new Float32Array( imaginaryComponentScales.qre );
	qim = new Float32Array( imaginaryComponentScales.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = realComponentScales.re1;
	im1 = realComponentScales.im1;
	re2 = realComponentScales.re2;
	im2 = realComponentScales.im2;
	qre = new Float32Array( realComponentScales.qre );
	qim = new Float32Array( realComponentScales.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = largeNegativeImaginaryComponents.re1;
	im1 = largeNegativeImaginaryComponents.im1;
	re2 = largeNegativeImaginaryComponents.re2;
	im2 = largeNegativeImaginaryComponents.im2;
	qre = new Float32Array( largeNegativeImaginaryComponents.qre );
	qim = new Float32Array( largeNegativeImaginaryComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = largeNegativeRealComponents.re1;
	im1 = largeNegativeRealComponents.im1;
	re2 = largeNegativeRealComponents.re2;
	im2 = largeNegativeRealComponents.im2;
	qre = new Float32Array( largeNegativeRealComponents.qre );
	qim = new Float32Array( largeNegativeRealComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = largePositiveImaginaryComponents.re1;
	im1 = largePositiveImaginaryComponents.im1;
	re2 = largePositiveImaginaryComponents.re2;
	im2 = largePositiveImaginaryComponents.im2;
	qre = new Float32Array( largePositiveImaginaryComponents.qre );
	qim = new Float32Array( largePositiveImaginaryComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = largePositiveRealComponents.re1;
	im1 = largePositiveRealComponents.im1;
	re2 = largePositiveRealComponents.re2;
	im2 = largePositiveRealComponents.im2;
	qre = new Float32Array( largePositiveRealComponents.qre );
	qim = new Float32Array( largePositiveRealComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = tinyNegativeImaginaryComponents.re1;
	im1 = tinyNegativeImaginaryComponents.im1;
	re2 = tinyNegativeImaginaryComponents.re2;
	im2 = tinyNegativeImaginaryComponents.im2;
	qre = new Float32Array( tinyNegativeImaginaryComponents.qre );
	qim = new Float32Array( tinyNegativeImaginaryComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = tinyNegativeRealComponents.re1;
	im1 = tinyNegativeRealComponents.im1;
	re2 = tinyNegativeRealComponents.re2;
	im2 = tinyNegativeRealComponents.im2;
	qre = new Float32Array( tinyNegativeRealComponents.qre );
	qim = new Float32Array( tinyNegativeRealComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = tinyPositiveImaginaryComponents.re1;
	im1 = tinyPositiveImaginaryComponents.im1;
	re2 = tinyPositiveImaginaryComponents.re2;
	im2 = tinyPositiveImaginaryComponents.im2;
	qre = new Float32Array( tinyPositiveImaginaryComponents.qre );
	qim = new Float32Array( tinyPositiveImaginaryComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
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
	var z1;
	var z2;
	var i;
	var q;

	re1 = tinyPositiveRealComponents.re1;
	im1 = tinyPositiveRealComponents.im1;
	re2 = tinyPositiveRealComponents.re2;
	im2 = tinyPositiveRealComponents.im2;
	qre = new Float32Array( tinyPositiveRealComponents.qre );
	qim = new Float32Array( tinyPositiveRealComponents.qim );
	out = new Float32Array( 2 );

	for ( i = 0; i < re1.length; i++ ) {
		z1 = new Float32Array( [ re1[ i ], im1[ i ] ] );
		z2 = new Float32Array( [ re2[ i ], im2[ i ] ] );
		q = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
		t.strictEqual( q[ 0 ], qre[ i ], 'returns expected value' );
		t.strictEqual( q[ 1 ], qim[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports operating on overlapping arrays', function test( t ) {
	var expected;
	var z;
	var v;

	z = new Float32Array( [ -13.0, -1.0, -2.0, 1.0 ] );
	v = div( z, 1, 0, z, 1, 2, z, 1, 0 );

	expected = new Float32Array( [ 5.0, 3.0, -2.0, 1.0 ] );

	t.strictEqual( v, z, 'returns expected value' );
	t.strictEqual( isSameFloat32Array( z, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, all components are `NaN`', function test( t ) {
	var out;
	var z1;
	var z2;
	var v;

	out = new Float32Array( 2 );
	z1 = new Float32Array( [ NaN, 3.0 ] );
	z2 = new Float32Array( [ -2.0, 1.0 ] );
	v = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	z1 = new Float32Array( [ 5.0, NaN ] );
	z2 = new Float32Array( [ -2.0, 1.0 ] );
	v = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	z1 = new Float32Array( [ 5.0, 3.0 ] );
	z2 = new Float32Array( [ NaN, 1.0 ] );
	v = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	z1 = new Float32Array( [ 5.0, 3.0 ] );
	z2 = new Float32Array( [ -2.0, NaN ] );
	v = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	out = new Float32Array( 2 );
	z1 = new Float32Array( [ NaN, NaN ] );
	z2 = new Float32Array( [ NaN, NaN ] );
	v = div( z1, 1, 0, z2, 1, 0, out, 1, 0 );
	t.strictEqual( isnanf( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnanf( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});
