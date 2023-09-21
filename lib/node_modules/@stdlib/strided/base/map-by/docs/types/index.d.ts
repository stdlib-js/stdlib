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

import { Collection } from '@stdlib/types/array';

/**
* Returns the accessed value.
*
* @returns accessed value
*/
type NullaryCallback<V, W> = ( this: W ) => V;

/**
* Returns the accessed value.
*
* @param value - array element value
* @returns accessed value
*/
type UnaryCallback<U, V, W> = ( this: W, value: U ) => V;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @returns accessed value
*/
type BinaryCallback<U, V, W> = ( this: W, value: U, idx: number ) => V;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @returns accessed value
*/
type TernaryCallback<U, V, W> = ( this: W, value: U, idx: number, indices: Array<number> ) => V;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed value
*/
type QuaternaryCallback<T, U, V, W> = ( this: W, value: U, idx: number, indices: Array<number>, arrays: [ Collection<T>, Collection<V> ] ) => V;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed value
*/
type Callback<T, U, V, W> = NullaryCallback<V, W> | UnaryCallback<U, V, W> | BinaryCallback<U, V, W> | TernaryCallback<U, V, W> | QuaternaryCallback<T, U, V, W>;

/**
* Callback invoked for each indexed strided array element retrieved via a callback function.
*
* @param value - strided array element
* @returns result
*/
type Unary<T, U> = ( value: T ) => U;

/**
* Interface describing `mapBy`.
*/
interface Routine {
	/**
	* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param fcn - unary function to apply to callback return values
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* mapBy( x.length, x, 1, y, 1, abs, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	<T = unknown, U = unknown, V = unknown, W = unknown>( N: number, x: Collection<T>, strideX: number, y: Collection<V>, strideY: number, fcn: Unary<T, U>, clbk: Callback<T, U, V, W>, thisArg?: ThisParameterType<Callback<T, U, V, W>> ): Collection<V>;

	/**
	* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param fcn - unary function to apply to callback return values
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* var abs = require( `@stdlib/math/base/special/abs` );
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, abs, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	ndarray<T = unknown, U = unknown, V = unknown, W = unknown>( N: number, x: Collection<T>, strideX: number, offsetX: number, y: Collection<V>, strideY: number, offsetY: number, fcn: Unary<T, U>, clbk: Callback<T, U, V, W>, thisArg?: ThisParameterType<Callback<T, U, V, W>> ): Collection<V>;
}

/**
* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @param fcn - unary function to apply to callback return values
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns `y`
*
* @example
* var abs = require( `@stdlib/math/base/special/abs` );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy( x.length, x, 1, y, 1, abs, accessor );
* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*
* @example
* var abs = require( `@stdlib/math/base/special/abs` );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, abs, accessor );
* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
declare var mapBy: Routine;


// EXPORTS //

export = mapBy;
