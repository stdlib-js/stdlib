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

/**
* If a function does not return an error, invoke a callback with the function result; otherwise, invoke a second function `y`.
*
* @module @stdlib/utils/async/try-then
*
* @example
* var randu = require( '@stdlib/random/base/randu' );
* var trythenAsync = require( '@stdlib/utils/async/try-then' );
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

// MODULES //

var trythenAsync = require( './try_then_async.js' );


// EXPORTS //

module.exports = trythenAsync;
