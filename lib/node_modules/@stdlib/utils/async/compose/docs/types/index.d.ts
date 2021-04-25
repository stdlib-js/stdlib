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
* Callback invoked upon function completion.
*/
type DoneNullary = () => void;

/**
* Callback invoked upon function completion.
*
* @param error - error argument
*/
type DoneUnary = ( error: Error | null ) => void;

/**
* Callback invoked upon function completion.
*
* @param error - error argument
* @param result - function result
*/
type DoneBinary = ( error: Error | null, result: any ) => void;

/**
* Callback invoked upon function completion.
*
* @param error - error argument
* @param result - function result
*/
type DoneCallback = DoneNullary | DoneUnary | DoneBinary;

/**
* Composite function.
*
* @param args - arguments
* @param done - callback to invoke after invoking all functions
*/
type CompositeFunction = ( ...args: Array<any> ) => void;

/**
* Binary function to compose.
*
* @param result - result
* @param next - invoked upon function completion
*/
type BinaryFunction = ( result: any, next: DoneCallback ) => void;

/**
* Function to compose.
*
* ## Notes
*
* - Only the rightmost function is explicitly permitted to accept multiple arguments. All other functions are evaluated as binary functions.
*
* @param args - arguments
* @param next - invoked upon function completion
*/
type VariadicFunction = ( ...args: Array<any> ) => void;

/**
* Function composition.
*
* ## Notes
*
* -   Returns a composite function. Starting from the right, the composite function evaluates each function and passes the result as the first argument of the next function. The result of the leftmost function is the result of the whole.
*
* @param f0 - first function to compose
* @param f1 - second function to compose
* @param f - remaining functions to compose
* @returns composite function
*
* @example
* function a( x, next ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         next( null, 2*x );
*     }
* }
*
* function b( x, next ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         next( null, x+3 );
*     }
* }
*
* function c( x, next ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         next( null, x/5 );
*     }
* }
*
* var f = composeAsync( c, b, a );
*
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
*     // => 3
* }
*
* f( 6, done );
*/
declare function composeAsync( f0: BinaryFunction, f1: VariadicFunction, ...f: Array<VariadicFunction> ): CompositeFunction; // tslint-disable-line max-line-length


// EXPORTS //

export = composeAsync;
