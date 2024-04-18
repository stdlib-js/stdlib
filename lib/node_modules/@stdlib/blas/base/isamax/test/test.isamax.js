/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var isamax = require( './../lib/isamax.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isamax, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( isamax.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the function finds the index of the element with the maximum absolute value', function test( t ) {
	var expected;
	var idx;
	var x;

	x = new Float32Array([
		0.1,  // 1
		-0.3, // 2
		0.5,  // 3
		-0.1, // 4
		6.0,
		6.0,
		6.0
	]);
	expected = 2;

	idx = isamax( 4, x, 1 );
	t.strictEqual( idx, expected, 'returns expected value' );

	x = new Float32Array( [
		0.2,  // 1
		-0.6, // 2
		0.3,  // 3
		5.0,
		5.0
	] );
	expected = 1;

	idx = isamax( 3, x, 1 );
	t.strictEqual( idx, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than `1`, the function returns `-1`', function test( t ) {
	var expected;
	var idx;
	var x;

	x = new Float32Array( [
		1.0,
		2.0,
		3.0
	] );
	expected = -1;

	idx = isamax( 0, x, 1 );
	t.strictEqual( idx, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `strideX` parameter less than or equal to `0`, the function returns `-1`', function test( t ) {
	var expected;
	var idx;
	var x;

	x = new Float32Array( [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ] );
	expected = -1;

	idx = isamax( x.length, x, 0 );
	t.strictEqual( idx, expected, 'returns expected value' );

	idx = isamax( x.length, x, -1 );
	t.strictEqual( idx, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var idx;
	var x;

	x = new Float32Array([
		0.1,  // 1
		4.0,
		-0.3, // 2
		6.0,
		-0.5, // 3
		7.0,
		-0.1, // 4
		3.0
	]);
	expected = 2;

	idx = isamax( 4, x, 2 );
	t.strictEqual( idx, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var idx;
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
	expected = 2;

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	idx = isamax( 3, x1, 2 );
	t.strictEqual( idx, expected, 'returns expected value' );
	t.end();
});
