/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

// TypeScript Version: 2.0

/**
* Callback invoked for each grapheme cluster (i.e., user-perceived character) in a string.
*
* @returns result
*/
type Nullary = () => any;

/**
* Callback invoked for each grapheme cluster (i.e., user-perceived character) in a string.
*
* @param value - grapheme cluster
* @returns result
*/
type Unary = ( value: string ) => any;

/**
* Callback invoked for each grapheme cluster (i.e., user-perceived character) in a string.
*
* @param value - grapheme cluster
* @param index - string grapheme cluster index
* @returns result
*/
type Binary = ( value: string, index: number ) => any;

/**
* Callback invoked for each grapheme cluster (i.e., user-perceived character) in a string.
*
* @param value - grapheme cluster
* @param index - string grapheme cluster index
* @param str - input string
* @returns result
*/
type Ternary = ( value: string, index: number, str: string ) => any;

/**
* Callback invoked for each grapheme cluster (i.e., user-perceived character) in a string.
*
* @param value - grapheme cluster
* @param index - starting grapheme cluster index
* @param str - input string
* @returns result
*/
type Callback = Nullary | Unary | Binary | Ternary;

/**
* Invokes a function for each grapheme cluster (i.e., user-perceived character) in a string.
*
* ## Notes
*
* -   When invoked, the provided function is provided three arguments:
*
*     -   **value**: grapheme cluster.
*     -   **index**: starting grapheme cluster index.
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
* forEach( 'Hello, World!', log );
*/
declare function forEach( str: string, clbk: Callback, thisArg?: any ): string;


// EXPORTS //

export = forEach;
