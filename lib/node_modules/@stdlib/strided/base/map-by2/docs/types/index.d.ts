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
* @returns accessed value
*/
type NullaryCallback = () => ArrayLike<any>;

/**
* Returns an accessed value.
*
* @param vx - array element
* @returns accessed value
*/
type UnaryCallback = ( vx: any ) => ArrayLike<any>;

/**
* Returns an accessed value.
*
* @param vx - array element
* @param vy - array element
* @returns accessed value
*/
type BinaryCallback = ( vx: any, vy: any ) => ArrayLike<any>;

/**
* Returns an accessed value.
*
* @param vx - array element
* @param vy - array element
* @param idx - iteration index
* @returns accessed value
*/
type TernaryCallback = ( vx: any, vy: any, idx: number ) => ArrayLike<any>;

/**
* Returns an accessed value.
*
* @param vx - array element
* @param vy - array element
* @param idx - iteration index
* @param ix - strided index (offsetX + idx*strideX)
* @returns accessed value
*/
type QuaternaryCallback = ( vx: any, vy: any, idx: number, ix: number ) => ArrayLike<any>; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param vx - array element
* @param vy - array element
* @param idx - iteration index
* @param ix - strided index (offsetX + idx*strideX)
* @param iy - strided index (offsetY + idx*strideY)
* @returns accessed value
*/
type QuinaryCallback = ( vx: any, vy: any, idx: number, ix: number, iy: number ) => ArrayLike<any>; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param vx - array element
* @param vy - array element
* @param idx - iteration index
* @param ix - strided index (offsetX + idx*strideX)
* @param iy - strided index (offsetY + idx*strideY)
* @param iz - strided index (offsetZ + idx*strideZ)
* @returns accessed value
*/
type SenaryCallback = ( vx: any, vy: any, idx: number, ix: number, iy: number, iz: number ) => ArrayLike<any>; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param vx - array element
* @param vy - array element
* @param idx - iteration index
* @param ix - strided index (offsetX + idx*strideX)
* @param iy - strided index (offsetY + idx*strideY)
* @param iz - strided index (offsetZ + idx*strideZ)
* @param x - input array
* @returns accessed value
*/
type SeptenaryCallback = ( vx: any, vy: any, idx: number, ix: number, iy: number, iz: number, x: Collection ) => ArrayLike<any>; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param vx - array element
* @param vy - array element
* @param idx - iteration index
* @param ix - strided index (offsetX + idx*strideX)
* @param iy - strided index (offsetY + idx*strideY)
* @param iz - strided index (offsetZ + idx*strideZ)
* @param x - input array
* @param y - input array
* @returns accessed value
*/
type OctonaryCallback = ( vx: any, vy: any, idx: number, ix: number, iy: number, iz: number, x: Collection, y: Collection ) => ArrayLike<any>; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param vx - array element
* @param vy - array element
* @param idx - iteration index
* @param ix - strided index (offsetX + idx*strideX)
* @param iy - strided index (offsetY + idx*strideY)
* @param iz - strided index (offsetZ + idx*strideZ)
* @param x - input array
* @param y - input array
* @param z - output array
* @returns accessed value
*/
type NovenaryCallback = ( vx: any, vy: any, idx: number, ix: number, iy: number, iz: number, x: Collection, y: Collection, z: Collection ) => ArrayLike<any>; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param vx - array element
* @param vy - array element
* @param idx - iteration index
* @param ix - strided index (offsetX + idx*strideX)
* @param iy - strided index (offsetY + idx*strideY)
* @param iz - strided index (offsetZ + idx*strideZ)
* @param x - input array
* @param y - input array
* @param z - output array
* @returns accessed value
*/
type Callback = NullaryCallback | UnaryCallback | BinaryCallback | TernaryCallback | QuaternaryCallback | QuinaryCallback | SenaryCallback | SeptenaryCallback | OctonaryCallback | NovenaryCallback; // tslint-disable-line max-line-length

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
	* function accessor( v1, v2 ) {
	*     return [ v1*2.0, v2*2.0 ];
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
	* function accessor( v1, v2 ) {
	*     return [ v1*2.0, v2*2.0 ];
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
* function accessor( v1, v2 ) {
*     return [ v1*2.0, v2*2.0 ];
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
* function accessor( v1, v2 ) {
*     return [ v1*2.0, v2*2.0 ];
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
