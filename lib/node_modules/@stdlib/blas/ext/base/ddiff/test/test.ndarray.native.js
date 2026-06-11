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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var ddiff = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( ddiff instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ddiff, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function calculates the first forward difference', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	p = new Float64Array( [ 1.0 ] );
	a = new Float64Array( [ 11.0 ] );
	out = new Float64Array( 6 );
	w = new Float64Array( 6 );

	ddiff( x.length, 1, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 1.0, 2.0, 2.0, 2.0, 2.0, 1.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function calculates higher-order forward differences', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// Second forward difference (k=2):
	x = new Float64Array( [ 2.0, 4.0, 7.0, 11.0, 16.0 ] );
	p = new Float64Array( [ 1.0 ] );
	a = new Float64Array( [ 22.0 ] );
	out = new Float64Array( 5 );
	w = new Float64Array( 6 );

	ddiff( x.length, 2, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	// Third forward difference (k=3):
	x = new Float64Array( [ 1.0, 3.0, 6.0, 10.0, 15.0, 21.0 ] );
	p = new Float64Array( 0 );
	a = new Float64Array( 0 );
	out = new Float64Array( 3 );
	w = new Float64Array( 5 );

	ddiff( x.length, 3, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 0.0, 0.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports k=0 (copies input)', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Float64Array( [ 2.0, 4.0, 6.0 ] );
	p = new Float64Array( [ 1.0 ] );
	a = new Float64Array( [ 7.0 ] );
	out = new Float64Array( 5 );
	w = new Float64Array( 4 );

	ddiff( x.length, 0, x, 1, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 1.0, 2.0, 4.0, 6.0, 7.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns the output array unchanged for trivial cases', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// N <= 0:
	x = new Float64Array( [ 2.0, 4.0 ] );
	p = new Float64Array( 0 );
	a = new Float64Array( 0 );
	out = new Float64Array( [ 0.0, 0.0 ] );
	w = new Float64Array( 2 );

	ddiff( 0, 1, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 0.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float64Array( [ 5.0 ] );
	p = new Float64Array( 0 );
	a = new Float64Array( 0 );
	out = new Float64Array( [ 0.0 ] );
	w = new Float64Array( 1 );

	ddiff( 1, 1, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0 ] );
	p = new Float64Array( 0 );
	a = new Float64Array( 0 );
	out = new Float64Array( [ 0.0 ] );
	w = new Float64Array( 1 );

	ddiff( x.length, 5, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports no prepend and no append', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	x = new Float64Array( [ 1.0, 3.0, 6.0, 10.0 ] );
	p = new Float64Array( 0 );
	a = new Float64Array( 0 );
	out = new Float64Array( 3 );
	w = new Float64Array( 3 );

	ddiff( x.length, 1, x, 1, 0, 0, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 2.0, 3.0, 4.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports strides and offsets', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// Offset for `x`:
	x = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	p = new Float64Array( [ 1.0 ] );
	a = new Float64Array( [ 11.0 ] );
	out = new Float64Array( 4 );
	w = new Float64Array( 4 );

	ddiff( 3, 1, x, 1, 2, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 5.0, 2.0, 2.0, 1.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	// Negative strides:
	x = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	p = new Float64Array( [ 1.0 ] );
	a = new Float64Array( [ 11.0 ] );
	out = new Float64Array( 6 );
	w = new Float64Array( 6 );

	ddiff( x.length, 1, x, -1, 4, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 9.0, -2.0, -2.0, -2.0, -2.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	// Strided access (stride=2):
	x = new Float64Array( [ 2.0, 4.0, 6.0, 8.0, 10.0 ] );
	p = new Float64Array( [ 1.0 ] );
	a = new Float64Array( [ 11.0 ] );
	out = new Float64Array( 4 );
	w = new Float64Array( 4 );

	ddiff( 3, 1, x, 2, 0, 1, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 1.0, 4.0, 4.0, 1.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports multiple prepend and append values', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// Multiple prepend (N1=2), no append:
	x = new Float64Array( [ 6.0, 8.0 ] );
	p = new Float64Array( [ 1.0, 3.0 ] );
	a = new Float64Array( 0 );
	out = new Float64Array( 3 );
	w = new Float64Array( 3 );

	ddiff( x.length, 1, x, 1, 0, 2, p, 1, 0, 0, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 2.0, 3.0, 2.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	// Multiple prepend (N1=2) and append (N2=1), no x:
	x = new Float64Array( 0 );
	p = new Float64Array( [ 1.0, 3.0 ] );
	a = new Float64Array( [ 7.0 ] );
	out = new Float64Array( 2 );
	w = new Float64Array( 2 );

	ddiff( 0, 1, x, 1, 0, 2, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 2.0, 4.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	// Prepend (N1=1), x, and multiple append (N2=2):
	x = new Float64Array( [ 2.0, 4.0 ] );
	p = new Float64Array( [ 1.0 ] );
	a = new Float64Array( [ 6.0, 10.0 ] );
	out = new Float64Array( 4 );
	w = new Float64Array( 4 );

	ddiff( x.length, 1, x, 1, 0, 1, p, 1, 0, 2, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 1.0, 2.0, 2.0, 4.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports append without prepend', opts, function test( t ) {
	var expected;
	var out;
	var x;
	var p;
	var a;
	var w;

	// No prepend, x present, single append:
	x = new Float64Array( [ 2.0, 5.0 ] );
	p = new Float64Array( 0 );
	a = new Float64Array( [ 10.0 ] );
	out = new Float64Array( 2 );
	w = new Float64Array( 2 );

	ddiff( x.length, 1, x, 1, 0, 0, p, 1, 0, 1, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 3.0, 5.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );

	// No prepend, no x, only append (N2=3):
	x = new Float64Array( 0 );
	p = new Float64Array( 0 );
	a = new Float64Array( [ 1.0, 4.0, 9.0 ] );
	out = new Float64Array( 2 );
	w = new Float64Array( 2 );

	ddiff( 0, 1, x, 1, 0, 0, p, 1, 0, 3, a, 1, 0, out, 1, 0, w, 1, 0 );

	expected = new Float64Array( [ 3.0, 5.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});
