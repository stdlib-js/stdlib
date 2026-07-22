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
var gany = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gany, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( gany.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function tests whether at least one element in a strided array is truthy', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 1, 2 ];
	v = gany( x.length, x, 1, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 0, 0, 0 ];
	v = gany( x.length, x, 1, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	v = gany( x.length, x, 1, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 0, 0, 1 ];
	v = gany( x.length, x, 1, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether at least one element in a strided array is truthy (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 1, 2 ];
	v = gany( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 0, 0, 0 ];
	v = gany( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	v = gany( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 0, 0, 1 ];
	v = gany( x.length, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `false`', function test( t ) {
	var x;
	var v;

	x = [ 1, 2, 3, 4 ];

	v = gany( 0, x, 1, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	v = gany( -1, x, 1, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `false` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1, 2, 3, 4 ];

	v = gany( 0, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	v = gany( -1, toAccessorArray( x ), 1, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var x;
	var v;

	x = [ 0, 1, 0, 1, 1, 0 ];

	v = gany( 3, x, 2, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 1, 0, 1, 0, 1 ];

	v = gany( 3, x, 2, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 0, 1, 0, 1, 1, 0 ];

	v = gany( 3, toAccessorArray( x ), 2, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 1, 0, 1, 0, 1 ];

	v = gany( 3, toAccessorArray( x ), 2, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 1, 0, 0 ];

	v = gany( 2, x, 1, 1 );
	t.strictEqual( v, true, 'returns expected value' );

	v = gany( 2, x, 1, 3 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 1, 0, 0 ];

	v = gany( 2, toAccessorArray( x ), 1, 1 );
	t.strictEqual( v, true, 'returns expected value' );

	v = gany( 2, toAccessorArray( x ), 1, 3 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of `0`', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 0, 0 ];
	v = gany( 4, x, 0, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 0, 0, 0 ];
	v = gany( 4, x, 0, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of `0` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 0, 0 ];
	v = gany( 4, toAccessorArray( x ), 0, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 0, 0, 0 ];
	v = gany( 4, toAccessorArray( x ), 0, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var x;
	var v;

	x = [ 0, 1, 0, 1, 1, 0 ];

	v = gany( 3, x, -2, 4 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 1, 0, 1, 0, 0 ];

	v = gany( 3, x, -2, 4 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 0, 1, 0, 1, 1, 0 ];

	v = gany( 3, toAccessorArray( x ), -2, 4 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 1, 0, 1, 0, 0 ];

	v = gany( 3, toAccessorArray( x ), -2, 4 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});
