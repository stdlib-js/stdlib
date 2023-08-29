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
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var incrmae = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmae, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmae(), 'function', 'returns a function' );
	t.end();
});

tape( 'the initial accumulated value is `null`', function test( t ) {
	var acc = incrmae();
	t.equal( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function incrementally computes the mean absolute error', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var acc;
	var sum;
	var tol;
	var N;
	var x;
	var y;
	var i;

	data = [
		[ 2.0, 3.0 ],
		[ 3.0, -1.0 ],
		[ 2.0, 5.0 ],
		[ 4.0, -4.0 ],
		[ 3.0, 0.0 ],
		[ -4.0, 5.0 ]
	];
	N = data.length;

	acc = incrmae();

	sum = 0;
	for ( i = 0; i < N; i++ ) {
		x = data[ i ][ 0 ];
		y = data[ i ][ 1 ];
		sum += abs( y-x );
		expected = sum / (i+1);
		actual = acc( x, y );
		if ( actual === expected ) {
			t.equal( actual, expected, 'returns expected value' );
		} else {
			delta = abs( expected - actual );
			tol = 1.0 * EPS * abs( expected );
			t.equal( delta <= tol, true, 'within tolerance. Actual: '+actual+'. Expected: '+expected+'. Delta: '+delta+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current mean absolute error', function test( t ) {
	var data;
	var acc;
	var i;

	data = [
		[ 2.0, 3.0 ],
		[ 3.0, -5.0 ],
		[ 1.0, 10.0 ]
	];
	acc = incrmae();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ][ 0 ], data[ i ][ 1 ] );
	}
	t.equal( acc(), 6.0, 'returns expected value' );
	t.end();
});
