/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var Float64Array = require( '@stdlib/array/float64' );
var dladiv = require( './../lib' );


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
	t.strictEqual( typeof dladiv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( dladiv.length, 6, 'returns expected value' );
	t.end();
});

tape( 'the function computes a complex quotient (tested against fixtures)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = data.re1;
	im1 = data.im1;
	re2 = data.re2;
	im2 = data.im2;
	qre = data.qre;
	qim = data.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (different component scales)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = componentScales1.re1;
	im1 = componentScales1.im1;
	re2 = componentScales1.re2;
	im2 = componentScales1.im2;
	qre = componentScales1.qre;
	qim = componentScales1.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (different component scales)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = componentScales2.re1;
	im1 = componentScales2.im1;
	re2 = componentScales2.re2;
	im2 = componentScales2.im2;
	qre = componentScales2.qre;
	qim = componentScales2.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (different imaginary component scales)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = imaginaryComponentScales.re1;
	im1 = imaginaryComponentScales.im1;
	re2 = imaginaryComponentScales.re2;
	im2 = imaginaryComponentScales.im2;
	qre = imaginaryComponentScales.qre;
	qim = imaginaryComponentScales.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (real imaginary component scales)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = realComponentScales.re1;
	im1 = realComponentScales.im1;
	re2 = realComponentScales.re2;
	im2 = realComponentScales.im2;
	qre = realComponentScales.qre;
	qim = realComponentScales.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (large negative imaginary components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = largeNegativeImaginaryComponents.re1;
	im1 = largeNegativeImaginaryComponents.im1;
	re2 = largeNegativeImaginaryComponents.re2;
	im2 = largeNegativeImaginaryComponents.im2;
	qre = largeNegativeImaginaryComponents.qre;
	qim = largeNegativeImaginaryComponents.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (large negative real components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = largeNegativeRealComponents.re1;
	im1 = largeNegativeRealComponents.im1;
	re2 = largeNegativeRealComponents.re2;
	im2 = largeNegativeRealComponents.im2;
	qre = largeNegativeRealComponents.qre;
	qim = largeNegativeRealComponents.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (large positive imaginary components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = largePositiveImaginaryComponents.re1;
	im1 = largePositiveImaginaryComponents.im1;
	re2 = largePositiveImaginaryComponents.re2;
	im2 = largePositiveImaginaryComponents.im2;
	qre = largePositiveImaginaryComponents.qre;
	qim = largePositiveImaginaryComponents.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (large positive real components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = largePositiveRealComponents.re1;
	im1 = largePositiveRealComponents.im1;
	re2 = largePositiveRealComponents.re2;
	im2 = largePositiveRealComponents.im2;
	qre = largePositiveRealComponents.qre;
	qim = largePositiveRealComponents.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny negative imaginary components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = tinyNegativeImaginaryComponents.re1;
	im1 = tinyNegativeImaginaryComponents.im1;
	re2 = tinyNegativeImaginaryComponents.re2;
	im2 = tinyNegativeImaginaryComponents.im2;
	qre = tinyNegativeImaginaryComponents.qre;
	qim = tinyNegativeImaginaryComponents.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny negative real components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = tinyNegativeRealComponents.re1;
	im1 = tinyNegativeRealComponents.im1;
	re2 = tinyNegativeRealComponents.re2;
	im2 = tinyNegativeRealComponents.im2;
	qre = tinyNegativeRealComponents.qre;
	qim = tinyNegativeRealComponents.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny positive imaginary components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = tinyPositiveImaginaryComponents.re1;
	im1 = tinyPositiveImaginaryComponents.im1;
	re2 = tinyPositiveImaginaryComponents.re2;
	im2 = tinyPositiveImaginaryComponents.im2;
	qre = tinyPositiveImaginaryComponents.qre;
	qim = tinyPositiveImaginaryComponents.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex quotient (tiny positive real components)', function test( t ) {
	var delta;
	var tol;
	var re1;
	var im1;
	var re2;
	var im2;
	var qre;
	var qim;
	var i;
	var P;
	var Q;

	re1 = tinyPositiveRealComponents.re1;
	im1 = tinyPositiveRealComponents.im1;
	re2 = tinyPositiveRealComponents.re2;
	im2 = tinyPositiveRealComponents.im2;
	qre = tinyPositiveRealComponents.qre;
	qim = tinyPositiveRealComponents.qim;
	P = new Float64Array( 1 );
	Q = new Float64Array( 1 );

	for ( i = 0; i < re1.length; i++ ) {
		dladiv( re1[ i ], im1[ i ], re2[ i ], im2[ i ], P, Q );

		if ( P[ 0 ] === qre[ i ] ) {
			t.strictEqual( P[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( P[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. real: '+P[ 0 ]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( Q[ 0 ] === qim[ i ] ) {
			t.strictEqual( Q[ 0 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( Q[ 0 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re1[i]+' + '+im1[i]+'i. y: '+re2[i]+' + '+im2[i]+'i. imag: '+Q[ 0 ]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
