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
* Returns a function of smaller arity by partially applying arguments from the right.
*
* @param fcn - function to partially apply
* @param args - arguments to partially apply
* @returns partially applied function
*
* @example
* function say( text, name ) {
*     return text + ', ' + name + '.';
* }
*
* var toGrace = papplyRight( say, 'Grace Hopper' );
*
* var str = toGrace( 'Hello' );
* // returns 'Hello, Grace Hopper.'
*
* str = toGrace( 'Thank you' );
* // returns 'Thank you, Grace Hopper.'
*/
declare function papplyRight( fcn: Function, ...args: Array<any> ): Closure; // tslint-disable-line max-line-length


// EXPORTS //

export = papplyRight;
