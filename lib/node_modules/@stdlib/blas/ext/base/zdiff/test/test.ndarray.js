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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var zdiff = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zdiff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 19', function test( t ) {
	t.strictEqual( zdiff.length, 19, 'returns expected value' );
	t.end();
});

tape( 'the function calculates the first forward difference', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		2.0,
		3.0,
		4.0,
		7.0,
		6.0,
		11.0,
		8.0,
		15.0,
		10.0,
		19.0
	]);
	p = new Complex128Array([
		1.0,
		2.0
	]);
	a = new Complex128Array([
		11.0,
		21.0
	]);
	out = new Complex128Array( 6 );
	w = new Complex128Array( 6 );

	zdiff( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		1.0,
		1.0,
		2.0,
		4.0,
		2.0,
		4.0,
		2.0,
		4.0,
		2.0,
		4.0,
		1.0,
		2.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function calculates higher-order forward differences (k=2)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		2.0,
		-2.0,
		4.0,
		-4.0,
		7.0,
		-7.0,
		11.0,
		-11.0,
		16.0,
		-16.0
	]);
	p = new Complex128Array([
		1.0,
		-1.0
	]);
	a = new Complex128Array([
		22.0,
		-22.0
	]);
	out = new Complex128Array( 5 );
	w = new Complex128Array( 6 );

	zdiff( x.length, 2, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		1.0,
		-1.0,
		1.0,
		-1.0,
		1.0,
		-1.0,
		1.0,
		-1.0,
		1.0,
		-1.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function calculates higher-order forward differences (k=3)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		1.0,
		-1.0,
		3.0,
		-3.0,
		6.0,
		-6.0,
		10.0,
		-10.0,
		15.0,
		-15.0,
		21.0,
		-21.0
	]);
	p = new Complex128Array( 0 );
	a = new Complex128Array( 0 );
	out = new Complex128Array( 3 );
	w = new Complex128Array( 5 );

	zdiff( x.length, 3, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports k=0 (copies input)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		2.0,
		-2.0,
		4.0,
		-4.0,
		6.0,
		-6.0
	]);
	p = new Complex128Array([
		1.0,
		-1.0
	]);
	a = new Complex128Array([
		7.0,
		-7.0
	]);
	out = new Complex128Array( 5 );
	w = new Complex128Array( 4 );

	zdiff( x.length, 0, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		1.0,
		-1.0,
		2.0,
		-2.0,
		4.0,
		-4.0,
		6.0,
		-6.0,
		7.0,
		-7.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output array unchanged when `N <= 0`', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		2.0,
		-2.0,
		4.0,
		-4.0
	]);
	p = new Complex128Array( 0 );
	a = new Complex128Array( 0 );
	out = new Complex128Array( 2 );
	w = new Complex128Array( 2 );

	zdiff( 0, 1, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		0.0,
		0.0,
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output array unchanged when the total number of elements is `1`', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		5.0,
		-5.0
	]);
	p = new Complex128Array( 0 );
	a = new Complex128Array( 0 );
	out = new Complex128Array( 1 );
	w = new Complex128Array( 1 );

	zdiff( 1, 1, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output array unchanged when `k >= total`', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		1.0,
		-1.0,
		2.0,
		-2.0
	]);
	p = new Complex128Array( 0 );
	a = new Complex128Array( 0 );
	out = new Complex128Array( 1 );
	w = new Complex128Array( 1 );

	zdiff( x.length, 5, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		0.0,
		0.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports no prepend and no append', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		1.0,
		-1.0,
		3.0,
		-3.0,
		6.0,
		-6.0,
		10.0,
		-10.0
	]);
	p = new Complex128Array( 0 );
	a = new Complex128Array( 0 );
	out = new Complex128Array( 3 );
	w = new Complex128Array( 3 );

	zdiff( x.length, 1, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		2.0,
		-2.0,
		3.0,
		-3.0,
		4.0,
		-4.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports a non-zero offset for `x`', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		2.0,
		-2.0,
		4.0,
		-4.0,
		6.0,
		-6.0,
		8.0,
		-8.0,
		10.0,
		-10.0
	]);
	p = new Complex128Array([
		1.0,
		-1.0
	]);
	a = new Complex128Array([
		11.0,
		-11.0
	]);
	out = new Complex128Array( 4 );
	w = new Complex128Array( 4 );

	zdiff( 3, 1, x, 1, 2, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		5.0,
		-5.0,
		2.0,
		-2.0,
		2.0,
		-2.0,
		1.0,
		-1.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		2.0,
		3.0,
		4.0,
		7.0,
		6.0,
		11.0,
		8.0,
		15.0,
		10.0,
		19.0
	]);
	p = new Complex128Array([
		1.0,
		2.0
	]);
	a = new Complex128Array([
		11.0,
		21.0
	]);
	out = new Complex128Array( 6 );
	w = new Complex128Array( 6 );

	zdiff( x.length, 1, x, -1, 4, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		9.0,
		17.0,
		-2.0,
		-4.0,
		-2.0,
		-4.0,
		-2.0,
		-4.0,
		-2.0,
		-4.0,
		9.0,
		18.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports strided access', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		2.0,
		-2.0,
		4.0,
		-4.0,
		6.0,
		-6.0,
		8.0,
		-8.0,
		10.0,
		-10.0
	]);
	p = new Complex128Array([
		1.0,
		-1.0
	]);
	a = new Complex128Array([
		11.0,
		-11.0
	]);
	out = new Complex128Array( 4 );
	w = new Complex128Array( 4 );

	zdiff( 3, 1, x, 2, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		1.0,
		-1.0,
		4.0,
		-4.0,
		4.0,
		-4.0,
		1.0,
		-1.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports multiple prepend values and no append', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		6.0,
		-6.0,
		8.0,
		-8.0
	]);
	p = new Complex128Array([
		1.0,
		-1.0,
		3.0,
		-3.0
	]);
	a = new Complex128Array( 0 );
	out = new Complex128Array( 3 );
	w = new Complex128Array( 3 );

	zdiff( x.length, 1, x, 1, 0, 2, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		2.0,
		-2.0,
		3.0,
		-3.0,
		2.0,
		-2.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports multiple prepend and append values with no `x`', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array( 0 );
	p = new Complex128Array([
		1.0,
		-1.0,
		3.0,
		-3.0
	]);
	a = new Complex128Array([
		7.0,
		-7.0
	]);
	out = new Complex128Array( 2 );
	w = new Complex128Array( 2 );

	zdiff( 0, 1, x, 1, 0, 2, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		2.0,
		-2.0,
		4.0,
		-4.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports single prepend and multiple append values', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		2.0,
		-2.0,
		4.0,
		-4.0
	]);
	p = new Complex128Array([
		1.0,
		-1.0
	]);
	a = new Complex128Array([
		6.0,
		-6.0,
		10.0,
		-10.0
	]);
	out = new Complex128Array( 4 );
	w = new Complex128Array( 4 );

	zdiff( x.length, 1, x, 1, 0, 1, p, 1, 0, 2, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		1.0,
		-1.0,
		2.0,
		-2.0,
		2.0,
		-2.0,
		4.0,
		-4.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports append without prepend', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		2.0,
		-2.0,
		5.0,
		-5.0
	]);
	p = new Complex128Array( 0 );
	a = new Complex128Array([
		10.0,
		-10.0
	]);
	out = new Complex128Array( 2 );
	w = new Complex128Array( 2 );

	zdiff( x.length, 1, x, 1, 0, 0, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		3.0,
		-3.0,
		5.0,
		-5.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports append only (no prepend, no `x`)', function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array( 0 );
	p = new Complex128Array( 0 );
	a = new Complex128Array([
		1.0,
		-1.0,
		4.0,
		-4.0,
		9.0,
		-9.0
	]);
	out = new Complex128Array( 2 );
	w = new Complex128Array( 2 );

	zdiff( 0, 1, x, 1, 0, 0, p, 1, 0, 3, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Complex128Array([
		3.0,
		-3.0,
		5.0,
		-5.0
	]);
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output array', function test( t ) {
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Complex128Array([
		1.0,
		-1.0,
		2.0,
		-2.0
	]);
	p = new Complex128Array( 0 );
	a = new Complex128Array( 0 );
	out = new Complex128Array( 1 );
	w = new Complex128Array( 1 );

	t.strictEqual( zdiff( x.length, 1, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 ), out, 'returns expected value' );
	t.end();
});
