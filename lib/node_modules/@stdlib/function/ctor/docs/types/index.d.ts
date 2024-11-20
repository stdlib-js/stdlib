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

// EXPORTS //

/**
* Returns a Function object.
*
* ## Notes
*
* -   Argument names must be strings corresponding to valid JavaScript parameters (i.e., a plain identifier, or, in environments supporting such parameters, a rest parameter or destructured parameter, optionally with a default).
* -   Creating `Function` objects with the `Function` constructor is less efficient than declaring a function via a function expression or a function statement.
* -   The `Function` constructor can be invoked without the `new` operator (using `new` and not using `new` both return a new `Function` object).
* -   The `Function` constructor creates functions which execute in the **global scope**. Hence, created functions **cannot** access variables local to the scope in which functions were created.
*
* @param argNames - parameter names
* @param body - function body
* @returns function
*
* @example
* var add = new Function( 'x', 'y', 'return x + y' );
*
* var v = add( 1, 2 );
* // returns 3
*/
export = Function;
