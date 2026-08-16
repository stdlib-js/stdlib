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

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gmskrev = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gmskrev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( gmskrev.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function reverses a strided array according to a mask', function test( t ) {
	var expected;
	var mask;
	var x;

	x = [
		-2.0,
		1.0,
		3.0,
		-5.0,
		4.0,
		0.0,
		-1.0,
		-3.0
	];
	mask = [ 0, 0, 0, 1, 0, 0, 0, 0 ];
	expected = [ -3.0, -1.0, 0.0, -5.0, 4.0, 3.0, 1.0, -2.0 ];

	gmskrev( x.length, x, 1, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	mask = [ 0, 0 ];
	expected = [ 2.0, 1.0 ];

	gmskrev( x.length, x, 1, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0 ];
	mask = [ 0, 0, 0 ];
	expected = [ 3.0, 2.0, 1.0 ];

	gmskrev( x.length, x, 1, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function reverses a strided array according to a mask (accessors)', function test( t ) {
	var expected;
	var mask;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	mask = [ 0, 0, 0, 0 ];
	expected = [ 4.0, 3.0, 2.0, 1.0 ];

	gmskrev( x.length, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function excludes masked elements from the reversal', function test( t ) {
	var expected;
	var mask;
	var x;

	// Mask the first element:
	x = [ 1.0, 2.0, 3.0, 4.0 ];
	mask = [ 1, 0, 0, 0 ];
	expected = [ 1.0, 4.0, 3.0, 2.0 ];

	gmskrev( x.length, x, 1, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	// Mask the last element:
	x = [ 1.0, 2.0, 3.0, 4.0 ];
	mask = [ 0, 0, 0, 1 ];
	expected = [ 3.0, 2.0, 1.0, 4.0 ];

	gmskrev( x.length, x, 1, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function leaves the array unchanged when all elements are masked', function test( t ) {
	var expected;
	var mask;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	mask = [ 1, 1, 1, 1 ];
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	gmskrev( x.length, x, 1, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var mask;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	mask = [ 0, 0, 0, 0, 0 ];
	out = gmskrev( x.length, x, 1, mask, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var mask;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	mask = [ 0, 0, 0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	gmskrev( 0, x, 1, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gmskrev( -4, x, 1, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 3.0, -4.0, 1.0 ];
	mask = [ 1, 0, 1 ];
	expected = [ 3.0, -4.0, 1.0 ];

	gmskrev( 0, x, 1, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var mask;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	mask = [
		0,  // 0
		0,  // 1
		0   // 2
	];
	expected = [
		6.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		2.0   // 2
	];

	gmskrev( 3, x, 2, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0,  // 2
		-1.0,
		0.0   // 3
	];
	mask = [
		0,  // 0
		0,  // 1
		0,  // 2
		0   // 3
	];
	expected = [
		0.0,  // 0
		-3.0,
		6.0,  // 1
		7.0,
		-5.0, // 2
		-1.0,
		2.0   // 3
	];

	gmskrev( 4, x, 2, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride (accessors)', function test( t ) {
	var expected;
	var mask;
	var x;

	x = [ 2.0, -3.0, -5.0, 7.0, 6.0 ];
	mask = [ 0, 0, 0 ];
	expected = [ 6.0, -3.0, -5.0, 7.0, 2.0 ];

	gmskrev( 3, toAccessorArray( x ), 2, toAccessorArray( mask ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var mask;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	mask = [
		0,  // 0
		0,  // 1
		0   // 2
	];
	expected = [
		6.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		2.0   // 0
	];

	gmskrev( 3, x, -2, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [
		2.0,  // 3
		-3.0,
		-5.0, // 2
		7.0,
		6.0,  // 1
		-1.0,
		0.0   // 0
	];
	mask = [
		0,  // 0
		0,  // 1
		0,  // 2
		0   // 3
	];
	expected = [
		0.0,  // 3
		-3.0,
		6.0,  // 2
		7.0,
		-5.0, // 1
		-1.0,
		2.0   // 0
	];

	gmskrev( 4, x, -2, mask, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride (accessors)', function test( t ) {
	var expected;
	var mask;
	var x;

	x = [ 4.0, -3.0, -1.0, -5.0 ];
	mask = [ 0, 0 ];
	expected = [ -1.0, -3.0, 4.0, -5.0 ];

	gmskrev( 2, toAccessorArray( x ), -2, toAccessorArray( mask ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function excludes masked elements from the reversal (accessors)', function test( t ) {
	var expected;
	var mask;
	var x;

	x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
	mask = [ 0, 0, 0, 1, 0, 0, 0, 0 ];
	expected = [ -3.0, -1.0, 0.0, -5.0, 4.0, 3.0, 1.0, -2.0 ];

	gmskrev( 8, toAccessorArray( x ), 1, toAccessorArray( mask ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a mask stride', function test( t ) {
	var expected;
	var mask;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	mask = [ 0, 0, 1, 0, 0, 0, 0 ];
	expected = [ 4.0, 2.0, 3.0, 1.0 ];

	gmskrev( x.length, x, 1, mask, 2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var mask0;
	var mask1;
	var x0;
	var x1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	mask0 = new Uint8Array([
		0,
		0, // 0
		0, // 1
		0  // 2
	]);
	expected = new Float64Array([
		1.0,
		6.0, // 0
		3.0,
		4.0, // 1
		5.0,
		2.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	mask1 = new Uint8Array( mask0.buffer, mask0.BYTES_PER_ELEMENT*1 );

	gmskrev( 3, x1, 2, mask1, 1 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});
