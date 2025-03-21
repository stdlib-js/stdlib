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
var incrmda = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmda, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmda(), 'function', 'returns a function' );
	t.end();
});

tape( 'the initial accumulated value is `null`', function test( t ) {
	var acc = incrmda();
	t.equal( acc(), null, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function incrementally computes the mean directional accuracy', function test( t ) {
	var expected;
	var actual;
	var delta;
	var data;
	var acc;
	var tol;
	var N;
	var i;

	data = [
		[ 2.0, -3.0 ],  // +,+
		[ 3.0, 1.0 ],   // +,+
		[ 2.0, 5.0 ],   // -,+
		[ 4.0, -4.0 ],  // +,-
		[ -3.0, -1.0 ], // -,+
		[ 4.0, 5.0 ]    // +,-
	];
	N = data.length;

	expected = [
		1.0,
		2.0/2.0,
		2.0/3.0,
		2.0/4.0,
		2.0/5.0,
		3.0/6.0
	];

	acc = incrmda();
	for ( i = 0; i < N; i++ ) {
		actual = acc( data[ i ][ 0 ], data[ i ][ 1 ] );
		if ( actual === expected[ i ] ) {
			t.equal( actual, expected[ i ], 'returns expected value' );
		} else {
			delta = abs( expected[ i ] - actual );
			tol = 1.0 * EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'within tolerance. Actual: '+actual+'. Expected: '+expected[ i ]+'. Delta: '+delta+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current mean directional accuracy', function test( t ) {
	var data;
	var acc;
	var i;

	data = [
		[ 2.0, -3.0 ], // +,+
		[ -3.0, 5.0 ], // -,+
		[ -1.0, 14.0 ] // +,+
	];
	acc = incrmda();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ][ 0 ], data[ i ][ 1 ] );
	}
	t.equal( acc(), 2.0/3.0, 'returns expected value' );
	t.end();
});
