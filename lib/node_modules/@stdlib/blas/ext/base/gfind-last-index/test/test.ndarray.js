/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var gfindLastIndex = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gfindLastIndex, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( gfindLastIndex.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function returns the index of the last element which passes a test implemented by a predicate function', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 1.0, 2.0, 3.0, 2.0, 2.0 ];

	// Nonnegative stride...
	actual = gfindLastIndex( 3, x, 1, 3, clbk );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	actual = gfindLastIndex( 3, x, -1, 3, clbk );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns the index of the last element which passes a test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 1.0, 2.0, 3.0, 2.0, 2.0 ] );

	// Nonnegative stride...
	actual = gfindLastIndex( 3, x, 1, 3, clbk );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	actual = gfindLastIndex( 3, x, -1, 3, clbk );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns `-1` if the provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;

	actual = gfindLastIndex( 0, [ 1.0, 2.0, 3.0 ], 1, 0, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfindLastIndex( -1, [ 1.0, 2.0, 3.0 ], 1, 2, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns `-1` if the provided `N` parameter is less than or equal to zero (accessors)', function test( t ) {
	var actual;

	actual = gfindLastIndex( 0, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 0, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = gfindLastIndex( -1, toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1, 2, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns `-1` if no element passes the test implemented by a predicate function', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ];

	actual = gfindLastIndex( x.length, x, 1, 0, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});

tape( 'the function returns `-1` if no element passes the test implemented by a predicate function (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ] );

	actual = gfindLastIndex( x.length, x, 1, 0, clbk );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();

	function clbk( v ) {
		return v % 2.0 === 0.0;
	}
});
