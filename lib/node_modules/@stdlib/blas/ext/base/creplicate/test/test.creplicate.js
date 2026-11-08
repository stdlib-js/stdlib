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
var Complex64Array = require( '@stdlib/array/complex64' );
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var creplicate = require( './../lib/creplicate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof creplicate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( creplicate.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function replicates each strided array element', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = new Complex64Array( 6 );

	creplicate( x.length, 2, x, 1, out, 1 );
	expected = new Complex64Array([
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		5.0,
		6.0,
		5.0,
		6.0
	]);
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0
	]);
	out = new Complex64Array( 6 );

	creplicate( x.length, 3, x, 1, out, 1 );
	expected = new Complex64Array([
		1.0,
		2.0,
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		3.0,
		4.0
	]);
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (k=1)', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	out = new Complex64Array( 3 );

	creplicate( x.length, 1, x, 1, out, 1 );
	expected = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (N=1)', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array( [ 5.0, 6.0 ] );
	out = new Complex64Array( 3 );

	creplicate( 1, 3, x, 1, out, 1 );
	expected = new Complex64Array( [ 5.0, 6.0, 5.0, 6.0, 5.0, 6.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var v;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = new Complex64Array( 6 );

	v = creplicate( x.length, 2, x, 1, out, 1 );

	t.strictEqual( v, out, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = new Complex64Array([
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		15.0,
		16.0,
		17.0
	]);

	expected = new Complex64Array([
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		15.0,
		16.0,
		17.0
	]);

	creplicate( -1, 2, x, 1, out, 1 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	creplicate( 0, 2, x, 1, out, 1 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `k` parameter less than or equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = new Complex64Array([
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		15.0,
		16.0,
		17.0
	]);

	expected = new Complex64Array([
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0,
		13.0,
		14.0,
		15.0,
		16.0,
		17.0
	]);

	creplicate( x.length, -1, x, 1, out, 1 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	creplicate( x.length, 0, x, 1, out, 1 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0,
		9.0,
		10.0
	]);
	out = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	creplicate( 3, 2, x, 2, out, 1 );

	expected = new Complex64Array( [ 1.0, 2.0, 1.0, 2.0, 5.0, 6.0, 5.0, 6.0, 9.0, 10.0, 9.0, 10.0 ] );

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);
	out = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	creplicate( 3, 2, x, 1, out, 2 );

	expected = new Complex64Array([
		1.0,
		2.0,
		0.0,
		0.0,
		1.0,
		2.0,
		0.0,
		0.0,
		3.0,
		4.0,
		0.0,
		0.0,
		3.0,
		4.0,
		0.0,
		0.0,
		5.0,
		6.0,
		0.0,
		0.0,
		5.0,
		6.0,
		0.0,
		0.0
	]);

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0,
		9.0,
		10.0
	]);
	out = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	creplicate( 3, 2, x, -2, out, -1 );

	expected = new Complex64Array( [ 1.0, 2.0, 1.0, 2.0, 5.0, 6.0, 5.0, 6.0, 9.0, 10.0, 9.0, 10.0 ] );

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var out;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0,
		9.0,
		10.0
	]);
	out = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	creplicate( 3, 2, x, 2, out, -1 );

	expected = new Complex64Array([
		9.0,
		10.0,
		9.0,
		10.0,
		5.0,
		6.0,
		5.0,
		6.0,
		1.0,
		2.0,
		1.0,
		2.0
	]);

	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var out0;
	var out1;
	var x0;
	var x1;

	// Initial arrays...
	x0 = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0,
		9.0,
		10.0,
		11.0,
		12.0
	]);
	out0 = new Complex64Array( 9 );

	// Create offset views...
	x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	out1 = new Complex64Array( out0.buffer, out0.BYTES_PER_ELEMENT*3 ); // begin at 4th element

	creplicate( 3, 2, x1, 2, out1, 1 );
	expected = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		3.0,
		4.0,
		3.0,
		4.0,
		7.0,
		8.0,
		7.0,
		8.0,
		11.0,
		12.0,
		11.0,
		12.0
	]);

	t.strictEqual( isSameComplex64Array( out0, expected ), true, 'returns expected value' );
	t.end();
});
