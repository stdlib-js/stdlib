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
var isSameArray = require( '@stdlib/assert/is-same-array' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gfillNotEqual = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gfillNotEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( gfillNotEqual.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function replaces strided array elements not equal to a provided search element', function test( t ) {
	var expected;
	var x;

	x = [
		0.0,
		2.0,
		0.0,
		4.0,
		-1.0,
		0.0,
		-5.0,
		6.0
	];
	expected = [
		0.0,
		5.0,
		0.0,
		5.0,
		5.0,
		0.0,
		5.0,
		5.0
	];

	gfillNotEqual( x.length, 0.0, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 0.0, 2.0 ];
	expected = [ 0.0, 5.0 ];

	gfillNotEqual( x.length, 0.0, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces strided array elements not equal to a provided search element (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		0.0,
		2.0,
		0.0,
		4.0,
		-1.0,
		0.0,
		-5.0,
		6.0
	];
	expected = [
		0.0,
		5.0,
		0.0,
		5.0,
		5.0,
		0.0,
		5.0,
		5.0
	];

	gfillNotEqual( x.length, 0.0, 5.0, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 0.0, 2.0 ];
	expected = [ 0.0, 5.0 ];

	gfillNotEqual( x.length, 0.0, 5.0, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if all elements are equal to a provided search element, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 4.0, 4.0, 4.0 ];
	expected = [ 4.0, 4.0, 4.0 ];

	gfillNotEqual( x.length, 4.0, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if all elements are equal to a provided search element, the function returns `x` unchanged (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 4.0, 4.0, 4.0 ];
	expected = [ 4.0, 4.0, 4.0 ];

	gfillNotEqual( x.length, 4.0, 5.0, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a search element equal to `NaN`, the function replaces all elements', function test( t ) {
	var expected;
	var x;

	x = [ NaN, 1.0, NaN ];
	expected = [ 5.0, 5.0, 5.0 ];

	gfillNotEqual( x.length, NaN, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a search element equal to `NaN`, the function replaces all elements (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ NaN, 1.0, NaN ];
	expected = [ 5.0, 5.0, 5.0 ];

	gfillNotEqual( x.length, NaN, 5.0, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces `NaN` elements', function test( t ) {
	var expected;
	var x;

	x = [ NaN, 0.0, NaN ];
	expected = [ 5.0, 0.0, 5.0 ];

	gfillNotEqual( x.length, 0.0, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replaces `NaN` elements (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ NaN, 0.0, NaN ];
	expected = [ 5.0, 0.0, 5.0 ];

	gfillNotEqual( x.length, 0.0, 5.0, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function considers `-0` and `+0` to be the same value', function test( t ) {
	var expected;
	var x;

	x = [ -0.0, 1.0, 0.0, -0.0 ];
	expected = [ -0.0, 5.0, 0.0, -0.0 ];

	gfillNotEqual( x.length, 0.0, 5.0, x, 1, 0 );
	t.strictEqual( isSameArray( x, expected ), true, 'returns expected value' );

	x = [ -0.0, 1.0, 0.0, -0.0 ];
	expected = [ -0.0, 5.0, 0.0, -0.0 ];

	gfillNotEqual( x.length, -0.0, 5.0, x, 1, 0 );
	t.strictEqual( isSameArray( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function considers `-0` and `+0` to be the same value (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ -0.0, 1.0, 0.0, -0.0 ];
	expected = [ -0.0, 5.0, 0.0, -0.0 ];

	gfillNotEqual( x.length, 0.0, 5.0, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isSameArray( x, expected ), true, 'returns expected value' );

	x = [ -0.0, 1.0, 0.0, -0.0 ];
	expected = [ -0.0, 5.0, 0.0, -0.0 ];

	gfillNotEqual( x.length, -0.0, 5.0, toAccessorArray( x ), 1, 0 );
	t.strictEqual( isSameArray( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 0.0, 3.0, 0.0, 5.0 ];
	out = gfillNotEqual( x.length, 0.0, 5.0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'the function returns a reference to the input array (accessors)', function test( t ) {
	var out;
	var x;

	x = toAccessorArray( [ 1.0, 0.0, 3.0, 0.0, 5.0 ] );
	out = gfillNotEqual( x.length, 0.0, 5.0, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 0.0, -4.0, 1.0 ];
	expected = [ 0.0, -4.0, 1.0 ];

	gfillNotEqual( 0, 0.0, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 0.0, -4.0, 1.0 ];
	gfillNotEqual( -4, 0.0, 5.0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = [
		0.0,  // 0
		-2.0,
		3.0,  // 1
		0.0,
		4.0,  // 2
		-6.0
	];
	expected = [
		0.0,  // 0
		-2.0,
		5.0,  // 1
		0.0,
		5.0,  // 2
		-6.0
	];

	gfillNotEqual( 3, 0.0, 5.0, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		0.0,  // 0
		-2.0,
		3.0,  // 1
		0.0,
		4.0,  // 2
		-6.0
	];
	expected = [
		0.0,  // 0
		-2.0,
		5.0,  // 1
		0.0,
		5.0,  // 2
		-6.0
	];

	gfillNotEqual( 3, 0.0, 5.0, toAccessorArray( x ), 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = [
		0.0,  // 2
		-2.0,
		3.0,  // 1
		0.0,
		4.0,  // 0
		-6.0
	];
	expected = [
		0.0,  // 2
		-2.0,
		5.0,  // 1
		0.0,
		5.0,  // 0
		-6.0
	];

	gfillNotEqual( 3, 0.0, 5.0, x, -2, 4 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		0.0,  // 2
		-2.0,
		3.0,  // 1
		0.0,
		4.0,  // 0
		-6.0
	];
	expected = [
		0.0,  // 2
		-2.0,
		5.0,  // 1
		0.0,
		5.0,  // 0
		-6.0
	];

	gfillNotEqual( 3, 0.0, 5.0, toAccessorArray( x ), -2, 4 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter', function test( t ) {
	var expected;
	var x;

	x = [
		0.0,
		-2.0, // 0
		3.0,
		0.0,  // 1
		4.0,
		-6.0  // 2
	];
	expected = [
		0.0,
		5.0,  // 0
		3.0,
		0.0,  // 1
		4.0,
		5.0   // 2
	];

	gfillNotEqual( 3, 0.0, 5.0, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		0.0,
		-2.0, // 0
		3.0,
		0.0,  // 1
		4.0,
		-6.0  // 2
	];
	expected = [
		0.0,
		5.0,  // 0
		3.0,
		0.0,  // 1
		4.0,
		5.0   // 2
	];

	gfillNotEqual( 3, 0.0, 5.0, toAccessorArray( x ), 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
