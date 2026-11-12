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
var Complex64Array = require( '@stdlib/array/complex64' );
var isAlmostSameValuef = require( '@stdlib/number/float32/base/assert/is-almost-same-value' );
var scnrm2 = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scnrm2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( scnrm2.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function computes the L2-norm', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		0.3, // 1
		0.1, // 1
		0.5, // 2
		0.0, // 2
		0.0, // 3
		0.5, // 3
		0.0, // 4
		0.2, // 4
		2.0,
		3.0
	]);
	expected = 0.8;

	actual = scnrm2( 4, x, 1, 0 );
	t.strictEqual( isAlmostSameValuef( actual, expected, 1 ), true, 'returns expected value' );

	x = new Complex64Array([
		0.1,  // 1
		0.1,  // 1
		-0.6, // 2
		0.1,  // 2
		0.1,  // 3
		-0.3, // 3
		7.0,
		8.0
	]);
	expected = 0.7;

	actual = scnrm2( 3, x, 1, 0 );
	t.strictEqual( isAlmostSameValuef( actual, expected, 1 ), true, 'returns expected value' );

	// Checked on Wolfram Alpha:
	x = new Complex64Array([
		5e+15, // 1
		5e+15, // 1
		5e+15, // 2
		5e+15, // 2
		5e+15, // 3
		5e+15, // 3
		5e+15, // 4
		5e+15  // 4
	]);
	expected = 14142135623730952;

	actual = scnrm2( 4, x, 1, 0 );
	t.strictEqual( isAlmostSameValuef( actual, expected, 1 ), true, 'returns expected value' );

	// Checked on Wolfram Alpha:
	x = new Complex64Array([
		1e-20, // 1
		1e-20, // 1
		1e-20, // 2
		1e-20, // 2
		1e-20, // 3
		1e-20, // 3
		1e-20, // 4
		1e-20  // 4
	]);
	expected = 2.82843e-20;

	actual = scnrm2( 4, x, 1, 0 );
	t.strictEqual( isAlmostSameValuef( actual, expected, 9 ), true, 'returns expected value' );

	// Checked on Wolfram Alpha:
	x = new Complex64Array([
		1e20, // 1
		1e10, // 1
		1e20, // 2
		1e10, // 2
		1e20, // 3
		1e10, // 3
		1e20, // 4
		1e10  // 4
	]);
	expected = 200000000000000000000;

	actual = scnrm2( 4, x, 1, 0 );
	t.strictEqual( isAlmostSameValuef( actual, expected, 1 ), true, 'returns expected value' );

	// Checked on Wolfram Alpha:
	x = new Complex64Array([
		1e-20, // 1
		1e10,  // 1
		1e-20, // 2
		1e10,  // 2
		1e-20, // 3
		1e10,  // 3
		1e-20, // 4
		1e10   // 4
	]);
	expected = 20000000000;

	actual = scnrm2( 4, x, 1, 0 );
	t.strictEqual( isAlmostSameValuef( actual, expected, 0 ), true, 'returns expected value' );

	// Checked on Wolfram Alpha:
	x = new Complex64Array([
		1e-19,          // 1
		1.08420217e-19, // 1
		1e-19,          // 2
		1.08420217e-19, // 2
		1e-19,          // 3
		0,              // 3
		1e-19,          // 4
		0               // 4
	]);
	expected = 2.52012e-19;

	actual = scnrm2( 4, x, 1, 0 );
	t.strictEqual( isAlmostSameValuef( actual, expected, 13 ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0
	]);
	expected = 0.0;

	actual = scnrm2( 0, x, 1, 0 );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		0.3, // 1
		0.1, // 1
		5.0,
		8.0,
		0.5, // 2
		0.0, // 2
		6.0,
		9.0,
		0.0, // 3
		0.5, // 3
		8.0,
		3.0,
		0.0, // 4
		0.2, // 4
		9.0,
		4.0
	]);
	expected = 0.8;

	actual = scnrm2( 4, x, 2, 0 );
	t.strictEqual( isAlmostSameValuef( actual, expected, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		0.3, // 1
		0.1, // 1
		5.0,
		8.0,
		0.5, // 2
		0.0, // 2
		6.0,
		9.0,
		0.0, // 3
		0.5, // 3
		8.0,
		3.0,
		0.0, // 4
		0.2, // 4
		9.0,
		4.0
	]);
	expected = 0.8;

	actual = scnrm2( 4, x, -2, 6 );
	t.strictEqual( isAlmostSameValuef( actual, expected, 1 ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var expected;
	var actual;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0, // 1
		4.0, // 1
		5.0, // 2
		6.0, // 2
		7.0, // 3
		8.0, // 3
		9.0,
		10.0
	]);
	expected = 14.106736183166504;

	actual = scnrm2( 3, x, 1, 1 );
	t.strictEqual( isAlmostSameValuef( actual, expected, 0 ), true, 'returns expected value' );
	t.end();
});
