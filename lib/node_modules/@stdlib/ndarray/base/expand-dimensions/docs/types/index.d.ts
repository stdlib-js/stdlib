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

import { typedndarray } from '@stdlib/types/ndarray';

/**
* Expands the shape of an array by inserting a new dimension of size one at a specified dimension index.
*
* ## Notes
*
* -   A provided dimension index must reside on the interval `[-N-1, N]`, where `N` is the rank (i.e., number of dimensions) of the provided input array. If provided a negative dimension index, the position at which to insert a singleton dimension is computed as `N + dim + 1`. Hence, if provided `-1`, the resolved position is `N` (i.e., a singleton dimension is appended to the input array).
*
* @param x - input array
* @param dim - dimension index at which to insert a singleton dimension
* @param writable - boolean indicating whether the returned ndarray should be writable
* @returns output array
*
* @example
* var array = require( '@stdlib/ndarray/array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var y = expandDimensions( x, 1, false );
* // returns <ndarray>[ [ [ 1, 2 ] ], [ [ 3, 4 ] ] ]
*/
declare function expandDimensions<T = unknown, U extends typedndarray<T> = typedndarray<T>>( x: U, dim: number, writable: boolean ): U;


// EXPORTS //

export = expandDimensions;
