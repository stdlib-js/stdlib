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
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrwmean = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrwmean, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrwmean(), 'function', 'returns a function' );
	t.end();
});

tape( 'the initial accumulated value is `null`', function test( t ) {
	var acc = incrwmean();
	t.equal( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function incrementally computes a weighted arithmetic mean', function test( t ) {
	var expected;
	var actual;
	var delta;
	var dataX;
	var dataW;
	var xwSum;
	var wSum;
	var acc;
	var tol;
	var N;
	var x;
	var w;
	var i;

	dataX = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	dataW = [ 1.0, 2.0, 0.1, 1.8, 9.9, 3.6 ];
	N = dataX.length;

	acc = incrwmean();

	xwSum = 0.0;
	wSum = 0.0;
	for ( i = 0; i < N; i++ ) {
		x = dataX[ i ];
		w = dataW[ i ];
		xwSum += x * w;
		wSum += w;
		expected = xwSum / wSum;
		actual = acc( x, w );
		delta = abs( actual - expected );
		tol = EPS * abs( expected );
		t.ok( delta <= tol, 'within tolerance. x: ' + x + '. Value: ' + actual + '. Expected: ' + expected + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});

tape( 'if not provided arguments, the accumulator function returns the current weighted mean', function test( t ) {
	var dataX;
	var dataW;
	var acc;
	var i;

	dataX = [ 2.0, 3.0, 1.0 ];
	dataW = [ 2.0, 2.0, 1.0 ];
	acc = incrwmean();
	for ( i = 0; i < dataX.length; i++ ) {
		acc( dataX[ i ], dataW[ i ] );
	}
	t.equal( acc(), 2.2, 'returns the current accumulated mean' );
	t.end();
});

tape( 'if not provided a weight, the accumulator function returns `NaN`', function test( t ) {
	var acc = incrwmean();
	t.equal( isnan( acc( 2.0 ) ), true, 'returns NaN' );
	t.equal( isnan( acc( 3.14 ) ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided `NaN` for either a value or a weight, the accumulator function returns `NaN`', function test( t ) {
	var acc = incrwmean();
	t.equal( isnan( acc( 2.0, NaN ) ), true, 'returns NaN' );
	t.equal( isnan( acc( 3.14, NaN ) ), true, 'returns NaN' );

	acc = incrwmean();
	t.equal( isnan( acc( NaN, 1.0 ) ), true, 'returns NaN' );
	t.equal( isnan( acc( NaN, 1.0 ) ), true, 'returns NaN' );

	acc = incrwmean();
	t.equal( isnan( acc( NaN, NaN ) ), true, 'returns NaN' );
	t.equal( isnan( acc( NaN, NaN ) ), true, 'returns NaN' );
	t.end();
});
