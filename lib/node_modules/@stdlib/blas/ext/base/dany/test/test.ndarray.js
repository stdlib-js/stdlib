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
var dany = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dany, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( dany.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function tests whether at least one element is truthy', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float64Array( [ 0.0, 0.0, 1.0, 1.0 ] );
	expected = true;
	v = dany( x.length, x, 1, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = false;
	v = dany( x.length, x, 1, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 0.0, 0.0 ] );
	expected = true;
	v = dany( x.length, x, 1, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	expected = false;
	v = dany( x.length, x, 1, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function treats `NaN` values as falsy', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float64Array( [ NaN, 0.0, 0.0 ] );
	expected = false;
	v = dany( x.length, x, 1, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ NaN, NaN, NaN ] );
	expected = false;
	v = dany( x.length, x, 1, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ NaN, 1.0, 0.0 ] );
	expected = true;
	v = dany( x.length, x, 1, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `false`', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = false;

	v = dany( 0, x, 1, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	v = dany( -1, x, 1, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float64Array( [ 0.0, 999.0, 0.0, 999.0, 1.0, 999.0, 1.0 ] );
	expected = true;
	v = dany( 4, x, 2, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 999.0, 0.0, 999.0, 0.0, 999.0, 0.0 ] );
	expected = false;
	v = dany( 4, x, 2, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float64Array( [ 1.0, 0.0, 0.0, 1.0, 1.0 ] );
	expected = true;
	v = dany( 4, x, 1, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0 ] );
	expected = false;
	v = dany( 4, x, 1, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of `0`', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float64Array( [ 1.0, 999.0, 999.0, 999.0 ] );
	expected = true;
	v = dany( 4, x, 0, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 999.0, 999.0, 999.0 ] );
	expected = false;
	v = dany( 4, x, 0, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Float64Array( [ 1.0, 1.0, 0.0, 0.0 ] );
	expected = true;
	v = dany( 4, x, -1, 3 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = false;
	v = dany( 4, x, -1, 3 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});
