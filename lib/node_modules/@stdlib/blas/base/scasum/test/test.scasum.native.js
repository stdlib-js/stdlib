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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Complex64Array = require( '@stdlib/array/complex64' );
var EPS = require( '@stdlib/constants/float32/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var scasum = tryRequire( resolve( __dirname, './../lib/scasum.native.js' ) );
var opts = {
	'skip': ( scasum instanceof Error )
};


// FUNCTIONS //

/**
* Tests for element-wise approximate equality.
*
* @private
* @param {Object} t - test object
* @param {number} actual - actual value
* @param {number} expected - expected value
* @param {number} rtol - relative tolerance
*/
function isApprox( t, actual, expected, rtol ) {
	var delta;
	var tol;

	if ( actual === expected ) {
		t.strictEqual( actual, expected, 'returns expected value' );
	} else {
		delta = abs( actual - expected );
		tol = rtol * EPS * abs( expected );
		t.ok( delta <= tol, 'within tolerance. actual: '+actual+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
	}
}


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof scasum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', opts, function test( t ) {
	t.strictEqual( scasum.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the function computes the sum of the absolute values of the real and imaginary components of a single-precision complex floating-point vector', opts, function test( t ) {
	var expected;
	var actual;
	var cx;

	cx = new Complex64Array([
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
	expected = 1.6;

	actual = scasum( 4, cx, 1 );
	isApprox( t, actual, expected, 2.0 );

	cx = new Complex64Array([
		0.1,  // 1
		0.1,  // 1
		-0.6, // 2
		0.1,  // 2
		0.1,  // 3
		-0.3, // 3
		7.0,
		8.0
	]);
	expected = 1.3;

	actual = scasum( 3, cx, 1 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', opts, function test( t ) {
	var expected;
	var actual;
	var cx;

	cx = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0
	]);
	expected = 0.0;

	actual = scasum( 0, cx, 1 );
	t.strictEqual( actual, expected, 'returns expected value' );

	cx = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0
	]);
	expected = 0.0;

	actual = scasum( -1, cx, 0 );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var actual;
	var cx;

	cx = new Complex64Array([
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
	expected = 1.6;

	actual = scasum( 4, cx, 2 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var actual;
	var cx;

	cx = new Complex64Array([
		0.3, // 4
		0.1, // 4
		5.0, // 3
		8.0, // 3
		0.5, // 2
		0.0, // 2
		6.0, // 1
		9.0 // 1
	]);
	expected = 28.9;

	actual = scasum( 4, cx, -1 );
	isApprox( t, actual, expected, 2.0 );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var expected;
	var actual;
	var cx0;
	var cx1;

	cx0 = new Complex64Array([
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
	expected = 33.0;

	cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 );

	actual = scasum( 3, cx1, 1 );
	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});
