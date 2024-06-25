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

var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array/float32' );
var srev = require( './../lib/srev.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof srev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( srev.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the function reverses a strided array', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	expected = new Float32Array([
		6.0,
		-5.0,
		2.0,
		-1.0,
		5.0,
		-3.0,
		2.0,
		4.0
	]);

	srev( x.length, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0 ] );
	expected = new Float32Array( [ 2.0, 1.0 ] );

	srev( x.length, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float32Array( [ 3.0, 2.0, 1.0 ] );

	srev( x.length, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = srev( x.length, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	expected = new Float32Array( [ 3.0, -4.0, 1.0 ] );

	srev( 0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	srev( -4, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	expected = new Float32Array([
		6.0,  // 0
		-3.0,
		-5.0,  // 1
		7.0,
		2.0   // 2
	]);

	srev( 3, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0,  // 2
		-1.0,
		0.0   // 3
	]);
	expected = new Float32Array([
		0.0,  // 0
		-3.0,
		6.0,  // 1
		7.0,
		-5.0, // 2
		-1.0,
		2.0   // 3
	]);

	srev( 4, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	expected = new Float32Array([
		6.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		2.0   // 0
	]);

	srev( 3, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array([
		2.0,  // 3
		-3.0,
		-5.0, // 2
		7.0,
		6.0,  // 1
		-1.0,
		0.0   // 0
	]);
	expected = new Float32Array([
		0.0,  // 3
		-3.0,
		6.0,  // 2
		7.0,
		-5.0, // 1
		-1.0,
		2.0   // 0
	]);

	srev( 4, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float32Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	expected = new Float32Array([
		1.0,
		6.0, // 0
		3.0,
		4.0, // 1
		5.0,
		2.0  // 2
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	srev( 3, x1, 2 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently reverses a strided array', function test( t ) {
	var expected;
	var x;
	var i;

	x = new Float32Array( 100 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x.length-i-1;
	}
	srev( x.length, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( 240 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x.length-i-1;
	}
	srev( x.length, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( 101 );
	expected = new Float32Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x.length-i-1;
	}
	srev( x.length, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});
