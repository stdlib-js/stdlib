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
var PI = require( '@stdlib/constants/math/float64-pi' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var roundsd = require( './../lib' );


// FIXTURES //

var base2 = require( './fixtures/julia/base_2_sigfigs_4.json' );
var base16 = require( './fixtures/julia/base_16_sigfigs_4.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof roundsd, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v;

	v = roundsd( NaN, 2 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = roundsd( 12368.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = roundsd( NaN, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = roundsd( NaN, NaN, 10 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = roundsd( NaN, 2, 10 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = roundsd( 3.14, NaN, 10 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = roundsd( 3.14, 2, NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `NaN` if provided `n = +-infinity`', function test( t ) {
	var v;

	v = roundsd( PI, PINF );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = roundsd( PI, NINF );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `NaN` if provided `n < 1`', function test( t ) {
	var v;

	v = roundsd( PI, 0 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = roundsd( PI, -1 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `NaN` if provided `b = +-infinity`', function test( t ) {
	var v;

	v = roundsd( PI, 2, PINF );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = roundsd( PI, 2, NINF );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `NaN` if provided `b <= 0`', function test( t ) {
	var v;

	v = roundsd( PI, 2, 0 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	v = roundsd( PI, 2, -1 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	var v = roundsd( PINF, 5 );
	t.strictEqual( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `-infinity` if provided `-infinity`', function test( t ) {
	var v = roundsd( NINF, 3 );
	t.strictEqual( v, NINF, 'returns -infinity' );
	t.end();
});

tape( 'the function returns `-0` if provided `-0`', function test( t ) {
	var v;

	v = roundsd( -0.0, 1 );
	t.strictEqual( isNegativeZero( v ), true, 'returns -0' );

	v = roundsd( -0.0, 2 );
	t.strictEqual( isNegativeZero( v ), true, 'returns -0' );

	t.end();
});

tape( 'the function returns `+0` if provided `+0`', function test( t ) {
	var v;

	v = roundsd( 0.0, 1 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	v = roundsd( +0.0, 2 );
	t.strictEqual( isPositiveZero( v ), true, 'returns +0' );

	t.end();
});

tape( 'the function supports rounding a numeric value with a specified number of significant figures', function test( t ) {
	t.strictEqual( roundsd( PI, 1 ), 3.0, 'returns expected value' );
	t.strictEqual( roundsd( -PI, 1 ), -3.0, 'returns expected value' );
	t.strictEqual( roundsd( PI, 2 ), 3.1, 'returns expected value' );
	t.strictEqual( roundsd( -PI, 2 ), -3.1, 'returns expected value' );
	t.strictEqual( roundsd( PI, 3 ), 3.14, 'returns expected value' );
	t.strictEqual( roundsd( -PI, 3 ), -3.14, 'returns expected value' );
	t.strictEqual( roundsd( 0.0, 2 ), 0.0, 'returns expected value' );
	t.strictEqual( roundsd( 12368.0, 3 ), 12400.0, 'returns expected value' );
	t.strictEqual( roundsd( -12368.0, 3 ), -12400.0, 'returns expected value' );
	t.strictEqual( roundsd( 12368.0, 2 ), 12000.0, 'returns expected value' );
	t.strictEqual( roundsd( -12368.0, 2 ), -12000.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports rounding a numeric value with a specified number of significant figures (base 10)', function test( t ) {
	t.strictEqual( roundsd( PI, 1, 10 ), 3.0, 'returns expected value' );
	t.strictEqual( roundsd( -PI, 1, 10 ), -3.0, 'returns expected value' );
	t.strictEqual( roundsd( PI, 2, 10 ), 3.1, 'returns expected value' );
	t.strictEqual( roundsd( -PI, 2, 10 ), -3.1, 'returns expected value' );
	t.strictEqual( roundsd( PI, 3, 10 ), 3.14, 'returns expected value' );
	t.strictEqual( roundsd( -PI, 3, 10 ), -3.14, 'returns expected value' );
	t.strictEqual( roundsd( 0.0, 2, 10 ), 0.0, 'returns expected value' );
	t.strictEqual( roundsd( 12368.0, 3, 10 ), 12400.0, 'returns expected value' );
	t.strictEqual( roundsd( -12368.0, 3, 10 ), -12400.0, 'returns expected value' );
	t.strictEqual( roundsd( 12368.0, 2, 10 ), 12000.0, 'returns expected value' );
	t.strictEqual( roundsd( -12368.0, 2, 10 ), -12000.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports rounding a numeric value with a specified number of significant figures (base 2)', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	t.strictEqual( roundsd( 0.0313, 1, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 2, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 3, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 4, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 5, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 6, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 7, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 8, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 9, 2 ), 0.03125, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 10, 2 ), 0.03131103515625, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 11, 2 ), 0.03131103515625, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 12, 2 ), 0.0312957763671875, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 13, 2 ), 0.03130340576171875, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 14, 2 ), 0.031299591064453125, 'returns expected value' );

	expected = base2.expected;
	x = base2.x;
	for ( i = 0; i < x.length; i++ ) {
		y = roundsd( x[ i ], 4, 2 );
		t.strictEqual( y, expected[ i ], 'returns '+expected[i]+' when provided '+x[i] );
	}
	t.end();
});

tape( 'the function supports rounding a numeric value with a specified number of significant figures using an arbitrary base', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	t.strictEqual( roundsd( 0.0313, 1, 16 ), 0.03125, 'returns expected value' );
	t.strictEqual( roundsd( 0.0313, 5, 16 ), 0.03130000829696655, 'returns expected value' );

	expected = base16.expected;
	x = base16.x;
	for ( i = 0; i < x.length; i++ ) {
		y = roundsd( x[ i ], 4, 16 );
		t.strictEqual( y, expected[ i ], 'returns '+expected[i]+' when provided '+x[i] );
	}
	t.end();
});

tape( 'if the function encounters overflow, the function returns the input value', function test( t ) {
	var x;
	var v;

	x = 3.1468234343023397;
	v = roundsd( x, 1000, 10 );
	t.strictEqual( v, x, 'returns the input value' );

	x = -3.1468234343023397;
	v = roundsd( x, 1000, 10 );
	t.strictEqual( v, x, 'returns the input value' );

	x = 9007199254740000;
	v = roundsd( x, 320, 10 );
	t.strictEqual( v, x, 'returns the input value' );

	x = -9007199254740000;
	v = roundsd( x, 320, 10 );
	t.strictEqual( v, x, 'returns the input value' );

	t.end();
});
