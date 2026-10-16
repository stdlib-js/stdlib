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
var gsome = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gsome, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( gsome.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function tests whether a strided array contains at least k truthy elements', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 1, 2 ];
	v = gsome( x.length, 2, x, 1 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 0, 0, 0 ];
	v = gsome( x.length, 1, x, 1 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	v = gsome( x.length, 5, x, 1 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	v = gsome( x.length, 4, x, 1 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'the function tests whether a strided array contains at least k truthy elements (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 1, 2 ];
	v = gsome( x.length, 2, toAccessorArray( x ), 1 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 0, 0, 0 ];
	v = gsome( x.length, 1, toAccessorArray( x ), 1 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	v = gsome( x.length, 5, toAccessorArray( x ), 1 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 2, 3, 4 ];
	v = gsome( x.length, 4, toAccessorArray( x ), 1 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `false`', function test( t ) {
	var x;
	var v;

	x = [ 1, 2, 3, 4 ];

	v = gsome( 0, 1, x, 1 );
	t.strictEqual( v, false, 'returns expected value' );

	v = gsome( -1, 1, x, 1 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `false` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1, 2, 3, 4 ];

	v = gsome( 0, 1, toAccessorArray( x ), 1 );
	t.strictEqual( v, false, 'returns expected value' );

	v = gsome( -1, 1, toAccessorArray( x ), 1 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var x;
	var v;

	x = [ 1, 2, 3, 4, 5, 6 ];

	v = gsome( 3, 2, x, 2 );
	t.strictEqual( v, true, 'returns expected value' );

	v = gsome( 3, 1, x, 2 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1, 2, 3, 4, 5, 6 ];

	v = gsome( 3, 2, toAccessorArray( x ), 2 );
	t.strictEqual( v, true, 'returns expected value' );

	v = gsome( 3, 1, toAccessorArray( x ), 2 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of `0`', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 0, 0 ];
	v = gsome( 2, 1, x, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 1, 1, 1 ];
	v = gsome( 2, 1, x, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 1, 1, 1, 1 ];
	v = gsome( 3, 2, x, 0 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 0, 0, 0 ];
	v = gsome( 3, 2, x, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 1, 1, 1 ];
	v = gsome( 2, 3, x, 0 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of `0` (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 0, 0, 0, 0 ];
	v = gsome( 2, 1, toAccessorArray( x ), 0 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 1, 1, 1 ];
	v = gsome( 2, 1, toAccessorArray( x ), 0 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 1, 1, 1, 1 ];
	v = gsome( 3, 2, toAccessorArray( x ), 0 );
	t.strictEqual( v, true, 'returns expected value' );

	x = [ 0, 0, 0, 0 ];
	v = gsome( 3, 2, toAccessorArray( x ), 0 );
	t.strictEqual( v, false, 'returns expected value' );

	x = [ 1, 1, 1, 1 ];
	v = gsome( 2, 3, toAccessorArray( x ), 0 );
	t.strictEqual( v, false, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var x;
	var v;

	x = [ 1, 2, 3, 4, 5, 6 ];

	v = gsome( 3, 2, x, -2 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1, 2, 3, 4, 5, 6 ];

	v = gsome( 3, 2, toAccessorArray( x ), -2 );
	t.strictEqual( v, true, 'returns expected value' );

	t.end();
});
