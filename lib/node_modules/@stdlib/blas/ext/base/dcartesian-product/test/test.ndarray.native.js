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
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dcartesianProduct = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dcartesianProduct instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dcartesianProduct, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 12', opts, function test( t ) {
	t.strictEqual( dcartesianProduct.length, 12, 'has expected arity' );
	t.end();
});

tape( 'the function computes the Cartesian product', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	dcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float64Array( [ 10.0, 20.0 ] );
	out = new Float64Array( 12 );
	expected = new Float64Array([
		1.0,
		10.0,
		1.0,
		20.0,
		2.0,
		10.0,
		2.0,
		20.0,
		3.0,
		10.0,
		3.0,
		20.0
	]);

	dcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( 8 );
	z = dcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );

	t.strictEqual( z, out, 'same reference' );
	t.end();
});

tape( 'if provided an `M` or `N` parameter equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( [ 5.0, 6.0, 7.0, 8.0 ] );
	expected = new Float64Array( [ 5.0, 6.0, 7.0, 8.0 ] );

	dcartesianProduct( 0, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	dcartesianProduct( x.length, 0, x, 1, 0, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `x`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array([
		1.0, // 0
		0.0,
		2.0, // 1
		0.0
	]);
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	dcartesianProduct( 2, y.length, x, 2, 0, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `x`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array([
		2.0, // 1
		1.0  // 0
	]);
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	dcartesianProduct( 2, y.length, x, -1, 1, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for `y`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array([
		3.0, // 0
		0.0,
		4.0, // 1
		0.0
	]);
	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	dcartesianProduct( x.length, 2, x, 1, 0, y, 2, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for `y`', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array([
		4.0, // 1
		3.0  // 0
	]);
	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	dcartesianProduct( x.length, 2, x, 1, 0, y, -1, 1, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride for the output pairs', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( 16 );
	expected = new Float64Array([
		1.0,
		3.0,
		0.0,
		0.0,
		1.0,
		4.0,
		0.0,
		0.0,
		2.0,
		3.0,
		0.0,
		0.0,
		2.0,
		4.0,
		0.0,
		0.0
	]);

	dcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 4, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for the output pairs', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( 8 );
	expected = new Float64Array( [ 2.0, 4.0, 2.0, 3.0, 1.0, 4.0, 1.0, 3.0 ] );

	dcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, -2, 1, 6 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride for the output pair elements', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( 8 );
	expected = new Float64Array( [ 3.0, 1.0, 4.0, 1.0, 3.0, 2.0, 4.0, 2.0 ] );

	dcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, -1, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offsetX` parameter', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 0.0, 1.0, 2.0 ] );
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	dcartesianProduct( 2, y.length, x, 1, 1, y, 1, 0, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offsetY` parameter', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 0.0, 3.0, 4.0 ] );
	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] );

	dcartesianProduct( x.length, 2, x, 1, 0, y, 1, 1, out, 2, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offsetOut` parameter', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( 10 );
	expected = new Float64Array( [ 0.0, 0.0, 1.0, 3.0, 1.0, 4.0, 2.0, 3.0, 2.0, 4.0 ] ); // eslint-disable-line max-len

	dcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 2, 1, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a column-major output layout', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 3.0, 4.0 ] );
	out = new Float64Array( 8 );
	expected = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 4.0, 3.0, 4.0 ] );

	dcartesianProduct( x.length, y.length, x, 1, 0, y, 1, 0, out, 1, 4, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
