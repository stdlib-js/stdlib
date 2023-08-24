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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/object';

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
*
* @example
* function addon( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
*     // Call into native add-on...
* }
*/
type AddonFcn = ( N: number, dtypeX: number, x: Collection, strideX: number, dtypeY: number, y: Collection, strideY: number, dtypeZ: number, z: Collection, strideZ: number ) => any; // tslint:disable-line:max-line-length

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
*
* @example
* function fallback( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
*     // Fallback JavaScript implementation...
* }
*/
type FallbackFcn = ( N: number, dtypeX: any, x: Collection, strideX: number, dtypeY: any, y: Collection, strideY: number, dtypeZ: any, z: Collection, strideZ: number ) => any; // tslint:disable-line:max-line-length

/**
* Fallback function supporting alternative indexing semantics.
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
*
* @example
* function fallback( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY, dtypeZ, z, strideZ, offsetZ ) {
*     // Fallback JavaScript implementation...
* }
*/
type FallbackFcnWithOffsets = ( N: number, dtypeX: any, x: Collection, strideX: number, offsetX: number, dtypeY: any, y: Collection, strideY: number, offsetY: number, dtypeZ: any, z: Collection, strideZ: number, offsetZ: number ) => any; // tslint:disable-line:max-line-length

/**
* Dispatches to a native add-on.
*
* @param N - number of indexed elements
* @param dtypeX - `x` data type
* @param x - input array
* @param strideX - `x` stride length
* @param dtypeY - `y` data type
* @param y - input array
* @param strideY - `y` stride length
* @param dtypeZ - `z` data type
* @param z - destination array
* @param strideZ - `z` stride length
* @returns `z`
*/
type Dispatcher = ( N: number, dtypeX: any, x: Collection, strideX: number, dtypeY: any, y: Collection, strideY: number, dtypeZ: any, z: Collection, strideZ: number ) => Collection; // tslint:disable-line:max-line-length

/**
* Dispatches to a native add-on.
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
* @param z - destination array
* @param strideZ - `z` stride length
* @param offsetZ - starting `z` index
* @returns `z`
*/
type DispatcherWithOffsets = ( N: number, dtypeX: any, x: Collection, strideX: number, offsetX: number, dtypeY: any, y: Collection, strideY: number, offsetY: number, dtypeZ: any, z: Collection, strideZ: number, offsetZ: number ) => Collection; // tslint:disable-line:max-line-length

/**
* Interface for creating a native add-on dispatcher.
*/
interface Dispatch {
	/**
	* Returns a function which dispatches to a native add-on applying a binary function to two input strided arrays.
	*
	* @param addon - add-on function
	* @param fallback - fallback function
	* @returns dispatch function
	*
	* @example
	* function addon( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypez, z, strideZ ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypez, z, strideZ ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a dispatch function:
	* var f = dispatch( addon, fallback );
	*
	* // ...
	*
	* // Invoke the dispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 'generic', [ 3, 4 ], 1, 'generic', [ 0, 0 ], 1 );
	*/
	( addon: AddonFcn, fallback: FallbackFcn ): Dispatcher;

	/**
	* Returns a function which dispatches to a native add-on applying a binary function to two input strided arrays using alternative indexing semantics.
	*
	* @param addon - add-on function
	* @param fallback - fallback function
	* @returns dispatch function
	*
	* @example
	* function addon( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
	*     // Call into native add-on...
	* }
	*
	* function fallback( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY, dtypeZ, z, strideZ, offsetZ ) {
	*     // Fallback JavaScript implementation...
	* }
	*
	* // Create a dispatch function:
	* var f = dispatch.ndarray( addon, fallback );
	*
	* // ...
	*
	* // Invoke the dispatch function with strided array arguments:
	* f( 2, 'generic', [ 1, 2 ], 1, 0, 'generic', [ 3, 4 ], 1, 0, 'generic', [ 0, 0 ], 1, 0 );
	*/
	ndarray( addon: AddonFcn, fallback: FallbackFcnWithOffsets ): DispatcherWithOffsets; // tslint:disable-line:max-line-length
}

/**
* Returns a function which dispatches to a native add-on applying a unary function to two input strided arrays.
*
* @param addon - add-on function
* @param fallback - fallback function
* @returns dispatch function
*
* @example
* function addon( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
*     // Call into native add-on...
* }
*
* function fallback( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with strided array arguments:
* f( 2, 'generic', [ 1, 2 ], 1, 'generic', [ 3, 4 ], 1, 'generic', [ 0, 0 ], 1 );
*
* @example
* function addon( N, dtypeX, x, strideX, dtypeY, y, strideY, dtypeZ, z, strideZ ) {
*     // Call into native add-on...
* }
*
* function fallback( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY, dtypeZ, z, strideZ, offsetZ ) {
*     // Fallback JavaScript implementation...
* }
*
* // Create a dispatch function:
* var f = dispatch.ndarray( addon, fallback );
*
* // ...
*
* // Invoke the dispatch function with strided array arguments:
* f( 2, 'generic', [ 1, 2 ], 1, 0, 'generic', [ 3, 4 ], 1, 0, 'generic', [ 0, 0 ], 1, 0 );
*/
declare var dispatch: Dispatch;


// EXPORTS //

export = dispatch;
