/**
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

/**
* Callback invoked for each Unicode code point in a string.
*
* @returns result
*/
type Nullary<T> = ( this: T ) => any;

/**
* Callback invoked for each Unicode code point in a string.
*
* @param value - code point
* @returns result
*/
type Unary<T> = ( this: T, value: string ) => any;

/**
* Callback invoked for each Unicode code point in a string.
*
* @param value - code point
* @param index - starting code point index
* @returns result
*/
type Binary<T> = ( this: T, value: string, index: number ) => any;

/**
* Callback invoked for each Unicode code point in a string.
*
* @param value - code point
* @param index - starting code point index
* @param str - input string
* @returns result
*/
type Ternary<T> = ( this: T, value: string, index: number, str: string ) => any;

/**
* Callback invoked for each Unicode code point in a string.
*
* @param value - code point
* @param index - starting code point index
* @param str - input string
* @returns result
*/
type Callback<T> = Nullary<T> | Unary<T> | Binary<T> | Ternary<T>;

/**
* Invokes a function for each Unicode code point in a string, iterating from right to left.
*
* ## Notes
*
* -   When invoked, the provided function is provided three arguments:
*
*     -   **value**: code point.
*     -   **index**: starting code point index.
*     -   **str**: input string.
*
* @param str - input string
* @param clbk - function to invoke
* @param thisArg - execution context
* @returns input string
*
* @example
* function log( value, index ) {
*     console.log( '%d: %s', index, value );
* }
*
* forEachRight( 'Hello, World!', log );
*/
declare function forEachRight<T = unknown>( str: string, clbk: Callback<T>, thisArg?: ThisParameterType<Callback<T>> ): string;


// EXPORTS //

export = forEachRight;
