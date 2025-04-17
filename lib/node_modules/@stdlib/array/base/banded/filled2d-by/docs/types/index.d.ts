/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import { Shape2D } from '@stdlib/types/ndarray';

/**
* Nullary callback function.
*
* @returns fill value
*/
type Nullary<T, V> = ( this: V ) => T;

/**
* Unary callback function.
*
* @param indices - current array element indices
* @returns fill value
*/
type Unary<T, V> = ( this: V, indices: Array<number> ) => T;

/**
* Callback function.
*
* @param indices - current array element indices
* @returns fill value
*/
type Callback<T, V> = Nullary<T, V> | Unary<T, V>;

/**
* Two-dimensional nested array.
*/
type Array2D<T> = Array<Array<T>>;

/**
* Returns a filled two-dimensional banded nested array according to a provided callback function.
*
* @param shape - array shape
* @param ku - number of super-diagonals
* @param kl - number of sub-diagonals
* @param fill - fill value for values outside the band
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* function clbk( indices ) {
*     return indices[ 0 ] + indices[ 1 ];
* }
*
* var out = filled2dBy( [ 3, 3 ], 1, 1, 0, clbk );
* // returns [ [ 0, 1, 0 ], [ 1, 2, 3 ], [ 0, 3, 4 ] ]
*/
declare function filled2dBy<T = unknown, U = unknown, V = unknown>( shape: Shape2D, ku: number, kl: number, fill: U, clbk: Callback<T, V>, thisArg?: ThisParameterType<Callback<T, V>> ): Array2D<T | U>;


// EXPORTS //

export = filled2dBy;
