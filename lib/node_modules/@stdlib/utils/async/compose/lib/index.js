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
* Function composition.
*
* @module @stdlib/utils/async/compose
*
* @example
* var composeAsync = require( '@stdlib/utils/async/compose' );
*
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

// MODULES //

var composeAsync = require( './compose_async.js' );


// EXPORTS //

module.exports = composeAsync;
