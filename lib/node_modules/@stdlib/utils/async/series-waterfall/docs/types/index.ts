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
* Callback invoked upon completion.
*/
type DoneNullary = () => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error or null
*/
type DoneUnary = ( error: Error ) => void;

/**
* Callback invoked upon completion.
*
* @param error - encountered error or null
*/
type DoneCallback = DoneNullary | DoneUnary;

/**
* Executes functions in series, passing the results of one function as arguments to the next function.
*/
type WaterfallFunction = () => void;

/**
* Interface for `waterfall`.
*/
interface Waterfall {
	/**
	* Executes functions in series, passing the results of one function as arguments to the next function.
	*
	* @param fcns - array of functions
	* @param clbk - callback to invoke upon completion
	* @param thisArg - function context
	*
	* @example
	* function foo( next ) {
	*     next( null, 'beep' );
	* }
	*
	* function bar( str, next ) {
	*     console.log( str );
	*     // => 'beep'
	*
	*     next();
	* }
	*
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	*
	* var fcns = [ foo, bar ];
	*
	* waterfall( fcns, done );
	*/
	( fcns: Array<Function>, clbk: DoneCallback, thisArg?: any ): void;

	/**
	* Returns a reusable waterfall function.
	*
	* @param fcns - array of functions
	* @param clbk - callback to invoke upon completion
	* @param thisArg - function context
	* @returns waterfall function
	*
	* @example
	* function foo( next ) {
	*     next( null, 'beep' );
	* }
	*
	* function bar( str, next ) {
	*     console.log( str );
	*     // => 'beep'
	*
	*     next();
	* }
	*
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	*
	* var fcns = [ foo, bar ];
	*
	* var waterfall = factory( fcns, done );
	*
	* waterfall();
	* waterfall();
	* waterfall();
	*/
	factory( fcns: Array<Function>, clbk: DoneCallback, thisArg?: any ): WaterfallFunction; // tslint-disable-line max-line-length
}

/**
* Executes functions in series, passing the results of one function as arguments to the next function.
*
* @param fcns - array of functions
* @param clbk - callback to invoke upon completion
* @param thisArg - function context
*
* @example
* function foo( next ) {
*     next( null, 'beep' );
* }
*
* function bar( str, next ) {
*     console.log( str );
*     // => 'beep'
*
*     next();
* }
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* var fcns = [ foo, bar ];
*
* waterfall( fcns, done );
*/
declare var waterfall: Waterfall;


// EXPORTS //

export = waterfall;
