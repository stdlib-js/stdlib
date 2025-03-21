/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { ArrayLike, Collection } from '@stdlib/types/array';
import { Mode } from '@stdlib/types/ndarray';

/**
* Input nested array.
*/
type NestedArray<T> = ArrayLike<Collection<T>>;

/**
* Output array when operating along the first dimension.
*/
type OutputArrayDim0<T> = Array<Collection<T>>;

/**
* Output array when operating along the second dimension.
*/
type OutputArrayDim1<T> = Array<Array<T>>;

/**
* Takes elements from a two-dimensional nested array.
*
* ## Notes
*
* -   The function does **not** deep copy nested array elements.
*
* @param x - input nested array
* @param indices - list of indices
* @param dimension - dimension along which to take elements
* @param mode - index mode specifying how to handle an index which is out-of-bounds
* @returns output array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
* var indices = [ 1, -2 ];
*
* var y = take2d( x, indices, 0, 'normalize' );
* // returns [ [ 3, 4 ], [ 1, 2 ] ]
*/
declare function take2d<T = unknown>( x: NestedArray<T>, indices: Collection<number>, dimension: 0, mode: Mode ): OutputArrayDim0<T>;

/**
* Takes elements from a two-dimensional nested array.
*
* ## Notes
*
* -   The function does **not** deep copy nested array elements.
*
* @param x - input nested array
* @param indices - list of indices
* @param dimension - dimension along which to take elements
* @param mode - index mode specifying how to handle an index which is out-of-bounds
* @returns output array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
* var indices = [ 1, 1, 0, 0, -1, -1 ];
*
* var y = take2d( x, indices, 1, 'normalize' );
* // returns [ [ 2, 2, 1, 1, 2, 2 ], [ 4, 4, 3, 3, 4, 4 ] ]
*/
declare function take2d<T = unknown>( x: NestedArray<T>, indices: Collection<number>, dimension: 1, mode: Mode ): OutputArrayDim1<T>;

/**
* Takes elements from a two-dimensional nested array.
*
* ## Notes
*
* -   The function does **not** deep copy nested array elements.
*
* @param x - input nested array
* @param indices - list of indices
* @param dimension - dimension along which to take elements
* @param mode - index mode specifying how to handle an index which is out-of-bounds
* @returns output array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
* var indices = [ 1, 1, 0, 0, -1, -1 ];
*
* var y = take2d( x, indices, 1, 'normalize' );
* // returns [ [ 2, 2, 1, 1, 2, 2 ], [ 4, 4, 3, 3, 4, 4 ] ]
*/
declare function take2d<T = unknown>( x: NestedArray<T>, indices: Collection<number>, dimension: number, mode: Mode ): NestedArray<T>;


// EXPORTS //

export = take2d;
