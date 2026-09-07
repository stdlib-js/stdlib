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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var gnone = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gnone, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( gnone.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function returns a boolean', function test( t ) {
	var x;
	var o;

	x = [ 0, 0, 1, 1 ];
	o = gnone( x.length, x, 1, 0 );

	t.strictEqual( isBoolean( o ), true, 'returns a boolean' );

	t.end();
});

tape( 'the function returns a boolean (accessors)', function test( t ) {
	var x;
	var o;

	x = toAccessorArray( [ 0, 0, 1, 1 ] );
	o = gnone( x.length, x, 1, 0 );

	t.strictEqual( isBoolean( o ), true, 'returns a boolean' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `true`', function test( t ) {
	var x;
	var o;

	x = [ 0, 0, 1, 1 ];

	o = gnone( 0, x, 1, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	o = gnone( -4, x, 1, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `true` (accessors)', function test( t ) {
	var x;
	var o;

	x = toAccessorArray( [ 0, 0, 1, 1 ] );

	o = gnone( 0, x, 1, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	o = gnone( -4, x, 1, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether all elements are falsy', function test( t ) {
	var x;
	var o;

	x = [ 0, 0, 1, 1 ];
	o = gnone( x.length, x, 1, 0 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [ 0, 0, 0, 0, 0 ];
	o = gnone( x.length, x, 1, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	x = [ 1, 0, 0 ];
	o = gnone( x.length, x, 1, 0 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [ 0, 0, 0 ];
	o = gnone( x.length, x, 1, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether all elements are falsy (accessors)', function test( t ) {
	var x;
	var o;

	x = [ 0, 0, 1, 1 ];
	o = gnone( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [ 0, 0, 0, 0, 0 ];
	o = gnone( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var x;
	var o;

	x = [
		0,    // 0
		999,
		0,    // 1
		999,
		1,    // 2
		999,
		1     // 3
	];
	o = gnone( 4, x, 2, 0 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [
		0,    // 0
		999,
		0,    // 1
		999,
		0,    // 2
		999,
		0     // 3
	];
	o = gnone( 4, x, 2, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var x;
	var o;

	x = [
		0,    // 0
		999,
		0,    // 1
		999,
		1,    // 2
		999,
		1     // 3
	];
	o = gnone( 4, toAccessorArray( x ), 2, 0 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [
		0,    // 0
		999,
		0,    // 1
		999,
		0,    // 2
		999,
		0     // 3
	];
	o = gnone( 4, toAccessorArray( x ), 2, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset', function test( t ) {
	var x;
	var o;

	x = [
		1,
		0,    // 0
		0,    // 1
		1,    // 2
		1     // 3
	];
	o = gnone( 4, x, 1, 1 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [
		1,
		0,    // 0
		0,    // 1
		0,    // 2
		0     // 3
	];
	o = gnone( 4, x, 1, 1 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset (accessors)', function test( t ) {
	var x;
	var o;

	x = [
		1,
		0,    // 0
		0,    // 1
		1,    // 2
		1     // 3
	];
	o = gnone( 4, toAccessorArray( x ), 1, 1 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [
		1,
		0,    // 0
		0,    // 1
		0,    // 2
		0     // 3
	];
	o = gnone( 4, toAccessorArray( x ), 1, 1 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride', function test( t ) {
	var x;
	var o;

	x = [
		1,    // 3
		1,    // 2
		0,    // 1
		0     // 0
	];
	o = gnone( 4, x, -1, 3 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [
		0,    // 3
		0,    // 2
		0,    // 1
		0     // 0
	];
	o = gnone( 4, x, -1, 3 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride (accessors)', function test( t ) {
	var x;
	var o;

	x = [
		1,    // 3
		1,    // 2
		0,    // 1
		0     // 0
	];
	o = gnone( 4, toAccessorArray( x ), -1, 3 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [
		0,    // 3
		0,    // 2
		0,    // 1
		0     // 0
	];
	o = gnone( 4, toAccessorArray( x ), -1, 3 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports both a stride and an offset', function test( t ) {
	var x;
	var o;

	x = [
		999,
		0,    // 0
		999,
		0,    // 1
		999,
		1,    // 2
		999,
		1     // 3
	];
	o = gnone( 4, x, 2, 1 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [
		999,
		0,    // 0
		999,
		0,    // 1
		999,
		0,    // 2
		999,
		0     // 3
	];
	o = gnone( 4, x, 2, 1 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports both a stride and an offset (accessors)', function test( t ) {
	var x;
	var o;

	x = [
		999,
		0,    // 0
		999,
		0,    // 1
		999,
		1,    // 2
		999,
		1     // 3
	];
	o = gnone( 4, toAccessorArray( x ), 2, 1 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [
		999,
		0,    // 0
		999,
		0,    // 1
		999,
		0,    // 2
		999,
		0     // 3
	];
	o = gnone( 4, toAccessorArray( x ), 2, 1 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of zero', function test( t ) {
	var x;
	var o;

	x = [ 1, 999, 999, 999 ];
	o = gnone( 4, x, 0, 0 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [ 0, 999, 999, 999 ];
	o = gnone( 4, x, 0, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of zero (accessors)', function test( t ) {
	var x;
	var o;

	x = [ 1, 999, 999, 999 ];
	o = gnone( 4, toAccessorArray( x ), 0, 0 );
	t.strictEqual( o, false, 'returns expected value' );

	x = [ 0, 999, 999, 999 ];
	o = gnone( 4, toAccessorArray( x ), 0, 0 );
	t.strictEqual( o, true, 'returns expected value' );

	t.end();
});
