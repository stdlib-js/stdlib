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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var ghad = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ghad, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 12', function test( t ) {
	t.strictEqual( ghad.length, 12, 'has expected arity' );
	t.end();
});

tape( 'the function multiplies the Hadamard product of `x` and `y` by a constant and adds the result to `z` multiplied by a constant', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	z = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	expected = [
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		15.0, // ( 2.0 * 2.0 * 3.0 ) + ( 3.0 * 1.0 )
		27.0, // ( 2.0 * 3.0 * 4.0 ) + ( 3.0 * 1.0 )
		43.0, // ( 2.0 * 4.0 * 5.0 ) + ( 3.0 * 1.0 )
		63.0  // ( 2.0 * 5.0 * 6.0 ) + ( 3.0 * 1.0 )
	];

	ghad( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	x = [ 3.0, 4.0 ];
	y = [ 1.0, 2.0 ];
	z = [ 2.0, 3.0 ];
	expected = [ 12.0, 25.0 ];

	ghad( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'the function multiplies the Hadamard product of `x` and `y` by a constant and adds the result to `z` multiplied by a constant (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
	z = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	expected = [
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		15.0, // ( 2.0 * 2.0 * 3.0 ) + ( 3.0 * 1.0 )
		27.0, // ( 2.0 * 3.0 * 4.0 ) + ( 3.0 * 1.0 )
		43.0, // ( 2.0 * 4.0 * 5.0 ) + ( 3.0 * 1.0 )
		63.0  // ( 2.0 * 5.0 * 6.0 ) + ( 3.0 * 1.0 )
	];

	ghad( x.length, 2.0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, 3.0, toAccessorArray( z ), 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	x = [ 3.0, 4.0 ];
	y = [ 1.0, 2.0 ];
	z = [ 2.0, 3.0 ];
	expected = [ 12.0, 25.0 ];

	ghad( x.length, 2.0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, 3.0, toAccessorArray( z ), 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 5.0, 6.0, 7.0, 8.0, 9.0 ];
	z = [ 1.0, 1.0, 1.0, 1.0, 1.0 ];
	out = ghad( x.length, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 );

	t.strictEqual( out, z, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `z` unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	z = [ 7.0, 8.0, 9.0 ];
	expected = [ 7.0, 8.0, 9.0 ];

	ghad( 0, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	ghad( -4, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'when `alpha` equals `0.0`, the function scales `z` by `beta`', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	z = [ 1.0, 2.0, 3.0 ];
	expected = [
		3.0, // 3.0 * 1.0
		6.0, // 3.0 * 2.0
		9.0  // 3.0 * 3.0
	];

	ghad( x.length, 0.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [ 2.0, 3.0, 4.0 ];
	z = [ 1.0, 1.0, 1.0 ];
	expected = [
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		21.0, // ( 2.0 * 3.0 * 3.0 ) + ( 3.0 * 1.0 )
		43.0  // ( 2.0 * 5.0 * 4.0 ) + ( 3.0 * 1.0 )
	];

	ghad( 3, 2.0, x, 2, 0, y, 1, 0, 3.0, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [ 2.0, 3.0, 4.0 ];
	z = [ 1.0, 1.0, 1.0 ];
	expected = [
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		21.0, // ( 2.0 * 3.0 * 3.0 ) + ( 3.0 * 1.0 )
		43.0  // ( 2.0 * 5.0 * 4.0 ) + ( 3.0 * 1.0 )
	];

	ghad( 3, 2.0, toAccessorArray( x ), 2, 0, toAccessorArray( y ), 1, 0, 3.0, toAccessorArray( z ), 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0 ];
	y = [
		2.0, // 0
		9.0,
		3.0, // 1
		8.0,
		4.0  // 2
	];
	z = [ 1.0, 1.0, 1.0 ];
	expected = [
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		15.0, // ( 2.0 * 2.0 * 3.0 ) + ( 3.0 * 1.0 )
		27.0  // ( 2.0 * 3.0 * 4.0 ) + ( 3.0 * 1.0 )
	];

	ghad( 3, 2.0, x, 1, 0, y, 2, 0, 3.0, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0 ];
	y = [
		2.0, // 0
		9.0,
		3.0, // 1
		8.0,
		4.0  // 2
	];
	z = [ 1.0, 1.0, 1.0 ];
	expected = [
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		15.0, // ( 2.0 * 2.0 * 3.0 ) + ( 3.0 * 1.0 )
		27.0  // ( 2.0 * 3.0 * 4.0 ) + ( 3.0 * 1.0 )
	];

	ghad( 3, 2.0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 2, 0, 3.0, toAccessorArray( z ), 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `z` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 2.0, 3.0, 4.0 ];
	z = [
		1.0, // 0
		5.0,
		1.0, // 1
		6.0,
		1.0  // 2
	];
	expected = [
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		5.0,
		15.0, // ( 2.0 * 2.0 * 3.0 ) + ( 3.0 * 1.0 )
		6.0,
		27.0  // ( 2.0 * 3.0 * 4.0 ) + ( 3.0 * 1.0 )
	];

	ghad( 3, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 2, 0 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `z` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 2.0, 3.0, 4.0 ];
	z = [
		1.0, // 0
		5.0,
		1.0, // 1
		6.0,
		1.0  // 2
	];
	expected = [
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		5.0,
		15.0, // ( 2.0 * 2.0 * 3.0 ) + ( 3.0 * 1.0 )
		6.0,
		27.0  // ( 2.0 * 3.0 * 4.0 ) + ( 3.0 * 1.0 )
	];

	ghad( 3, 2.0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, 3.0, toAccessorArray( z ), 2, 0 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		2.0, // 2
		3.0, // 1
		4.0  // 0
	]);
	z = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	expected = new Float64Array([
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		21.0, // ( 2.0 * 3.0 * 3.0 ) + ( 3.0 * 1.0 )
		43.0  // ( 2.0 * 5.0 * 4.0 ) + ( 3.0 * 1.0 )
	]);

	ghad( 3, 2.0, x, -2, 4, y, -1, 2, 3.0, z, -1, 2 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		2.0, // 2
		3.0, // 1
		4.0  // 0
	];
	z = new Float64Array( [ 1.0, 1.0, 1.0 ] );
	expected = new Float64Array([
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		21.0, // ( 2.0 * 3.0 * 3.0 ) + ( 3.0 * 1.0 )
		43.0  // ( 2.0 * 5.0 * 4.0 ) + ( 3.0 * 1.0 )
	]);

	ghad( 3, 2.0, toAccessorArray( x ), -2, 4, toAccessorArray( y ), -1, 2, 3.0, toAccessorArray( z ), -1, 2 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [
		0.0,
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [ 2.0, 3.0, 4.0 ];
	z = [ 1.0, 1.0, 1.0 ];
	expected = [
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		21.0, // ( 2.0 * 3.0 * 3.0 ) + ( 3.0 * 1.0 )
		43.0  // ( 2.0 * 5.0 * 4.0 ) + ( 3.0 * 1.0 )
	];

	ghad( 3, 2.0, x, 2, 1, y, 1, 0, 3.0, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0 ];
	y = [
		0.0,
		2.0, // 0
		3.0, // 1
		4.0  // 2
	];
	z = [ 1.0, 1.0, 1.0 ];
	expected = [
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		15.0, // ( 2.0 * 2.0 * 3.0 ) + ( 3.0 * 1.0 )
		27.0  // ( 2.0 * 3.0 * 4.0 ) + ( 3.0 * 1.0 )
	];

	ghad( 3, 2.0, x, 1, 0, y, 1, 1, 3.0, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `z` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 2.0, 3.0, 4.0 ];
	z = [
		1.0,
		1.0,
		1.0, // 0
		1.0, // 1
		1.0  // 2
	];
	expected = [
		1.0,
		1.0,
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		15.0, // ( 2.0 * 2.0 * 3.0 ) + ( 3.0 * 1.0 )
		27.0  // ( 2.0 * 3.0 * 4.0 ) + ( 3.0 * 1.0 )
	];

	ghad( 3, 2.0, x, 1, 0, y, 1, 0, 3.0, z, 1, 2 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [
		0.0,
		1.0, // 0
		0.0,
		2.0, // 1
		0.0,
		3.0  // 2
	];
	y = [
		0.0,
		0.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		0.0
	];
	z = [
		1.0,
		1.0,
		1.0,
		1.0, // 0
		1.0, // 1
		1.0  // 2
	];
	expected = [
		1.0,
		1.0,
		1.0,
		7.0,  // ( 2.0 * 1.0 * 2.0 ) + ( 3.0 * 1.0 )
		15.0, // ( 2.0 * 2.0 * 3.0 ) + ( 3.0 * 1.0 )
		27.0  // ( 2.0 * 3.0 * 4.0 ) + ( 3.0 * 1.0 )
	];

	ghad( 3, 2.0, x, 2, 1, y, 1, 2, 3.0, z, 1, 3 );
	t.deepEqual( z, expected, 'returns expected value' );
	t.end();
});

tape( 'if all strides are equal to `1`, the function efficiently multiplies the Hadamard product of `x` and `y` by a constant and adds the result to `z` multiplied by a constant', function test( t ) {
	var expected;
	var alpha;
	var beta;
	var x;
	var y;
	var z;
	var i;

	alpha = 2.0;
	beta = 3.0;
	x = new Float64Array( 100 );
	y = new Float64Array( 100 );
	z = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		z[ i ] = 1.0;
		expected[ i ] = ( alpha * x[ i ] * y[ i ] ) + ( beta * z[ i ] );
	}
	ghad( x.length, alpha, x, 1, 0, y, 1, 0, beta, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	y = new Float64Array( 240 );
	z = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		z[ i ] = 1.0;
		expected[ i ] = ( alpha * x[ i ] * y[ i ] ) + ( beta * z[ i ] );
	}
	ghad( x.length, alpha, x, 1, 0, y, 1, 0, beta, z, 1, 0 );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});
