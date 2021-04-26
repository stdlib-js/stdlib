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

// TypeScript Version: 2.0

/**
* Callback function.
*
* @param error - encountered error or null
* @param args - results
*/
type Callback = ( error: Error | null, ...args: Array<any> ) => void;

/**
* Predicate callback function.
*/
type PredicateNullary = () => void;

/**
* Predicate callback function.
*
* @param error - error object
*/
type PredicateUnary = ( error: Error ) => void;

/**
* Predicate callback function.
*
* @param error - error object
* @param bool - condition used to determine whether to invoke `x` or `y`
*/
type PredicateBinary = ( error: Error, bool: boolean ) => void;

/**
* Predicate callback function.
*
* @param error - error object
* @param bool - condition used to determine whether to invoke `x` or `y`
*/
type PredicateCallback =  PredicateNullary | PredicateUnary | PredicateBinary;

/**
* Predicate function.
*
* @param clbk - callback to invoke upon predicate function completion
*/
type Predicate = ( clbk: PredicateCallback ) => void;

/**
* Function invoked after condition check.
*
* @param clbk - callback to invoke upon function completion
*/
type ResultFunction = ( clbk: Callback ) => void;

/**
* If a predicate function returns a truthy value, invokes `x`; otherwise, invokes `y`.
*
* @param predicate - predicate function
* @param x - function to invoke if a condition is truthy
* @param y - function to invoke if a condition is falsy
* @param done - callback to invoke upon completion
*
* @example
* var randu = require( `@stdlib/random/base/randu` );
*
* function predicate( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         clbk( null, randu() > 0.5 );
*     }
* }
*
* function x( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         clbk( null, 1.0 );
*     }
* }
*
* function y( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         clbk( null, -1.0 );
*     }
* }
*
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
* }
* ifthenAsync( predicate, x, y, done );
*/
declare function ifthenAsync( predicate: Predicate, x: ResultFunction, y: ResultFunction, done: Callback ): void; // tslint-disable-line max-line-length


// EXPORTS //

export = ifthenAsync;
