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

import { Array2D } from '@stdlib/types/array';

/**
* Function applied against an accumulator.
*
* @returns accumulator value
*/
type Nullary<U, V> = ( this: V ) => U;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @returns accumulator value
*/
type Unary<U, V> = ( this: V, accumulator: U ) => U;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @returns accumulator value
*/
type Binary<T, U, V> = ( this: V, accumulator: U, value: T ) => U;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param indices - current array element indices
* @returns accumulator value
*/
type Ternary<T, U, V> = ( this: V, accumulator: U, value: T, indices: [ number, number ] ) => U;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param indices - current array element indices
* @param arr - array
* @returns accumulator value
*/
type Quaternary<T, U, V> = ( this: V, accumulator: U, value: T, indices: [ number, number ], arr: Array2D<T> ) => U;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param indices - current array element indices
* @param arr - array
* @returns accumulator value
*/
type Reducer<T, U, V> = Nullary<U, V> | Unary<U, V> | Binary<T, U, V> | Ternary<T, U, V> | Quaternary<T, U, V>;

/**
* Reduces the number of dimensions by one of a two-dimensional nested array by applying a function against an accumulator and each element along the innermost dimension and returning the accumulation results as a one-dimensional array.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **accumulator**: accumulated value.
*     -   **value**: array element.
*     -   **indices**: current array element indices.
*     -   **arr**: input array.
*
* @param arr - array of arrays
* @param initial - initial values
* @param reducer - function to apply
* @param thisArg - input function context
* @throws the second argument must have a length equal to the size of the outermost input array dimension
* @returns accumulation results
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
*
* var arr = [
*     [ 1, 2, 3 ],
*     [ 4, 5, 6 ]
* ];
*
* var out = reduce2d( arr, [ 0, 0 ], naryFunction( add, 2 ) );
* // returns [ 6, 15 ]
*/
declare function reduce2d<T = unknown, U = unknown, V = unknown>( arr: Array2D<T>, initial: ArrayLike<U>, reducer: Reducer<T, U, V>, thisArg?: ThisParameterType<Reducer<T, U, V>> ): Array<U>;


// EXPORTS //

export = reduce2d;
