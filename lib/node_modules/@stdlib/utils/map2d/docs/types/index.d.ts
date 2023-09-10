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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';

/**
* Two-dimensional input array.
*/
type Array2D<T> = ArrayLike<ArrayLike<T>>;

/**
* Callback invoked for each array element.
*
* @returns result
*/
type Nullary<U, V> = ( this: V ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @returns result
*/
type Unary<T, U, V> = ( this: V, value: T ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param indices - current array element indices
* @returns result
*/
type Binary<T, U, V> = ( this: V, value: T, index: number ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param indices - current array element indices
* @param arr - array
* @returns result
*/
type Ternary<T, U, V> = ( this: V, value: T, index: number, arr: Array2D<T> ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param indices - current array element indices
* @param arr - array
* @returns result
*/
type Callback<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary<T, U, V>;

/**
* Applies a function to each nested element in an array of arrays and assigns the result to a nested element in a new array of arrays.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **value**: array element.
*     -   **indices**: current array element indices.
*     -   **arr**: input array.
*
* @param arr - array of arrays
* @param fcn - function to apply
* @param thisArg - input function context
* @returns array of arrays
*
* @example
* var naryFunction = require( `@stdlib/utils/nary-function` );
* var abs = require( `@stdlib/math/base/special/abs` );
*
* var arr = [
*     [ -1, -2, -3 ],
*     [ -4, -5, -6 ]
* ];
*
* var out = map2d( arr, naryFunction( abs, 1 ) );
* // returns [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
*/
declare function map2d<T = unknown, U = unknown, V = unknown>( arr: Array2D<T>, fcn: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Array<Array<U>>;


// EXPORTS //

export = map2d;
