/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var incrwmean = require( './../lib' );


// FIXTURES //

var data = require( './fixtures/python/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrwmean, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.strictEqual( typeof incrwmean(), 'function', 'returns expected value' );
	t.end();
});

tape( 'the initial accumulated value is `null`', function test( t ) {
	var acc = incrwmean();
	t.strictEqual( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function incrementally computes a weighted arithmetic mean', function test( t ) {
	var expected;
	var actual;
	var acc;
	var N;
	var x;
	var w;
	var i;

	N = data.length;

	acc = incrwmean();

	for ( i = 0; i < N; i++ ) {
		x = data[ i ].x;
		w = data[ i ].w;
		expected = data[ i ].mean;
		actual = acc( x, w );
		t.strictEqual( isAlmostSameValue( actual, expected, 150.0 ), true, 'within tolerance. x: ' + x + '. w: ' + w + '. Value: ' + actual + '. Expected: ' + expected + '.' );
	}
	t.end();
});

tape( 'if not provided arguments, the accumulator function returns the current weighted mean', function test( t ) {
	var acc;
	var N;
	var i;

	N = data.length;
	acc = incrwmean();
	for ( i = 0; i < N; i++ ) {
		acc( data[ i ].x, data[ i ].w );
	}
	t.strictEqual( isAlmostSameValue( acc(), data[ N - 1 ].mean, 150.0 ), true, 'returns the current accumulated mean' );
	t.end();
});

tape( 'if not provided a weight, the accumulator function returns `NaN`', function test( t ) {
	var acc = incrwmean();
	t.strictEqual( isnan( acc( 2.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( acc( 3.14 ) ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided `NaN` for either a value or a weight, the accumulator function returns `NaN`', function test( t ) {
	var acc = incrwmean();
	t.strictEqual( isnan( acc( 2.0, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( acc( 3.14, NaN ) ), true, 'returns expected value' );

	acc = incrwmean();
	t.strictEqual( isnan( acc( NaN, 1.0 ) ), true, 'returns expected value' );
	t.strictEqual( isnan( acc( NaN, 1.0 ) ), true, 'returns expected value' );

	acc = incrwmean();
	t.strictEqual( isnan( acc( NaN, NaN ) ), true, 'returns expected value' );
	t.strictEqual( isnan( acc( NaN, NaN ) ), true, 'returns expected value' );
	t.end();
});
