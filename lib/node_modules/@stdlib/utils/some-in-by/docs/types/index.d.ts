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

/**
* Checks whether a property in an object passes a test.
*
* @returns boolean indicating whether a property in an object passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Checks whether a property in an object passes a test.
*
* @param value - object value
* @returns boolean indicating whether a property in an object passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Checks whether a property in an object passes a test.
*
* @param value - object value
* @param key - object key
* @returns boolean indicating whether a property in an object passes a test
*/
type Binary<T, U> = ( this: U, value: T, key: string ) => boolean;

/**
* Checks whether a property in an object passes a test.
*
* @param value - object value
* @param key - object key
* @param obj - input object
* @returns boolean indicating whether a property in an object passes a test
*/
type Ternary<T, U> = ( this: U, value: T, key: string, obj: Record<keyof any, any> ) => boolean;

/**
* Checks whether a property in an object passes a test.
*
* @param value - object value
* @param key - object key
* @param obj - input object
* @returns boolean indicating whether a property in an object passes a test
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Tests whether an object contains at least `n` properties (own and inherited) which pass a test implemented by a predicate function.
*
* ## Notes
*
* -   The predicate function is provided three arguments:
*
*     -   `value`: object value
*     -   `key`: object key
*     -   `obj`: the input object
*
* -   The function immediately returns upon finding `n` successful properties.
*
* -   If provided an empty object, the function returns `false`.
*
* @param obj - input object
* @param n - number of properties
* @param predicate - test function
* @param thisArg - execution context
* @throws second argument must be a positive integer
* @returns boolean indicating whether an object contains at least `n` properties which pass a test
*
* @example
* function isNegative( v ) {
*     return ( v < 0 );
* }
*
* var obj = { 'a': 1, 'b': 2, 'c': -3, 'd': 4, 'e': -1 };
*
* var bool = someInBy( obj, 2, isNegative );
* // returns true
*/
declare function someInBy<T = unknown, U = unknown>( obj: Record<keyof any, any>, n: number, predicate: Predicate<T, U>, thisArg?: ThisParameterType<Predicate<T, U>> ): boolean;


// EXPORTS //

export = someInBy;
