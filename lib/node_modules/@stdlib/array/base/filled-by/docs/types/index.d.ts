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

/**
* Nullary callback function.
*
* @returns fill value
*/
type Nullary<T, U> = ( this: U ) => T;

/**
* Unary callback function.
*
* @param i - current array index
* @returns fill value
*/
type Unary<T, U> = ( this: U, i: number ) => T;

/**
* Callback function.
*
* @param i - current array index
* @returns fill value
*/
type Callback<T, U> = Nullary<T, U> | Unary<T, U>;

/**
* Returns a filled "generic" array according to a provided callback function.
*
* @param len - array length
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var constantFunction = require( '@stdlib/utils/constant-function' );
*
* var arr = filledBy( 5, constantFunction( 1.0 ) );
* // returns [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/
declare function filledBy<T = unknown, U = unknown>( len: number, clbk: Callback<T, U>, thisArg?: ThisParameterType<Callback<T, U>> ): Array<T>;


// EXPORTS //

export = filledBy;
