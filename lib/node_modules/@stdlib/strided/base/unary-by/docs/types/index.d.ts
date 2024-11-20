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
import { Shape1D } from '@stdlib/types/ndarray';

/**
* Returns the accessed value.
*
* @returns accessed value
*/
type NullaryCallback<U, W> = ( this: W ) => U;

/**
* Returns the accessed value.
*
* @param value - array element value
* @returns accessed value
*/
type UnaryCallback<T, U, W> = ( this: W, value: T ) => U;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @returns accessed value
*/
type BinaryCallback<T, U, W> = ( this: W, value: T, idx: number ) => U;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @returns accessed value
*/
type TernaryCallback<T, U, W> = ( this: W, value: T, idx: number, indices: Array<number> ) => U;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed value
*/
type QuaternaryCallback<T, U, V, W> = ( this: W, value: T, idx: number, indices: Array<number>, arrays: [ Collection<T>, Collection<V> ] ) => U;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed value
*/
type Callback<T, U, V, W> = NullaryCallback<U, W>  | UnaryCallback<T, U, W> | BinaryCallback<T, U, W> | TernaryCallback<T, U, W> | QuaternaryCallback<T, U, V, W>;

/**
* Callback invoked for each indexed strided array element retrieved via a callback function.
*
* @param value - strided array element
* @returns result
*/
type Unary<U, V> = ( value: U ) => V;

/**
* Interface describing `unaryBy`.
*/
interface Routine {
	/**
	* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
	*
	* @param arrays - array-like object containing one input array and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the input and output arrays
	* @param fcn - unary function to apply to callback return values
	* @param clbk - callback function
	* @param thisArg - callback execution context
	*
	* @example
	* var abs = require( '@stdlib/math/base/special/abs' );
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1 ];
	*
	* unaryBy( [ x, y ], shape, strides, abs, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	<T = unknown, U = unknown, V = unknown, W = unknown>( arrays: [ Collection<T>, Collection<V> ], shape: Shape1D, strides: Collection<number>, fcn: Unary<U, V>, clbk: Callback<T, U, V, W>, thisArg?: ThisParameterType<Callback<T, U, V, W>> ): void;

	/**
	* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array using alternative indexing semantics.
	*
	* @param arrays - array-like object containing one input array and one output array
	* @param shape - array-like object containing a single element, the number of indexed elements
	* @param strides - array-like object containing the stride lengths for the input and output arrays
	* @param offsets - array-like object containing the starting indices (i.e., index offsets) for the input and output arrays
	* @param fcn - unary function to apply to callback return values
	* @param clbk - callback function
	* @param thisArg - callback execution context
	*
	* @example
	* var abs = require( '@stdlib/math/base/special/abs' );
	*
	* function accessor( v ) {
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* var shape = [ x.length ];
	* var strides = [ 1, 1 ];
	* var offsets = [ 0, 0 ];
	*
	* unaryBy.ndarray( x.length, x, 1, 0, y, 1, 0, abs, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	ndarray<T = unknown, U = unknown, V = unknown, W = unknown>( arrays: [ Collection<T>, Collection<V> ], shape: Shape1D, strides: Collection<number>, offsets: Collection<number>, fcn: Unary<U, V>, clbk: Callback<T, U, V, W>, thisArg?: ThisParameterType<Callback<T, U, V, W>> ): void;
}

/**
* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns results to a strided output array.
*
* @param arrays - array-like object containing one input array and one output array
* @param shape - array-like object containing a single element, the number of indexed elements
* @param strides - array-like object containing the stride lengths for the input and output arrays
* @param fcn - unary function to apply to callback return values
* @param clbk - callback function
* @param thisArg - callback execution context
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* var shape = [ x.length ];
* var strides = [ 1, 1 ];
*
* unaryBy( [ x, y ], shape, strides, abs, accessor );
* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*
* @example
* var abs = require( '@stdlib/math/base/special/abs' );
*
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* var shape = [ x.length ];
* var strides = [ 1, 1 ];
* var offsets = [ 0, 0 ];
*
* unaryBy.ndarray( [ x, y ], shape, strides, offsets, abs, accessor );
* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
declare var unaryBy: Routine;


// EXPORTS //

export = unaryBy;
