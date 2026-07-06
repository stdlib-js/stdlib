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
var gevery = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gevery, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( gevery.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the function tests whether every element in a strided array is truthy', function test( t ) {
	var out;
	var x;

	x = [ 1, 1, 1, 1 ];
	out = gevery( x.length, x, 1 );
	t.strictEqual( out, true, 'returns expected value' );

	x = [ 1, 1, 0, 1 ];
	out = gevery( x.length, x, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = [ 0, 0, 0, 0 ];
	out = gevery( x.length, x, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = [ 1, 0, 1, 0 ];
	out = gevery( x.length, x, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether every element in a strided array is truthy (accessors)', function test( t ) {
	var out;
	var x;

	x = [ 1, 1, 1, 1 ];
	out = gevery( x.length, toAccessorArray( x ), 1 );
	t.strictEqual( out, true, 'returns expected value' );

	x = [ 1, 1, 0, 1 ];
	out = gevery( x.length, toAccessorArray( x ), 1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = [ 0, 0, 0, 0 ];
	out = gevery( x.length, toAccessorArray( x ), 1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = [ 1, 0, 1, 0 ];
	out = gevery( x.length, toAccessorArray( x ), 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `false`', function test( t ) {
	var out;
	var x;

	x = [ 1, 1, 1, 1 ];

	out = gevery( 0, x, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	out = gevery( -4, x, 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `false` (accessors)', function test( t ) {
	var out;
	var x;

	x = [ 1, 1, 1, 1 ];

	out = gevery( 0, toAccessorArray( x ), 1 );
	t.strictEqual( out, false, 'returns expected value' );

	out = gevery( -4, toAccessorArray( x ), 1 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var out;
	var x;

	x = [
		1,    // 0
		999,
		1,    // 1
		999,
		0,    // 2
		999,
		0     // 3
	];

	out = gevery( 4, x, 2 );
	t.strictEqual( out, false, 'returns expected value' );

	x = [
		1,    // 0
		999,
		1,    // 1
		999,
		1,    // 2
		999,
		1     // 3
	];

	out = gevery( 4, x, 2 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter (accessors)', function test( t ) {
	var out;
	var x;

	x = [
		1,    // 0
		999,
		1,    // 1
		999,
		0,    // 2
		999,
		0     // 3
	];

	out = gevery( 4, toAccessorArray( x ), 2 );
	t.strictEqual( out, false, 'returns expected value' );

	x = [
		1,    // 0
		999,
		1,    // 1
		999,
		1,    // 2
		999,
		1     // 3
	];

	out = gevery( 4, toAccessorArray( x ), 2 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of `0`', function test( t ) {
	var out;
	var x;

	x = [ 1, 999, 999, 999 ];
	out = gevery( 4, x, 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = [ 0, 999, 999, 999 ];
	out = gevery( 4, x, 0 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of `0` (accessors)', function test( t ) {
	var out;
	var x;

	x = [ 1, 999, 999, 999 ];
	out = gevery( 4, toAccessorArray( x ), 0 );
	t.strictEqual( out, true, 'returns expected value' );

	x = [ 0, 999, 999, 999 ];
	out = gevery( 4, toAccessorArray( x ), 0 );
	t.strictEqual( out, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var out;
	var x;

	x = [
		0,    // 3
		0,    // 2
		1,    // 1
		1     // 0
	];

	out = gevery( 4, x, -1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = [
		1,    // 3
		1,    // 2
		1,    // 1
		1     // 0
	];

	out = gevery( 4, x, -1 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var out;
	var x;

	x = [
		0,    // 3
		0,    // 2
		1,    // 1
		1     // 0
	];

	out = gevery( 4, toAccessorArray( x ), -1 );
	t.strictEqual( out, false, 'returns expected value' );

	x = [
		1,    // 3
		1,    // 2
		1,    // 1
		1     // 0
	];

	out = gevery( 4, toAccessorArray( x ), -1 );
	t.strictEqual( out, true, 'returns expected value' );

	t.end();
});
