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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );


// FIXTURES //

var largeShape = require( './fixtures/julia/large_shape.json' );
var largeRate = require( './fixtures/julia/large_rate.json' );
var bothLarge = require( './fixtures/julia/both_large.json' );


// VARIABLES //

var cdf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( cdf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cdf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the function returns `NaN`', opts, function test( t ) {
	var y = cdf( NaN, 0.0, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = cdf( 0.0, NaN, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	y = cdf( 0.0, 1.0, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `+infinity` for `x` and a finite `k` and `lambda`, the function returns `1`', opts, function test( t ) {
	var y = cdf( PINF, 2, 1.0 );
	t.strictEqual( y, 1.0, 'returns expected value' );
	t.end();
});

tape( 'if provided `-infinity` for `x` and a finite `k` and `lambda`, the function returns `0`', opts, function test( t ) {
	var y = cdf( NINF, 2, 1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a negative `k`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( 2.0, -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0, -1.0, 2.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NINF, 1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NINF, PINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NINF, NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a negative `lambda`, the function returns `NaN`', opts, function test( t ) {
	var y;

	y = cdf( 2.0, 2.0, -1.0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 0.0, 2.0, -1/0 );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, 1.0, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, PINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NINF, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	y = cdf( 2.0, NaN, NINF );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates the cdf for `x` given large `k` and `lambda`', opts, function test( t ) {
	var expected;
	var lambda;
	var i;
	var k;
	var x;
	var y;

	expected = bothLarge.expected;
	x = bothLarge.x;
	k = bothLarge.k;
	lambda = bothLarge.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', k:'+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 150 ), 'within tolerance. x: '+x[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given large shape parameter `k`', opts, function test( t ) {
	var expected;
	var lambda;
	var i;
	var k;
	var x;
	var y;

	expected = largeShape.expected;
	x = largeShape.x;
	k = largeShape.k;
	lambda = largeShape.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', k:'+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 80 ), 'within tolerance. x: '+x[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the cdf for `x` given large rate parameter `lambda`', opts, function test( t ) {
	var expected;
	var lambda;
	var i;
	var k;
	var x;
	var y;

	expected = largeRate.expected;
	x = largeRate.x;
	k = largeRate.k;
	lambda = largeRate.lambda;
	for ( i = 0; i < x.length; i++ ) {
		y = cdf( x[i], k[i], lambda[i] );
		if ( y === expected[i] ) {
			t.strictEqual( y, expected[i], 'x: '+x[i]+', k:'+k[i]+', lambda: '+lambda[i]+', y: '+y+', expected: '+expected[i] );
		} else {
			t.ok( isAlmostSameValue( y, expected[i], 80 ), 'within tolerance. x: '+x[ i ]+'. k: '+k[i]+'. lambda: '+lambda[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});
