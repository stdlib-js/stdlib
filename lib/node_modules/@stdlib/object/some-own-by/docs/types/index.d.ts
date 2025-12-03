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
* Checks whether an own property in an object passes a test.
*
* @returns boolean indicating whether an own property in an object passes a test
*/
type Nullary = () => boolean;

/**
* Checks whether an own property in an object passes a test.
*
* @param value - object value
* @returns boolean indicating whether an own property in an object passes a test
*/
type Unary<T> = ( value: T ) => boolean;

/**
* Checks whether an own property in an object passes a test.
*
* @param value - object value
* @param key - object key
* @returns boolean indicating whether an own property in an object passes a test
*/
type Binary<T> = ( value: T, key: keyof any ) => boolean;

/**
* Checks whether an own property in an object passes a test.
*
* @param value - object value
* @param key - object key
* @param obj - input object
* @returns boolean indicating whether an own property in an object passes a test
*/
type Ternary<T> = ( value: T, key: keyof any, obj: Record<keyof any, any> ) => boolean;

/**
* Checks whether an own property in an object passes a test.
*
* @param value - object value
* @param key - object key
* @param obj - input object
* @returns boolean indicating whether an own property in an object passes a test
*/
type Predicate<T> = Nullary | Unary<T> | Binary<T> | Ternary<T>;

/**
* Tests whether an object contains at least `n` own properties which pass a test implemented by a predicate function.
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
* @returns boolean indicating whether an object contains at least `n` own properties which pass a test
*
* @example
* function isNegative( v ) {
*     return ( v < 0 );
* }
*
* var obj = { a: 1, b: 2, c: -3, d: 4, e: -1 };
*
* var bool = someOwnBy( obj, 2, isNegative );
* // returns true
*/
declare function someOwnBy<T = unknown>( obj: Record<keyof any, any>, n: number, predicate: Predicate<T> ): boolean;


// EXPORTS //

export = someOwnBy;
