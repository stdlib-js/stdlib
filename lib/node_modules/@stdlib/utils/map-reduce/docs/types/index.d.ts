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
import { typedndarray } from '@stdlib/types/ndarray';

/**
* Callback invoked for each array element.
*
* @returns result
*/
type Nullary<U> = () => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @returns result
*/
type Unary<T, U> = ( value: T ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @returns result
*/
type Binary<T, U> = ( value: T, index: number ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type Ternary<T, U> = ( value: T, index: number, arr: typedndarray<T> ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type ArrayTernary<T, U> = ( value: T, index: number, arr: Collection<T> ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type Mapper<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param index - element index
* @param arr - array
* @returns result
*/
type ArrayMapper<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | ArrayTernary<T, U>;

/**
* Function applied against an accumulator.
*
* @returns accumulator value
*/
type NullaryReducer<V, W> = ( this: W ) => V;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @returns accumulator value
*/
type UnaryReducer<V, W> = ( this: W, accumulator: V ) => V;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @returns accumulator value
*/
type BinaryReducer<U, V, W> = ( this: W, accumulator: V, value: U ) => V;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param index - element index
* @returns accumulator value
*/
type TernaryReducer<U, V, W> = ( this: W, accumulator: V, value: U, index: number ) => V;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param index - element index
* @param arr - array
* @returns accumulator value
*/
type QuaternaryReducer<U, V, T, W> = ( this: W, accumulator: V, value: U, index: number, arr: typedndarray<T> ) => V;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param index - element index
* @param arr - array
* @returns accumulator value
*/
type ArrayQuaternaryReducer<U, V, T, W> = ( this: W, accumulator: V, value: U, index: number, arr: Collection<T> ) => V;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param index - element index
* @param arr - array
* @returns accumulator value
*/
type Reducer<U, V, T, W> = NullaryReducer<V, W> | UnaryReducer<V, W> | BinaryReducer<U, V, W> | TernaryReducer<U, V, W> | QuaternaryReducer<U, V, T, W>;

/**
* Function applied against an accumulator.
*
* @param accumulator - accumulated value
* @param value - array element
* @param index - element index
* @param arr - array
* @returns accumulator value
*/
type ArrayReducer<U, V, T, W> = NullaryReducer<V, W> | UnaryReducer<V, W> | BinaryReducer<U, V, W> | TernaryReducer<U, V, W> | ArrayQuaternaryReducer<U, V, T, W>;

/**
* Performs a map-reduce operation for each element in an array and returns the accumulated result.
*
* ## Notes
*
* -   The mapping function is provided four arguments:
*
*     -   **value**: array element.
*     -   **index**: element index.
*     -   **arr**: input array.
*
* -   The reducing function is provided four arguments:
*
*     -   **accumulator**: accumulated value.
*     -   **value**: result after applying a mapping function to the current array element.
*     -   **index**: element index.
*     -   **arr**: input array.
*
* -   If provided an empty array, the function returns the initial value.
*
* @param arr - input array
* @param initial - initial value
* @param mapper - mapping function
* @param reducer - reducing function
* @param thisArg - reducing function execution context
* @returns accumulated result
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var add = require( '@stdlib/number/float64/base/add' );
* var array = require( '@stdlib/ndarray/array' );
*
* var opts = {
*     'dtype': 'generic'
* };
* var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
*
* var out = mapReduce( arr, 0, naryFunction( abs, 2 ), naryFunction( add, 2 ) );
* // returns 21
*/
declare function mapReduce<T = unknown, U = unknown, V = unknown, W = unknown>( arr: typedndarray<T>, initial: V, mapper: Mapper<T, U>, reducer: Reducer<U, V, T, W>, thisArg?: ThisParameterType<Reducer<U, V, T, W>> ): V;

/**
* Performs a map-reduce operation for each element in an array and returns the accumulated result.
*
* ## Notes
*
* -   The mapping function is provided four arguments:
*
*     -   **value**: array element.
*     -   **index**: element index.
*     -   **arr**: input array.
*
* -   The reducing function is provided four arguments:
*
*     -   **accumulator**: accumulated value.
*     -   **value**: result after applying a mapping function to the current array element.
*     -   **index**: element index.
*     -   **arr**: input array.
*
* -   If provided an empty array, the function returns the initial value.
*
* @param arr - input array
* @param initial - initial value
* @param mapper - mapping function
* @param reducer - reducing function
* @param thisArg - reducing function execution context
* @returns accumulated result
*
* @example
* function square( value ) {
*     return value * value;
* }
*
* function sum( acc, value ) {
*     return acc + value;
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var out = mapReduce( arr, 0, square, sum );
* // returns 30
*/
declare function mapReduce<T = unknown, U = unknown, V = unknown, W = unknown>( arr: Collection<T>, initial: V, mapper: ArrayMapper<T, U>, reducer: ArrayReducer<U, V, T, W>, thisArg?: ThisParameterType<ArrayReducer<U, V, T, W>> ): V;


// EXPORTS //

export = mapReduce;
