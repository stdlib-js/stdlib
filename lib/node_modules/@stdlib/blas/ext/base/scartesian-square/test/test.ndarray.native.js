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
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var scartesianSquare = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( scartesianSquare instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scartesianSquare, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( scartesianSquare.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function computes the Cartesian square', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ] );

	scartesianSquare( x.length, x, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	out = new Float32Array( 18 );
	expected = new Float32Array([
		1.0,
		1.0,
		1.0,
		2.0,
		1.0,
		3.0,
		2.0,
		1.0,
		2.0,
		2.0,
		2.0,
		3.0,
		3.0,
		1.0,
		3.0,
		2.0,
		3.0,
		3.0
	]);

	scartesianSquare( x.length, x, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float32Array( [ 5.0 ] );
	out = new Float32Array( 2 );
	expected = new Float32Array( [ 5.0, 5.0 ] );

	scartesianSquare( 1, x, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 8 );
	y = scartesianSquare( x.length, x, 1, 0, out, 2, 1, 0 );

	t.strictEqual( y, out, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( [ 3.0, 4.0, 5.0, 6.0 ] );
	expected = new Float32Array( [ 3.0, 4.0, 5.0, 6.0 ] );

	scartesianSquare( 0, x, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x`', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array([
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ] );

	scartesianSquare( 2, x, 2, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x`', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array([
		2.0, // 1
		1.0  // 0
	]);
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ] );

	scartesianSquare( 2, x, -1, 1, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for the first dimension of the output array', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 16 );
	expected = new Float32Array([
		1.0,
		1.0,
		0.0,
		0.0,
		1.0,
		2.0,
		0.0,
		0.0,
		2.0,
		1.0,
		0.0,
		0.0,
		2.0,
		2.0,
		0.0,
		0.0
	]);

	scartesianSquare( 2, x, 1, 0, out, 4, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for the first dimension of the output array', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 2.0, 2.0, 2.0, 1.0, 1.0, 2.0, 1.0, 1.0 ] );

	scartesianSquare( 2, x, 1, 0, out, -2, 1, 6 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for the second dimension of the output array', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 1.0, 1.0, 2.0, 2.0, 2.0 ] );

	scartesianSquare( 2, x, 1, 0, out, 2, -1, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter for `x`', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 2.0 ] );

	scartesianSquare( 2, x, 1, 1, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter for the output array', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 10 );
	expected = new Float32Array([
		0.0,
		0.0,
		1.0,
		1.0,
		1.0,
		2.0,
		2.0,
		1.0,
		2.0,
		2.0
	]);

	scartesianSquare( 2, x, 1, 0, out, 2, 1, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a column-major output layout', opts, function test( t ) {
	var expected;
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0 ] );
	out = new Float32Array( 8 );
	expected = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 1.0, 2.0, 1.0, 2.0 ] );

	scartesianSquare( 2, x, 1, 0, out, 1, 4, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
