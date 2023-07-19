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

/* eslint-disable id-length */

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var cinv = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/julia/data.json' );
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
	t.strictEqual( typeof cinv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function accepts an optional output array', function test( t ) {
	var result;
	var out;

	out = new Array( 2 );
	result = cinv( out, 2.0, 4.0 );
	t.deepEqual( out, [ 0.1, -0.2 ], 'values are correct' );
	t.equal( out, result, 'array reference is identical' );
	t.end();
});

tape( 'the function works without output array specified', function test( t ) {
	var result = cinv( 2.0, 4.0 );
	t.deepEqual( result, [ 0.1, -0.2 ], 'values are correct' );
	t.end();
});

tape( 'the function computes a complex inverse', function test( t ) {
	var delta;
	var qre;
	var qim;
	var tol;
	var re;
	var im;
	var i;
	var q;

	re = data.re;
	im = data.im;
	qre = data.qre;
	qim = data.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinv( re[ i ], im[ i ] );

		if ( q[ 0 ] === qre[ i ] ) {
			t.strictEqual( q[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === qim[ i ] ) {
			t.strictEqual( q[ 1 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (large negative imaginary components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = largeNegativeImaginaryComponents.re;
	im = largeNegativeImaginaryComponents.im;
	qre = largeNegativeImaginaryComponents.qre;
	qim = largeNegativeImaginaryComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinv( re[ i ], im[ i ] );

		if ( q[ 0 ] === qre[ i ] ) {
			t.strictEqual( q[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === qim[ i ] ) {
			t.strictEqual( q[ 1 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (large negative real components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = largeNegativeRealComponents.re;
	im = largeNegativeRealComponents.im;
	qre = largeNegativeRealComponents.qre;
	qim = largeNegativeRealComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinv( re[ i ], im[ i ] );

		if ( q[ 0 ] === qre[ i ] ) {
			t.strictEqual( q[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === qim[ i ] ) {
			t.strictEqual( q[ 1 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (large positive imaginary components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = largePositiveImaginaryComponents.re;
	im = largePositiveImaginaryComponents.im;
	qre = largePositiveImaginaryComponents.qre;
	qim = largePositiveImaginaryComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinv( re[ i ], im[ i ] );

		if ( q[ 0 ] === qre[ i ] ) {
			t.strictEqual( q[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === qim[ i ] ) {
			t.strictEqual( q[ 1 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (large positive real components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = largePositiveRealComponents.re;
	im = largePositiveRealComponents.im;
	qre = largePositiveRealComponents.qre;
	qim = largePositiveRealComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinv( re[ i ], im[ i ] );

		if ( q[ 0 ] === qre[ i ] ) {
			t.strictEqual( q[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === qim[ i ] ) {
			t.strictEqual( q[ 1 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (tiny negative imaginary components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = tinyNegativeImaginaryComponents.re;
	im = tinyNegativeImaginaryComponents.im;
	qre = tinyNegativeImaginaryComponents.qre;
	qim = tinyNegativeImaginaryComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinv( re[ i ], im[ i ] );

		if ( q[ 0 ] === qre[ i ] ) {
			t.strictEqual( q[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === qim[ i ] ) {
			t.strictEqual( q[ 1 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (tiny negative real components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = tinyNegativeRealComponents.re;
	im = tinyNegativeRealComponents.im;
	qre = tinyNegativeRealComponents.qre;
	qim = tinyNegativeRealComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinv( re[ i ], im[ i ] );

		if ( q[ 0 ] === qre[ i ] ) {
			t.strictEqual( q[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === qim[ i ] ) {
			t.strictEqual( q[ 1 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (tiny positive imaginary components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = tinyPositiveImaginaryComponents.re;
	im = tinyPositiveImaginaryComponents.im;
	qre = tinyPositiveImaginaryComponents.qre;
	qim = tinyPositiveImaginaryComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinv( re[ i ], im[ i ] );

		if ( q[ 0 ] === qre[ i ] ) {
			t.strictEqual( q[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === qim[ i ] ) {
			t.strictEqual( q[ 1 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function computes a complex inverse (tiny positive real components)', function test( t ) {
	var delta;
	var tol;
	var qre;
	var qim;
	var re;
	var im;
	var i;
	var q;

	re = tinyPositiveRealComponents.re;
	im = tinyPositiveRealComponents.im;
	qre = tinyPositiveRealComponents.qre;
	qim = tinyPositiveRealComponents.qim;

	for ( i = 0; i < re.length; i++ ) {
		q = cinv( re[ i ], im[ i ] );

		if ( q[ 0 ] === qre[ i ] ) {
			t.strictEqual( q[ 0 ], qre[ i ], 'returns expected real component' );
		} else {
			delta = abs( q[ 0 ] - qre[ i ] );
			tol = EPS * abs( qre[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. real: '+q[0]+'. expected: '+qre[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
		if ( q[ 1 ] === qim[ i ] ) {
			t.strictEqual( q[ 1 ], qim[ i ], 'returns expected imaginary component' );
		} else {
			delta = abs( q[ 1 ] - qim[ i ] );
			tol = EPS * abs( qim[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+re[i]+'+ '+im[i]+'i. imag: '+q[1]+'. expected: '+qim[i]+'. delta: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function may overflow', function test( t ) {
	var v;

	v = cinv( 5.0e-324, 5.0e-324 );
	t.strictEqual( v[ 0 ], PINF, 'real component is +infinity' );
	t.strictEqual( v[ 1 ], NINF, 'imaginary component is -infinity' );

	v = cinv( -5.0e-324, 5.0e-324 );
	t.strictEqual( v[ 0 ], NINF, 'real component is -infinity' );
	t.strictEqual( v[ 1 ], NINF, 'imaginary component is -infinity' );

	v = cinv( -5.0e-324, -5.0e-324 );
	t.strictEqual( v[ 0 ], NINF, 'real component is -infinity' );
	t.strictEqual( v[ 1 ], PINF, 'imaginary component is +infinity' );

	v = cinv( 5.0e-324, -5.0e-324 );
	t.strictEqual( v[ 0 ], PINF, 'real component is +infinity' );
	t.strictEqual( v[ 1 ], PINF, 'imaginary component is +infinity' );

	v = cinv( 0.0, 5.0e-324 );
	t.strictEqual( v[ 0 ], 0.0, 'real component is 0' );
	t.strictEqual( v[ 1 ], NINF, 'imaginary component is -infinity' );

	v = cinv( 0.0, -5.0e-324 );
	t.strictEqual( v[ 0 ], 0.0, 'real component is 0' );
	t.strictEqual( v[ 1 ], PINF, 'imaginary component is +infinity' );

	v = cinv( 5.0e-324, 0.0 );
	t.strictEqual( v[ 0 ], PINF, 'real component is +infinity' );
	t.strictEqual( v[ 1 ], 0.0, 'imaginary component is 0' );

	v = cinv( -5.0e-324, 0.0 );
	t.strictEqual( v[ 0 ], NINF, 'real component is -infinity' );
	t.strictEqual( v[ 1 ], 0.0, 'imaginary component is 0' );

	t.end();
});

tape( 'if a real or imaginary component is `NaN`, all components are `NaN`', function test( t ) {
	var v;

	v = cinv( NaN, 3.0 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = cinv( 5.0, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	v = cinv( NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns NaN' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns NaN' );

	t.end();
});
