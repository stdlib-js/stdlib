/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
import { typedndarray } from '@stdlib/types/ndarray';

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
* @param index - element index
* @returns accumulator value
*/
type Ternary<T, U, V> = ( this: V, accumulator: U, value: T, index: number ) => U;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param index - element index
* @param arr - array
* @returns accumulator value
*/
type Quaternary<T, U, V> = ( this: V, accumulator: U, value: T, index: number, arr: typedndarray<T> ) => U;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param index - element index
* @param arr - array
* @returns accumulator value
*/
type ArrayQuaternary<T, U, V> = ( this: V, accumulator: U, value: T, index: number, arr: Collection<T> ) => U;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param index - element index
* @param arr - array
* @returns accumulator value
*/
type Reducer<T, U, V> = Nullary<U, V> | Unary<U, V> | Binary<T, U, V> | Ternary<T, U, V> | Quaternary<T, U, V>;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param index - element index
* @param arr - array
* @returns accumulator value
*/
type ArrayReducer<T, U, V> = Nullary<U, V> | Unary<U, V> | Binary<T, U, V> | Ternary<T, U, V> | ArrayQuaternary<T, U, V>;

/**
* Applies a function against an accumulator and each element in an array and returns the accumulated result.
*
* ## Notes
*
* -   The reduction function is provided four arguments:
*
*     -   **accumulator**: accumulated value.
*     -   **value**: array element.
*     -   **index**: element index.
*     -   **arr**: input array.
*
* -   If provided an empty array, the function returns the initial value.
*
* @param arr - input array
* @param initial - initial value
* @param reducer - reduction function
* @param thisArg - reduction function execution context
* @returns accumulated result
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var add = require( '@stdlib/number/float64/base/add' );
* var array = require( '@stdlib/ndarray/array' );
*
* var opts = {
*     'dtype': 'generic'
* };
* var arr = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
*
* var out = reduce( arr, 0, naryFunction( add, 2 ) );
* // returns 21
*/
declare function reduce<T = unknown, U = unknown, V = unknown>( arr: typedndarray<T>, initial: U, reducer: Reducer<T, U, V>, thisArg?: ThisParameterType<Reducer<T, U, V>> ): U;

/**
* Applies a function against an accumulator and each element in an array and returns the accumulated result.
*
* ## Notes
*
* -   The reduction function is provided four arguments:
*
*     -   **accumulator**: accumulated value.
*     -   **value**: array element.
*     -   **index**: element index.
*     -   **arr**: input array.
*
* -   If provided an empty array, the function returns the initial value.
*
* @param arr - input array
* @param initial - initial value
* @param reducer - reduction function
* @param thisArg - reduction function execution context
* @returns accumulated result
*
* @example
* function sum( acc, value ) {
*     return acc + value;
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var out = reduce( arr, 0, sum );
* // returns 10
*/
declare function reduce<T = unknown, U = unknown, V = unknown>( arr: Collection<T>, initial: U, reducer: ArrayReducer<T, U, V>, thisArg?: ThisParameterType<ArrayReducer<T, U, V>> ): U;


// EXPORTS //

export = reduce;
