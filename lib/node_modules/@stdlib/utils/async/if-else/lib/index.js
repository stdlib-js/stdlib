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
* If a predicate function returns a truthy value, return `x`; otherwise, return `y`.
*
* @module @stdlib/utils/async/if-else
*
* @example
* var randu = require( '@stdlib/random/base/randu' );
* var ifelseAsync = require( '@stdlib/utils/async/if-else' );
*
* function predicate( clbk ) {
*     setTimeout( onTimeout, 0 );
*     function onTimeout() {
*         clbk( null, randu() > 0.5 );
*     }
* }
*
* function done( error, result ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( result );
* }
* ifelseAsync( predicate, 1.0, -1.0, done );
*/

// MODULES //

var ifelseAsync = require( './if_else_async.js' );


// EXPORTS //

module.exports = ifelseAsync;
