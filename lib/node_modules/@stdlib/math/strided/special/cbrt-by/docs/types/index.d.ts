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

/**
* Returns an accessed value.
*
* @returns accessed value
*/
type Nullary<V> = ( this: V ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @returns accessed value
*/
type Unary<T, V> = ( this: V, value: T ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @returns accessed value
*/
type Binary<T, V> = ( this: V, value: T, idx: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @returns accessed value
*/
type Ternary<T, V> = ( this: V, value: T, idx: number, xi: number ) => number | void;

/**
* Returns an accessed value.
*
* @param value - array element
* @param idx - iteration index
* @param xi - strided index (offsetX + idx*strideX)
* @param yi - strided index (offsetY + idx*strideY)
* @returns accessed value
*/
type Quaternary<T, V> = ( this: V, value: T, idx: number, xi: number, yi: number ) => number | void;

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
type Quinary<T, V> = ( this: V, value: T, idx: number, xi: number, yi: number, x: Collection<T> ) => number | void;

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
type Senary<T, U, V> = ( this: V, value: T, idx: number, xi: number, yi: number, x: Collection<T>, y: Collection<U> ) => number | void;

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
type Callback<T, U, V> = Nullary<V> | Unary<T, V> | Binary<T, V> | Ternary<T, V> | Quaternary<T, V> | Quinary<T, V> | Senary<T, U, V>;

/**
* Interface describing `cbrtBy`.
*/
interface Routine {
	/**
	* Computes the cube root of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
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
	* var x = [ 1.0, 9.0, -27.0, 81.0, -125.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* cbrtBy( x.length, x, 1, y, 1, accessor );
	* // y => [ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
	*/
	<T = unknown, U = unknown, V = unknown>( N: number, x: Collection<T>, strideX: number, y: Collection<U>, strideY: number, clbk: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Collection<U | number>;

	/**
	* Computes the cube root of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y` using alternative indexing semantics.
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
	* var x = [ 1.0, 9.0, -27.0, 81.0, -125.0 ];
	* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	*
	* cbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
	* // y => [ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
	*/
	ndarray<T = unknown, U = unknown, V = unknown>( N: number, x: Collection<T>, strideX: number, offsetX: number, y: Collection<U>, strideY: number, offsetY: number, clbk: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Collection<U | number>;
}

/**
* Computes the cube root of each element retrieved from an input strided array `x` via a callback function and assigns each result to an element in an output strided array `y`.
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
* var x = [ 1.0, 9.0, -27.0, 81.0, -125.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* cbrtBy( x.length, x, 1, y, 1, accessor );
* // y => [ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
*
* @example
* function accessor( v ) {
*     return v;
* }
*
* var x = [ 1.0, 9.0, -27.0, 81.0, -125.0 ];
* var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
*
* cbrtBy.ndarray( x.length, x, 1, 0, y, 1, 0, accessor );
* // y => [ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
*/
declare var cbrtBy: Routine;


// EXPORTS //

export = cbrtBy;
