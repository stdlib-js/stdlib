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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { Collection } from '@stdlib/types/object';

/**
* Returns an accessed value.
*
* @returns accessed values
*/
type NullaryCallback = () => ArrayLike<any> | void;

/**
* Returns an accessed value.
*
* @param values - array element values
* @returns accessed values
*/
type UnaryCallback = ( values: Array<any> ) => ArrayLike<any> | void;

/**
* Returns an accessed value.
*
* @param values - array element values
* @param idx - iteration index
* @returns accessed values
*/
type BinaryCallback = ( values: Array<any>, idx: number ) => ArrayLike<any> | void; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @returns accessed values
*/
type TernaryCallback = ( values: Array<any>, idx: number, indices: Array<number> ) => ArrayLike<any> | void; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed values
*/
type QuaternaryCallback = ( values: Array<any>, idx: number, indices: Array<number>, arrays: Array<Collection> ) => ArrayLike<any> | void; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param values - array element values
* @param idx - iteration index
* @param indices - strided indices (offset + idx*stride)
* @param arrays - input and output arrays
* @returns accessed values
*/
type Callback = NullaryCallback | UnaryCallback | BinaryCallback | TernaryCallback | QuaternaryCallback; // tslint-disable-line max-line-length

/**
* Callback invoked for each pair of indexed strided array elements retrieved via a callback function.
*
* @param v1 - strided array element
* @param v2 - strided array element
* @returns result
*/
type Binary = ( v1: any, v2: any ) => any;

/**
* Interface describing `mapBy2`.
*/
interface Routine {
	/**
	* Applies a binary function to each pair of elements retrieved from strided input arrays according to a callback function and assigns results to a strided output array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - input array
	* @param strideY - `y` stride length
	* @param z - destination array
	* @param strideZ - `z` stride length
	* @param fcn - binary function to apply to callback return values
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* var add = require( `@stdlib/math/base/ops/add` );
	*
	* function accessor( values ) {
	*     values[ 0 ] *= 2.0;
	*     values[ 1 ] *= 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* mapBy2( x.length, x, 1, y, 1, z, 1, add, accessor );
	* // z => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
	*/
	( N: number, x: Collection, strideX: number, y: Collection, strideY: number, z: Collection, strideZ: number, fcn: Binary, clbk: Callback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length

	/**
	* Applies a binary function to each pair of elements retrieved from strided input arrays according to a callback function and assigns results to a strided output array using alternative indexing semantics.
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
	* @param fcn - binary function to apply to callback return values
	* @param clbk - callback function which returns an array-like object containing two values
	* @param thisArg - callback execution context
	* @returns `z`
	*
	* @example
	* var add = require( `@stdlib/math/base/ops/add` );
	*
	* function accessor( values ) {
	*     values[ 0 ] *= 2.0;
	*     values[ 1 ] *= 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	* // z => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
	*/
	ndarray( N: number, x: Collection, strideX: number, offsetX: number, y: Collection, strideY: number, offsetY: number, z: Collection, strideZ: number, offsetZ: number, fcn: Binary, clbk: Callback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length
}

/**
* Applies a binary function to each pair of elements retrieved from strided input arrays according to a callback function and assigns results to a strided output array
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - input array
* @param strideY - `y` stride length
* @param z - destination array
* @param strideZ - `z` stride length
* @param fcn - binary function to apply to callback return values
* @param clbk - callback function which returns an array-like object containing two values
* @param thisArg - callback execution context
* @returns `z`
*
* @example
* var add = require( `@stdlib/math/base/ops/add` );
*
* function accessor( values ) {
*     values[ 0 ] *= 2.0;
*     values[ 1 ] *= 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy2( x.length, x, 1, y, 1, z, 1, add, accessor );
* // z => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
*
* @example
* var add = require( `@stdlib/math/base/ops/add` );
*
* function accessor( values ) {
*     values[ 0 ] *= 2.0;
*     values[ 1 ] *= 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* mapBy2.ndarray( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
* // z => [ 4.0, 0.0, 12.0, 0.0, 20.0 ]
*/
declare var mapBy2: Routine;


// EXPORTS //

export = mapBy2;
