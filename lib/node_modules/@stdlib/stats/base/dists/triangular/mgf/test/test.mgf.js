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
var mgf = require( './../lib' );


// FIXTURES //

var smallRange = require( './fixtures/julia/small_range.json' );
var mediumRange = require( './fixtures/julia/medium_range.json' );
var largeRange = require( './fixtures/julia/large_range.json' );
var aLessCLessB = require( './fixtures/julia/a_less_c_less_b.json' );
var aLessCEqB = require( './fixtures/julia/a_less_c_eq_b.json' );
var aEqCLessB = require( './fixtures/julia/a_eq_c_less_b.json' );
var aEqCEqB = require( './fixtures/julia/a_eq_c_eq_b.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mgf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = mgf( NaN, 0.0, 1.0, 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = mgf( 0.0, NaN, 1.0, 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = mgf( 0.0, 1.0, NaN, 0.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = mgf( 0.0, 0.0, 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided parameters not satisfying `a <= c <= b`, the function returns `NaN`', function test( t ) {
	var y;

	y = mgf( 2.0, -1.0, -1.1, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mgf( 0.0, 3.0, 2.0, 2.5 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mgf( 0.0, 0.0, 1.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = mgf( 0.0, 0.0, 1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `0` for `t` and valid `a`, `b` and `c`, the function returns `1`', function test( t ) {
	var y;

	y = mgf( 0.0, -1.0, -1.0, -1.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );

	y = mgf( 0.0, 0.0, 1.0, 0.5 );
	t.strictEqual( y, 1.0, 'returns expected value' );

	y = mgf( 0.0, 0.0, 1.0, 1.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );

	y = mgf( 0.0, 1.0, 1.0, 1.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the MGF for `x` given a small range `b - a`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = smallRange.expected;
	x = smallRange.x;
	a = smallRange.a;
	b = smallRange.b;
	c = smallRange.c;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given a medium range `b - a`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = mediumRange.expected;
	x = mediumRange.x;
	a = mediumRange.a;
	b = mediumRange.b;
	c = mediumRange.c;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given a large range `b - a`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = largeRange.expected;
	x = largeRange.x;
	a = largeRange.a;
	b = largeRange.b;
	c = largeRange.c;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given the case: a < c < b', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = aLessCLessB.expected;
	x = aLessCLessB.x;
	a = aLessCLessB.a;
	b = aLessCLessB.b;
	c = aLessCLessB.c;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given the case: a < c = b', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = aLessCEqB.expected;
	x = aLessCEqB.x;
	a = aLessCEqB.a;
	b = aLessCEqB.b;
	c = aLessCEqB.c;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given the case: a = c < b', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = aEqCLessB.expected;
	x = aEqCLessB.x;
	a = aEqCLessB.a;
	b = aEqCLessB.b;
	c = aEqCLessB.c;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the MGF for `x` given the case: a = c = b', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var a;
	var b;
	var c;
	var y;
	var i;

	expected = aEqCEqB.expected;
	x = aEqCEqB.x;
	a = aEqCEqB.a;
	b = aEqCEqB.b;
	c = aEqCEqB.c;
	for ( i = 0; i < x.length; i++ ) {
		y = mgf( x[i], a[i], b[i], c[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', a: '+a[i]+', b: '+b[i]+', c: '+c[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. a: '+a[i]+'. b: '+b[i]+'. c: '+c[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
