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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isAlmostSameValue = require( '@stdlib/assert/is-almost-same-value' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var factory = require( './../lib/factory.js' );


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var pdf = factory( 1.0, 1.0 );
	t.strictEqual( typeof pdf, 'function', 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN` for any parameter, the returned function always returns `NaN`', function test( t ) {
	var pdf;

	pdf = factory( NaN, 1.0 );
	t.strictEqual( isnan( pdf( 1.0 ) ), true, 'returns expected value' );

	pdf = factory( 1.0, NaN );
	t.strictEqual( isnan( pdf( 1.0 ) ), true, 'returns expected value' );

	pdf = factory( NaN, NaN );
	t.strictEqual( isnan( pdf( 1.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a non-positive `alpha`, the returned function always returns `NaN`', function test( t ) {
	var pdf;

	pdf = factory( 0.0, 1.0 );
	t.strictEqual( isnan( pdf( 1.0 ) ), true, 'returns expected value' );

	pdf = factory( -1.0, 1.0 );
	t.strictEqual( isnan( pdf( 1.0 ) ), true, 'returns expected value' );

	pdf = factory( NINF, 1.0 );
	t.strictEqual( isnan( pdf( 1.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a non-positive `beta`, the returned function always returns `NaN`', function test( t ) {
	var pdf;

	pdf = factory( 1.0, 0.0 );
	t.strictEqual( isnan( pdf( 1.0 ) ), true, 'returns expected value' );

	pdf = factory( 1.0, -1.0 );
	t.strictEqual( isnan( pdf( 1.0 ) ), true, 'returns expected value' );

	pdf = factory( 1.0, NINF );
	t.strictEqual( isnan( pdf( 1.0 ) ), true, 'returns expected value' );

	t.end();
});

tape( 'the returned function returns `NaN` if provided `NaN` for `x`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 1.0, 1.0 );

	y = pdf( NaN );
	t.strictEqual( isnan( y ), true, 'returns expected value' );

	t.end();
});

tape( 'the returned function returns `0` if provided `x <= 0`', function test( t ) {
	var pdf;
	var y;

	pdf = factory( 1.0, 1.0 );

	y = pdf( 0.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );

	y = pdf( -1.0 );
	t.strictEqual( y, 0.0, 'returns expected value' );
	y = pdf( NINF );
	t.strictEqual( y, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the returned function evaluates the log-logistic pdf for positive `x`, `alpha`, and `beta`', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var pdf;
	var x;
	var y;
	var i;

	expected = data.expected;
	x = data.x;
	alpha = data.alpha;
	beta = data.beta;
	for ( i = 0; i < x.length; i++ ) {
		pdf = factory( alpha[ i ], beta[ i ] );
		y = pdf( x[ i ] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'x: '+x[ i ]+', alpha: '+alpha[ i ]+', beta: '+beta[ i ]+', y: '+y+', expected: '+expected[ i ] );
		} else {
			t.strictEqual( isAlmostSameValue( y, expected[i], 30 ), true, 'within tolerance. x: '+x[ i ]+'. alpha: '+alpha[i]+'. beta: '+beta[i]+'. y: '+y+'. E: '+expected[ i ]+'.' );
		}
	}
	t.end();
});
