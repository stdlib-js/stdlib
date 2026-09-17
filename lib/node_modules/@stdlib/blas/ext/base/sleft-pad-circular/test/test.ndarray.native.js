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

var sleftPadCircular = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( sleftPadCircular instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sleftPadCircular, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( sleftPadCircular.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function prepends elements to a strided array by circularly repeating existing elements', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	sleftPadCircular( x.length, 6, x, 1, 0, y, 1, 0 );
	expected = new Float32Array( [ 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	sleftPadCircular( x.length, 2, x, 1, 0, y, 1, 0 );
	expected = new Float32Array( [ 2.0, 3.0, 1.0, 2.0, 3.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	sleftPadCircular( x.length, 4, x, 1, 0, y, 1, 0 );
	expected = new Float32Array( [ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0 ] );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var x;
	var y;
	var v;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	v = sleftPadCircular( x.length, 2, x, 1, 0, y, 1, 0 );

	t.strictEqual( v, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	expected = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	sleftPadCircular( -1, 2, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	sleftPadCircular( 0, 2, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `k` parameter less than `0`, the function copies indexed elements in `x` to `y` without padding', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0 ] );

	expected = new Float32Array( [ 1.0, 2.0, 3.0 ] );

	sleftPadCircular( x.length, -1, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	sleftPadCircular( 3, 2, x, 2, 0, y, 1, 0 );

	expected = new Float32Array( [ 3.0, 5.0, 1.0, 3.0, 5.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	y = new Float32Array([
		0.0, // 1
		0.0,
		0.0, // 2
		0.0,
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0, // 2
		0.0
	]);

	sleftPadCircular( 3, 2, x, 1, 0, y, 2, 0 );

	expected = new Float32Array( [ 2.0, 0.0, 3.0, 0.0, 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float32Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0, // 2
		0.0  // 1
	]);

	sleftPadCircular( 3, 2, x, -2, 4, y, -1, 4 );

	expected = new Float32Array( [ 1.0, 3.0, 5.0, 1.0, 3.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);
	y = new Float32Array([
		0.0, // 2
		0.0, // 3
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0  // 3
	]);

	sleftPadCircular( 4, 2, x, 2, 1, y, 1, 0 );

	expected = new Float32Array( [ 2.0, 4.0, 1.0, -2.0, 2.0, 4.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0  // 2
	]);
	y = new Float32Array([
		0.0,
		0.0,
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	sleftPadCircular( 3, 2, x, 1, 0, y, 1, 2 );

	expected = new Float32Array( [ 0.0, 0.0, 2.0, 3.0, 1.0, 2.0, 3.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a zero `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0,
		2.0, // 0, 1, 2
		3.0
	]);
	y = new Float32Array([
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	sleftPadCircular( 3, 2, x, 0, 1, y, 1, 0 );

	expected = new Float32Array( [ 2.0, 2.0, 2.0, 2.0, 2.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0, // 2
		0.0  // 1
	]);

	sleftPadCircular( 3, 2, x, 2, 0, y, -1, 4 );

	expected = new Float32Array( [ 5.0, 3.0, 1.0, 5.0, 3.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});
