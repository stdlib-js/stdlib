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
var Float32Array = require( '@stdlib/array/float32' );


// VARIABLES //

var sreplicate = tryRequire( resolve( __dirname, './../lib/sreplicate.native.js' ) );
var opts = {
	'skip': ( sreplicate instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sreplicate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', opts, function test( t ) {
	t.strictEqual( sreplicate.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function replicates each strided array element', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float32Array( 6 );

	sreplicate( x.length, 2, x, 1, out, 1 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	out = new Float32Array( 12 );

	sreplicate( x.length, 3, x, 1, out, 1 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (k=1)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float32Array( 3 );

	sreplicate( x.length, 1, x, 1, out, 1 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (N=1)', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 5.0 ] );
	out = new Float32Array( 3 );

	sreplicate( 1, 3, x, 1, out, 1 );
	expected = new Float32Array( [ 5.0, 5.0, 5.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var v;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float32Array( 6 );

	v = sreplicate( x.length, 2, x, 1, out, 1 );

	t.strictEqual( v, out, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ] );

	expected = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ] );

	sreplicate( -1, 2, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	sreplicate( 0, 2, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `k` parameter less than or equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ] );

	expected = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ] );

	sreplicate( x.length, -1, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	sreplicate( x.length, 0, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = new Float32Array( 6 );

	sreplicate( 3, 2, x, 2, out, 1 );

	expected = new Float32Array( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output stride', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float32Array( 12 );

	sreplicate( 3, 2, x, 1, out, 2 );

	expected = new Float32Array( [ 1.0, 0.0, 1.0, 0.0, 2.0, 0.0, 2.0, 0.0, 3.0, 0.0, 3.0, 0.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = new Float32Array( 6 );

	sreplicate( 3, 2, x, -2, out, -1 );

	expected = new Float32Array( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = new Float32Array( 6 );

	sreplicate( 3, 2, x, 2, out, -1 );

	expected = new Float32Array( [ 5.0, 5.0, 3.0, 3.0, 1.0, 1.0 ] );

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var out0;
	var out1;
	var x0;
	var x1;

	x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	out1 = new Float32Array( out0.buffer, out0.BYTES_PER_ELEMENT*3 );

	sreplicate( 3, 2, x1, 2, out1, 1 );
	expected = new Float32Array( [ 0.0, 0.0, 0.0, 2.0, 2.0, 4.0, 4.0, 6.0, 6.0 ] );

	t.deepEqual( out0, expected, 'returns expected value' );
	t.end();
});
