/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var cfill = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cfill, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( cfill.length, 5, 'has expected arity' );
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
		5.0,
		5.0,
		5.0,
		5.0,
		5.0,
		5.0,
		5.0,
		5.0
	]);

	cfill( x.length, new Complex64( 5.0, 5.0 ), x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = new Complex64Array( [ 5.0, 5.0, 5.0, 5.0 ] );

	cfill( x.length, new Complex64( 5.0, 5.0 ), x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	out = cfill( x.length, new Complex64( 3.0, 3.0 ), x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0 ] );
	expected = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0 ] );

	cfill( 0, new Complex64( 5.0, 5.0 ), x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	cfill( -4, new Complex64( 5.0, 5.0 ), x, 1, 0 );
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
		5.0,  // 0
		-5.0, // 0
		4.0,
		-6.0,
		5.0,  // 1
		-5.0  // 1
	]);

	cfill( 2, new Complex64( 5.0, -5.0 ), x, 2, 0 );
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
		-6.0,
		8.0,  // 0
		-9.0  // 0
	]);
	expected = new Complex64Array([
		5.0,  // 1
		-5.0, // 1
		4.0,
		-6.0,
		5.0,  // 0
		-5.0  // 0
	]);

	cfill( 2, new Complex64( 5.0, -5.0 ), x, -2, x.length-1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		1.0,
		-2.0,
		3.0,  // 0
		-4.0, // 0
		6.0,  // 1
		-8.0, // 1
		10.0,
		-12.0
	]);
	expected = new Complex64Array([
		1.0,
		-2.0,
		5.0,  // 0
		-5.0, // 0
		5.0,  // 1
		-5.0, // 1
		10.0,
		-12.0
	]);

	cfill( 2, new Complex64( 5.0, -5.0 ), x, 1, 1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently fills a strided array', function test( t ) {
	var expected;
	var alpha;
	var x;

	alpha = new Complex64( 3.0, -1.0 );
	x = filledarrayBy( 100, 'complex64', constantFunction( new Complex64( 1.0, 1.0 ) ) );
	expected = filledarrayBy( 100, 'complex64', constantFunction( new Complex64( 3.0, -1.0 ) ) );
	cfill( x.length, alpha, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	alpha = new Complex64( 9.0, -3.0 );
	x = filledarrayBy( 240, 'complex64', constantFunction( new Complex64( 8.0, -2.0 ) ) );
	expected = filledarrayBy( 240, 'complex64', constantFunction( new Complex64( 9.0, -3.0 ) ) );
	cfill( x.length, alpha, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});
