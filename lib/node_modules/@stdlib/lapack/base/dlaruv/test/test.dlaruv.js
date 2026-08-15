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
var Float64Array = require( '@stdlib/array/float64' );
var Int32Array = require( '@stdlib/array/int32' );
var dlaruv = require( './../lib/dlaruv.js' );


// FIXTURES //

var SMALL_N = require( './fixtures/small_n.json' );
var MEDIUM_N = require( './fixtures/medium_n.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlaruv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( dlaruv.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the function returns a vector of random numbers drawn from a uniform (0,1) distribution (small N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = SMALL_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( seed, data.N, x );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );
	t.deepEqual( seed, new Int32Array( data.ISEED_out ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a vector of random numbers drawn from a uniform (0,1) distribution (medium N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = MEDIUM_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( seed, data.N, x );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );
	t.deepEqual( seed, new Int32Array( data.ISEED_out ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var seed;
	var out;
	var x;

	seed = new Int32Array( [ 0, 1, 2, 3 ] );
	x = new Float64Array( 5 );

	out = dlaruv( seed, 5, x );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged and does not update the seed', function test( t ) {
	var seed;
	var data;
	var x;

	data = SMALL_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( seed, 0, x );
	t.deepEqual( x, new Float64Array( data.X ), 'returns expected value' );
	t.deepEqual( seed, new Int32Array( data.ISEED ), 'returns expected value' );

	dlaruv( seed, -1, x );
	t.deepEqual( x, new Float64Array( data.X ), 'returns expected value' );
	t.deepEqual( seed, new Int32Array( data.ISEED ), 'returns expected value' );

	t.end();
});

tape( 'the function does not modify elements beyond the first `N` elements', function test( t ) {
	var expected;
	var data;
	var seed;
	var x;

	data = SMALL_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );

	dlaruv( seed, data.N, x );

	expected = new Float64Array( data.X_out.concat( [ 9.0, 9.0 ] ) );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function updates the seed such that successive invocations continue the same stream', function test( t ) {
	var data;
	var seed;
	var x1;
	var x2;

	data = MEDIUM_N;

	seed = new Int32Array( data.ISEED );
	x1 = new Float64Array( 5 );
	x2 = new Float64Array( 5 );

	dlaruv( seed, 5, x1 );
	dlaruv( seed, 5, x2 );

	t.deepEqual( x1, new Float64Array( data.X_out.slice( 0, 5 ) ), 'returns expected value' );
	t.deepEqual( x2, new Float64Array( data.X_out.slice( 5 ) ), 'returns expected value' );
	t.deepEqual( seed, new Int32Array( data.ISEED_out ), 'returns expected value' );

	t.end();
});

tape( 'the function produces deterministic output for the same seed', function test( t ) {
	var seed1;
	var seed2;
	var x1;
	var x2;

	seed1 = new Int32Array( [ 0, 1, 2, 3 ] );
	seed2 = new Int32Array( [ 0, 1, 2, 3 ] );
	x1 = new Float64Array( 5 );
	x2 = new Float64Array( 5 );

	dlaruv( seed1, 5, x1 );
	dlaruv( seed2, 5, x2 );

	t.deepEqual( x1, x2, 'returns expected value' );
	t.deepEqual( seed1, seed2, 'returns expected value' );

	t.end();
});

tape( 'the function generates values in the open interval (0,1), including for extremal seeds', function test( t ) {
	var seeds;
	var seed;
	var bool;
	var x;
	var i;
	var j;

	// Include the extremal seeds for which the generated values are closest to the boundaries of the unit interval...
	seeds = [
		[ 100, 200, 300, 401 ],
		[ 0, 0, 0, 1 ],
		[ 0, 0, 0, 4095 ],
		[ 4095, 4095, 4095, 4095 ],
		[ 4095, 0, 0, 1 ],
		[ 1, 1, 1, 1 ]
	];
	for ( j = 0; j < seeds.length; j++ ) {
		seed = new Int32Array( seeds[ j ] );
		x = new Float64Array( 128 );

		dlaruv( seed, 128, x );

		bool = true;
		for ( i = 0; i < x.length; i++ ) {
			if ( x[ i ] <= 0.0 || x[ i ] >= 1.0 ) {
				bool = false;
				break;
			}
		}
		t.ok( bool, 'returns expected value' );
	}

	t.end();
});

tape( 'the function generates at most 128 values per call', function test( t ) {
	var seed;
	var x;

	seed = new Int32Array( [ 100, 200, 300, 401 ] );
	x = new Float64Array( 130 );

	dlaruv( seed, 130, x );

	t.ok( x[ 127 ] > 0.0, 'returns expected value' );
	t.strictEqual( x[ 128 ], 0.0, 'returns expected value' );
	t.strictEqual( x[ 129 ], 0.0, 'returns expected value' );

	t.end();
});
