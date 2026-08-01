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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var Int32Array = require( '@stdlib/array/int32' );
var dlaruv = require( './../lib/ndarray.js' );


// FIXTURES //

var SMALL_N = require( './fixtures/small_n.json' );
var MEDIUM_N = require( './fixtures/medium_n.json' );
var OFFSET_SMALL_N = require( './fixtures/offsets/small_n.json' );
var OFFSET_MEDIUM_N = require( './fixtures/offsets/medium_n.json' );
var NEGATIVE_STRIDES_SMALL_N = require( './fixtures/negative_strides/small_n.json' );
var NEGATIVE_STRIDES_MEDIUM_N = require( './fixtures/negative_strides/medium_n.json' );
var LARGE_STRIDES_SMALL_N = require( './fixtures/large_strides/small_n.json' );
var LARGE_STRIDES_MEDIUM_N = require( './fixtures/large_strides/medium_n.json' );
var MIXED_STRIDES_SMALL_N = require( './fixtures/mixed_strides/small_n.json' );
var MIXED_STRIDES_MEDIUM_N = require( './fixtures/mixed_strides/medium_n.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlaruv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( dlaruv.length, 7, 'returns expected value' );
	t.end();
});

tape( 'the function returns a vector of random numbers drawn from a uniform (0,1) distribution (small N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = SMALL_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( data.N, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
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

	dlaruv( data.N, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );
	t.deepEqual( seed, new Int32Array( data.ISEED_out ), 'returns expected value' );

	t.end();
});

tape( 'the function supports providing positive strides (small N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = LARGE_STRIDES_SMALL_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( data.N, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );

	t.end();
});

tape( 'the function supports providing positive strides (medium N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = LARGE_STRIDES_MEDIUM_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( data.N, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );

	t.end();
});

tape( 'the function supports providing mixed sign strides (small N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = MIXED_STRIDES_SMALL_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( data.N, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );

	t.end();
});

tape( 'the function supports providing mixed sign strides (medium N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = MIXED_STRIDES_MEDIUM_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( data.N, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );

	t.end();
});

tape( 'the function supports providing negative strides (small N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = NEGATIVE_STRIDES_SMALL_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( data.N, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );

	t.end();
});

tape( 'the function supports providing negative strides (medium N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = NEGATIVE_STRIDES_MEDIUM_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( data.N, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );

	t.end();
});

tape( 'the function supports providing index offsets (small N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = OFFSET_SMALL_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( data.N, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );

	t.end();
});

tape( 'the function supports providing index offsets (medium N)', function test( t ) {
	var seed;
	var data;
	var x;

	data = OFFSET_MEDIUM_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( data.N, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X_out ), 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var seed;
	var out;
	var x;

	seed = new Int32Array( [ 0, 1, 2, 3 ] );
	x = new Float64Array( 5 );

	out = dlaruv( 5, seed, 1, 0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'the function does not modify elements outside the indexed range', function test( t ) {
	var expected;
	var data;
	var seed;
	var vals;
	var x;

	data = SMALL_N;

	// Interleave the output with sentinel values and generate in reverse order...
	seed = new Int32Array( data.ISEED );
	x = new Float64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );

	dlaruv( data.N, seed, 1, 0, x, -2, 8 );

	vals = data.X_out;
	expected = new Float64Array( [ vals[ 4 ], 9.0, vals[ 3 ], 9.0, vals[ 2 ], 9.0, vals[ 1 ], 9.0, vals[ 0 ], 9.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function updates the seed such that successive invocations continue the same stream', function test( t ) {
	var data;
	var seed;
	var x1;
	var x2;

	data = MEDIUM_N;

	// Provide the seed via an index offset...
	seed = new Int32Array( [ 0 ].concat( data.ISEED ) );
	x1 = new Float64Array( 5 );
	x2 = new Float64Array( 5 );

	dlaruv( 5, seed, 1, 1, x1, 1, 0 );
	dlaruv( 5, seed, 1, 1, x2, 1, 0 );

	t.deepEqual( x1, new Float64Array( data.X_out.slice( 0, 5 ) ), 'returns expected value' );
	t.deepEqual( x2, new Float64Array( data.X_out.slice( 5 ) ), 'returns expected value' );
	t.deepEqual( seed, new Int32Array( [ 0 ].concat( data.ISEED_out ) ), 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged and does not update the seed', function test( t ) {
	var seed;
	var data;
	var x;

	data = SMALL_N;

	seed = new Int32Array( data.ISEED );
	x = new Float64Array( data.X );

	dlaruv( 0, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X ), 'returns expected value' );
	t.deepEqual( seed, new Int32Array( data.ISEED ), 'returns expected value' );

	dlaruv( -1, seed, data.strideISEED, data.offsetISEED, x, data.strideX, data.offsetX );
	t.deepEqual( x, new Float64Array( data.X ), 'returns expected value' );
	t.deepEqual( seed, new Int32Array( data.ISEED ), 'returns expected value' );

	t.end();
});

tape( 'the function generates values in the open interval (0,1)', function test( t ) {
	var bool;
	var seed;
	var x;
	var i;

	seed = new Int32Array( [ 100, 200, 300, 401 ] );
	x = new Float64Array( 128 );

	dlaruv( 128, seed, 1, 0, x, 1, 0 );

	bool = true;
	for ( i = 0; i < x.length; i++ ) {
		if ( x[ i ] <= 0.0 || x[ i ] >= 1.0 ) {
			bool = false;
			break;
		}
	}
	t.ok( bool, 'returns expected value' );

	t.end();
});

tape( 'the function generates at most 128 values per call', function test( t ) {
	var seed;
	var x;

	seed = new Int32Array( [ 100, 200, 300, 401 ] );
	x = new Float64Array( 130 );

	dlaruv( 130, seed, 1, 0, x, 1, 0 );

	t.ok( x[ 127 ] > 0.0, 'returns expected value' );
	t.strictEqual( x[ 128 ], 0.0, 'returns expected value' );
	t.strictEqual( x[ 129 ], 0.0, 'returns expected value' );

	t.end();
});
