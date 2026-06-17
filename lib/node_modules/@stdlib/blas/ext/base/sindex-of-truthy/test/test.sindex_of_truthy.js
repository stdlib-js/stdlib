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
var sindexOfTruthy = require( './../lib/sindex_of_truthy.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sindexOfTruthy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first truthy element', function test( t ) {
	var actual;
	var x;

	x = new Float32Array( [ 0.0, 1.0, 0.0, 2.0, 3.0, 0.0 ] );

	// Nonnegative stride...
	actual = sindexOfTruthy( x.length, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = sindexOfTruthy( 3, x, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	actual = sindexOfTruthy( x.length, x, -1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = sindexOfTruthy( 3, x, -2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function ignores falsy elements (e.g., `0`, `NaN`)', function test( t ) {
	var actual;
	var x;

	x = new Float32Array( [ 0.0, NaN, 5.0, 0.0 ] );

	actual = sindexOfTruthy( x.length, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a truthy element', function test( t ) {
	var actual;
	var x;

	x = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	actual = sindexOfTruthy( x.length, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', function test( t ) {
	var actual;

	actual = sindexOfTruthy( 0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = sindexOfTruthy( -1, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
