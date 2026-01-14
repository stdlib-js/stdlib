/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { ndarray } from '@stdlib/types/ndarray';
import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* "Base" function which interchanges two vectors.
*
* @param N - number of indexed elements
* @param x - first input array
* @param strideX - `x` stride length
* @param offsetX - starting index for `x`
* @param y - second input array
* @param strideY - `y` stride length
* @param offsetY - starting index for `y`
* @returns `y`
*/
type BaseFunction<T> = ( N: number, x: T, strideX: number, offsetX: number, y: T, strideY: number, offsetY: number ) => T;

/**
* Interchanges two vectors.
*
* ## Notes
*
* -   For multi-dimensional input arrays, the function performs batched computation, such that the function interchanges each pair of vectors in `x` and `y` according to the specified dimension index.
* -   Both input arrays must have the same shape.
* -   Negative indices are resolved relative to the last array dimension, with the last dimension corresponding to `-1`.
*
* @param x - first input array
* @param y - second input array
* @param dim - dimension along which to interchange vectors (default: -1)
* @throws first argument must be a non-zero-dimensional ndarray
* @throws second argument must be a non-zero-dimensional ndarray
* @throws input arrays must have the same shape
* @returns `y`
*/
type SwapFunction = ( x: ndarray, y: ndarray, dim?: number ) => ndarray;

/**
* Returns a function which interchanges two vectors.
*
* @param base - "base" function which interchanges two vectors
* @param dtype - array data type
* @returns function wrapper
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var array = require( '@stdlib/ndarray/array' );
* var dswap = require( '@stdlib/blas/base/dswap' ).ndarray;
*
* var swap = factory( dswap, 'float64' );
*
* var x = array( new Float64Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] ) );
* var y = array( new Float64Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] ) );
*
* swap( x, y );
*
* var xbuf = x.data;
* // returns <Float64Array>[ 2.0, 6.0, -1.0, -4.0, 8.0 ]
*
* var ybuf = y.data;
* // returns <Float64Array>[ 4.0, 2.0, -3.0, 5.0, -1.0 ]
*/
declare function factory<T extends Collection | AccessorArrayLike<any>>( base: BaseFunction<T>, dtype: any ): SwapFunction;


// EXPORTS //

export = factory;
