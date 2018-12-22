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
* Invoke a function while a test condition is true.
*
* @module @stdlib/utils/async/do-while
*
* @example
* var doWhileAsync = require( '@stdlib/utils/async/do-while' );
*
* function fcn( i, next ) {
*     setTimeout( onTimeout, i );
*     function onTimeout() {
*         console.log( 'beep: %d', i );
*         next();
*     }
* }
*
* function predicate( i, clbk ) {
*     clbk( null, i < 5 );
* }
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* doWhileAsync( fcn, predicate, done );
*/

// MODULES //

var doWhileAsync = require( './do_while_async.js' );


// EXPORTS //

module.exports = doWhileAsync;
