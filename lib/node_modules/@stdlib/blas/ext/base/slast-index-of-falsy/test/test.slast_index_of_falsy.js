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
var Float32Array = require( '@stdlib/array/float32' );
var slastIndexOfFalsy = require( './../lib/slast_index_of_falsy.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof slastIndexOfFalsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the last falsy element', function test( t ) {
	var actual;
	var x;

	x = new Float32Array( [ 0.0, -1.0, 0.0, -2.0, -3.0, 0.0 ] );

	// Nonnegative stride...
	actual = slastIndexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	actual = slastIndexOfFalsy( 3, x, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	// Negative stride...
	actual = slastIndexOfFalsy( x.length, x, -1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	actual = slastIndexOfFalsy( 3, x, -2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function treats `NaN` values as falsy', function test( t ) {
	var actual;
	var x;

	x = new Float32Array( [ 2.0, 3.0, NaN, 1.0 ] );

	actual = slastIndexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a falsy element', function test( t ) {
	var actual;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = slastIndexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', function test( t ) {
	var actual;

	actual = slastIndexOfFalsy( 0, new Float32Array( [ 0.0, 1.0, 2.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = slastIndexOfFalsy( -1, new Float32Array( [ 0.0, 1.0, 2.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
