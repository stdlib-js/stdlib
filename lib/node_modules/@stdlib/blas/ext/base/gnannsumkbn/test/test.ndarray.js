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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gnannsumkbn = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gnannsumkbn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( gnannsumkbn.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the sum of strided array elements (ignoring NaN values)', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, NaN, 3.0, 0.0, -3.0, 3.0, NaN ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 3.0, 9.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0, NaN ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 3.0, 6.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [ -4.0, NaN, -4.0 ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ -8.0, 2.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [ NaN, 4.0 ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 4.0, 1.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [ NaN, NaN ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( v[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( v[ 1 ], 0.0, 'returns expected value' );

	x = [ NaN ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	t.strictEqual( v, out, 'returns expected value' );
	t.strictEqual( v[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( v[ 1 ], 0.0, 'returns expected value' );

	x = [ 4.0 ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 4.0, 1.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	x = [ 1.0, 1.0e100, 1.0, -1.0e100 ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 2.0, 4.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sum of strided array elements (ignoring NaN values, accessors)', function test( t ) {
	var expected;
	var obuf;
	var out;
	var x;
	var v;

	x = toAccessorArray([
		1.0,
		-2.0,
		-4.0,
		5.0,
		0.0,
		NaN,
		3.0,
		0.0,
		-3.0,
		3.0,
		NaN
	]);
	obuf = [ 0.0, 0.0 ];
	out = toAccessorArray( obuf );
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 3.0, 9.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	x = toAccessorArray( [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0, NaN ] );
	obuf = [ 0.0, 0.0 ];
	out = toAccessorArray( obuf );
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 3.0, 6.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	x = toAccessorArray( [ -4.0, NaN, -4.0 ] );
	obuf = [ 0.0, 0.0 ];
	out = toAccessorArray( obuf );
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ -8.0, 2.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	x = toAccessorArray( [ NaN, 4.0 ] );
	obuf = [ 0.0, 0.0 ];
	out = toAccessorArray( obuf );
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 4.0, 1.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	x = toAccessorArray( [ NaN, NaN ] );
	obuf = [ 0.0, 0.0 ];
	out = toAccessorArray( obuf );
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 0.0, 0.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	x = toAccessorArray( [ NaN ] );
	obuf = [ 0.0, 0.0 ];
	out = toAccessorArray( obuf );
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 0.0, 0.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	x = toAccessorArray( [ 4.0 ] );
	obuf = [ 0.0, 0.0 ];
	out = toAccessorArray( obuf );
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 4.0, 1.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	x = toAccessorArray( [ 1.0, 1.0e100, 1.0, -1.0e100 ] );
	obuf = [ 0.0, 0.0 ];
	out = toAccessorArray( obuf );
	v = gnannsumkbn( x.length, x, 1, 0, out, 1, 0 );

	expected = [ 2.0, 4.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( 0, x, 1, 0, out, 1, 0 );

	expected = [ 0.0, 0.0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( -1, x, 1, 0, out, 1, 0 );

	expected = [ 0.0, 0.0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first indexed element', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( 1, x, 1, 0, out, 1, 0 );

	expected = [ 1.0, 1.0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		NaN,  // 4
		NaN
	];
	out = [ 0.0, 0.0, 0.0, 0.0 ];

	v = gnannsumkbn( 5, x, 2, 0, out, 2, 0 );

	expected = [ 5.0, 0.0, 4.0, 0.0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter (accessors)', function test( t ) {
	var expected;
	var obuf;
	var out;
	var v;
	var x;

	x = toAccessorArray([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		NaN,  // 4
		NaN
	]);
	obuf = [ 0.0, 0.0, 0.0, 0.0 ];
	out = toAccessorArray( obuf );

	v = gnannsumkbn( 5, x, 2, 0, out, 2, 0 );

	expected = [ 5.0, 0.0, 4.0, 0.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `stride` parameter', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [
		NaN,  // 4
		NaN,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];
	out = [ 0.0, 0.0, 0.0, 0.0 ];

	v = gnannsumkbn( 5, x, -2, 8, out, -2, 2 );

	expected = [ 4.0, 0.0, 5.0, 0.0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `stride` parameter (accessors)', function test( t ) {
	var expected;
	var obuf;
	var out;
	var x;
	var v;

	x = toAccessorArray([
		NaN,  // 4
		NaN,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);
	obuf = [ 0.0, 0.0, 0.0, 0.0 ];
	out = toAccessorArray( obuf );

	v = gnannsumkbn( 5, x, -2, 8, out, -2, 2 );

	expected = [ 4.0, 0.0, 5.0, 0.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the of the first element repeated N times', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( x.length, x, 0, 0, out, 1, 0 );

	expected = [ 5.0, 5.0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the of the first element repeated N times (accessors)', function test( t ) {
	var expected;
	var obuf;
	var out;
	var x;
	var v;

	x = toAccessorArray( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );
	obuf = [ 0.0, 0.0 ];
	out = toAccessorArray( obuf );
	v = gnannsumkbn( x.length, x, 0, 0, out, 1, 0 );

	expected = [ 5.0, 5.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0` and the first element is `NaN`, the function returns `0.0`', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [ NaN, -2.0, -4.0, 5.0, 3.0 ];

	out = [ 0.0, 0.0 ];
	v = gnannsumkbn( x.length, x, 0, 0, out, 1, 0 );

	expected = [ 0.0, 0.0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0` and the first element is `NaN`, the function returns `0.0` (accessors)', function test( t ) {
	var expected;
	var obuf;
	var out;
	var x;
	var v;

	x = toAccessorArray( [ NaN, -2.0, -4.0, 5.0, 3.0 ] );
	obuf = [ 0.0, 0.0 ];
	out = toAccessorArray( obuf );
	v = gnannsumkbn( x.length, x, 0, 0, out, 1, 0 );

	expected = [ 0.0, 0.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports `offset` parameters', function test( t ) {
	var expected;
	var out;
	var x;
	var v;

	x = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		NaN,
		NaN   // 4
	];
	out = [ 0.0, 0.0, 0.0, 0.0 ];

	v = gnannsumkbn( 5, x, 2, 1, out, 2, 1 );

	expected = [ 0.0, 5.0, 0.0, 4.0 ];
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports `offset` parameters (accessors)', function test( t ) {
	var expected;
	var obuf;
	var out;
	var x;
	var v;

	x = toAccessorArray([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		NaN,
		NaN   // 4
	]);
	obuf = [ 0.0, 0.0, 0.0, 0.0 ];
	out = toAccessorArray( obuf );

	v = gnannsumkbn( 5, x, 2, 1, out, 2, 1 );

	expected = [ 0.0, 5.0, 0.0, 4.0 ];
	t.strictEqual( v, out, 'returns expected value' );
	t.deepEqual( obuf, expected, 'returns expected value' );

	t.end();
});
