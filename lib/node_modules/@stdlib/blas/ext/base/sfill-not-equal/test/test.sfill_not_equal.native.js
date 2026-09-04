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
var isSameFloat32Array = require( '@stdlib/assert/is-same-float32array' );
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var sfillNotEqual = tryRequire( resolve( __dirname, './../lib/sfill_not_equal.native.js' ) );
var opts = {
	'skip': ( sfillNotEqual instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sfillNotEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', opts, function test( t ) {
	t.strictEqual( sfillNotEqual.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function replaces strided array elements not equal to a provided search element', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		0.0,
		2.0,
		0.0,
		4.0,
		-1.0,
		0.0,
		-5.0,
		6.0
	]);
	expected = new Float32Array([
		0.0,
		5.0,
		0.0,
		5.0,
		5.0,
		0.0,
		5.0,
		5.0
	]);

	sfillNotEqual( x.length, 0.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 0.0, 2.0 ] );
	expected = new Float32Array( [ 0.0, 5.0 ] );

	sfillNotEqual( x.length, 0.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Float32Array( [ 1.0, 0.0, 3.0, 0.0, 5.0 ] );
	out = sfillNotEqual( x.length, 0.0, 5.0, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if all elements are equal to a provided search element, the function returns `x` unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 4.0, 4.0, 4.0 ] );
	expected = new Float32Array( [ 4.0, 4.0, 4.0 ] );

	sfillNotEqual( x.length, 4.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a search element equal to `NaN`, the function replaces all elements', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ NaN, 1.0, NaN ] );
	expected = new Float32Array( [ 5.0, 5.0, 5.0 ] );

	sfillNotEqual( x.length, NaN, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces `NaN` elements', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ NaN, 0.0, NaN ] );
	expected = new Float32Array( [ 5.0, 0.0, 5.0 ] );

	sfillNotEqual( x.length, 0.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 0.0, -4.0, 1.0 ] );
	expected = new Float32Array( [ 0.0, -4.0, 1.0 ] );

	sfillNotEqual( 0, 0.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float32Array( [ 0.0, -4.0, 1.0 ] );
	sfillNotEqual( -4, 0.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function considers `-0` and `+0` to be the same value', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ -0.0, 1.0, 0.0, -0.0 ] );
	expected = new Float32Array( [ -0.0, 5.0, 0.0, -0.0 ] );

	sfillNotEqual( x.length, 0.0, 5.0, x, 1 );
	t.strictEqual( isSameFloat32Array( x, expected ), true, 'returns expected value' );

	x = new Float32Array( [ -0.0, 1.0, 0.0, -0.0 ] );
	expected = new Float32Array( [ -0.0, 5.0, 0.0, -0.0 ] );

	sfillNotEqual( x.length, -0.0, 5.0, x, 1 );
	t.strictEqual( isSameFloat32Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		0.0,  // 0
		-2.0,
		3.0,  // 1
		0.0,
		4.0,  // 2
		-6.0
	]);
	expected = new Float32Array([
		0.0,  // 0
		-2.0,
		5.0,  // 1
		0.0,
		5.0,  // 2
		-6.0
	]);

	sfillNotEqual( 3, 0.0, 5.0, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		0.0,  // 2
		-2.0,
		3.0,  // 1
		0.0,
		4.0,  // 0
		-6.0
	]);
	expected = new Float32Array([
		0.0,  // 2
		-2.0,
		5.0,  // 1
		0.0,
		5.0,  // 0
		-6.0
	]);

	sfillNotEqual( 3, 0.0, 5.0, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float32Array([
		0.0,
		-2.0, // 0
		3.0,
		0.0,  // 1
		4.0,
		-6.0  // 2
	]);
	expected = new Float32Array([
		0.0,
		5.0,  // 0
		3.0,
		0.0,  // 1
		4.0,
		5.0   // 2
	]);

	x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	sfillNotEqual( 3, 0.0, 5.0, x1, 2 );
	t.deepEqual( x0, expected, 'returns expected value' );

	t.end();
});
