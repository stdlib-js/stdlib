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
* Wraps a function in a try/catch block.
*
* ## Notes
*
* -   If provided an asynchronous function, the returned function only traps errors which occur during the current event loop tick.
* -   If a function throws a literal, the literal is serialized as a string and returned as an `Error` object.
*
* @param fcn - function to wrap
* @param thisArg - function context
* @returns wrapped function
*
* @example
* function fcn() {
*     throw new Error( 'beep boop' );
* }
*
* var f = wrap( fcn );
*
* var out = f();
* if ( out instanceof Error ) {
*     console.error( out.message );
*     // => 'beep boop'
* }
*/
declare function wrap( fcn: Function, thisArg?: any ): Function;


// EXPORTS //

export = wrap;
