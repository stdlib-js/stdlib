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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var ln = require( '@stdlib/math/base/special/ln' );
var cos = require( '@stdlib/math/base/special/cos' );
var sin = require( '@stdlib/math/base/special/sin' );
var E = require( '@stdlib/constants/float64/e' );
var zlogspace = require( './../lib/zlogspace.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zlogspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', function test( t ) {
	t.strictEqual( zlogspace.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function fills a strided array', function test( t ) {
	var expected;
	var lnb;
	var x;

	x = new Complex128Array([
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
	expected = new Complex128Array([
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

	zlogspace( x.length, 2.0, new Complex128( 0.0, 0.0 ), new Complex128( 7.0, 0.0 ), true, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 2.0, 0.0, 4.0, 0.0 ] );

	zlogspace( x.length, 2.0, new Complex128( 1.0, 0.0 ), new Complex128( 3.0, 0.0 ), false, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	// Non-zero imaginary exponents:
	lnb = ln( E );
	x = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	expected = new Complex128Array( [ 1.0, 0.0, cos( lnb ), sin( lnb ) ] );
	zlogspace( 2, E, new Complex128( 0.0, 0.0 ), new Complex128( 0.0, 1.0 ), true, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function writes a single value to the input array', function test( t ) {
	var expected;
	var x;

	// When `endpoint` is `true`, write `base^stop`:
	x = new Complex128Array( [ 0.0, 0.0 ] );
	expected = new Complex128Array( [ 8.0, 0.0 ] );

	zlogspace( 1, 2.0, new Complex128( 0.0, 0.0 ), new Complex128( 3.0, 0.0 ), true, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	// When `endpoint` is `false`, write `base^start`:
	x = new Complex128Array( [ 0.0, 0.0 ] );
	expected = new Complex128Array( [ 1.0, 0.0 ] );

	zlogspace( 1, 2.0, new Complex128( 0.0, 0.0 ), new Complex128( 3.0, 0.0 ), false, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Complex128Array([
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
	out = zlogspace( x.length, 2.0, new Complex128( 0.0, 0.0 ), new Complex128( 5.0, 0.0 ), false, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Complex128Array( [ 3.0, -4.0, 1.0, -2.0, 5.0, 1.0 ] );
	expected = new Complex128Array( [ 3.0, -4.0, 1.0, -2.0, 5.0, 1.0 ] );

	zlogspace( 0, 2.0, new Complex128( 0.0, 0.0 ), new Complex128( 10.0, 0.0 ), true, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	zlogspace( -4, 2.0, new Complex128( 0.0, 0.0 ), new Complex128( 10.0, 0.0 ), true, x, 1 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
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
	expected = new Complex128Array([
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

	zlogspace( 3, 2.0, new Complex128( 1.0, 0.0 ), new Complex128( 4.0, 0.0 ), false, x, 2 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Complex128Array([
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
	expected = new Complex128Array([
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

	zlogspace( 3, 2.0, new Complex128( 1.0, 0.0 ), new Complex128( 3.0, 0.0 ), true, x, -2 );
	t.strictEqual( isSameComplex128Array( x, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Complex128Array([
		1.0,
		-2.0,
		3.0,  // 0
		-4.0, // 0
		6.0,
		-8.0,
		10.0, // 1
		-12.0 // 1
	]);
	expected = new Complex128Array([
		1.0,
		-2.0,
		1.0,  // 0
		0.0,  // 0
		6.0,
		-8.0,
		10.0, // 1
		0.0   // 1
	]);

	x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	zlogspace( 2, 10.0, new Complex128( 0.0, 0.0 ), new Complex128( 1.0, 0.0 ), true, x1, 2 );
	t.strictEqual( isSameComplex128Array( x0, expected ), true, 'returns expected value' );
	t.end();
});
