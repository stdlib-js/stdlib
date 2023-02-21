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
* Returns an accessed value.
*
* @returns accessed value
*/
type Nullary = () => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @returns accessed value
*/
type Unary = ( value: any ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @returns accessed value
*/
type Binary = ( value: any, idx: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @returns accessed value
*/
type Ternary = ( value: any, idx: number, xi: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @param yi - strided index (offsetY + idx*strideY)
* @returns accessed value
*/
type Quaternary = ( value: any, idx: number, xi: number, yi: number ) => number | void; // tslint-disable-line max-line-length

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
type Quinary = ( value: any, idx: number, xi: number, yi: number, x: Collection ) => number | void; // tslint-disable-line max-line-length

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
type Senary = ( value: any, idx: number, xi: number, yi: number, x: Collection, y: Collection ) => number | void; // tslint-disable-line max-line-length

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
type Callback = Nullary | Unary | Binary | Ternary | Quaternary | Quinary | Senary; // tslint-disable-line max-line-length

/**
* Interface describing `sinBy`.
*/
interface Routine {
	/**
	* Computes the sine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 3.14, -3.14, 10.0, -15.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* sinBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 0.0, ~0.002, ~-0.002, ~-0.544, ~-0.65 ]
	*/
	( N: number, x: Collection, strideX: number, y: Collection, strideY: number, clbk: Callback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length

	/**
	* Computes the sine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y` using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting index for `x`
	* @param y - destination array
	* @param strideY - `y` stride length
	* @param offsetY - starting index for `y`
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns `y`
	*
	* @example
	* function accessor( v ) {
	*     return v;
	* }
	*
	* var x = [ 0.0, 3.14, -3.14, 10.0, -15.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* sinBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 0.0, ~0.002, ~-0.002, ~-0.544, ~-0.65 ]
	*/
	ndarray( N: number, x: Collection, strideX: number, offsetX: number, y: Collection, strideY: number, offsetY: number, clbk: Callback, thisArg?: any ): Collection; // tslint:disable-line:max-line-length
}

/**
* Computes the sine of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param y - destination array
* @param strideY - `y` stride length
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns `y`
*
* @example
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 0.0, 3.14, -3.14, 10.0, -15.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* sinBy( x.length, x, 1, y, 1, accessor );
* // y => [ 0.0, ~0.002, ~-0.002, ~-0.544, ~-0.65 ]
*
* @example
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 0.0, 3.14, -3.14, 10.0, -15.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* sinBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
* // y => [ 0.0, ~0.002, ~-0.002, ~-0.544, ~-0.65 ]
*/
declare var sinBy: Routine;


// EXPORTS //

export = sinBy;
