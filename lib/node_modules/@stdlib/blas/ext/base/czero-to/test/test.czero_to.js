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
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var czeroTo = require( './../lib/czero_to.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof czeroTo, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( czeroTo.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = czeroTo( x.length, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0 ] );
	expected = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0 ] );

	czeroTo( 0, x, 1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	czeroTo( -4, x, 1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function fills a strided array', function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	expected = new Complex64Array([
		0.0,
		0.0,
		1.0,
		0.0,
		2.0,
		0.0,
		3.0,
		0.0
	]);

	czeroTo( x.length, x, 1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		2.0,  // 0
		-3.0, // 0
		4.0,
		-6.0,
		8.0,  // 1
		-9.0  // 1
	]);
	expected = new Complex64Array([
		0.0,  // 0
		0.0,  // 0
		4.0,
		-6.0,
		1.0,  // 1
		0.0   // 1
	]);

	czeroTo( 2, x, 2 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		2.0,  // 1
		-3.0, // 1
		4.0,
		-5.0,
		6.0,  // 0
		-7.0  // 0
	]);
	expected = new Complex64Array([
		1.0,  // 1
		0.0,  // 1
		4.0,
		-5.0,
		0.0,  // 0
		0.0   // 0
	]);

	czeroTo( 2, x, -2 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Complex64Array([
		1.0,
		-2.0,
		3.0,  // 0
		-4.0, // 0
		6.0,
		-8.0,
		10.0, // 1
		-12.0 // 1
	]);
	expected = new Complex64Array([
		1.0,
		-2.0,
		0.0,  // 0
		0.0,  // 0
		6.0,
		-8.0,
		1.0,  // 1
		0.0   // 1
	]);

	x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	czeroTo( 2, x1, 2 );
	t.strictEqual( isSameComplex64Array( x0, expected ), true, 'returns expected value' );
	t.end();
});
