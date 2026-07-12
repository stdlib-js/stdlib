/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var dznrm2 = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dznrm2, 'object', 'main export is an object' );
	t.end();
});

tape( 'the `ndarray` method has an arity of 4', function test( t ) {
	t.strictEqual( dznrm2.ndarray.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the `ndarray` method calculates the L2-norm of a vector', function test( t ) {
	var nrm2;
	var x;

	x = new Complex128Array( [ 3.0, -4.0, -6.0, 8.0, 0.0, 3.0 ] );

	nrm2 = dznrm2.ndarray( x.length, x, 1, 0 );
	t.strictEqual( nrm2, sqrt( 134.0 ), 'returns expected value' );

	// Short datasets:
	x = new Complex128Array( [ -4.0, 0.0 ] );

	nrm2 = dznrm2.ndarray( x.length, x, 1, 0 );
	t.strictEqual( nrm2, 4.0, 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports a `stride` parameter', function test( t ) {
	var nrm2;
	var x;

	x = new Complex128Array([
		1.0,  // 0
		2.0,  // 0
		2.0,
		2.0,
		-7.0, // 1
		-2.0, // 1
		3.0,
		3.0,
		4.0,  // 2
		2.0   // 2
	]);

	nrm2 = dznrm2.ndarray( 3, x, 2, 0 );
	t.strictEqual( nrm2, sqrt( 78.0 ), 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports a negative stride parameter', function test( t ) {
	var nrm2;
	var x;

	x = new Complex128Array([
		2.0,  // 2
		-7.0, // 2
		-2.0,
		3.0,
		4.0,  // 1
		2.0   // 1
	]);

	nrm2 = dznrm2.ndarray( 2, x, -2, x.length-1 );
	t.strictEqual( nrm2, sqrt( 73.0 ), 'returns expected value' );

	t.end();
});

tape( 'the `ndarray` method supports an `offset` parameter', function test( t ) {
	var nrm2;
	var x;

	x = new Complex128Array([
		1.0,
		1.0,
		2.0,
		2.0,
		1.0,  // 1
		2.0,  // 1
		-2.0,
		-2.0,
		2.0,  // 2
		3.0   // 2
	]);

	nrm2 = dznrm2.ndarray( 2, x, 2, 2 );
	t.strictEqual( nrm2, sqrt( 18.0 ), 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the `ndarray` method returns `0`', function test( t ) {
	var nrm2;
	var x;

	x = new Complex128Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, 6.0 ] );

	nrm2 = dznrm2.ndarray( 0, x, 1, 0 );
	t.strictEqual( nrm2, 0.0, 'returns expected value' );

	nrm2 = dznrm2.ndarray( -1, x, 1, 0 );
	t.strictEqual( nrm2, 0.0, 'returns expected value' );

	t.end();
});
