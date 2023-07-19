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

// TypeScript Version: 2.0

/**
* Nullary callback function.
*
* @returns fill value
*/
type Nullary = () => any;

/**
* Unary callback function.
*
* @param i - current array index
* @returns fill value
*/
type Unary = ( i: number ) => any;

/**
* Callback function.
*
* @param i - current array index
* @returns fill value
*/
type Callback = Nullary | Unary;

/**
* Returns a filled "generic" array according to a provided callback function.
*
* @param len - array length
* @param clbk - callback function
* @param thisArg - callback function execution context
* @returns output array
*
* @example
* var constantFunction = require( `@stdlib/utils/constant-function` );
*
* var arr = filledBy( 5, constantFunction( 1.0 ) );
* // returns [ 1.0, 1.0, 1.0, 1.0, 1.0 ]
*/
declare function filledBy( len: number, clbk: Callback, thisArg?: any ): Array<any>; // tslint:disable-line:max-line-length


// EXPORTS //

export = filledBy;
