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
var BooleanArray = require( '@stdlib/array/bool' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var swhere = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( swhere instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof swhere, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 13', opts, function test( t ) {
	t.strictEqual( swhere.length, 13, 'has expected arity' );
	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ true, false, true, false, true ] );
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float32Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
	out = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	swhere( 5, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = new Float32Array( [ 1.0, 7.0, 3.0, 9.0, 5.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (all true)', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ true, true, true ] );
	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (all false)', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ false, false, false ] );
	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var condition;
	var actual;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ true, false, true ] );
	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	actual = swhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ true, false, true ] );
	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	expected = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );
	swhere( -1, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );
	swhere( 0, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `condition` stride', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray([
		true,  // 0
		false,
		false, // 1
		true,
		true   // 2
	]);
	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	]);
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, 2, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = new Float32Array( [ 1.0, 7.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray([
		true,  // 0
		false, // 1
		true,  // 2
		false,
		false
	]);
	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	]);
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, 1, 0, x, 2, 0, y, 1, 0, out, 1, 0 );
	expected = new Float32Array( [ 1.0, 7.0, 5.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray([
		false, // 0
		true,  // 1
		false, // 2
		true,
		false
	]);
	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	]);
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, 1, 0, x, 1, 0, y, 2, 0, out, 1, 0 );
	expected = new Float32Array( [ 6.0, 2.0, 10.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` stride', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ true, false, true ] );
	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	out = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 2, 0 );
	expected = new Float32Array( [ 1.0, 0.0, 5.0, 0.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray([
		true,  // 2
		false,
		false, // 1
		true,
		true   // 0
	]);
	x = new Float32Array([
		1.0, // 2
		2.0, // 1
		3.0, // 0
		4.0,
		5.0
	]);
	y = new Float32Array([
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	]);
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, -2, 4, x, -1, 2, y, -1, 2, out, -1, 2 );
	expected = new Float32Array( [ 1.0, 7.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `condition` offset', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray([
		false,
		true,  // 0
		false,
		false, // 1
		false,
		true   // 2
	]);
	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0,
		6.0
	]);
	y = new Float32Array([
		7.0, // 0
		8.0, // 1
		9.0, // 2
		10.0,
		11.0,
		12.0
	]);
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, 2, 1, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = new Float32Array( [ 1.0, 8.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray([
		true,  // 0
		false, // 1
		true,  // 2
		false
	]);
	x = new Float32Array([
		0.0,
		1.0, // 0
		0.0,
		2.0, // 1
		0.0,
		3.0, // 2
		0.0,
		4.0
	]);
	y = new Float32Array([
		5.0, // 0
		6.0, // 1
		7.0, // 2
		8.0
	]);
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, 1, 0, x, 2, 1, y, 1, 0, out, 1, 0 );
	expected = new Float32Array( [ 1.0, 6.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` offset', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray([
		false, // 0
		true,  // 1
		false, // 2
		true
	]);
	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0
	]);
	y = new Float32Array([
		0.0,
		5.0, // 0
		0.0,
		6.0, // 1
		0.0,
		7.0, // 2
		0.0,
		8.0
	]);
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, 1, 0, x, 1, 0, y, 2, 1, out, 1, 0 );
	expected = new Float32Array( [ 5.0, 2.0, 7.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` offset', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ true, false, true ] );
	x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float32Array( [ 4.0, 5.0, 6.0 ] );
	out = new Float32Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	swhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 2 );
	expected = new Float32Array( [ 0.0, 0.0, 1.0, 5.0, 3.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray([
		true,  // 0
		false,
		false, // 1
		true,
		true,  // 2
		false
	]);
	x = new Float32Array([
		1.0,  // 2
		2.0,  // 1
		3.0,  // 0
		4.0,
		5.0,
		6.0
	]);
	y = new Float32Array([
		7.0,  // 0
		8.0,
		9.0,  // 1
		10.0,
		11.0, // 2
		12.0
	]);
	out = new Float32Array( [ 0.0, 0.0, 0.0 ] );

	swhere( 3, condition, 2, 0, x, -1, 2, y, 2, 0, out, 1, 0 );
	expected = new Float32Array( [ 3.0, 9.0, 1.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
