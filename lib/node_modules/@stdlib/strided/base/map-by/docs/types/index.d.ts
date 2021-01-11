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

import { Collection } from '@stdlib/types/object';

/**
* Returns an accessed value.
*
* @returns accessed value
*/
type NullaryCallback = () => any;

/**
* Returns an accessed value.
*
* @param value - array element
* @returns accessed value
*/
type UnaryCallback = ( value: any ) => any;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @returns accessed value
*/
type BinaryCallback = ( value: any, idx: number ) => any;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @returns accessed value
*/
type TertiaryCallback = ( value: any, idx: number, xi: number ) => any;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @param yi - strided index (offsetY + idx*strideY)
* @returns accessed value
*/
type QuaternaryCallback = ( value: any, idx: number, xi: number, yi: number ) => any; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @param yi - strided index (offsetY + idx*strideY)
* @param x - input array
* @returns accessed value
*/
type QuinaryCallback = ( value: any, idx: number, xi: number, yi: number, x: Collection ) => any; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @param yi - strided index (offsetY + idx*strideY)
* @param x - input array
* @param y - output array
* @returns accessed value
*/
type SenaryCallback = ( value: any, idx: number, xi: number, yi: number, x: Collection, y: Collection ) => any; // tslint-disable-line max-line-length

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @param yi - strided index (offsetY + idx*strideY)
* @param x - input array
* @param y - output array
* @returns accessed value
*/
type Callback = NullaryCallback | UnaryCallback | BinaryCallback | TertiaryCallback | QuaternaryCallback | QuinaryCallback | SenaryCallback; // tslint-disable-line max-line-length

/**
* Callback invoked for each indexed strided array element retrieved via a callback function.
*
* @param value - strided array element
* @returns result
*/
type Unary = ( value: number ) => number;

/**
* Interface describing `mapBy`.
*/
interface Routine {
	/**
	* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns each result to an element in a strided output array.
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
	( N: number, x: Collection, strideX: number, y: Collection, strideY: number, fcn: Unary, clbk: Callback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length

	/**
	* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns each result to an element in a strided output array using alternative indexing semantics.
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
	ndarray( N: number, x: Collection, strideX: number, offsetX: number, y: Collection, strideY: number, offsetY: number, fcn: Unary, clbk: Callback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length
}

/**
* Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns each result to an element in a strided output array.
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
