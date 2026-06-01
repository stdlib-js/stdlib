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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gcunone = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcunone, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( gcunone.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 0, 0, 1, 1 ];
	y = [ false, false, false, false ];

	out = gcunone( x.length, x, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'the function returns a reference to the output array (accessors)', function test( t ) {
	var out;
	var x;
	var y;

	x = toAccessorArray( [ 0, 0, 1, 1 ] );
	y = toAccessorArray( [ false, false, false, false ] );

	out = gcunone( x.length, x, 1, 0, y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x;
	var y;

	x = [ 0, 0, 1, 1 ];
	y = [ false, false, false, false ];
	expected = [ false, false, false, false ];

	out = gcunone( 0, x, 1, 0, y, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	out = gcunone( -4, x, 1, 0, y, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 0, 0, 1, 1 ];
	y = [ false, false, false, false ];
	expected = [ false, false, false, false ];

	gcunone( 0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	gcunone( -4, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether every element is falsy', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0, 0, 1, 1 ];
	out = [ false, false, false, false ];
	expected = [ true, true, false, false ];

	gcunone( x.length, x, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 0, 0, 0, 0, 0 ];
	out = [ false, false, false, false, false ];
	expected = [ true, true, true, true, true ];

	gcunone( x.length, x, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 1, 0, 0 ];
	out = [ false, false, false ];
	expected = [ false, false, false ];

	gcunone( x.length, x, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 0, 1, 0, 1 ];
	out = [ false, false, false, false ];
	expected = [ true, false, false, false ];

	gcunone( x.length, x, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function cumulatively tests whether every element is falsy (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0, 0, 1, 1 ];
	out = [ false, false, false, false ];
	expected = [ true, true, false, false ];

	gcunone( x.length, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 0, 0, 0, 0, 0 ];
	out = [ false, false, false, false, false ];
	expected = [ true, true, true, true, true ];

	gcunone( x.length, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		0,    // 0
		999,
		0,    // 1
		999,
		1,    // 2
		999,
		1     // 3
	];
	out = [ false, false, false, false ];
	expected = [ true, true, false, false ];

	gcunone( 4, x, 2, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		0,    // 0
		999,
		0,    // 1
		999,
		1,    // 2
		999,
		1     // 3
	];
	out = [ false, false, false, false ];
	expected = [ true, true, false, false ];

	gcunone( 4, toAccessorArray( x ), 2, 0, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0, 0, 1, 1 ];
	out = [
		false, // 0
		999,
		false, // 1
		999,
		false, // 2
		999,
		false  // 3
	];
	expected = [
		true,
		999,
		true,
		999,
		false,
		999,
		false
	];

	gcunone( 4, x, 1, 0, out, 2, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` stride (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0, 0, 1, 1 ];
	out = [
		false, // 0
		999,
		false, // 1
		999,
		false, // 2
		999,
		false  // 3
	];
	expected = [
		true,
		999,
		true,
		999,
		false,
		999,
		false
	];

	gcunone( 4, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 2, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1,    // 3
		1,    // 2
		0,    // 1
		0     // 0
	];
	out = [ false, false, false, false ];
	expected = [ true, true, false, false ];

	gcunone( 4, x, -1, 3, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1,    // 3
		1,    // 2
		0,    // 1
		0     // 0
	];
	out = [ false, false, false, false ];
	expected = [ true, true, false, false ];

	gcunone( 4, toAccessorArray( x ), -1, 3, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `out` stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0, 0, 1, 1 ];
	out = [ false, false, false, false ];
	expected = [ false, false, true, true ];

	gcunone( 4, x, 1, 0, out, -1, 3 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `out` stride (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0, 0, 1, 1 ];
	out = [ false, false, false, false ];
	expected = [ false, false, true, true ];

	gcunone( 4, toAccessorArray( x ), 1, 0, toAccessorArray( out ), -1, 3 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1, 1, 0, 0, 1 ];
	out = [ false, false, false ];
	expected = [ true, true, false ];

	gcunone( 3, x, 1, 2, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` offset (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1, 1, 0, 0, 1 ];
	out = [ false, false, false ];
	expected = [ true, true, false ];

	gcunone( 3, toAccessorArray( x ), 1, 2, toAccessorArray( out ), 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` offset', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0, 0, 1 ];
	out = [ 999, 999, false, false, false ];
	expected = [ 999, 999, true, true, false ];

	gcunone( 3, x, 1, 0, out, 1, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` offset (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0, 0, 1 ];
	out = [ 999, 999, false, false, false ];
	expected = [ 999, 999, true, true, false ];

	gcunone( 3, toAccessorArray( x ), 1, 0, toAccessorArray( out ), 1, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0, 0, 0, 1, 0, 1 ];
	out = [ false, false, false, false, false, false ];
	expected = [ false, false, false, false, false, true ];

	gcunone( 3, x, 2, 1, out, -2, 5 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 0, 0, 0, 1, 0, 1 ];
	out = [ false, false, false, false, false, false ];
	expected = [ false, false, false, false, false, true ];

	gcunone( 3, toAccessorArray( x ), 2, 1, toAccessorArray( out ), -2, 5 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
