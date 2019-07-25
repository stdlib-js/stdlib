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
* Partially applied function.
*
* @param args - function arguments
* @returns partially applied function result
*/
type Closure = ( ...args: Array<any> ) => any;

/**
* Returns a function of smaller arity by partially applying arguments.
*
* @param fcn - function to partially apply
* @param args - arguments to partially apply
* @returns partially applied function
*
* @example
* function add( x, y ) {
*     return x + y;
* }
*
* var add2 = papply( add, 2 );
*
* var sum = add2( 3 );
* // returns 5
*/
declare function papply( fcn: Function, ...args: Array<any> ): Closure;


// EXPORTS //

export = papply;
