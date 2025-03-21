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
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var incrmminmax = require( './../lib/minmax.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmminmax, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmminmax( [ 0.0, 0.0 ], 3, [ 0.0, 0.0, 0.0 ] ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function computes a moving minimum and maximum incrementally', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var out;
	var buf;
	var W;
	var N;
	var i;
	var j;

	data = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0, 2.0, 2.0, 2.0, 1.0, 0.0, 4.0, -1.0 ];
	N = data.length;

	out = [ 0.0, 0.0 ];
	W = 3;
	buf = [ 0.0, 0.0, 0.0 ];
	acc = incrmminmax( out, W, buf );

	actual = new Array( N );
	for ( i = 0; i < N; i++ ) {
		j = i % W;
		actual[ i ] = acc( data[ i ], j );
		buf[ j ] = data[ i ];
		t.equal( actual[ i ], out, 'returns output array' );
		actual[ i ] = actual[ i ].slice();
	}
	expected = [
		[ 2.0, 2.0 ],
		[ 2.0, 3.0 ],
		[ 2.0, 3.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 3.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 4.0 ],
		[ 2.0, 2.0 ],
		[ 1.0, 2.0 ],
		[ 0.0, 2.0 ],
		[ 0.0, 4.0 ],
		[ -1.0, 4.0 ]
	];

	t.deepEqual( actual, expected, 'returns expected incremental results' );
	t.end();
});

tape( 'the accumulator function correctly handles signed zeros', function test( t ) {
	var expected;
	var data;
	var sgn1;
	var sgn2;
	var acc;
	var buf;
	var W;
	var v;
	var i;
	var j;

	W = 3;
	buf = [ 0.0, 0.0, 0.0 ];
	acc = incrmminmax( [ 0.0, 0.0 ], W, buf );

	data = [
		0.0,  // 0 => min: 0.0, max: 0.0 (0)
		-0.0, // 0, -0 => min: -0.0, max: 0.0 (1)
		0.0,  // 0, -0, 0 => min: -0.0, max: 0.0 (2)
		0.0,  // -0, 0, 0 => min: -0.0, max: 0.0 (3)
		0.0,  // 0, 0, 0 => min: 0.0, max: 0.0 (4)
		-0.0, // 0, 0, -0 => min: -0.0, max: 0.0 (5)
		0.0,  // 0, -0, 0 => min: -0.0, max: 0.0 (6)
		0.0,  // -0, 0, 0 => min: -0.0, max: 0.0 (7)
		0.0,  // 0, 0, 0 => min: 0.0, max: 0.0 (8)
		-0.0, // 0, 0, -0 => min: -0.0, max: 0.0 (9)
		-0.0, // 0, -0, -0 => min: -0.0, max: 0.0 (10)
		-0.0, // -0, -0, -0 => min: -0.0, max: -0.0 (11)
		0.0,  // -0, -0, 0 => min: -0.0, max: 0.0 (12)

		-0.0, // -0, 0, -0 => min: -0.0, max: 0.0 (13)
		0.0,  // 0, -0, 0 => min: -0.0, max: 0.0 (14)
		-0.0, // -0, 0, -0 => min: -0.0, max: 0.0 (15)
		-0.0, // 0, -0, -0 => min: -0.0, max: 0.0 (16)
		-0.0, // -0, -0, -0 => min: -0.0, max: -0.0 (17)
		0.0,  // -0, -0, 0 => min: -0.0, max: 0.0 (18)
		-0.0, // -0, 0, -0 => min: -0.0, max: 0.0 (19)
		-0.0, // 0, -0, -0 => min: -0.0, max: 0.0 (20)
		-0.0, // -0, -0, -0 => min: -0.0, max: -0.0 (21)
		0.0,  // -0, -0, 0 => min: -0.0, max: 0.0 (22)
		0.0,  // -0, 0, 0 => min: -0.0, max: 0.0 (23)
		0.0,  // 0, 0, 0 => min: 0.0, max: 0.0 (24)
		-0.0, // 0, 0, -0 => min: -0.0, max: 0.0 (25)

		// Case 1: out: -0, in: +0, cnt: 1
		3.14, // 0, -0, 3.14 => min: -0.0, max: 3.14
		3.14, // -0, 3.14, 3.14 => min: -0.0, max: 3.14
		0.0,  // 3.14, 3.14, 0 => min: 0.0, max: 3.14

		// Case 2: out: +0, in: -0, cnt: 1
		3.14, // 3.14, 0, 3.14 => min: 0.0, max: 3.14
		3.14, // 0, 3.14, 3.14 => min: 0.0, max: 3.14
		-0.0, // 3.14, 3.14, -0 => min: -0.0, max: 3.14

		// Case 3: out: -0, in: -0, cnt: 1
		3.14, // 3.14, -0, 3.14 => min: -0.0, max: 3.14
		3.14, // -0, 3.14, 3.14 => min: -0.0, max: 3.14
		-0.0, // 3.14, 3.14, -0 => min: -0.0, max: 3.14

		// Case 4: out: -0, in: +0, cnt: 2
		3.14, // 3.14, -0, 3.14 => min: -0.0, max: 3.14
		-0.0, // -0, 3.14, -0 => min: -0.0, max: 3.14
		0.0,  // 3.14, -0, 0 => min: -0.0, max: 3.14

		// Case 5: out: +0, in: +0, cnt: 1
		3.14, // -0, 0, 3.14 => min: -0.0, max: 3.14
		3.14, // 0, 3.14, 3.14 => min: 0.0, max: 3.14
		0.0,  // 3.14, 3.14, 0 => min: 0.0, max: 3.14

		// Case 6: out: +0, in: -0, cnt: 2
		3.14, // 3.14, 0, 3.14 => min: 0.0, max: 3.14
		-0.0, // 0, 3.14, -0 => min: -0.0, max: 3.14
		0.0,  // 3.14, -0, 0 => min: -0.0, max: 3.14

		// Case 7: out: +0, in: +0, cnt: 2
		3.14, // -0, 0, 3.14 => min: -0.0, max: 3.14
		0.0,  // 0, 3.14, 0 => min: 0.0, max: 3.14
		0.0,  // 3.14, 0, 0 => min: 0.0, max: 3.14

		// Reset:
		-0.0,  // 0, 0, -0 => min: -0.0, max: 0.0

		// Case 8: out: -0, in: +0, cnt: 1
		-3.14, // 0, -0, -3.14 => min: -3.14, max: 0.0
		-3.14, // 0, -3.14, -3.14 => min: -3.14, max: 0.0
		0.0,   // -3.14, -3.14, 0 => min: -3.14, max: 0.0

		// Case 9: out: +0, in: -0, cnt: 1
		-3.14, // -3.14, 0, 3.14 => min: -3.14, max: 0.0
		-3.14, // 0, -3.14, -3.14 => min: -3.14, max: 0.0
		-0.0,  // -3.14, -3.14, -0 => min: -3.14, max: -0.0

		// Case 10: out: -0, in: -0, cnt: 1
		-3.14, // -3.14, -0, -3.14 => min: -3.14, max: -0.0
		-3.14, // -0, -3.14, -3.14 => min: -3.14, max: -0.0
		-0.0,  // -3.14, -3.14, -0 => min: -3.14, max: -0.0

		// Case 11: out: -0, in: +0, cnt: 2
		-3.14, // -3.14, -0, -3.14 => min: -3.14, max: -0.0
		-0.0,  // -0, -3.14, -0 => min: -3.14, max: -0.0
		0.0,   // -3.14, -0, 0 => min: -3.14, max: 0.0

		// Case 12: out: +0, in: +0, cnt: 1
		-3.14, // -0, 0, -3.14 => min: -3.14, max: 0.0
		-3.14, // 0, -3.14, -3.14 => min: -3.14, max: 0.0
		0.0,   // -3.14, -3.14, 0 => min: -3.14, max: 0.0

		// Case 13: out: +0, in: -0, cnt: 2
		-3.14, // -3.14, 0, -3.14 => min: -3.14, max: 0.0
		-0.0,  // 0, -3.14, -0 => min: -3.14, max: 0.0
		0.0,   // -3.14, -0, 0 => min: -3.14, max: 0.0

		// Case 14: out: +0, in: +0, cnt: 2
		-3.14, // -0, 0, -3.14 => min: -3.14, max: 0.0
		0.0,   // 0, -3.14, 0 => min: -3.14, max: 0.0
		0.0,    // -3.14, 0, 0 => min: -3.14, max: 0.0

		// Reset:
		0.0,  // 0, 0, 0 => min: 0.0, max: 0.0

		// Case 15: out: +0, in: -0, cnt: 2
		-3.14, // 0, 0, -3.14 => min: -3.14, max: 0.0
		0.0,   // 0, -3.14, 0 => min: -3.14, max: 0.0
		-0.0   // -3.14, 0, -0 => min: -3.14, max: 0.0
	];
	expected = [
		[ 0.0, 0.0, 0 ],
		[ -0.0, 0.0, 1 ],
		[ -0.0, 0.0, 2 ],
		[ -0.0, 0.0, 3 ],
		[ 0.0, 0.0, 4 ],
		[ -0.0, 0.0, 5 ],
		[ -0.0, 0.0, 6 ],
		[ -0.0, 0.0, 7 ],
		[ 0.0, 0.0, 8 ],
		[ -0.0, 0.0, 9 ],
		[ -0.0, 0.0, 10 ],
		[ -0.0, -0.0, 11 ],
		[ -0.0, 0.0, 12 ],

		[ -0.0, 0.0, 13 ],
		[ -0.0, 0.0, 14 ],
		[ -0.0, 0.0, 15 ],
		[ -0.0, 0.0, 16 ],
		[ -0.0, -0.0, 17 ],
		[ -0.0, 0.0, 18 ],
		[ -0.0, 0.0, 19 ],
		[ -0.0, 0.0, 20 ],
		[ -0.0, -0.0, 21 ],
		[ -0.0, 0.0, 22 ],
		[ -0.0, 0.0, 23 ],
		[ 0.0, 0.0, 24 ],
		[ -0.0, 0.0, 25 ],

		// Case 1:
		[ -0.0, 3.14, 26 ],
		[ -0.0, 3.14, 27 ],
		[ 0.0, 3.14, 28 ],

		// Case 2:
		[ 0.0, 3.14, 29 ],
		[ 0.0, 3.14, 30 ],
		[ -0.0, 3.14, 31 ],

		// Case 3:
		[ -0.0, 3.14, 32 ],
		[ -0.0, 3.14, 33 ],
		[ -0.0, 3.14, 34 ],

		// Case 4:
		[ -0.0, 3.14, 35 ],
		[ -0.0, 3.14, 36 ],
		[ -0.0, 3.14, 37 ],

		// Case 5:
		[ -0.0, 3.14, 38 ],
		[ 0.0, 3.14, 39 ],
		[ 0.0, 3.14, 40 ],

		// Case 6:
		[ 0.0, 3.14, 41 ],
		[ -0.0, 3.14, 42 ],
		[ -0.0, 3.14, 43 ],

		// Case 7:
		[ -0.0, 3.14, 44 ],
		[ 0.0, 3.14, 45 ],
		[ 0.0, 3.14, 46 ],

		// Reset:
		[ -0.0, 0.0, 47 ],

		// Case 8:
		[ -3.14, 0.0, 48 ],
		[ -3.14, -0.0, 49 ],
		[ -3.14, 0.0, 50 ],

		// Case 9:
		[ -3.14, 0.0, 51 ],
		[ -3.14, 0.0, 52 ],
		[ -3.14, -0.0, 53 ],

		// Case 10:
		[ -3.14, -0.0, 54 ],
		[ -3.14, -0.0, 55 ],
		[ -3.14, -0.0, 56 ],

		// Case 11:
		[ -3.14, -0.0, 57 ],
		[ -3.14, -0.0, 58 ],
		[ -3.14, 0.0, 59 ],

		// Case 12:
		[ -3.14, 0.0, 60 ],
		[ -3.14, 0.0, 61 ],
		[ -3.14, 0.0, 62 ],

		// Case 13:
		[ -3.14, 0.0, 63 ],
		[ -3.14, 0.0, 64 ],
		[ -3.14, 0.0, 65 ],

		// Case 14:
		[ -3.14, 0.0, 66 ],
		[ -3.14, 0.0, 67 ],
		[ -3.14, 0.0, 68 ],

		// Reset:
		[ 0.0, 0.0, 69 ],

		// Case 15:
		[ -3.14, 0.0, 70 ],
		[ -3.14, 0.0, 71 ],
		[ -3.14, 0.0, 72 ]
	];
	for ( i = 0; i < data.length; i++ ) {
		j = i % W;
		v = acc( data[ i ], j );
		buf[ j ] = data[ i ];
		if ( expected[ i ][ 0 ] === 0.0 ) {
			sgn1 = isNegativeZero( v[ 0 ] );
			sgn2 = isNegativeZero( expected[ i ][ 0 ] );
			t.equal( sgn1, sgn2, 'returns expected signed zero minimum for window '+i+'. v: '+( ( isNegativeZero( data[ i ] ) ) ? '-' : '+' )+data[ i ]+'. actual: '+( ( sgn1 ) ? '-' : '+' )+v[ 0 ]+'. expected: '+( ( sgn2 ) ? '-' : '+' )+expected[ i ][ 0 ]+'.' );
		} else {
			t.equal( v[ 0 ], expected[ i ][ 0 ], 'returns expected minimum for window '+i+'. v: '+data[ i ]+'. actual: '+v[ 0 ]+'. expected: '+expected[ i ][ 0 ]+'.' );
		}
		if ( expected[ i ][ 1 ] === 0.0 ) {
			sgn1 = isNegativeZero( v[ 1 ] );
			sgn2 = isNegativeZero( expected[ i ][ 1 ] );
			t.equal( sgn1, sgn2, 'returns expected signed zero maximum for window '+i+'. v: '+( ( isNegativeZero( data[ i ] ) ) ? '-' : '+' )+data[ i ]+'. actual: '+( ( sgn1 ) ? '-' : '+' )+v[ 1 ]+'. expected: '+( ( sgn2 ) ? '-' : '+' )+expected[ i ][ 1 ]+'.' );
		} else {
			t.equal( v[ 1 ], expected[ i ][ 1 ], 'returns expected maximum for window '+i+'. v: '+data[ i ]+'. actual: '+v[ 1 ]+'. expected: '+expected[ i ][ 1 ]+'.' );
		}
	}
	t.end();
});

tape( 'if provided `NaN`, the accumulated minimum and maximum values are `NaN` for at least `W` invocations', function test( t ) {
	var expected;
	var data;
	var acc;
	var buf;
	var W;
	var v;
	var i;
	var j;

	W = 3;
	buf = [ 0.0, 0.0, 0.0 ];
	acc = incrmminmax( [ 0.0, 0.0 ], W, buf );

	data = [
		NaN,  // NaN
		3.14, // NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		3.14, // 3.14, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		3.14, // 3.14, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		NaN,  // 3.14, NaN, NaN
		NaN,  // NaN, NaN, NaN
		NaN,  // NaN, NaN, NaN
		3.14, // NaN, NaN, 3.14

		NaN,  // NaN, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		3.14, // 3.14, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		3.14, // 3.14, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		3.14, // 3.14, NaN, 3.14
		3.14, // NaN, 3.14, 3.14
		NaN,  // 3.14, 3.14, NaN
		NaN,  // 3.14, NaN, NaN
		NaN,  // NaN, NaN, NaN
		NaN,  // NaN, NaN, NaN
		3.14  // NaN, NaN, 3.14
	];
	expected = [
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ 3.14, 3.14 ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ 3.14, 3.14 ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],

		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ 3.14, 3.14 ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ 3.14, 3.14 ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ],
		[ NaN, NaN ]
	];
	for ( i = 0; i < data.length; i++ ) {
		j = i % W;
		v = acc( data[ i ], j );
		buf[ j ] = data[ i ];
		if ( isnan( expected[ i ][ 0 ] ) ) {
			t.equal( isnan( v[ 0 ] ), true, 'returns expected value for window '+i );
			t.equal( isnan( v[ 1 ] ), true, 'returns expected value for window '+i );
		} else {
			t.deepEqual( v, expected[ i ], 'returns expected value for window '+i );
		}
	}
	t.end();
});
