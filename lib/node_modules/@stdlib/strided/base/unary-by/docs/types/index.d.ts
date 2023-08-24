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

import { Collection } from '@stdlib/types/object';

/**
* Returns the accessed value.
*
* @returns accessed value
*/
type NullaryCallback = () => any;

/**
* Returns the accessed value.
*
* @param value - array element value
* @returns accessed value
*/
type UnaryCallback = ( value: any ) => any;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @returns accessed value
*/
type BinaryCallback = ( value: any, idx: number ) => any;

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @returns accessed value
*/
type TernaryCallback = ( value: any, idx: number, indices: Array<number> ) => any; // tslint-disable-line max-line-length

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed value
*/
type QuaternaryCallback = ( value: any, idx: number, indices: Array<number>, arrays: Array<Collection> ) => any; // tslint-disable-line max-line-length

/**
* Returns the accessed value.
*
* @param value - array element value
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed value
*/
type Callback = NullaryCallback | UnaryCallback | BinaryCallback | TernaryCallback | QuaternaryCallback; // tslint-disable-line max-line-length

/**
* Callback invoked for each indexed strided array element retrieved via a callback function.
*
* @param value - strided array element
* @returns result
*/
type Unary = ( value: any ) => any;

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
	* var abs = require( `@stdlib/math/base/special/abs` );
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
	( arrays: ArrayLike<ArrayLike<any>>, shape: ArrayLike<number>, strides: ArrayLike<number>, fcn: Unary, clbk: Callback, thisArg?: any ): void; // tslint:disable-line:max-line-length

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
	* var abs = require( `@stdlib/math/base/special/abs` );
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
	ndarray( arrays: ArrayLike<ArrayLike<any>>, shape: ArrayLike<number>, strides: ArrayLike<number>, offsets: ArrayLike<number>, fcn: Unary, clbk: Callback, thisArg?: any ): void; // tslint:disable-line:max-line-length
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
* var abs = require( `@stdlib/math/base/special/abs` );
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
* var abs = require( `@stdlib/math/base/special/abs` );
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
