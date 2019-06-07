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
* Checks whether an iteration number passes a test.
*
* @param i - iteration number (starting from zero)
* @returns boolean indicating whether an iteration number passes a test
*/
type Predicate = ( i: number ) => boolean;

/**
* Invokes a function until a test condition is true.
*
* ## Notes
*
* -   The condition is evaluated *after* executing the provided function; thus, `fcn` *always* executes at least once.
* -   When invoked, both the predicate function and the function to invoke are provided a single argument:
*
*        - `i`: iteration number (starting from zero)
*
* @param predicate - function which indicates whether to stop invoking a function
* @param fcn - function to invoke
* @param thisArg - execution context for the invoked function
*
* @example
* function predicate( i ) {
*     return ( i >= 5 );
* }
*
* function beep( i ) {
*     console.log( 'beep: %d', i );
* }
*
* until( predicate, beep );
*/
declare function until( fcn: Function, predicate: Predicate, thisArg?: any ): void; // tslint:disable-line: max-line-length


// EXPORTS //

export = until;
