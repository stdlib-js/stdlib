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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var covarmtk = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof covarmtk, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', function test( t ) {
	t.strictEqual( covarmtk.length, 10, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the population covariance', function test( t ) {
	var x;
	var y;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	y = [ -2.0, 1.0, 5.0, -4.0, 3.0, 0.0 ];
	v = covarmtk( x.length, 0, 0.5, x, 1, 0, 0.5, y, 1, 0 );
	t.strictEqual( v, -45.5/x.length, 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = covarmtk( x.length, 0, -4.0, x, 1, 0, -4.0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = covarmtk( x.length, 0, 4.0, x, 1, 0, 4.0, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the population covariance (accessors)', function test( t ) {
	var x;
	var y;
	var v;

	x = toAccessorArray( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	y = toAccessorArray( [ -2.0, 1.0, 5.0, -4.0, 3.0, 0.0 ] );
	v = covarmtk( x.length, 0, 0.5, x, 1, 0, 0.5, y, 1, 0 );
	t.strictEqual( v, -45.5/x.length, 'returns expected value' );

	x = toAccessorArray( [ -4.0, -4.0 ] );
	v = covarmtk( x.length, 0, -4.0, x, 1, 0, -4.0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = toAccessorArray( [ NaN, 4.0 ] );
	v = covarmtk( x.length, 0, 4.0, x, 1, 0, 4.0, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample covariance', function test( t ) {
	var x;
	var y;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ];
	y = [ -2.0, 1.0, 5.0, -4.0, 3.0, 0.0 ];
	v = covarmtk( x.length, 1, 0.5, x, 1, 0, 0.5, y, 1, 0 );
	t.strictEqual( v, -45.5/(x.length-1), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = covarmtk( x.length, 1, -4.0, x, 1, 0, -4.0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = covarmtk( x.length, 1, 4.0, x, 1, 0, 4.0, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample covariance (accessors)', function test( t ) {
	var x;
	var y;
	var v;

	x = toAccessorArray( [ 1.0, -2.0, -4.0, 5.0, 0.0, 3.0 ] );
	y = toAccessorArray( [ -2.0, 1.0, 5.0, -4.0, 3.0, 0.0 ] );
	v = covarmtk( x.length, 1, 0.5, x, 1, 0, 0.5, y, 1, 0 );
	t.strictEqual( v, -45.5/(x.length-1), 'returns expected value' );

	x = toAccessorArray( [ -4.0, -4.0 ] );
	v = covarmtk( x.length, 1, -4.0, x, 1, 0, -4.0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = toAccessorArray( [ NaN, 4.0 ] );
	v = covarmtk( x.length, 1, 4.0, x, 1, 0, 4.0, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = covarmtk( 0, 1, 0.6, x, 1, 0, 0.6, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = covarmtk( -1, 1, 0.6, x, 1, 0, 0.6, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `NaN` (accessors)', function test( t ) {
	var x;
	var v;

	x = toAccessorArray( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = covarmtk( 0, 1, 0.6, x, 1, 0, 0.6, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = covarmtk( -1, 1, 0.6, x, 1, 0, 0.6, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `correction` parameter yielding `N-correction` less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = covarmtk( x.length, x.length, 0.6, x, 1, 0, 0.6, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = covarmtk( x.length, x.length+1, 0.6, x, 1, 0, 0.6, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `correction` parameter yielding `N-correction` less than or equal to `0`, the function returns `NaN` (accessors)', function test( t ) {
	var x;
	var v;

	x = toAccessorArray( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = covarmtk( x.length, x.length, 0.6, x, 1, 0, 0.6, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = covarmtk( x.length, x.length+1, 0.6, x, 1, 0, 0.6, x, 1, 0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports stride parameters', function test( t ) {
	var x;
	var y;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	];

	y = [
		2.0,  // 0
		2.0,
		1.0,  // 1
		-7.0,
		4.0,  // 2
		3.0,
		-2.0, // 3
		2.0
	];

	v = covarmtk( 4, 1, 1.25, x, 2, 0, 1.25, y, 2, 0 );

	t.strictEqual( v, -18.25/3, 'returns expected value' );
	t.end();
});

tape( 'the function supports stride parameters (accessors)', function test( t ) {
	var x;
	var y;
	var v;

	x = toAccessorArray([
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0
	]);

	y = toAccessorArray([
		2.0,  // 0
		2.0,
		1.0,  // 1
		-7.0,
		4.0,  // 2
		3.0,
		-2.0, // 3
		2.0
	]);

	v = covarmtk( 4, 1, 1.25, x, 2, 0, 1.25, y, 2, 0 );

	t.strictEqual( v, -18.25/3, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative stride parameters', function test( t ) {
	var x;
	var y;
	var v;

	x = [
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];

	y = [
		2.0,  // 3
		2.0,
		1.0,  // 2
		-7.0,
		4.0,  // 1
		3.0,
		-2.0, // 0
		2.0
	];

	v = covarmtk( 4, 1, 1.25, x, -2, 6, 1.25, y, -2, 6 );

	t.strictEqual( v, -18.25/3, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative stride parameters (accessors)', function test( t ) {
	var x;
	var y;
	var v;

	x = toAccessorArray([
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	]);

	y = toAccessorArray([
		2.0,  // 3
		2.0,
		1.0,  // 2
		-7.0,
		4.0,  // 1
		3.0,
		-2.0, // 0
		2.0
	]);

	v = covarmtk( 4, 1, 1.25, x, -2, 6, 1.25, y, -2, 6 );

	t.strictEqual( v, -18.25/3, 'returns expected value' );
	t.end();
});

tape( 'the function supports offset parameters', function test( t ) {
	var x;
	var y;
	var v;

	x = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	];

	y = [
		2.0,
		4.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		1.0,  // 2
		3.0,
		2.0   // 3
	];

	v = covarmtk( 4, 1, 1.25, x, 2, 1, 1.25, y, 2, 1 );
	t.strictEqual( v, 11.75/3, 'returns expected value' );

	t.end();
});

tape( 'the function supports offset parameters (accessors)', function test( t ) {
	var x;
	var y;
	var v;

	x = toAccessorArray([
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0   // 3
	]);

	y = toAccessorArray([
		2.0,
		4.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		1.0,  // 2
		3.0,
		2.0   // 3
	]);

	v = covarmtk( 4, 1, 1.25, x, 2, 1, 1.25, y, 2, 1 );
	t.strictEqual( v, 11.75/3, 'returns expected value' );

	t.end();
});
