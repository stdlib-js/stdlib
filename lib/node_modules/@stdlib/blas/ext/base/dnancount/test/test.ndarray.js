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
var Float64Array = require( '@stdlib/array/float64' );
var dnancount = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dnancount, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( dnancount.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function counts the number of non-NaN elements in a strided array', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ] );

	v = dnancount( x.length, x, 1, 0 );
	t.strictEqual( v, 6, 'returns expected value' );

	v = dnancount( 1, x, 1, 3 );
	t.strictEqual( v, 0, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0`', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnancount( 0, x, 1, 0 );
	t.strictEqual( v, 0, 'returns expected value' );

	v = dnancount( -1, x, 1, 0 );
	t.strictEqual( v, 0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var x;
	var v;

	x = new Float64Array([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		NaN,  // 4
		NaN
	]);

	v = dnancount( 5, x, 2, 0 );
	t.strictEqual( v, 4, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', function test( t ) {
	var x;
	var v;

	x = new Float64Array([
		NaN,  // 4
		NaN,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);

	v = dnancount( 5, x, -2, 8 );
	t.strictEqual( v, 4, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function counts repeated indexed elements', function test( t ) {
	var x;
	var v;

	x = new Float64Array( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = dnancount( x.length, x, 0, 0 );
	t.strictEqual( v, x.length, 'returns expected value' );

	x[ 0 ] = NaN;
	v = dnancount( x.length, x, 0, 0 );
	t.strictEqual( v, 0, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `offset` parameter', function test( t ) {
	var x;
	var v;

	x = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		NaN,
		NaN   // 4
	]);

	v = dnancount( 5, x, 2, 1 );
	t.strictEqual( v, 4, 'returns expected value' );
	t.end();
});
