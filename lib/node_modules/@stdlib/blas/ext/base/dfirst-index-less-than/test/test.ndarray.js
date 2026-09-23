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
var dfirstIndexLessThan = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dfirstIndexLessThan, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the first index of an element which is less than a corresponding element in another array', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float64Array( [ 6.0, 1.0, 5.0, 5.0, 5.0, 5.0 ] );
	y = new Float64Array( [ 5.0, 2.0, 4.0, 4.0, 4.0, 4.0 ] );

	// Nonnegative stride...
	actual = dfirstIndexLessThan( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = new Float64Array( [ 6.0, 5.0, 1.0, 5.0, 5.0, 5.0 ] );
	y = new Float64Array( [ 5.0, 4.0, 2.0, 4.0, 4.0, 4.0 ] );

	actual = dfirstIndexLessThan( 3, x, 2, 0, y, 1, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = new Float64Array( [ 6.0, 5.0, 5.0, 5.0, 1.0, 5.0 ] );
	y = new Float64Array( [ 5.0, 4.0, 4.0, 4.0, 2.0, 4.0 ] );

	actual = dfirstIndexLessThan( 3, x, 1, 0, y, 2, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = new Float64Array( [ 6.0, 5.0, 5.0, 5.0, 1.0, 5.0 ] );
	y = new Float64Array( [ 5.0, 4.0, 4.0, 4.0, 2.0, 4.0 ] );

	actual = dfirstIndexLessThan( 3, x, 2, 0, y, 2, 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	x = new Float64Array( [ 1.0, 5.0, 4.0, 3.0, 2.0, 6.0 ] );
	y = new Float64Array( [ 2.0, 6.0, 5.0, 4.0, 3.0, 5.0 ] );

	actual = dfirstIndexLessThan( x.length, x, -1, x.length-1, y, -1, y.length-1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = new Float64Array( [ 3.0, 5.0, 4.0, 6.0, 2.0, 5.0 ] );
	y = new Float64Array( [ 4.0, 6.0, 5.0, 5.0, 3.0, 6.0 ] );

	actual = dfirstIndexLessThan( 3, x, -2, 4, y, -1, 2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = new Float64Array( [ 5.0, 5.0, 6.0, 3.0, 2.0, 4.0 ] );
	y = new Float64Array( [ 6.0, 6.0, 5.0, 4.0, 3.0, 4.0 ] );

	actual = dfirstIndexLessThan( 3, x, -1, 2, y, -2, 4 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = new Float64Array( [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ] );
	y = new Float64Array( [ 4.0, 4.0, 4.0, 4.0, 4.0, 4.0 ] );

	actual = dfirstIndexLessThan( 3, x, -2, 4, y, -2, 4 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	actual = dfirstIndexLessThan( 0, x, 1, 0, y, 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = dfirstIndexLessThan( -1, x, 1, 0, y, 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if comparisons involve `NaN` values', function test( t ) {
	var actual;

	actual = dfirstIndexLessThan( 1, new Float64Array( [ NaN ] ), 1, 0, new Float64Array( [ 0.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = dfirstIndexLessThan( 1, new Float64Array( [ 0.0 ] ), 1, 0, new Float64Array( [ NaN ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats `-0` and `+0` as equal', function test( t ) {
	var actual;

	actual = dfirstIndexLessThan( 1, new Float64Array( [ -0.0 ] ), 1, 0, new Float64Array( [ 0.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float64Array([
		6.0, // 0
		2.0,
		1.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		5.0, // 0
		2.0, // 1
		4.0, // 2
		0.0,
		0.0
	]);

	actual = dfirstIndexLessThan( 3, x, 2, 0, y, 1, 0 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float64Array([
		6.0, // 0
		1.0, // 1
		5.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		5.0, // 0
		0.0,
		4.0, // 1
		0.0,
		3.0  // 2
	]);

	actual = dfirstIndexLessThan( 3, x, 1, 0, y, 2, 0 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float64Array([
		6.0, // 2
		2.0,
		1.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		3.0, // 2
		2.0, // 1
		5.0, // 0
		0.0,
		0.0
	]);

	actual = dfirstIndexLessThan( 3, x, -2, 4, y, -1, 2 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float64Array([
		5.0,
		5.0,
		5.0, // 0
		1.0, // 1
		5.0  // 2
	]);
	y = new Float64Array([
		5.0, // 0
		2.0, // 1
		4.0  // 2
	]);

	actual = dfirstIndexLessThan( 3, x, 1, 2, y, 1, 0 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float64Array([
		6.0, // 0
		1.0, // 1
		5.0  // 2
	]);
	y = new Float64Array([
		0.0,
		0.0,
		5.0, // 0
		2.0, // 1
		4.0  // 2
	]);

	actual = dfirstIndexLessThan( 3, x, 1, 0, y, 1, 2 );

	t.strictEqual( actual, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float64Array([
		6.0, // 0
		2.0,
		5.0, // 1
		4.0,
		0.0, // 2
		6.0
	]);
	y = new Float64Array([
		5.0,  // 2
		4.0,  // 1
		5.0,  // 0
		0.0,
		0.0,
		0.0
	]);

	actual = dfirstIndexLessThan( 3, x, 2, 0, y, -1, 2 );

	t.strictEqual( actual, 2, 'returns expected value' );
	t.end();
});
