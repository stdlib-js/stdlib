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
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var saxpby = tryRequire( resolve( __dirname, './../lib/saxpby.native.js' ) );
var opts = {
	'skip': ( saxpby instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof saxpby, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', opts, function test( t ) {
	t.strictEqual( saxpby.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies `x` by a constant and adds the result to `y` multiplied by a constant', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	expected = new Float32Array([
		9.0,  // 5.0*1.0 + 2.0*2.0
		16.0, // 5.0*2.0 + 2.0*3.0
		23.0, // 5.0*3.0 + 2.0*4.0
		30.0, // 5.0*4.0 + 2.0*5.0
		37.0  // 5.0*5.0 + 2.0*6.0
	]);

	saxpby( x.length, 5.0, x, 1, 2.0, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 5.0, 6.0 ] );
	expected = new Float32Array( [ 15.0, 22.0 ] );

	saxpby( x.length, 5.0, x, 1, 2.0, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = saxpby( x.length, 5.0, x, 1, 2.0, y, 1 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	expected = new Float32Array( [ 4.0, 5.0, 6.0 ] );

	saxpby( 0, 5.0, x, 1, 2.0, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	saxpby( -4, 5.0, x, 1, 2.0, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `alpha` equals `0.0`, the function scales `y` by `beta`', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	expected = new Float32Array( [ 6.0, 9.0, 12.0, 15.0, 18.0 ] ); // 3.0*y

	saxpby( x.length, 0.0, x, 1, 3.0, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'when `beta` equals `1.0`, the function multiplies `x` by a constant and adds the result to `y`', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	expected = new Float32Array( [ 11.0, 17.0, 23.0, 29.0, 35.0 ] ); // 5.0*x + y

	saxpby( x.length, 5.0, x, 1, 1.0, y, 1 );
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
	y = new Float32Array( [ 2.0, 3.0, 4.0 ] );
	expected = new Float32Array([
		9.0,  // 5.0*1.0 + 2.0*2.0
		21.0, // 5.0*3.0 + 2.0*3.0
		33.0  // 5.0*5.0 + 2.0*4.0
	]);

	saxpby( 3, 5.0, x, 2, 2.0, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array([ 1.0, 2.0, 3.0 ]);
	y = new Float32Array([
		2.0, // 0
		30.0,
		3.0, // 1
		10.0,
		4.0  // 2
	]);
	expected = new Float32Array([
		9.0,  // 5.0*1.0 + 2.0*2.0
		30.0,
		16.0, // 5.0*2.0 + 2.0*3.0
		10.0,
		23.0  // 5.0*3.0 + 2.0*4.0
	]);

	saxpby( 3, 5.0, x, 1, 2.0, y, 2 );
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
		4.0, // 2
		3.0, // 1
		2.0  // 0
	]);
	expected = new Float32Array([
		13.0, // 5.0*1.0 + 2.0*4.0
		21.0, // 5.0*3.0 + 2.0*3.0
		29.0  // 5.0*5.0 + 2.0*2.0
	]);

	saxpby( 3, 5.0, x, -2, 2.0, y, -1 );
	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var x0;
	var y0;
	var x1;
	var y1;

	x0 = new Float32Array([
		10.0,
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0
	]);
	y0 = new Float32Array([
		10.0,
		10.0,
		2.0, // 0
		3.0, // 1
		4.0  // 2
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 );

	expected = new Float32Array([
		10.0,
		10.0,
		9.0,  // 5.0*1.0 + 2.0*2.0
		16.0, // 5.0*2.0 + 2.0*3.0
		23.0  // 5.0*3.0 + 2.0*4.0
	]);

	saxpby( 3, 5.0, x1, 1, 2.0, y1, 1 );
	t.deepEqual( y0, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently multiplies `x` by a constant and adds the result to `y` multiplied by a constant', opts, function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;
	var i;

	alpha = 3.0;
	beta = 5.0;
	x = new Float32Array( 100 );
	y = new Float32Array( 100 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = f32( f32( alpha * x[ i ] ) + f32( beta * y[ i ] ) );
	}
	saxpby( x.length, alpha, x, 1, beta, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( 240 );
	y = new Float32Array( 240 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = f32( f32( alpha * x[ i ] ) + f32( beta * y[ i ] ) );
	}
	saxpby( x.length, alpha, x, 1, beta, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});
