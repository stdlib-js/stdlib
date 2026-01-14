/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Returns a function that applies a specified number of arguments to a provided function.
*
* ## Notes
*
* -   The returned function **always** invokes the wrapped function with a specified number of arguments, even when the returned function is provided fewer arguments. The value for the missing arguments is equal to `undefined`.
*
* @param fcn - input function
* @param arity - number of arguments to apply
* @param thisArg - function context
* @returns function wrapper
*
* @example
* function foo() {
*     var s;
*     var i;
*
*     s = 0;
*     for ( i = 0; i < arguments.length; i++ ) {
*         s += arguments[ i ];
*     }
*     return s;
* }
*
* var bar = naryFunction( foo, 2 );
*
* var out = bar( 1, 2, 3, 4, 5, 6 );
* // returns 3
*/
declare function naryFunction( fcn: Function, arity: number, thisArg?: any ): Function;


// EXPORTS //

export = naryFunction;
