/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isamax = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isamax, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 4', function test( t ) {
	t.strictEqual( isamax.ndarray.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method finds the index of the element with the maximum absolute value', function test( t ) {
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

	idx = isamax.ndarray( 4, x, 1, 0 );
	t.strictEqual( idx, 2, 'returns expected value' );

	// Short datasets:
	x = new Float32Array([
		0.2,  // 1
		-0.6, // 2
		0.3,  // 3
		5.0,
		5.0
	]);

	idx = isamax.ndarray( 3, x, 1, 0 );
	t.strictEqual( idx, 1, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports a `stride` parameter', function test( t ) {
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

	idx = isamax.ndarray( 4, x, 2, 0 );
	t.strictEqual( idx, 2, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method supports a negative `stride` parameter', function test( t ) {
	var idx;
	var x;

	x = new Float32Array([
		3.0,  // 5
		-4.0, // 4
		1.0,  // 3
		15.0, // 2
		4.0,  // 1
		3.0   // 0
	]);

	idx = isamax.ndarray( x.length, x, -1, x.length-1 );
	t.strictEqual( idx, 2, 'returns expected value' );

	x = new Float32Array( [ 3.0, 999.9, 999.9, -4.0, 999.9, 999.9, 1.0, 999.9, 999.9, 15.0, 999.9, 999.9, 4.0, 999.9, 999.9, 3.0 ] ); // eslint-disable-line max-len
	idx = isamax.ndarray( 6, x, -3, x.length-1 );
	t.strictEqual( idx, 2, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports an `x` offset', function test( t ) {
	var idx;
	var x;

	x = new Float32Array([
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		5.0, // 3
		6.0  // 4
	]);

	idx = isamax.ndarray( 5, x, 1, 1 );
	t.strictEqual( idx, 4, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than `1`, the `ndarray` method returns `-1`', function test( t ) {
	var idx;
	var x;

	x = new Float32Array([
		1.0,
		2.0,
		3.0
	]);

	idx = isamax.ndarray( 0, x, 1, 0 );
	t.strictEqual( idx, -1, 'returns expected value' );

	idx = isamax.ndarray( -1, x, 1, 0 );
	t.strictEqual( idx, -1, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the `ndarray` method returns `0`', function test( t ) {
	var idx;
	var x;

	x = new Float32Array([
		1.0,
		2.0,
		3.0
	]);

	idx = isamax.ndarray( 1, x, 1, 1 );
	t.strictEqual( idx, 0, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports complex access patterns', function test( t ) {
	var idx;
	var x;

	x = new Float32Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);

	idx = isamax.ndarray( 3, x, 2, -1 );
	t.strictEqual( idx, 0, 'returns expected value' );
	t.end();
});
