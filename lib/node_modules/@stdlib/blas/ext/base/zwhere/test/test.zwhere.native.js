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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var BooleanArray = require( '@stdlib/array/bool' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var zwhere = tryRequire( resolve( __dirname, './../lib/zwhere.native.js' ) );
var opts = {
	'skip': ( zwhere instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zwhere, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', opts, function test( t ) {
	t.strictEqual( zwhere.length, 9, 'has expected arity' );
	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ true, false, true, false, true ] );
	x = new Complex128Array([
		1.0,
		-1.0,
		2.0,
		-2.0,
		3.0,
		-3.0,
		4.0,
		-4.0,
		5.0,
		-5.0
	]);
	y = new Complex128Array([
		6.0,
		-6.0,
		7.0,
		-7.0,
		8.0,
		-8.0,
		9.0,
		-9.0,
		10.0,
		-10.0
	]);
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zwhere( 5, condition, 1, x, 1, y, 1, out, 1 );
	expected = new Complex128Array([
		1.0,
		-1.0,
		7.0,
		-7.0,
		3.0,
		-3.0,
		9.0,
		-9.0,
		5.0,
		-5.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (all true)', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ true, true, true ] );
	x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	y = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
	expected = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (all false)', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ false, false, false ] );
	x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	y = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zwhere( 3, condition, 1, x, 1, y, 1, out, 1 );
	expected = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var condition;
	var actual;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ true, false, true ] );
	x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	y = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = zwhere( 3, condition, 1, x, 1, y, 1, out, 1 );

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
	x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	y = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	zwhere( -1, condition, 1, x, 1, y, 1, out, 1 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	zwhere( 0, condition, 1, x, 1, y, 1, out, 1 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

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
	x = new Complex128Array([
		1.0,  // 0
		-1.0, // 0
		2.0,  // 1
		-2.0, // 1
		3.0,  // 2
		-3.0, // 2
		4.0,
		-4.0,
		5.0,
		-5.0
	]);
	y = new Complex128Array([
		6.0,  // 0
		-6.0, // 0
		7.0,  // 1
		-7.0, // 1
		8.0,  // 2
		-8.0, // 2
		9.0,
		-9.0,
		10.0,
		-10.0
	]);
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zwhere( 3, condition, 2, x, 1, y, 1, out, 1 );
	expected = new Complex128Array( [ 1.0, -1.0, 7.0, -7.0, 3.0, -3.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

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
	x = new Complex128Array([
		1.0,  // 0
		-1.0, // 0
		2.0,
		-2.0,
		3.0,  // 1
		-3.0, // 1
		4.0,
		-4.0,
		5.0,  // 2
		-5.0  // 2
	]);
	y = new Complex128Array([
		6.0,  // 0
		-6.0, // 0
		7.0,  // 1
		-7.0, // 1
		8.0,  // 2
		-8.0, // 2
		9.0,
		-9.0,
		10.0,
		-10.0
	]);
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zwhere( 3, condition, 1, x, 2, y, 1, out, 1 );
	expected = new Complex128Array( [ 1.0, -1.0, 7.0, -7.0, 5.0, -5.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

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
	x = new Complex128Array([
		1.0,  // 0
		-1.0, // 0
		2.0,  // 1
		-2.0, // 1
		3.0,  // 2
		-3.0, // 2
		4.0,
		-4.0,
		5.0,
		-5.0
	]);
	y = new Complex128Array([
		6.0,  // 0
		-6.0, // 0
		7.0,
		-7.0,
		8.0,  // 1
		-8.0, // 1
		9.0,
		-9.0,
		10.0, // 2
		-10.0 // 2
	]);
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zwhere( 3, condition, 1, x, 1, y, 2, out, 1 );
	expected = new Complex128Array( [ 6.0, -6.0, 2.0, -2.0, 10.0, -10.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` stride', opts, function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = new BooleanArray( [ true, false, true ] );
	x = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	y = new Complex128Array( [ 4.0, -4.0, 5.0, -5.0, 6.0, -6.0 ] );
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zwhere( 3, condition, 1, x, 1, y, 1, out, 2 );
	expected = new Complex128Array([
		1.0,
		-1.0,
		0.0,
		0.0,
		5.0,
		-5.0,
		0.0,
		0.0,
		3.0,
		-3.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

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
	x = new Complex128Array([
		1.0,  // 2
		-1.0, // 2
		2.0,  // 1
		-2.0, // 1
		3.0,  // 0
		-3.0, // 0
		4.0,
		-4.0,
		5.0,
		-5.0
	]);
	y = new Complex128Array([
		6.0,  // 2
		-6.0, // 2
		7.0,  // 1
		-7.0, // 1
		8.0,  // 0
		-8.0, // 0
		9.0,
		-9.0,
		10.0,
		-10.0
	]);
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zwhere( 3, condition, -2, x, -1, y, -1, out, -1 );
	expected = new Complex128Array( [ 1.0, -1.0, 7.0, -7.0, 3.0, -3.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

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
	x = new Complex128Array([
		1.0,  // 2
		-1.0, // 2
		2.0,  // 1
		-2.0, // 1
		3.0,  // 0
		-3.0, // 0
		4.0,
		-4.0,
		5.0,
		-5.0,
		6.0,
		-6.0
	]);
	y = new Complex128Array([
		7.0,  // 0
		-7.0, // 0
		8.0,
		-8.0,
		9.0,  // 1
		-9.0, // 1
		10.0,
		-10.0,
		11.0,  // 2
		-11.0, // 2
		12.0,
		-12.0
	]);
	out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	zwhere( 3, condition, 2, x, -1, y, 2, out, 1 );
	expected = new Complex128Array( [ 3.0, -3.0, 9.0, -9.0, 1.0, -1.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var condition0;
	var condition1;
	var expected;
	var out0;
	var out1;
	var x0;
	var y0;
	var x1;
	var y1;

	// Initial arrays...
	condition0 = new BooleanArray( [ false, true, false, true, false, true ] );
	x0 = new Complex128Array([
		1.0,
		-1.0,
		2.0,
		-2.0,
		3.0,
		-3.0,
		4.0,
		-4.0,
		5.0,
		-5.0,
		6.0,
		-6.0
	]);
	y0 = new Complex128Array([
		7.0,
		-7.0,
		8.0,
		-8.0,
		9.0,
		-9.0,
		10.0,
		-10.0,
		11.0,
		-11.0,
		12.0,
		-12.0
	]);
	out0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	// Create offset views...
	condition1 = new BooleanArray( condition0.buffer, condition0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Complex128Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	out1 = new Complex128Array( out0.buffer, out0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	zwhere( 3, condition1, 2, x1, 2, y1, 2, out1, 1 );
	expected = new Complex128Array([
		0.0,
		0.0,
		2.0,
		-2.0,
		4.0,
		-4.0,
		6.0,
		-6.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex128Array( out0, expected ), true, 'returns expected value' );
	t.end();
});
