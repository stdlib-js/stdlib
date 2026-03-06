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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var saxpy = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( saxpy instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof saxpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( saxpy.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function multiplies `x` by a constant and adds the result to `y`', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var y;

	alpha = 2.0;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	expected = new Float32Array( [ 3.0, 5.0, 7.0, 9.0, 11.0 ] );

	saxpy( x.length, alpha, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, expected, 'returns expected value' );

	// Short datasets:
	x = new Float32Array( [ 1.0, 2.0 ] );
	y = new Float32Array( [ 1.0, 1.0 ] );

	expected = new Float32Array( [ 3.0, 5.0 ] );

	saxpy( x.length, alpha, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function efficiently handles the case where `alpha` is `0`', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	alpha = 0.0;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	saxpy( x.length, alpha, x, 1, 0, y, 1, 0 );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		1.0, // 0
		1.0, // 1
		1.0, // 2
		1.0,
		1.0
	]);
	N = 3;

	saxpy( N, 2.0, x, 2, 0, y, 1, 0 );

	expected = new Float32Array( [ 3.0, 7.0, 11.0, 1.0, 1.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	]);
	y = new Float32Array([
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	]);
	N = 3;

	saxpy( N, 3.0, x, 1, 2, y, 1, 0 );

	expected = new Float32Array( [ 15.0, 19.0, 23.0, 9.0, 10.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		1.0, // 0
		1.0,
		1.0, // 1
		1.0,
		1.0  // 2
	]);
	N = 3;

	saxpy( N, 2.0, x, 1, 0, y, 2, 0 );

	expected = new Float32Array( [ 3.0, 1.0, 5.0, 1.0, 7.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		6.0,
		7.0,
		8.0, // 0
		9.0, // 1
		10.0 // 2
	]);
	N = 3;

	saxpy( N, 3.0, x, 1, 0, y, 1, 2 );

	expected = new Float32Array( [ 6.0, 7.0, 11.0, 15.0, 19.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	out = saxpy( x.length, 3.0, x, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	expected = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

	saxpy( -1, 3.0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	saxpy( 0, 3.0, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float32Array([
		6.0,
		7.0, // 2
		8.0, // 1
		9.0, // 0
		10.0
	]);
	N = 3;

	saxpy( N, 3.0, x, -2, x.length-1, y, -1, y.length-2 );

	expected = new Float32Array( [ 6.0, 10.0, 17.0, 24.0, 10.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float32Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y = new Float32Array([
		7.0,
		8.0,
		9.0,
		10.0, // 2
		11.0, // 1
		12.0  // 0
	]);
	N = 3;

	saxpy( N, 3.0, x, 2, 1, y, -1, y.length-1 );

	expected = new Float32Array( [ 7.0, 8.0, 9.0, 28.0, 23.0, 18.0 ] );

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'if both strides are equal to `1`, the function efficiently iterates over provided arrays', opts, function test( t ) {
	var expected;
	var alpha;
	var x;
	var y;
	var i;

	alpha = 3.0;

	x = new Float32Array( 100 );
	y = new Float32Array( x.length );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = ( x[i]*alpha ) + y[i];
	}

	saxpy( x.length, alpha, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	x = new Float32Array( 123 );
	y = new Float32Array( x.length );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i*2;
		y[ i ] = x.length - i;
		expected[ i ] = ( x[i]*alpha ) + y[i];
	}

	saxpy( x.length, alpha, x, 1, 0, y, 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});
