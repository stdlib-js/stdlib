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
*/
type Nullary = () => void;

/**
* Callback function.
*
* @param error - encountered error or null
*/
type Unary = ( error: Error | null ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param result - test result
*/
type Binary = ( error: Error | null, result: boolean ) => void;

/**
* Callback function.
*
* @param error - encountered error or null
* @param result - test result
*/
type Callback = Nullary | Unary | Binary;

/**
* Callback invoked upon completion.
*/
type DoneNullary = () => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error or null
*/
type DoneUnary = ( error: Error | null ) => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error or null
* @param args - arguments passed to last `next` call
*/
type DoneBinary = ( error: Error | null, ...args: Array<any> ) => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error or null
* @param args - arguments passed to last `next` call
*/
type DoneCallback = DoneNullary | DoneUnary | DoneBinary;

/**
* Checks whether an element in a collection passes a test.
*
* @param i - iteration number (starting from one)
* @param clbk - a callback indicating whether to invoke `fcn`
*/
type Predicate = ( i: number, clbk: Callback ) => void;

/**
* Invoked function.
*
* @param i - iteration number (starting from zero)
* @param next - a callback which must be invoked before proceeding to the next iteration
*/
type Fcn = ( i: number, next: Function ) => void;

/**
* Invokes a function until a test condition is true.
*
* @param fcn - function to invoke
* @param predicate - function which indicates whether to continue invoking a function
* @param done - callback to invoke upon completion
* @param thisArg - execution context for the invoked function
*
* @example
* function fcn( i, next ) {
*     setTimeout( onTimeout, i );
*     function onTimeout() {
*         console.log( 'beep: %d', i );
*         next();
*     }
* }
*
* function predicate( i, clbk ) {
*     clbk( null, i >= 5 );
* }
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* doUntilAsync( fcn, predicate, done );
*/
declare function doUntilAsync( fcn: Fcn, predicate: Predicate, done: DoneCallback, thisArg?: any ): void; // tslint-disable-line max-line-length


// EXPORTS //

export = doUntilAsync;
