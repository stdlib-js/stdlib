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

import { Collection } from '@stdlib/types/array';

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
type Unary<T> = ( value: T ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @returns accessed value
*/
type Binary<T> = ( value: T, idx: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @returns accessed value
*/
type Ternary<T> = ( value: T, idx: number, xi: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @param yi - strided index (offsetY + idx*strideY)
* @returns accessed value
*/
type Quaternary<T> = ( value: T, idx: number, xi: number, yi: number ) => number | void;
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
type Quinary<T> = ( value: T, idx: number, xi: number, yi: number, x: Collection<T> ) => number | void;
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
type Senary<T, U> = ( value: T, idx: number, xi: number, yi: number, x: Collection<T>, y: Collection<U> ) => number | void;
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
type Callback<T, U> = Nullary | Unary<T> | Binary<T> | Ternary<T> | Quaternary<T> | Quinary<T> | Senary<T, U>;

/**
* Interface describing `absBy`.
*/
interface Routine {
	/**
	* Computes the absolute value of each element retrieved from a strided input array `x` via a callback function and assigns each result to an element in a strided output array `y`.
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
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* absBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	<T = unknown, U = unknown>( N: number, x: Collection<T>, strideX: number, y: Collection<U>, strideY: number, clbk: Callback<T, U>, thisArg?: ThisParameterType<Callback<T, U>> ): Collection<U | number>;

	/**
	* Computes the absolute value of each element retrieved from a strided input array `x` via a callback function and assigns each result to an element in a strided output array `y` using alternative indexing semantics.
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
	*     return v * 2.0;
	* }
	*
	* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* absBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
	*/
	ndarray<T = unknown, U = unknown>( N: number, x: Collection<T>, strideX: number, offsetX: number, y: Collection<U>, strideY: number, offsetY: number, clbk: Callback<T, U>, thisArg?: ThisParameterType<Callback<T, U>> ): Collection<U | number>;
}

/**
* Computes the absolute value of each element retrieved from a strided input array `x` via a callback function and assigns each result to an element in a strided output array `y`.
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
*     return v * 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* absBy( x.length, x, 1, y, 1, accessor );
* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*
* @example
* function accessor( v ) {
*     return v * 2.0;
* }
*
* var x = [ 1.0, -2.0, 3.0, -4.0, 5.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* absBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
* // y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
*/
declare var absBy: Routine;


// EXPORTS //

export = absBy;
