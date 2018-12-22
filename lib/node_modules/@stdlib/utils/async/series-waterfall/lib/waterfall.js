/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var factory = require( './factory.js' );


// MAIN //

/**
* Executes functions in series, passing the results of one function as arguments to the next function.
*
* @param {FunctionArray} fcns - array of functions
* @param {Callback} clbk - callback to invoke upon completion
* @param {*} [thisArg] - function context
* @throws {TypeError} first argument must be an array of functions
* @throws {TypeError} second argument must be a function
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
function waterfall( fcns, clbk, thisArg ) {
	factory( fcns, clbk, thisArg )();
}


// EXPORTS //

module.exports = waterfall;
