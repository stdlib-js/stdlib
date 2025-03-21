/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';
import dispatch = require( './index' );


// FUNCTIONS //

/**
* Add-on function.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type (enumeration constant)
* @param x - input array
* @param strideX - `x` stride length
* @param dtypeY - `y` data type (enumeration constant)
* @param y - input array
* @param strideY - `y` stride length
* @param dtypeZ - `z` data type (enumeration constant)
* @param z - output array
* @param strideZ - `z` stride length
*/
function addon( N: number, dtypeX: number, x: Collection<number>, strideX: number, dtypeY: number, y: Collection<number>, strideY: number, dtypeZ: number, z: Collection<number>, strideZ: number ): void {
	let i;
	if ( dtypeX !== dtypeY || dtypeY !== dtypeZ ) {
		throw new Error( 'beep' );
	}
	for ( i = 0; i < N; i += 1 ) {
		z[ i * strideZ ] = x[ i * strideX ] + y[ i * strideY ];
	}
}

/**
* Fallback function.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - input array
* @param strideX - `x` stride length
* @param dtypeY - `y` data type
* @param y - input array
* @param strideY - `y` stride length
* @param dtypeZ - `z` data type
* @param z - output array
* @param strideZ - `z` stride length
*/
function fallback( N: number, dtypeX: any, x: Collection<number>, strideX: number, dtypeY: any, y: Collection<number>, strideY: number, dtypeZ: number, z: Collection<number>, strideZ: number ): void {
	let i;
	if ( dtypeX !== dtypeY || dtypeY !== dtypeZ ) {
		throw new Error( 'beep' );
	}
	for ( i = 0; i < N; i += 1 ) {
		z[ i * strideZ ] = x[ i * strideX ] + y[ i * strideY ];
	}
}

/**
* Fallback function with alternative indexing semantics.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - input array
* @param strideX - `x` stride length
* @param offsetX - starting `x` index
* @param dtypeY - `y` data type
* @param y - input array
* @param strideY - `y` stride length
* @param offsetY - starting `y` index
* @param dtypeZ - `z` data type
* @param z - output array
* @param strideZ - `z` stride length
* @param offsetZ - starting `z` index
*/
function fallbackWithOffsets( N: number, dtypeX: any, x: Collection<number>, strideX: number, offsetX: number, dtypeY: any, y: Collection<number>, strideY: number, offsetY: number, dtypeZ: any, z: Collection<number>, strideZ: number, offsetZ: number ): void {
	let i;
	if ( dtypeX !== dtypeY || dtypeY !== dtypeZ ) {
		throw new Error( 'beep' );
	}
	for ( i = 0; i < N; i += 1 ) {
		z[ offsetZ + ( i * strideZ ) ] = x[ offsetX + ( i * strideX ) ] + y[ offsetY + ( i * strideY ) ];
	}
}


// TESTS //

// The function returns a dispatch function...
{
	dispatch( addon, fallback ); // $ExpectType Dispatcher<number, number, number>
}

// The compiler throws an error if not provided a first argument which is an add-on function...
{
	dispatch( '10', fallback ); // $ExpectError
	dispatch( 10, fallback ); // $ExpectError
	dispatch( true, fallback ); // $ExpectError
	dispatch( false, fallback ); // $ExpectError
	dispatch( null, fallback ); // $ExpectError
	dispatch( undefined, fallback ); // $ExpectError
	dispatch( [], fallback ); // $ExpectError
	dispatch( {}, fallback ); // $ExpectError
	dispatch( ( x: string ): string => x, fallback ); // $ExpectError
}

// The compiler throws an error if not provided a second argument which is a fallback function...
{
	dispatch( addon, '10' ); // $ExpectError
	dispatch( addon, 10 ); // $ExpectError
	dispatch( addon, true ); // $ExpectError
	dispatch( addon, false ); // $ExpectError
	dispatch( addon, null ); // $ExpectError
	dispatch( addon, undefined ); // $ExpectError
	dispatch( addon, [] ); // $ExpectError
	dispatch( addon, {} ); // $ExpectError
	dispatch( addon, ( x: string ): string => x ); // $ExpectError
}

// The returned function returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch( addon, fallback );

	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the returned function is not provided a first argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch( addon, fallback );

	f( '10', 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( true, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( false, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( null, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( undefined, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( [], 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( {}, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a third argument which is a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch( addon, fallback );

	f( x.length, 'float64', true, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', false, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', null, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a fourth argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch( addon, fallback );

	f( x.length, 'float64', x, '10', 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, true, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, false, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, null, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, [], 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, {}, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 'float64', y, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a sixth argument which is a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch( addon, fallback );

	f( y.length, 'float64', x, 1, 'float64', true, 1, 'float64', z, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', false, 1, 'float64', z, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', null, 1, 'float64', z, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', undefined, 1, 'float64', z, 1 ); // $ExpectError
	f( y.length, 'float64', x, 1, 'float64', {}, 1, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a seventh argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch( addon, fallback );

	f( x.length, 'float64', x, 1, 'float64', y, '10', 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, true, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, false, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, null, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, undefined, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, [], 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, {}, 'float64', z, 1 ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, ( x: number ): number => x, 'float64', z, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a ninth argument which is a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch( addon, fallback );

	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', true, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', false, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', null, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', undefined, 1 ); // $ExpectError
	f( z.length, 'float64', x, 1, 'float64', y, 1, 'float64', {}, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a tenth argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch( addon, fallback );

	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, [] ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 'float64', y, 1, 'float64', z, ( x: number ): number => x ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a dispatch function...
{
	dispatch.ndarray( addon, fallbackWithOffsets ); // $ExpectType DispatcherWithOffsets<number, number, number>
}

// The compiler throws an error if the `ndarray` method is not provided a first argument which is an add-on function...
{
	dispatch.ndarray( '10', fallbackWithOffsets ); // $ExpectError
	dispatch.ndarray( 10, fallbackWithOffsets ); // $ExpectError
	dispatch.ndarray( true, fallbackWithOffsets ); // $ExpectError
	dispatch.ndarray( false, fallbackWithOffsets ); // $ExpectError
	dispatch.ndarray( null, fallbackWithOffsets ); // $ExpectError
	dispatch.ndarray( undefined, fallbackWithOffsets ); // $ExpectError
	dispatch.ndarray( [], fallbackWithOffsets ); // $ExpectError
	dispatch.ndarray( {}, fallbackWithOffsets ); // $ExpectError
	dispatch.ndarray( ( x: string ): string => x, fallbackWithOffsets ); // $ExpectError
}

// The compiler throws an error if the `ndarray` method is not provided a second argument which is a fallback function...
{
	dispatch.ndarray( addon, '10' ); // $ExpectError
	dispatch.ndarray( addon, 10 ); // $ExpectError
	dispatch.ndarray( addon, true ); // $ExpectError
	dispatch.ndarray( addon, false ); // $ExpectError
	dispatch.ndarray( addon, null ); // $ExpectError
	dispatch.ndarray( addon, undefined ); // $ExpectError
	dispatch.ndarray( addon, [] ); // $ExpectError
	dispatch.ndarray( addon, {} ); // $ExpectError
	dispatch.ndarray( addon, ( x: string ): string => x ); // $ExpectError
}

// The `ndarray` method returns a function which returns a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the returned function is not provided a first argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( '10', 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( true, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( false, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( null, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( undefined, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( [], 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( {}, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a third argument which is a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', true, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', false, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', null, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a fourth argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', x, '10', 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, true, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, false, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, null, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, [], 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, {}, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a fifth argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', x, 1, '10', 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, true, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, false, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, null, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, [], 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, {}, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x, 'float64', y, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a seventh argument which is a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( y.length, 'float64', x, 1, 0, 'float64', true, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', false, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', null, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', undefined, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( y.length, 'float64', x, 1, 0, 'float64', {}, 1, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided an eighth argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', x, 1, 0, 'float64', y, '10', 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, true, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, false, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, null, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, undefined, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, [], 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, {}, 0, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, ( x: number ): number => x, 0, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a ninth argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, '10', 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, true, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, false, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, null, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, undefined, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, [], 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, {}, 'float64', z, 1, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, ( x: number ): number => x, 'float64', z, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided an eleventh argument which is a collection...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', true, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', false, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', null, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', undefined, 1, 0 ); // $ExpectError
	f( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a twelfth argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, '10', 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, true, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, false, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, null, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, undefined, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, [], 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, {}, 0 ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a thirteenth argument which is a number...
{
	const x = new Float64Array( 10 );
	const y = new Float64Array( x.length );
	const z = new Float64Array( x.length );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, [] ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, ( x: number ): number => x ); // $ExpectError
}
