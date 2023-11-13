/*
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

/* eslint-disable max-lines */

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import dispatch = require( './index' );


// FUNCTIONS //

/**
* Nullary callback.
*
* @return input value
*/
function nullary(): any {
	return 5.0;
}

/**
* Unary callback.
*
* @param x - input value
* @return input value
*/
function unary( x: any ): any {
	return x;
}

/**
* Binary callback.
*
* @param x - input value
* @param y - input value
* @return output value
*/
function binary( x: number, y: number ): number {
	return x + y;
}

/**
* Ternary callback.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @return output value
*/
function ternary( x: number, y: number, z: number ): number {
	return x + y + z;
}

/**
* Quaternary callback.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @return output value
*/
function quaternary( x: number, y: number, z: number, w: number ): number {
	return x + y + z + w;
}

/**
* Mock strided array function.
*
* @param arrays - strided arrays
* @param shape - array shape
* @param strides - strides
* @param fcn - callback
*/
function strided( arrays: Array<ArrayLike<any>>, shape: Array<number>, strides: Array<number>, fcn: ( x: any ) => any ): void {
	let sx;
	let sy;
	let ix;
	let iy;
	let x;
	let y;
	let N;
	let i;

	N = shape[ 0 ];
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	sx = strides[ 0 ];
	sy = strides[ 1 ];
	ix = 0;
	iy = 0;
	for ( i = 0; i < N; i++ ) {
		y[ iy ] = fcn( x[ ix ] );
		ix += sx;
		iy += sy;
	}
}

/**
* Mock strided array function with offsets.
*
* @param arrays - strided arrays
* @param shape - array shape
* @param strides - strides
* @param offsets - offsets
* @param fcn - callback
*/
function stridedWithOffsets( arrays: Array<ArrayLike<any>>, shape: Array<number>, strides: Array<number>, offsets: Array<number>, fcn: ( x: any ) => any ): void {
	let sx;
	let sy;
	let ix;
	let iy;
	let x;
	let y;
	let N;
	let i;

	N = shape[ 0 ];
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	sx = strides[ 0 ];
	sy = strides[ 1 ];
	ix = offsets[ 0 ];
	iy = offsets[ 1 ];
	for ( i = 0; i < N; i++ ) {
		y[ iy ] = fcn( x[ ix ] );
		ix += sx;
		iy += sy;
	}
}


// TESTS //

// The function returns a dispatch function...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch( strided, types, data, 7, 1, 1 ); // $ExpectType Dispatcher
	dispatch( [ strided ], types, data, 7, 1, 1 ); // $ExpectType Dispatcher

	dispatch( stridedWithOffsets, types, data, 9, 1, 1 ); // $ExpectType Dispatcher
	dispatch( [ stridedWithOffsets ], types, data, 9, 1, 1 ); // $ExpectType Dispatcher
}

// The compiler throws an error if the function is provided a first argument which is not either a strided array function or an array-like object containing strided array functions...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch( '10', types, data, 7, 1, 1 ); // $ExpectError
	dispatch( 10, types, data, 7, 1, 1 ); // $ExpectError
	dispatch( true, types, data, 7, 1, 1 ); // $ExpectError
	dispatch( false, types, data, 7, 1, 1 ); // $ExpectError
	dispatch( null, types, data, 7, 1, 1 ); // $ExpectError
	dispatch( undefined, types, data, 7, 1, 1 ); // $ExpectError
	dispatch( [ '1' ], types, data, 7, 1, 1 ); // $ExpectError
	dispatch( {}, types, data, 7, 1, 1 ); // $ExpectError
	dispatch( ( x: number ): number => x, types, data, 7, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	const data = [ unary ];

	dispatch( strided, 10, data, 7, 1, 1 ); // $ExpectError
	dispatch( strided, true, data, 7, 1, 1 ); // $ExpectError
	dispatch( strided, false, data, 7, 1, 1 ); // $ExpectError
	dispatch( strided, null, data, 7, 1, 1 ); // $ExpectError
	dispatch( strided, undefined, data, 7, 1, 1 ); // $ExpectError
	dispatch( strided, {}, data, 7, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object or null...
{
	const types = [ 'float64', 'float64' ];

	dispatch( strided, types, 10, 7, 1, 1 ); // $ExpectError
	dispatch( strided, types, true, 7, 1, 1 ); // $ExpectError
	dispatch( strided, types, false, 7, 1, 1 ); // $ExpectError
	dispatch( strided, types, undefined, 7, 1, 1 ); // $ExpectError
	dispatch( strided, types, {}, 7, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch( strided, types, data, '10', 1, 1 ); // $ExpectError
	dispatch( strided, types, data, true, 1, 1 ); // $ExpectError
	dispatch( strided, types, data, false, 1, 1 ); // $ExpectError
	dispatch( strided, types, data, null, 1, 1 ); // $ExpectError
	dispatch( strided, types, data, undefined, 1, 1 ); // $ExpectError
	dispatch( strided, types, data, [ '1' ], 1, 1 ); // $ExpectError
	dispatch( strided, types, data, {}, 1, 1 ); // $ExpectError
	dispatch( strided, types, data, ( x: number ): number => x, 1, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a number...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch( strided, types, data, 7, '10', 1 ); // $ExpectError
	dispatch( strided, types, data, 7, true, 1 ); // $ExpectError
	dispatch( strided, types, data, 7, false, 1 ); // $ExpectError
	dispatch( strided, types, data, 7, null, 1 ); // $ExpectError
	dispatch( strided, types, data, 7, undefined, 1 ); // $ExpectError
	dispatch( strided, types, data, 7, [ '1' ], 1 ); // $ExpectError
	dispatch( strided, types, data, 7, {}, 1 ); // $ExpectError
	dispatch( strided, types, data, 7, ( x: number ): number => x, 1 ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a number...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch( strided, types, data, 7, 1, '10' ); // $ExpectError
	dispatch( strided, types, data, 7, 1, true ); // $ExpectError
	dispatch( strided, types, data, 7, 1, false ); // $ExpectError
	dispatch( strided, types, data, 7, 1, null ); // $ExpectError
	dispatch( strided, types, data, 7, 1, undefined ); // $ExpectError
	dispatch( strided, types, data, 7, 1, [ '1' ] ); // $ExpectError
	dispatch( strided, types, data, 7, 1, {} ); // $ExpectError
	dispatch( strided, types, data, 7, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	dispatch(); // $ExpectError
	dispatch( strided ); // $ExpectError
	dispatch( strided, types ); // $ExpectError
	dispatch( strided, types, data ); // $ExpectError
	dispatch( strided, types, data, 7 ); // $ExpectError
	dispatch( strided, types, data, 7, 1 ); // $ExpectError
	dispatch( strided, types, data, 7, 1, 1, 0 ); // $ExpectError
}

// The function returns a dispatch function...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );
	const w = new Float64Array( x.length );
	const u = new Float64Array( x.length );

	const t1 = [ 'float64' ];
	const d1 = [ nullary ];
	const f1 = dispatch( strided, t1, d1, 4, 1, 0 );
	f1( x.length, 'float64', x, 1 ); // $ExpectType void | ArrayLike<any>

	const t2 = [ 'float64', 'float64' ];
	const d2 = [ unary ];
	const f2 = dispatch( strided, t2, d2, 7, 1, 1 );
	f2( x.length, 'float64', x, 1, 'float64', y, 1 ); // $ExpectType void | ArrayLike<any>

	const t3 = [ 'float64', 'float64', 'float64' ];
	const d3 = [ binary ];
	const f3 = dispatch( strided, t3, d3, 10, 2, 1 );
	f3( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectType void | ArrayLike<any>

	const t4 = [ 'float64', 'float64', 'float64', 'float64' ];
	const d4 = [ ternary ];
	const f4 = dispatch( strided, t4, d4, 13, 3, 1 );
	f4( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectType void | ArrayLike<any>

	const t5 = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const d5 = [ quaternary ];
	const f5 = dispatch( strided, t5, d5, 16, 4, 1 );
	f5( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64',  w, 1, 'float64', u, 1 ); // $ExpectType void | ArrayLike<any>
}

// The compiler throws an error if the returned function is provided a first argument which is not a number (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatch( strided, types, data, 4, 0, 1 );
	f( '10', 'float64', x, 1 ); // $ExpectError
	f( true, 'float64', x, 1 ); // $ExpectError
	f( false, 'float64', x, 1 ); // $ExpectError
	f( null, 'float64', x, 1 ); // $ExpectError
	f( undefined, 'float64', x, 1 ); // $ExpectError
	f( [ '1' ], 'float64', x, 1 ); // $ExpectError
	f( {}, 'float64', x, 1 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an array-like object (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );

	const f = dispatch( strided, types, data, 4, 0, 1 );
	f( x.length, 'float64', 10, 1 ); // $ExpectError
	f( x.length, 'float64', true, 1 ); // $ExpectError
	f( x.length, 'float64', false, 1 ); // $ExpectError
	f( x.length, 'float64', null, 1 ); // $ExpectError
	f( x.length, 'float64', undefined, 1 ); // $ExpectError
	f( x.length, 'float64', {}, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not a number (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatch( strided, types, data, 4, 0, 1 );
	f( x.length, 'float64', x, '10' ); // $ExpectError
	f( x.length, 'float64', x, true ); // $ExpectError
	f( x.length, 'float64', x, false ); // $ExpectError
	f( x.length, 'float64', x, null ); // $ExpectError
	f( x.length, 'float64', x, undefined ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 7, 1, 1 );
	f( '10', 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an array-like object (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 7, 1, 1 );
	f( x.length, 'float64', 10, 1, 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 7, 1, 1 );
	f( x.length, 'float64', x, '10', 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a sixth argument which is not an array-like object (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 7, 1, 1 );
	f( y.length, 'float64', x, 1, 'float64', 10, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a seventh argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 7, 1, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 10, 2, 1 );
	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 10, 2, 1 );
	f( x.length, 'float64', 10, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 10, 2, 1 );
	f( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a sixth argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 10, 2, 1 );
	f( y.length, 'float64', x, 1, 'float64', 10, 1, 'float64', z, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a seventh argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 10, 2, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, '10', 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ], 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a ninth argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 10, 2, 1 );
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', 10, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', true, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', false, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', null, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', undefined, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', {}, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a tenth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 10, 2, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 13, 3, 1 );
	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 13, 3, 1 );
	f( x.length, 'float64', 10, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 13, 3, 1 );
	f( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a sixth argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 13, 3, 1 );
	f( y.length, 'float64', x, 1, 'float64', 10, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a seventh argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 13, 3, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, '10', 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ], 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, 'float64', z, 1, 'float64', w, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a ninth argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 13, 3, 1 );
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', 10, 1, 'float64', w, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', true, 1, 'float64', w, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', false, 1, 'float64', w, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', null, 1, 'float64', w, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', undefined, 1, 'float64', w, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', {}, 1, 'float64', w, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a tenth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 13, 3, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10', 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [ '1' ], 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {}, 'float64', w, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x, 'float64', w, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a twelfth argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 13, 3, 1 );
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', 10, 1 ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', true, 1 ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', false, 1 ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', null, 1 ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', undefined, 1 ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', {}, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a thirteenth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 13, 3, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a first argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( x.length, 'float64', 10, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', true, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fourth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a sixth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( y.length, 'float64', x, 1, 'float64', 10, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a seventh argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, '10', 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [ '1' ], 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, 'float64', z, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a ninth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( z.length, x, 1, 'float64', y, 1, 'float64', 10, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', true, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', false, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', null, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', undefined, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( z.length, x, 1, 'float64', y, 1, 'float64', {}, 1, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a tenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10', 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [ '1' ], 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {}, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x, 'float64', w, 1, 'float64', u, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a twelfth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', 10, 1, 'float64', u, 1 ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', true, 1, 'float64', u, 1 ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', false, 1, 'float64', u, 1 ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', null, 1, 'float64', u, 1 ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', undefined, 1, 'float64', u, 1 ); // $ExpectError
	f( w.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', {}, 1, 'float64', u, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a thirteenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, '10', 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, true, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, false, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, null, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 'float64', undefined, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, [ '1' ], 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, {}, 'float64', u, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, ( x: number ): number => x, 'float64', u, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a fifteenth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', true, 1 ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', false, 1 ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', null, 1 ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', undefined, 1 ); // $ExpectError
	f( u.length, x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', {}, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a sixteenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 16, 4, 1 );
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1, 'float64', w, 1, 'float64', u, {} ); // $ExpectError
}

// The function supports returning a dispatch function which supports offsets...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );
	const w = new Float64Array( x.length );
	const u = new Float64Array( x.length );

	const t1 = [ 'float64' ];
	const d1 = [ nullary ];
	const f1 = dispatch( strided, t1, d1, 5, 1, 0 );
	f1( x.length, 'float64', x, 1, 0 ); // $ExpectType void | ArrayLike<any>

	const t2 = [ 'float64', 'float64' ];
	const d2 = [ unary ];
	const f2 = dispatch( strided, t2, d2, 9, 1, 1 );
	f2( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectType void | ArrayLike<any>

	const t3 = [ 'float64', 'float64', 'float64' ];
	const d3 = [ binary ];
	const f3 = dispatch( strided, t3, d3, 13, 2, 1 );
	f3( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectType void | ArrayLike<any>

	const t4 = [ 'float64', 'float64', 'float64', 'float64' ];
	const d4 = [ ternary ];
	const f4 = dispatch( strided, t4, d4, 17, 3, 1 );
	f4( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectType void | ArrayLike<any>

	const t5 = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const d5 = [ quaternary ];
	const f5 = dispatch( strided, t5, d5, 21, 4, 1 );
	f5( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectType void | ArrayLike<any>
}

// The compiler throws an error if the returned function supporting offsets is provided a first argument which is not a number (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatch( strided, types, data, 5, 0, 1 );
	f( '10', 'float64', x, 1, 0 ); // $ExpectError
	f( true, 'float64', x, 1, 0 ); // $ExpectError
	f( false, 'float64', x, 1, 0 ); // $ExpectError
	f( null, 'float64', x, 1, 0 ); // $ExpectError
	f( undefined, 'float64', x, 1, 0 ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0 ); // $ExpectError
	f( {}, 'float64', x, 1, 0 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a third argument which is not an array-like object (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );

	const f = dispatch( strided, types, data, 5, 0, 1 );
	f( x.length, 'float64', 10, 1, 0 ); // $ExpectError
	f( x.length, 'float64', true, 1, 0 ); // $ExpectError
	f( x.length, 'float64', false, 1, 0 ); // $ExpectError
	f( x.length, 'float64', null, 1, 0 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourth argument which is not a number (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatch( strided, types, data, 5, 0, 1 );
	f( x.length, 'float64', x, '10', 0 ); // $ExpectError
	f( x.length, 'float64', x, true, 0 ); // $ExpectError
	f( x.length, 'float64', x, false, 0 ); // $ExpectError
	f( x.length, 'float64', x, null, 0 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0 ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0 ); // $ExpectError
	f( x.length, 'float64', x, {}, 0 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifth argument which is not a number (1 strided array)...
{
	const types = [ 'float64' ];
	const data = [ nullary ];

	const x = new Float64Array( 10 );

	const f = dispatch( strided, types, data, 5, 0, 1 );
	f( x.length, 'float64', x, 1, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a first argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 9, 1, 1 );
	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a third argument which is not an array-like object (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 9, 1, 1 );
	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourth argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 9, 1, 1 );
	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifth argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 9, 1, 1 );
	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventh argument which is not an array-like object (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 9, 1, 1 );
	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eighth argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 9, 1, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a ninth argument which is not a number (2 strided arrays)...
{
	const types = [ 'float64', 'float64' ];
	const data = [ unary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );

	const f = dispatch( strided, types, data, 9, 1, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a first argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 13, 2, 1 );
	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a third argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 13, 2, 1 );
	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 13, 2, 1 );
	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 13, 2, 1 );
	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventh argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 13, 2, 1 );
	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eighth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 13, 2, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a ninth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 13, 2, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eleventh argument which is not an array-like object (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 13, 2, 1 );
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', 10, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a twelfth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 13, 2, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [ '1' ], 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a thirteenth argument which is not a number (3 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64' ];
	const data = [ binary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );

	const f = dispatch( strided, types, data, 13, 2, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a first argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a third argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventh argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eighth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a ninth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eleventh argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', 10, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0, 'float64', w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a twelfth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [ '1' ], 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0, 'float64', w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a thirteenth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10', 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [ '1' ], 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {}, 'float64', w, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x, 'float64', w, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifteenth argument which is not an array-like object (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', 10, 1, 0 ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', true, 1, 0 ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', false, 1, 0 ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', null, 1, 0 ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', undefined, 1, 0 ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a sixteenth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, '10', 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, true, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, false, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, null, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, undefined, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, [ '1' ], 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, {}, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventeenth argument which is not a number (4 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64' ];
	const data = [ ternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );

	const f = dispatch( strided, types, data, 17, 3, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, [ '1' ] ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a first argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( [ '1' ], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a third argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', 10, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fourth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, [ '1' ], 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, [ '1' ], 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventh argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( y.length, 'float64', x, 1, 0, 'float64', 10, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eighth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [ '1' ], 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a ninth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [ '1' ], 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided an eleventh argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', 10, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a twelfth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [ '1' ], 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a thirteenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10', 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [ '1' ], 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {}, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x, 'float64', w, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a fifteenth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', 10, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', true, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', false, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', null, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', undefined, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', {}, 1, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a sixteenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, '10', 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, true, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, false, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, null, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, undefined, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, [ '1' ], 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, {}, 0, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, ( x: number ): number => x, 0, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a seventeenth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, '10', 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, true, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, false, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, null, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, undefined, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, [ '1' ], 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, {}, 'float64', u, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, ( x: number ): number => x, 'float64', u, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a nineteenth argument which is not an array-like object (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', true, 1, 0 ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', false, 1, 0 ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', null, 1, 0 ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', undefined, 1, 0 ); // $ExpectError
	f( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a twentieth argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, true, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, false, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, null, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, undefined, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, {}, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function supporting offsets is provided a twenty-first argument which is not a number (5 strided arrays)...
{
	const types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	const data = [ quaternary ];

	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( y.length );
	const w = new Float64Array( z.length );
	const u = new Float64Array( w.length );

	const f = dispatch( strided, types, data, 21, 4, 1 );
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, {} ); // $ExpectError
}
