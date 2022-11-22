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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Collection } from '@stdlib/types/object';

/**
* Returns accessed values.
*
* @returns accessed values
*/
type Nullary = () => ArrayLike<number> | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @returns accessed values
*/
type Unary = ( values: Array<number> ) => ArrayLike<number> | void;

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @returns accessed values
*/
type Binary = ( values: Array<number>, idx: number ) => ArrayLike<number> | void; // tslint-disable-line max-line-length

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @returns accessed values
*/
type Ternary = ( values: Array<number>, idx: number, indices: Array<number> ) => ArrayLike<number> | void; // tslint-disable-line max-line-length

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed values
*/
type Quaternary = ( values: Array<number>, idx: number, indices: Array<number>, arrays: Array<Collection> ) => ArrayLike<number> | void; // tslint-disable-line max-line-length

/**
* Returns accessed values.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed values
*/
type Callback = Nullary | Unary | Binary | Ternary | Quaternary;

/**
* Interface describing `subBy`.
*/
interface Routine {
	/**
	* Performs element-wise subtraction of two strided arrays via a callback function and assigns each result to an element in an output strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* function accessor( values ) {
	*     return values;
	* }
	*
	* var x = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
	* var y = [ 8.0, 7.0, 6.0, 5.0, 4.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* subBy( x.length, x, 1, y, 1, z, 1, accessor );
	* // z => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	*/
	( N: number, x: Collection, strideX: number, y: Collection, strideY: number, z: Collection, strideZ: number, clbk: Callback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length

	/**
	* Performs element-wise subtraction of two strided arrays via a callback function and assigns each result to an element in an output strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - input array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param offsetZ - starting index for `z`
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* function accessor( values ) {
	*     return values;
	* }
	*
	* var x = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
	* var y = [ 8.0, 7.0, 6.0, 5.0, 4.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* subBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
	* // z => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
	*/
	ndarray( N: number, x: Collection, strideX: number, offsetX: number, y: Collection, strideY: number, offsetY: number, z: Collection, strideZ: number, offsetZ: number, clbk: Callback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length
}

/**
* Performs element-wise subtraction of two strided arrays via a callback function and assigns each result to an element in an output strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - input array
* @param strideY - `y` stride length
* @param z - destination array
* @param strideZ - `z` stride length
* @param clbk - callback function which returns an array-like object containing two values
* @param thisArg - callback execution context
* @returns `z`
*
* @example
* function accessor( values ) {
*     return values;
* }
*
* var x = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
* var y = [ 8.0, 7.0, 6.0, 5.0, 4.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* subBy( x.length, x, 1, y, 1, z, 1, accessor );
* // z => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
* @example
* function accessor( values ) {
*     return values;
* }
*
* var x = [ 11.0, 12.0, 13.0, 14.0, 15.0 ];
* var y = [ 8.0, 7.0, 6.0, 5.0, 4.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* subBy.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, accessor );
* // z => [ 3.0, 5.0, 7.0, 9.0, 11.0 ]
*/
declare var subBy: Routine;


// EXPORTS //

export = subBy;
