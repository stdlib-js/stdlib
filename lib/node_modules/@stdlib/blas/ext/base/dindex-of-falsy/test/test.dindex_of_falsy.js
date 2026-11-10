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
var Float64Array = require( '@stdlib/array/float64' );
var dindexOfFalsy = require( './../lib/dindex_of_falsy.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dindexOfFalsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first falsy element', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 0.0, 1.0, 2.0, 0.0, 1.0 ] );

	actual = dindexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function explicitly treats `NaN` values as falsy', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 2.0, 3.0, NaN, 1.0 ] );

	actual = dindexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a falsy element', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = dindexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 0.0, 1.0, 2.0 ] );

	actual = dindexOfFalsy( 0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = dindexOfFalsy( -1, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var actual;
	var x;

	x = new Float64Array([
		1.0, // 0
		2.0,
		0.0, // 1
		3.0,
		4.0  // 2
	]);

	actual = dindexOfFalsy( 3, x, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride', function test( t ) {
	var actual;
	var x;

	x = new Float64Array([
		0.0, // 2
		1.0,
		0.0, // 1
		4.0,
		3.0  // 0
	]);

	actual = dindexOfFalsy( 3, x, -2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = new Float64Array([
		0.0,
		1.0, // 0
		2.0,
		0.0, // 1
		4.0,
		5.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	actual = dindexOfFalsy( 3, x1, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});
