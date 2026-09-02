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
var glastIndexOfFalsy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof glastIndexOfFalsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( glastIndexOfFalsy.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the function returns the index of the last falsy element', function test( t ) {
	var actual;
	var x;

	x = [ 2.0, 0.0, 3.0, 0.0, 0.0, 4.0 ];

	// Nonnegative stride...
	actual = glastIndexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = glastIndexOfFalsy( 3, x, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	actual = glastIndexOfFalsy( x.length, x, -1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = glastIndexOfFalsy( 3, x, -2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the last falsy element (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 2.0, 0.0, 3.0, 0.0, 0.0, 4.0 ] );

	// Nonnegative stride...
	actual = glastIndexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = glastIndexOfFalsy( 3, x, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	actual = glastIndexOfFalsy( x.length, x, -1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = glastIndexOfFalsy( 3, x, -2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function ignores truthy elements (e.g., non-zero values)', function test( t ) {
	var actual;
	var x;

	x = [ 3.0, 0.0, 5.0, 0.0, 2.0 ];

	actual = glastIndexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	t.end();
});

tape( 'the function ignores truthy elements (e.g., non-zero values) (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 3.0, 0.0, 5.0, 0.0, 2.0 ] );

	actual = glastIndexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a falsy element', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0 ];

	actual = glastIndexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a falsy element (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = glastIndexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', function test( t ) {
	var actual;

	actual = glastIndexOfFalsy( 0, [ 1.0, 2.0, 3.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = glastIndexOfFalsy( -1, [ 1.0, 2.0, 3.0 ], 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero (accessors)', function test( t ) {
	var actual;

	actual = glastIndexOfFalsy( 0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = glastIndexOfFalsy( -1, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
