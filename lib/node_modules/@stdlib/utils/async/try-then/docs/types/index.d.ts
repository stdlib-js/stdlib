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
* Function to invoke if `x` returns an error.
*
* @param clbk - callback to invoke upon function completion
*/
type Unary = ( clbk: Callback ) => void;

/**
* Function to invoke if `x` returns an error.
*
* @param error - the error from `x`
* @param clbk - callback to invoke upon function completion
*/
type Binary = ( error: Error, clbk: Callback ) => void;

/**
* Function to invoke if `x` returns an error.
*
* @param error - the error from `x`
* @param clbk - callback to invoke upon function completion
*/
type ThenFunction = Unary | Binary;

/**
* First function to invoke.
*
* @param clbk - callback to invoke upon function completion
*/
type TryFunction = ( clbk: Callback ) => void;

/**
* If a function does not return an error, invokes a callback with the function result; otherwise, invokes a second function `y`.
*
* @param x - function to invoke
* @param y - function to invoke if `x` returns an error
* @param done - callback to invoke upon completion
*
* @example
* var randu = require( `@stdlib/random/base/randu` );
*
* function x( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         if ( randu() > 0.5 ) {
*             return clbk( null, 1.0 );
*         }
*         clbk( new Error( 'beep' ) );
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
*
* trythenAsync( x, y, done );
*/
declare function trythenAsync( x: TryFunction, y: ThenFunction, done: Callback ): void; // tslint-disable-line max-line-length


// EXPORTS //

export = trythenAsync;
