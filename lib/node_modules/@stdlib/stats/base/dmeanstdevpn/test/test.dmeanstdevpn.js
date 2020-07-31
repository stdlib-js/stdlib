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
var floor = require( '@stdlib/math/base/special/floor' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var Float64Array = require( '@stdlib/array/float64' );
var dmeanstdevpn = require( './../lib/dmeanstdevpn.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dmeanstdevpn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( dmeanstdevpn.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the arithmetic mean and population standard deviation of a strided array', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( x.length, 0, x, 1, out, 1 );

	expected = new Float64Array( [ 0.5, sqrt( 53.5/x.length ) ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ -4.0, -4.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( x.length, 0, x, 1, out, 1 );

	expected = new Float64Array( [ -4.0, 0.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ NaN, 4.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( x.length, 0, x, 1, out, 1 );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the arithmetic mean and sample standard deviation of a strided array', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( x.length, 1, x, 1, out, 1 );

	expected = new Float64Array( [ 0.5, sqrt( 53.5/(x.length-1) ) ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ -4.0, -4.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( x.length, 1, x, 1, out, 1 );

	expected = new Float64Array( [ -4.0, 0.0 ] );
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ NaN, 4.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( x.length, 1, x, 1, out, 1 );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN` values', function test( t ) {
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( 0, 1, x, 1, out, 1 );

	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( -1, 1, x, 1, out, 1 );

	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns a population standard deviation of `0`', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( 1, 0, x, 1, out, 1 );

	expected = new Float64Array( [ 1.0, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `correction` parameter yielding `N-correction` less than or equal to `0`, the function returns a standard deviation equal to `NaN`', function test( t ) {
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( 1, 1, x, 1, out, 1 );

	t.strictEqual( v[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( x.length, x.length, x, 0, out, 1 );

	t.strictEqual( v[ 0 ], 1.0, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( x.length, x.length, x, 1, out, 1 );

	t.strictEqual( v[ 0 ], 0.5, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	out = new Float64Array( 2 );
	v = dmeanstdevpn( x.length, x.length+1, x, 1, out, 1 );

	t.strictEqual( v[ 0 ], 0.5, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports `stride` parameters', function test( t ) {
	var expected;
	var out;
	var N;
	var x;
	var v;

	x = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);
	out = new Float64Array( 4 );

	N = floor( x.length / 2 );
	v = dmeanstdevpn( N, 1, x, 2, out, 2 );

	expected = new Float64Array( [ 1.25, 0.0, 2.5, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative `stride` parameters', function test( t ) {
	var expected;
	var out;
	var N;
	var x;
	var v;

	x = new Float64Array([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	out = new Float64Array( 4 );

	N = floor( x.length / 2 );
	v = dmeanstdevpn( N, 1, x, -2, out, -2 );

	expected = new Float64Array( [ 2.5, 0.0, 1.25, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns an arithmetic mean equal to the first element and a standard deviation of `0`', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	out = new Float64Array( 2 );

	v = dmeanstdevpn( x.length, 1, x, 0, out, 1 );

	expected = new Float64Array( [ 1.0, 0.0 ] );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected0;
	var expected1;
	var out0;
	var out1;
	var x0;
	var x1;
	var N;
	var v;

	x0 = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0
	]);
	out0 = new Float64Array( 4 );

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
	out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*2 ); // start at the 3rd element
	N = floor(x1.length / 2);

	v = dmeanstdevpn( N, 1, x1, 2, out1, 1 );

	expected0 = new Float64Array( [ 0.0, 0.0, 1.25, 2.5 ] );
	expected1 = new Float64Array( [ 1.25, 2.5 ] );

	t.deepEqual( out0, expected0, 'returns expected value' );
	t.deepEqual( v, expected1, 'returns expected value' );

	t.end();
});
