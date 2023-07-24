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
var factory = require( './../lib/factory.js' );


// FIXTURES //

var largeD1 = require( './fixtures/julia/large_d1.json' );
var largeD2 = require( './fixtures/julia/large_d2.json' );
var bothLarge = require( './fixtures/julia/both_large.json' );
var cppLargeD1 = require( './fixtures/cpp/large_d1.json' );
var cppLargeD2 = require( './fixtures/cpp/large_d2.json' );
var cppBothLarge = require( './fixtures/cpp/both_large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var pdf = factory( 0.0, 1.0 );
	t.equal( typeof pdf, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the created function returns `NaN`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 2.0, 1.0 );
	y = pdf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( NaN, 1.0 );
	y = pdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( 1.0, NaN );
	y = pdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( NaN, NaN );
	y = pdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( NaN, NaN );
	y = pdf( NaN );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided a finite `d1` and `d2`, the function returns a function which returns `0` when provided `+infinity` for `x`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 0.5, 1.0 );
	y = pdf( PINF );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided a finite `d1` and `d2`, the function returns a function which returns `0` when provided `-infinity` for `x`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 0.5, 1.0 );
	y = pdf( NINF );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided `d1 < 2.0`, the function returns a function which returns `+Infinity` when provided `0.0` for `x`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 1.0, 1.0 );
	y = pdf( 0.0 );
	t.equal( y, PINF, 'returns +Infinity' );

	pdf = factory( 1.5, 1.0 );
	y = pdf( 0.0 );
	t.equal( y, PINF, 'returns +Infinity' );

	t.end();
});

tape( 'if provided `d1 = 2.0`, the function returns a function which returns `1.0` when provided `0.0` for `x`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 2.0, 1.0 );
	y = pdf( 0.0 );
	t.equal( y, 1.0, 'returns 1' );

	pdf = factory( 2.0, 3.0 );
	y = pdf( 0.0 );
	t.equal( y, 1.0, 'returns 1' );

	t.end();
});

tape( 'if provided `d1 > 2.0`, the function returns a function which returns `0.0` when provided `0.0` for `x`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 3.0, 1.0 );
	y = pdf( 0.0 );
	t.equal( y, 0.0, 'returns 0' );

	pdf = factory( 3.5, 1.0 );
	y = pdf( 0.0 );
	t.equal( y, 0.0, 'returns 0' );

	t.end();
});

tape( 'if provided `d2 <= 0`, the created function always returns `NaN`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 1.0, 0.0 );

	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( 1.0, -1.0 );

	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( 1.0, NINF );
	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( PINF, NINF );
	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( NINF, NINF );
	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( NaN, NINF );
	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'if provided `d1 <= 0`, the created function always returns `NaN`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 0.0, 0.5 );

	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( -1.0, 0.5 );

	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	y = pdf( 0.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( NINF, 1.0 );
	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( NINF, PINF );
	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( NINF, NINF );
	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	pdf = factory( NINF, NaN );
	y = pdf( 2.0 );
	t.equal( isnan( y ), true, 'returns NaN' );

	t.end();
});

tape( 'the created function evaluates the pdf for `x` given large `d1` and `d2` (tested against Julia)', function test( t ) {
	var expected;
	var delta;
	var pdf;
	var tol;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	expected = bothLarge.expected;
	x = bothLarge.x;
	d1 = bothLarge.d1;
	d2 = bothLarge.d2;
	for ( i = 0; i < x.length; i++ ) {
		pdf = factory( d1[i], d2[i] );
		y = pdf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', d1: '+d1[i]+', d2: '+d2[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 2300.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. d1: '+d1[i]+'. d2: '+d2[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the pdf for `x` given a large parameter `d1` (tested against Julia)', function test( t ) {
	var expected;
	var delta;
	var pdf;
	var tol;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	expected = largeD1.expected;
	x = largeD1.x;
	d1 = largeD1.d1;
	d2 = largeD1.d2;
	for ( i = 0; i < x.length; i++ ) {
		pdf = factory( d1[i], d2[i] );
		y = pdf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', d1: '+d1[i]+', d2: '+d2[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 150.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. d1: '+d1[i]+'. d2: '+d2[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the pdf for `x` given a large parameter `d2` (tested against Julia)', function test( t ) {
	var expected;
	var delta;
	var pdf;
	var tol;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	expected = largeD2.expected;
	x = largeD2.x;
	d1 = largeD2.d1;
	d2 = largeD2.d2;
	for ( i = 0; i < x.length; i++ ) {
		pdf = factory( d1[i], d2[i] );
		y = pdf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', d1: '+d1[i]+', d2: '+d2[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1800.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. d1: '+d1[i]+'. d2: '+d2[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the pdf for `x` given large `d1` and `d2` (tested against the Boost C++ library)', function test( t ) {
	var expected;
	var delta;
	var pdf;
	var tol;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	expected = cppBothLarge.expected;
	x = cppBothLarge.x;
	d1 = cppBothLarge.d1;
	d2 = cppBothLarge.d2;
	for ( i = 0; i < x.length; i++ ) {
		pdf = factory( d1[i], d2[i] );
		y = pdf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', d1: '+d1[i]+', d2: '+d2[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 150.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. d1: '+d1[i]+'. d2: '+d2[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the pdf for `x` given a large parameter `d1` (tested against the Boost C++ library)', function test( t ) {
	var expected;
	var delta;
	var pdf;
	var tol;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	expected = cppLargeD1.expected;
	x = cppLargeD1.x;
	d1 = cppLargeD1.d1;
	d2 = cppLargeD1.d2;
	for ( i = 0; i < x.length; i++ ) {
		pdf = factory( d1[i], d2[i] );
		y = pdf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', d1: '+d1[i]+', d2: '+d2[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 100.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. d1: '+d1[i]+'. d2: '+d2[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the created function evaluates the pdf for `x` given a large parameter `d2` (tested against the Boost C++ library)', function test( t ) {
	var expected;
	var delta;
	var pdf;
	var tol;
	var d1;
	var d2;
	var x;
	var y;
	var i;

	expected = cppLargeD2.expected;
	x = cppLargeD2.x;
	d1 = cppLargeD2.d1;
	d2 = cppLargeD2.d2;
	for ( i = 0; i < x.length; i++ ) {
		pdf = factory( d1[i], d2[i] );
		y = pdf( x[i] );
		if ( y === expected[i] ) {
			t.equal( y, expected[i], 'x: '+x[i]+', d1: '+d1[i]+', d2: '+d2[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			delta = abs( y - expected[ i ] );
			tol = 1150.0 * EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. d1: '+d1[i]+'. d2: '+d2[i]+'. y: '+y+'. E: '+expected[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}
	t.end();
});
