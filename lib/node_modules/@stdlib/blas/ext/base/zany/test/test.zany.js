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
var zany = require( './../lib/zany.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zany, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( zany.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the function tests whether at least one element is truthy', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Complex128Array([
		0.0,
		0.0,
		1.0,
		1.0
	]);
	expected = true;
	v = zany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	expected = false;
	v = zany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Complex128Array([
		1.0,
		0.0,
		0.0,
		0.0
	]);
	expected = true;
	v = zany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Complex128Array([
		0.0,
		1.0,
		0.0,
		0.0
	]);
	expected = true;
	v = zany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function treats `NaN` values as falsy', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Complex128Array([
		NaN,
		NaN,
		0.0,
		0.0
	]);
	expected = false;
	v = zany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Complex128Array([
		NaN,
		0.0,
		0.0,
		NaN
	]);
	expected = false;
	v = zany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Complex128Array([
		NaN,
		NaN,
		1.0,
		0.0
	]);
	expected = true;
	v = zany( x.length, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `false`', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Complex128Array([
		1.0,
		2.0,
		3.0,
		4.0
	]);
	expected = false;

	v = zany( 0, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	v = zany( -1, x, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Complex128Array([
		0.0,
		0.0,
		999.0,
		999.0,
		0.0,
		0.0,
		999.0,
		999.0,
		1.0,
		1.0,
		999.0,
		999.0
	]);
	expected = true;
	v = zany( 3, x, 2 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Complex128Array([
		0.0,
		0.0,
		999.0,
		999.0,
		0.0,
		0.0,
		999.0,
		999.0,
		0.0,
		0.0,
		999.0,
		999.0
	]);
	expected = false;
	v = zany( 3, x, 2 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride of `0`', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Complex128Array([
		1.0,
		1.0,
		999.0,
		999.0
	]);
	expected = true;
	v = zany( 4, x, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Complex128Array([
		0.0,
		0.0,
		999.0,
		999.0
	]);
	expected = false;
	v = zany( 4, x, 0 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var v;

	x = new Complex128Array([
		1.0,
		1.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	expected = true;
	v = zany( 3, x, -1 );
	t.strictEqual( v, expected, 'returns expected value' );

	x = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	expected = false;
	v = zany( 3, x, -1 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;
	var v;

	// Initial array...
	x0 = new Complex128Array([
		0.0,
		0.0,
		1.0,
		2.0,
		0.0,
		0.0
	]);

	// Create an offset view...
	x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	expected = true;
	v = zany( 2, x1, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	// Create an offset view...
	x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*2 ); // begin at 3rd element

	expected = false;
	v = zany( 1, x1, 1 );
	t.strictEqual( v, expected, 'returns expected value' );

	t.end();
});
