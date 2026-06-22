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
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var logpdf = require( './../lib' );


// FIXTURES //

var largeRate = require( './fixtures/julia/large_rate.json' );
var largeShape = require( './fixtures/julia/large_shape.json' );
var bothLarge = require( './fixtures/julia/both_large.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof logpdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', function test( t ) {
	var y = logpdf( NaN, 1.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = logpdf( 0.0, NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = logpdf( 0.0, 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity` for `x` and a finite `k` and `lambda`, the function returns `-Infinity`', function test( t ) {
	var y = logpdf( PINF, 1.0, 1.0 );
	t.strictEqual( y, NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a finite `k` and `lambda`, the function returns `-Infinity`', function test( t ) {
	var y = logpdf( NINF, 1.0, 1.0 );
	t.strictEqual( y, NINF, 'returns expected value' );
	t.end();
});

tape( 'if provided `k <= 0`, the function returns `NaN`', function test( t ) {
	var y;

	y = logpdf( 2.0, -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0, -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NINF, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NINF, PINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NINF, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided `lambda <= 0`, the function returns `NaN`', function test( t ) {
	var y;

	y = logpdf( 2.0, 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 0.0, 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = logpdf( 2.0, NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the logpdf for `x` given a large rate', function test( t ) {
	var expected;
	var lambda;
	var x;
	var k;
	var y;
	var i;

	expected = largeRate.expected;
	x = largeRate.x;
	k = largeRate.k;
	lambda = largeRate.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', k: '+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 600 ), 'within tolerance. x: '+x[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given a large shape', function test( t ) {
	var expected;
	var lambda;
	var x;
	var k;
	var y;
	var i;

	expected = largeShape.expected;
	x = largeShape.x;
	k = largeShape.k;
	lambda = largeShape.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', k: '+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 300 ), 'within tolerance. x: '+x[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the logpdf for `x` given both large `k` and `lambda`', function test( t ) {
	var expected;
	var lambda;
	var x;
	var k;
	var y;
	var i;

	expected = bothLarge.expected;
	x = bothLarge.x;
	k = bothLarge.k;
	lambda = bothLarge.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = logpdf( x[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', k: '+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 700 ), 'within tolerance. x: '+x[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});
