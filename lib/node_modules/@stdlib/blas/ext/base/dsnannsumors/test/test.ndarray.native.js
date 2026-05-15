/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dsnannsumors = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dsnannsumors instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dsnannsumors, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', opts, function test( t ) {
	t.strictEqual( dsnannsumors.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the sum of strided array elements (ignoring NaN values)', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, NaN, 3.0, 0.0, -3.0, 3.0, NaN ] ); // eslint-disable-line max-len

	out = new Float64Array( 2 );
	v = dsnannsumors( x.length, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 3.0, 9.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0, NaN ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( x.length, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 3.0, 6.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ -4.0, NaN, -4.0 ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( x.length, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ -8.0, 2.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ NaN, 4.0 ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( x.length, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 4.0, 1.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ NaN, NaN ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( x.length, x, 1, 0, out, 1, 0 );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( v[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( v[ 1 ], 0.0, 'returns expected value' );

	x = new Float32Array( [ NaN ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( x.length, x, 1, 0, out, 1, 0 );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( v[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( v[ 1 ], 0.0, 'returns expected value' );

	x = new Float32Array( [ 4.0 ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( x.length, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 4.0, 1.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 1.0e38, 1.0, -1.0e38 ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( x.length, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 0.0, 4.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( 0, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 0.0, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	out = new Float64Array( 2 );
	v = dsnannsumors( -1, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 0.0, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first indexed element', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( 1, x, 1, 0, out, 1, 0 );

	expected = new Float64Array( [ 1.0, 1.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride parameter', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float32Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		NaN,  // 4
		NaN
	]);
	out = new Float64Array( 4 );

	v = dsnannsumors( 5, x, 2, 0, out, 2, 0 );

	expected = new Float64Array( [ 5.0, 0.0, 4.0, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative stride parameter', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float32Array([
		NaN,  // 4
		NaN,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	out = new Float64Array( 4 );

	v = dsnannsumors( 5, x, -2, 8, out, -2, 2 );

	expected = new Float64Array( [ 4.0, 0.0, 5.0, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a stride parameter equal to `0`, the function returns a sum of the first element repeated N times', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float32Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( x.length, x, 0, 0, out, 1, 0 );

	expected = new Float64Array( [ 5.0, 5.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0` and the first element is NaN, the function returns a sum equal to 0.0', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float32Array( [ NaN, -2.0, -4.0, 5.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dsnannsumors( x.length, x, 0, 0, out, 1, 0 );

	expected = new Float64Array( [ 0.0, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports `offset` parameters', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		NaN,
		NaN   // 4
	]);
	out = new Float64Array( 4 );

	v = dsnannsumors( 5, x, 2, 1, out, 2, 1 );

	expected = new Float64Array( [ 0.0, 5.0, 0.0, 4.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});
