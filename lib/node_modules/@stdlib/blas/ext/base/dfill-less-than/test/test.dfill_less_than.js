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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isSameFloat64Array = require( '@stdlib/assert/is-same-float64array' );
var Float64Array = require( '@stdlib/array/float64' );
var dfillLessThan = require( './../lib/dfill_less_than.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dfillLessThan, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( dfillLessThan.length, 5, 'has expected arity' );
	t.end();
});

tape( 'the function replaces strided array elements less than a provided search element', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		0.0,
		2.0,
		0.0,
		4.0,
		-1.0,
		0.0,
		-5.0,
		6.0
	]);
	expected = new Float64Array([
		5.0,
		5.0,
		5.0,
		4.0,
		5.0,
		5.0,
		5.0,
		6.0
	]);

	dfillLessThan( x.length, 4.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 2.0 ] );
	expected = new Float64Array( [ 5.0, 5.0 ] );

	dfillLessThan( x.length, 4.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if no elements are less than a provided search element, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 1.0, 2.0, 3.0 ] );

	dfillLessThan( x.length, 1.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a search element equal to `NaN`, the function returns `x` unchanged', function test( t ) {
	var x = new Float64Array( [ NaN, 1.0, NaN ] );

	dfillLessThan( x.length, NaN, 5.0, x, 1 );
	t.ok( isnan( x[ 0 ] ), 'returns expected value' );
	t.strictEqual( x[ 1 ], 1.0, 'returns expected value' );
	t.ok( isnan( x[ 2 ] ), 'returns expected value' );

	t.end();
});

tape( 'the function does not replace `NaN` elements', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ NaN, 1.0, NaN ] );
	expected = new Float64Array( [ NaN, 5.0, NaN ] );

	dfillLessThan( x.length, 4.0, 5.0, x, 1 );
	t.strictEqual( isSameFloat64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function considers `-0` and `+0` to be equal', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ -0.0, 1.0, 0.0, -0.0 ] );
	expected = new Float64Array( [ -0.0, 1.0, 0.0, -0.0 ] );

	dfillLessThan( x.length, 0.0, 5.0, x, 1 );
	t.strictEqual( isSameFloat64Array( x, expected ), true, 'returns expected value' );

	x = new Float64Array( [ -0.0, 1.0, 0.0, -0.0 ] );
	expected = new Float64Array( [ -0.0, 1.0, 0.0, -0.0 ] );

	dfillLessThan( x.length, -0.0, 5.0, x, 1 );
	t.strictEqual( isSameFloat64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Float64Array( [ 1.0, 0.0, 3.0, 0.0, 5.0 ] );
	out = dfillLessThan( x.length, 4.0, 5.0, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 0.0, -4.0, 1.0 ] );
	expected = new Float64Array( [ 0.0, -4.0, 1.0 ] );

	dfillLessThan( 0, 4.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, -4.0, 1.0 ] );
	dfillLessThan( -4, 4.0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		0.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		0.0   // 2
	]);
	expected = new Float64Array([
		5.0,  // 0
		-3.0,
		5.0,  // 1
		7.0,
		5.0   // 2
	]);

	dfillLessThan( 3, 4.0, 5.0, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		0.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		0.0   // 0
	]);
	expected = new Float64Array([
		5.0,  // 2
		-3.0,
		5.0,  // 1
		7.0,
		5.0   // 0
	]);

	dfillLessThan( 3, 4.0, 5.0, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		1.0,
		0.0,  // 0
		3.0,
		0.0,  // 1
		4.0,
		6.0   // 2
	]);
	expected = new Float64Array([
		1.0,
		5.0,  // 0
		3.0,
		5.0,  // 1
		4.0,
		6.0   // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	dfillLessThan( 3, 4.0, 5.0, x1, 2 );
	t.deepEqual( x0, expected, 'returns expected value' );

	t.end();
});
