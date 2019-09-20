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

// TypeScript Version: 2.0

/**
* Invoked function.
*
* @returns result
*/
type Nullary = () => any;

/**
* Invoked function.
*
* @param i - invocation index
* @returns result
*/
type Unary = ( i: number ) => any;

/**
* Invoked function.
*
* @param i - invocation index
* @returns result
*/
type Fcn = Nullary | Unary;

/**
* Invokes a function `n` times and returns an array of accumulated function return values.
*
* ## Notes
*
* -   The invoked function is provided a single argument: the invocation index (zero-based).
*
* @param fcn - function to invoke
* @param n - number of function invocations
* @param thisArg - execution context
* @throws second argument must be a nonnegative integer
* @returns accumulated results
*
* @example
* function fcn( i ) {
*     return i;
* }
*
* var arr = mapFun( fcn, 5 );
* // returns [ 0, 1, 2, 3, 4 ]
*/
declare function mapFun( fcn: Fcn, n: number, thisArg?: any ): Array<any>;


// EXPORTS //

export = mapFun;
