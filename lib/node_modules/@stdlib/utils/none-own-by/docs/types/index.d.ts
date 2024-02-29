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
* Checks whether an own property of the object passes the test.
*
* @returns boolean indicating whether an own property of the object passes the test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Checks whether an own property of the object passes the test.
*
* @param value - property value
* @returns boolean indicating whether an own property of the object passes the test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Checks whether an own property of the object passes the test.
*
* @param value - property value
* @param key - property key
* @returns boolean indicating whether an own property of the object passes the test
*/
type Binary<T, U> = ( this: U, value: T, key: number ) => boolean;

/**
* Checks whether an own property of the object passes the test.
*
* @param value - property value
* @param key - property key
* @param object - input object
* @returns boolean indicating whether an own property of the object passes the test
*/
type Ternary<T, U> = ( this: U, value: T, key: number, object: Object ) => boolean;

/**
* Checks whether an own property of the object passes the test.
*
* @param value - object value
* @param key - object key
* @param object - input object
* @returns boolean indicating whether an own property of the object passes the test
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Tests whether every property of an object fails a test implemented by a predicate function.
*
* ## Notes
*
* -   The predicate function is provided three arguments:
*
*     -   `value`: property value
*     -   `key`: property key
*     -   `object`: the input object
*
* -   The function immediately returns upon encountering a truthy return value.
* -   If provided an empty object, the function returns `true`.
*
* @param object - input object
* @param predicate - test function
* @param thisArg - execution context
* @returns boolean indicating whether every property fails a test
*
* @example
* function isUnderage( v ) {
*     return ( v < 18 );
* }
*
* var obj = { 'a': 20, 'b': 22, 'c': 25 };
*
* var bool = noneOwnBy( obj, isUnderage );
* // returns true
*/
declare function noneOwnBy<T = unknown, U = unknown>( object: Record<string, unknown>, predicate: Predicate<T, U>, thisArg?: ThisParameterType<Predicate<T, U>> ): boolean;


// EXPORTS //

export = noneOwnBy;
