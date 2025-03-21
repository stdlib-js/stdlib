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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/array';

/**
* Add-on function.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type (enumeration constant)
* @param x - input array
* @param strideX - `x` stride length
* @param dtypeMask - `mask` data type (enumeration constant)
* @param mask - mask array
* @param strideMask - `mask` stride length
* @param dtypeY - `y` data type (enumeration constant)
* @param y - output array
* @param strideY - `y` stride length
*
* @example
* function addon( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
*     // Call into native add-on...
* }
*/
type AddonFcn<T, U, V> = ( N: number, dtypeX: number, x: Collection<T>, strideX: number, dtypeMask: number, mask: Collection<number>, strideMask: number, dtypeY: number, y: Collection<U>, strideY: number ) => V;

/**
* Fallback function.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - input array
* @param strideX - `x` stride length
* @param dtypeMask - `mask` data type (enumeration constant)
* @param mask - mask array
* @param strideMask - `mask` stride length
* @param dtypeY - `y` data type
* @param y - output array
* @param strideY - `y` stride length
*
* @example
* function fallback( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
*     // Fallback JavaScript implementation...
* }
*/
type FallbackFcn<T, U, V> = ( N: number, dtypeX: any, x: Collection<T>, strideX: number, dtypeMask: number, mask: Collection<number>, strideMask: number, dtypeY: any, y: Collection<U>, strideY: number ) => V;

/**
* Fallback function supporting alternative indexing semantics.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - input array
* @param strideX - `x` stride length
* @param offsetX - starting `x` index
* @param dtypeMask - `mask` data type
* @param mask - mask array
* @param strideMask - `mask` stride length
* @param offsetMask - starting `mask` index
* @param dtypeY - `y` data type
* @param y - output array
* @param strideY - `y` stride length
* @param offsetY - starting `y` index
*
* @example
* function fallback( N, dtypeX, x, strideX, offsetX, dtypeMask, mask, strideMask, offsetMask, dtypeY, y, strideY, offsetY ) {
*     // Fallback JavaScript implementation...
* }
*/
type FallbackFcnWithOffsets<T, U, V> = ( N: number, dtypeX: any, x: Collection<T>, strideX: number, offsetX: number, dtypeMask: any, mask: Collection<number>, strideMask: number, offsetMask: number, dtypeY: any, y: Collection<U>, strideY: number, offsetY: number ) => V;

/**
* Dispatches to a native add-on.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - input array
* @param strideX - `x` stride length
* @param dtypeMask - `mask` data type
* @param mask - mask array
* @param strideMask - `mask` stride length
* @param dtypeY - `y` data type
* @param y - destination array
* @param strideY - `y` stride length
* @returns `y`
*/
type Dispatcher<T, U> = ( N: number, dtypeX: any, x: Collection<T>, strideX: number, dtypeMask: any, mask: Collection<number>, strideMask: number, dtypeY: any, y: Collection<U>, strideY: number ) => Collection<U>;

/**
* Dispatches to a native add-on.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - input array
* @param strideX - `x` stride length
* @param offsetX - starting `x` index
* @param dtypeMask - `mask` data type
* @param mask - mask array
* @param strideMask - `mask` stride length
* @param offsetMask - starting `mask` index
* @param dtypeY - `y` data type
* @param y - destination array
* @param strideY - `y` stride length
* @param offsetY - starting `y` index
* @returns `y`
*/
type DispatcherWithOffsets<T, U> = ( N: number, dtypeX: any, x: Collection<T>, strideX: number, offsetX: number, dtypeMask: any, mask: Collection<number>, strideMask: number, offsetMask: number, dtypeY: any, y: Collection<U>, strideY: number, offsetY: number ) => Collection<U>;

/**
* Interface for creating a native add-on dispatcher.
*/
interface Dispatch {
	/**
	* Returns a function which dispatches to a native add-on applying a unary function to an input strided array according to a mask strided array.
	*
	* @param addon - add-on function
	* @param fallback - fallback function
	* @returns dispatch function
	*
	* @example
	* function addon( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a dispatch function:
	* var f = dispatch( addon, fallback );
	*
	* // ...
	*
	* // Invoke the dispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 'generic', [ 0, 0 ], 1, 'generic', [ 0, 0 ], 1 );
	*/
	<T = unknown, U = unknown, V = unknown>( addon: AddonFcn<T, U, V>, fallback: FallbackFcn<T, U, V> ): Dispatcher<T, U>;

	/**
	* Returns a function which dispatches to a native add-on applying a unary function to an input strided array according to a mask strided array using alternative indexing semantics.
	*
	* @param addon - add-on function
	* @param fallback - fallback function
	* @returns dispatch function
	*
	* @example
	* function addon( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, offsetX, dtypeMask, mask, strideMask, offsetMask, dtypeY, y, strideY, offsetY ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a dispatch function:
	* var f = dispatch.ndarray( addon, fallback );
	*
	* // ...
	*
	* // Invoke the dispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 0, 'generic', [ 0, 0 ], 1, 0, 'generic', [ 0, 0 ], 1, 0 );
	*/
	ndarray<T = unknown, U = unknown, V = unknown>( addon: AddonFcn<T, U, V>, fallback: FallbackFcnWithOffsets<T, U, V> ): DispatcherWithOffsets<T, U>;
}

/**
* Returns a function which dispatches to a native add-on applying a unary function to an input strided array according to a mask strided array.
*
* @param addon - add-on function
* @param fallback - fallback function
* @returns dispatch function
*
* @example
* function addon( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
*     // Call into native add-on...
* }
*
* function fallback( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with strided array arguments:
* f( 2, 'generic', [ 1, 2 ], 1, 'generic', [ 0, 0 ], 1, 'generic', [ 0, 0 ], 1 );
*
* @example
* function addon( N, dtypeX, x, strideX, dtypeMask, mask, strideMask, dtypeY, y, strideY ) {
*     // Call into native add-on...
* }
*
* function fallback( N, dtypeX, x, strideX, offsetX, dtypeMask, mask, strideMask, offsetMask, dtypeY, y, strideY, offsetY ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch.ndarray( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with strided array arguments:
* f( 2, 'generic', [ 1, 2 ], 1, 0, 'generic', [ 0, 0 ], 1, 0, 'generic', [ 0, 0 ], 1, 0 );
*/
declare var dispatch: Dispatch;


// EXPORTS //

export = dispatch;
