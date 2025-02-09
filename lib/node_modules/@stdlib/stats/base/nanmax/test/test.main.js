/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var Float64Array = require( '@stdlib/array/float64' );
var nanmax = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nanmax, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', function test( t ) {
	t.strictEqual( nanmax.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the maximum value of a strided array', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0, NaN, NaN ];
	v = nanmax( x.length, x, 1 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	x = [ -4.0, NaN, -5.0 ];
	v = nanmax( x.length, x, 1 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = [ -0.0, NaN, 0.0, -0.0 ];
	v = nanmax( x.length, x, 1 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = nanmax( x.length, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = nanmax( x.length, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the maximum value of a strided array (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0, NaN, NaN ];
	v = nanmax( x.length, toAccessorArray( x ), 1 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	x = [ -4.0, NaN, -5.0 ];
	v = nanmax( x.length, toAccessorArray( x ), 1 );
	t.strictEqual( v, -4.0, 'returns expected value' );

	x = [ -0.0, NaN, 0.0, -0.0 ];
	v = nanmax( x.length, toAccessorArray( x ), 1 );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	x = [ NaN ];
	v = nanmax( x.length, toAccessorArray( x ), 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	x = [ NaN, NaN ];
	v = nanmax( x.length, toAccessorArray( x ), 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = nanmax( 0, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = nanmax( -1, x, 1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = nanmax( 1, x, 1 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first element (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = nanmax( 1, toAccessorArray( x ), 1 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var x;
	var v;

	x = [
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
	];

	v = nanmax( 5, x, 2 );

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `stride` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [
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
	];

	v = nanmax( 5, toAccessorArray( x ), 2 );

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', function test( t ) {
	var x;
	var v;

	x = [
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
	];

	v = nanmax( 5, x, -2 );

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter (accessors)', function test( t ) {
	var x;
	var v;

	x = [
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
	];

	v = nanmax( 5, toAccessorArray( x ), -2 );

	t.strictEqual( v, 4.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the first element', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = nanmax( x.length, x, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the first element (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = nanmax( x.length, toAccessorArray( x ), 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var x0;
	var x1;
	var v;

	x0 = new Float64Array([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		6.0,
		NaN,  // 4
		NaN
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	v = nanmax( 5, x1, 2 );
	t.strictEqual( v, 4.0, 'returns expected value' );

	t.end();
});
