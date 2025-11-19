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

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrnanmean = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrnanmean, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.strictEqual( typeof incrnanmean(), 'function', 'returns expected value' );
	t.end();
});

tape( 'the initial accumulated value is `null`', function test( t ) {
	var acc = incrnanmean();
	t.strictEqual( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function incrementally computes an arithmetic mean', function test( t ) {
	var expected;
	var actual;
	var count;
	var data;
	var sum;
	var acc;
	var i;
	var d;
	var N;

	data = [ 2.0, 3.0, 2.0, NaN, 4.0, NaN, 3.0, 4.0 ];
	N = data.length;
	count = 0;
	sum = 0;

	expected = [];
	actual = [];

	acc = incrnanmean();

	for ( i = 0; i < N; i++ ) {
		d = data[ i ];
		if ( isnan( d ) === false ) {
			sum += d;
			count += 1;
		}
		expected.push( ( count === 0 ) ? null : sum / count );
		actual.push( acc( d ) );
	}
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current mean', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, NaN, 3.0, NaN, 1.0 ];
	acc = incrnanmean();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.strictEqual( acc(), 2.0, 'returns expected value' );
	t.end();
});
