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
var Complex128Array = require( '@stdlib/array/complex128' );
var zindexOfTruthy = require( './../lib/zindex_of_truthy.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zindexOfTruthy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first truthy element', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array([
		0.0,
		0.0,
		1.0,
		1.0,
		0.0,
		0.0,
		2.0,
		2.0,
		3.0,
		3.0,
		0.0,
		0.0
	]);

	// Nonnegative stride...
	actual = zindexOfTruthy( x.length, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = zindexOfTruthy( 3, x, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	actual = zindexOfTruthy( x.length, x, -1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = zindexOfTruthy( 3, x, -2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function ignores falsy elements (e.g., `0+0i`, `NaN+NaNi`, `NaN+0i`)', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array([
		0.0,
		0.0,
		NaN,
		NaN,
		NaN,
		0.0,
		1.0,
		1.0
	]);

	actual = zindexOfTruthy( x.length, x, 1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a truthy element', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	actual = zindexOfTruthy( x.length, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', function test( t ) {
	var actual;
	var x;

	x = new Complex128Array([
		1.0,
		1.0,
		0.0,
		0.0,
		3.0,
		4.0
	]);

	actual = zindexOfTruthy( 0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = zindexOfTruthy( -1, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
