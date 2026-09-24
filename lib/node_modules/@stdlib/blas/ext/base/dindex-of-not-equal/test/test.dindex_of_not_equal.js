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
var dindexOfNotEqual = require( './../lib/dindex_of_not_equal.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dindexOfNotEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( dindexOfNotEqual.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function returns the index of the first element in a strided array which is not equal to a provided search element', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	// Nonnegative stride...
	actual = dindexOfNotEqual( x.length, 1.0, x, 1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = dindexOfNotEqual( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = dindexOfNotEqual( x.length, 3.0, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = dindexOfNotEqual( x.length, 4.0, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	// Negative stride...
	x = new Float64Array( [ 2.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	actual = dindexOfNotEqual( x.length, 1.0, x, -1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = dindexOfNotEqual( x.length, 2.0, x, -1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = dindexOfNotEqual( x.length, 3.0, x, -1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = dindexOfNotEqual( x.length, 4.0, x, -1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if every indexed element in the array is equal to the search element', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 2.0, 2.0, 2.0 ] );

	actual = dindexOfNotEqual( x.length, 2.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	actual = dindexOfNotEqual( 0, 2.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = dindexOfNotEqual( -1, 2.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the index of the first element if a provided `searchElement` is `NaN`', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ NaN, 1.0 ] );

	actual = dindexOfNotEqual( 2, NaN, x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var actual;
	var x;

	x = new Float64Array([
		1.0, // 0
		9.0,
		0.0, // 1
		9.0,
		1.0  // 2
	]);

	actual = dindexOfNotEqual( 3, 1.0, x, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 0.0, 1.0 ] );

	actual = dindexOfNotEqual( x.length, 1.0, x, -1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var actual;
	var x;

	x = new Float64Array([
		1.0, // 0
		9.0,
		1.0, // 1
		9.0,
		0.0  // 2
	]);

	actual = dindexOfNotEqual( 3, 1.0, x, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = new Float64Array( [ 9.0, 0.0, 1.0, 0.0, 0.0 ] );
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	actual = dindexOfNotEqual( 3, 0.0, x1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});
