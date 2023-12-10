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
* Returns a string representing the source code of a provided function.
*
* ## Notes
*
* -   If called on built-in functions, functions created by `Function.prototype.bind()`, or other non-JavaScript functions, the function returns a "native" function string similar to the following:
*
*     ```text
*     "function foo() { [native code] }"
*     ```
*
*     For intrinsic object methods and functions, `foo` is the initial name of the function.
*
* -   If called on a function created by the `Function` constructor, the function returns the source code of a synthesized function declaration having the name "anonymous" and using the provided parameters and function body.
*
* -   Starting in ES2018, the ECMAScript specification requires that the returned string contain the exact same source code as it was declared, including any whitespace and/or comments. If the host is unable to access the source code, the specification requires that the returned string be the native function string.
*
* @param fcn - input function
* @returns string representing function source code
*
* @example
* function add( x, y ) {
*     return x + y;
* }
*
* var str = function2string( add );
* // e.g., returns 'function add( x, y ) {\n    return x + y;\n}'
*/
declare function function2string( fcn: Function ): string;


// EXPORTS //

export = function2string;
