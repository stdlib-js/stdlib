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
* Function composition.
*
* ## Notes
*
* -   Returns a composite function. Starting from the right, the composite function evaluates each function and passes the result as an argument to the next function. The result of the leftmost function is the result of the whole.
* -   Only the rightmost function is explicitly permitted to accept multiple arguments. All other functions are evaluated as unary functions.
* -   The function will throw if provided fewer than two input arguments.
*
* @param fcn - functions to compose
* @throws must provide more than one argument
* @returns composite function
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
* var f = compose( c, b, a );
*
* var z = f( 6 );
* // returns 3
*/
declare function compose( ...fcn: Array<Function> ): Function;


// EXPORTS //

export = compose;
