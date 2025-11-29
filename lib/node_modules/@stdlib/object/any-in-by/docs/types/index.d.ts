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

/**
* Checks whether an object property passes a test.
*
* @returns boolean indicating whether an object property passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Checks whether an object property passes a test.
*
* @param value - property value
* @returns boolean indicating whether an object property passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Checks whether an object property passes a test.
*
* @param value - property value
* @param key - property key
* @returns boolean indicating whether an object property passes a test
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => boolean;

/**
* Checks whether an object property passes a test.
*
* @param value - property value
* @param key - property key
* @param obj - input object
* @returns boolean indicating whether an object property passes a test
*/
type Ternary<T, U> = ( this: U, value: T, key: string, obj: { [key: string]: T } ) => boolean;

/**
* Checks whether an object property passes a test.
*
* @param value - property value
* @param key - property key
* @param obj - input object
* @returns boolean indicating whether an object property passes a test
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Tests whether at least one property in an object passes a test implemented by a predicate function.
*
* ## Notes
*
* -   The predicate function is provided three arguments:
*
*     -   `value`: property value
*     -   `key`: property key
*     -   `obj`: the input object
*
* -   The function immediately returns upon encountering a truthy return value.
*
* -   If provided an empty object, the function returns `false`.
*
* @param obj - input object
* @param predicate - test function
* @param thisArg - execution context
* @returns boolean indicating whether at least one property passes a test
*
* @example
* function isNegative( v ) {
*     return ( v < 0 );
* }
*
* var obj = { 'a': 1, 'b': -2, 'c': 3 };
*
* var bool = anyInBy( obj, isNegative );
* // returns true
*/
declare function anyInBy<T = unknown, U = unknown>( obj: { [key: string]: T }, predicate: Predicate<T, U>, thisArg?: ThisParameterType<Predicate<T, U>> ): boolean;


// EXPORTS //

export = anyInBy;
