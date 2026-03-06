/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* @param x - output array
* @param strideX - `x` stride length
*/
function addon( N: number, dtypeX: number, x: Collection<number>, strideX: number ): void {
	let i;
	if ( dtypeX !== dtypeX ) {
		throw new Error( 'beep' );
	}
	for ( i = 0; i < N; i += 1 ) {
		x[ i * strideX ] = i;
	}
}

/**
* Fallback function.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - output array
* @param strideX - `x` stride length
*/
function fallback( N: number, dtypeX: any, x: Collection<number>, strideX: number ): void {
	let i;
	if ( dtypeX !== dtypeX ) {
		throw new Error( 'beep' );
	}
	for ( i = 0; i < N; i += 1 ) {
		x[ i * strideX ] = i;
	}
}

/**
* Fallback function with alternative indexing semantics.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - output array
* @param strideX - `x` stride length
* @param offsetX - starting `x` index
*/
function fallbackWithOffsets( N: number, dtypeX: any, x: Collection<number>, strideX: number, offsetX: number ): void {
	let i;
	if ( dtypeX !== dtypeX ) {
		throw new Error( 'beep' );
	}
	for ( i = 0; i < N; i += 1 ) {
		x[ offsetX + ( i * strideX ) ] = i;
	}
}


// TESTS //

// The function returns a dispatch function...
{
	dispatch( addon, fallback ); // $ExpectType Dispatcher<number>
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

	const f = dispatch( addon, fallback );

	f( x.length, 'float64', x, 1 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the returned function is not provided a first argument which is a number...
{
	const x = new Float64Array( 10 );

	const f = dispatch( addon, fallback );

	f( '10', 'float64', x, 1 ); // $ExpectError
	f( true, 'float64', x, 1 ); // $ExpectError
	f( false, 'float64', x, 1 ); // $ExpectError
	f( null, 'float64', x, 1 ); // $ExpectError
	f( undefined, 'float64', x, 1 ); // $ExpectError
	f( [], 'float64', x, 1 ); // $ExpectError
	f( {}, 'float64', x, 1 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a third argument which is a collection...
{
	const x = new Float64Array( 10 );

	const f = dispatch( addon, fallback );

	f( x.length, 'float64', true, 1 ); // $ExpectError
	f( x.length, 'float64', false, 1 ); // $ExpectError
	f( x.length, 'float64', null, 1 ); // $ExpectError
	f( x.length, 'float64', undefined, 1 ); // $ExpectError
	f( x.length, 'float64', {}, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a fourth argument which is a number...
{
	const x = new Float64Array( 10 );

	const f = dispatch( addon, fallback );

	f( x.length, 'float64', x, '10' ); // $ExpectError
	f( x.length, 'float64', x, true ); // $ExpectError
	f( x.length, 'float64', x, false ); // $ExpectError
	f( x.length, 'float64', x, null ); // $ExpectError
	f( x.length, 'float64', x, undefined ); // $ExpectError
	f( x.length, 'float64', x, [] ); // $ExpectError
	f( x.length, 'float64', x, {} ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x ); // $ExpectError
}

// Attached to the main export is an `ndarray` method which returns a dispatch function...
{
	dispatch.ndarray( addon, fallbackWithOffsets ); // $ExpectType DispatcherWithOffsets<number>
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

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', x, 1, 0 ); // $ExpectType Collection<number>
}

// The compiler throws an error if the returned function is not provided a first argument which is a number...
{
	const x = new Float64Array( 10 );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( '10', 'float64', x, 1, 0 ); // $ExpectError
	f( true, 'float64', x, 1, 0 ); // $ExpectError
	f( false, 'float64', x, 1, 0 ); // $ExpectError
	f( null, 'float64', x, 1, 0 ); // $ExpectError
	f( undefined, 'float64', x, 1, 0 ); // $ExpectError
	f( [], 'float64', x, 1, 0 ); // $ExpectError
	f( {}, 'float64', x, 1, 0 ); // $ExpectError
	f( ( x: number ): number => x, 'float64', x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a third argument which is a collection...
{
	const x = new Float64Array( 10 );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', true, 1, 0 ); // $ExpectError
	f( x.length, 'float64', false, 1, 0 ); // $ExpectError
	f( x.length, 'float64', null, 1, 0 ); // $ExpectError
	f( x.length, 'float64', undefined, 1, 0 ); // $ExpectError
	f( x.length, 'float64', {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a fourth argument which is a number...
{
	const x = new Float64Array( 10 );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', x, '10', 0 ); // $ExpectError
	f( x.length, 'float64', x, true, 0 ); // $ExpectError
	f( x.length, 'float64', x, false, 0 ); // $ExpectError
	f( x.length, 'float64', x, null, 0 ); // $ExpectError
	f( x.length, 'float64', x, undefined, 0 ); // $ExpectError
	f( x.length, 'float64', x, [], 0 ); // $ExpectError
	f( x.length, 'float64', x, {}, 0 ); // $ExpectError
	f( x.length, 'float64', x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the returned function is not provided a fifth argument which is a number...
{
	const x = new Float64Array( 10 );

	const f = dispatch.ndarray( addon, fallbackWithOffsets );

	f( x.length, 'float64', x, 1, '10' ); // $ExpectError
	f( x.length, 'float64', x, 1, true ); // $ExpectError
	f( x.length, 'float64', x, 1, false ); // $ExpectError
	f( x.length, 'float64', x, 1, null ); // $ExpectError
	f( x.length, 'float64', x, 1, undefined ); // $ExpectError
	f( x.length, 'float64', x, 1, [] ); // $ExpectError
	f( x.length, 'float64', x, 1, {} ); // $ExpectError
	f( x.length, 'float64', x, 1, ( x: number ): number => x ); // $ExpectError
}
