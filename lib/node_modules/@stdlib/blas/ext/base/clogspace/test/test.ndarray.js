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
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var lnf = require( '@stdlib/math/base/special/lnf' );
var cosf = require( '@stdlib/math/base/special/cosf' );
var sinf = require( '@stdlib/math/base/special/sinf' );
var E = require( '@stdlib/constants/float32/e' );
var clogspace = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof clogspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( clogspace.length, 8, 'has expected arity' );
	t.end();
});

tape( 'the function fills a strided array', function test( t ) {
	var expected;
	var lnb;
	var x;

	x = new Complex64Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0,
		3.0,
		-7.0,
		0.0,
		1.0,
		8.0,
		-2.0,
		4.0,
		3.0
	]);
	expected = new Complex64Array([
		1.0,
		0.0,
		2.0,
		0.0,
		4.0,
		0.0,
		8.0,
		0.0,
		16.0,
		0.0,
		32.0,
		0.0,
		64.0,
		0.0,
		128.0,
		0.0
	]);

	clogspace( x.length, 2.0, new Complex64( 0.0, 0.0 ), new Complex64( 7.0, 0.0 ), true, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array( [ 2.0, 0.0, 4.0, 0.0 ] );

	clogspace( x.length, 2.0, new Complex64( 1.0, 0.0 ), new Complex64( 3.0, 0.0 ), false, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	// Non-zero imaginary exponents:
	lnb = lnf( E );
	x = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex64Array( [ 1.0, 0.0, cosf( lnb ), sinf( lnb ) ] );
	clogspace( 2, E, new Complex64( 0.0, 0.0 ), new Complex64( 0.0, 1.0 ), true, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function writes a single value to the input array', function test( t ) {
	var expected;
	var x;

	// When `endpoint` is `true`, write `base^stop`:
	x = new Complex64Array( [ 0.0, 0.0 ] );
	expected = new Complex64Array( [ 8.0, 0.0 ] );

	clogspace( 1, 2.0, new Complex64( 0.0, 0.0 ), new Complex64( 3.0, 0.0 ), true, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	// When `endpoint` is `false`, write `base^start`:
	x = new Complex64Array( [ 0.0, 0.0 ] );
	expected = new Complex64Array( [ 1.0, 0.0 ] );

	clogspace( 1, 2.0, new Complex64( 0.0, 0.0 ), new Complex64( 3.0, 0.0 ), false, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Complex64Array([
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
	out = clogspace( x.length, 2.0, new Complex64( 0.0, 0.0 ), new Complex64( 5.0, 0.0 ), false, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0, 5.0, 1.0 ] );
	expected = new Complex64Array( [ 3.0, -4.0, 1.0, -2.0, 5.0, 1.0 ] );

	clogspace( 0, 2.0, new Complex64( 0.0, 0.0 ), new Complex64( 10.0, 0.0 ), true, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	clogspace( -4, 2.0, new Complex64( 0.0, 0.0 ), new Complex64( 10.0, 0.0 ), true, x, 1, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		2.0,  // 0
		1.0,  // 0
		-3.0,
		-2.0,
		-5.0, // 1
		4.0,  // 1
		7.0,
		-6.0,
		6.0,  // 2
		3.0   // 2
	]);
	expected = new Complex64Array([
		2.0,  // 0
		0.0,  // 0
		-3.0,
		-2.0,
		4.0,  // 1
		0.0,  // 1
		7.0,
		-6.0,
		8.0,  // 2
		0.0   // 2
	]);

	clogspace( 3, 2.0, new Complex64( 1.0, 0.0 ), new Complex64( 4.0, 0.0 ), false, x, 2, 0 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		2.0,  // 2
		1.0,  // 2
		-3.0,
		-2.0,
		-5.0, // 1
		4.0,  // 1
		7.0,
		-6.0,
		6.0,  // 0
		3.0   // 0
	]);
	expected = new Complex64Array([
		8.0,  // 2
		0.0,  // 2
		-3.0,
		-2.0,
		4.0,  // 1
		0.0,  // 1
		7.0,
		-6.0,
		2.0,  // 0
		0.0   // 0
	]);

	clogspace( 3, 2.0, new Complex64( 1.0, 0.0 ), new Complex64( 3.0, 0.0 ), true, x, -2, 4 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports an index offset', function test( t ) {
	var expected;
	var x;

	x = new Complex64Array([
		1.0,
		-2.0,
		0.0,  // 0
		0.0,  // 0
		0.0,  // 1
		0.0,  // 1
		0.0,  // 2
		0.0   // 2
	]);
	expected = new Complex64Array([
		1.0,
		-2.0,
		1.0,  // 0
		0.0,  // 0
		10.0, // 1
		0.0,  // 1
		100.0, // 2
		0.0    // 2
	]);

	clogspace( 3, 10.0, new Complex64( 0.0, 0.0 ), new Complex64( 2.0, 0.0 ), true, x, 1, 1 );
	t.strictEqual( isSameComplex64Array( x, expected ), true, 'returns expected value' );
	t.end();
});
