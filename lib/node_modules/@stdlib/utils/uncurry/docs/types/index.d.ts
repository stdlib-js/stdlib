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
* Uncurried function.
*
* @param args - arguments
* @throws if arity is set, must provide expected number of input arguments
* @throws configured arity must be compatible with curried function
* @throws if arity is not set, number of arguments must be compatible with curried function
* @returns function result
*/
type Closure = ( ...args: Array<any> ) => any;

/**
* Transforms a curried function into a function invoked with multiple arguments.
*
* @param fcn - curried function
* @param arity - number of parameters
* @param thisArg - evaluation context
* @throws `arity` argument must be a positive integer
* @returns uncurried function
*
* @example
* function addX( x ) {
*     return function addY( y ) {
*         return x + y;
*     };
* }
*
* var add = uncurry( addX );
*
* var sum = add( 2, 3 );
* // returns 5
*/
declare function uncurry( fcn: Function, arity?: number, thisArg?: any ): Closure; // tslint-disable-line max-line-length

/**
* Transforms a curried function into a function invoked with multiple arguments.
*
* @param fcn - curried function
* @param thisArg - evaluation context
* @returns uncurried function
*
* @example
* function addX( x ) {
*     return function addY( y ) {
*         return x + y;
*     };
* }
*
* var add = uncurry( addX );
*
* var sum = add( 2, 3 );
* // returns 5
*/
declare function uncurry( fcn: Function, thisArg?: any ): Closure;


// EXPORTS //

export = uncurry;
