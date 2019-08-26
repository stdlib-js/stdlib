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
* Returns a pipeline function.
*
* ## Notes
*
* -   Starting from the left, the pipeline function evaluates each function and passes the result as an argument to the next function. The result of the rightmost function is the result of the whole.
* -   Only the leftmost function is explicitly permitted to accept multiple arguments. All other functions are evaluated as unary functions.
*
* @param fcn - functions to evaluate in sequential order
* @throws must provide more than one argument
* @returns pipeline function
*
* @example
* function a( x ) {
*     return 2 * x;
* }
*
* function b( x ) {
*     return x + 3;
* }
*
* function c( x ) {
*     return x / 5;
* }
*
* var f = funseq( a, b, c );
*
* var z = f( 6 );
* // returns 3
*/
declare function funseq( ...fcn: Array<Function> ): Function;


// EXPORTS //

export = funseq;
