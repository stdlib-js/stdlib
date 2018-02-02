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
* If a function does not throw, return the function return value; otherwise, return the return value of a second function `y`.
*
* @module @stdlib/utils/try-then
*
* @example
* var randu = require( '@stdlib/random/base/randu' );
* var trythen = require( '@stdlib/utils/try-then' );
*
* function x() {
*     if ( randu() < 0.5 ) {
*         throw new Error( 'beep' );
*     }
*     return 1.0;
* }
*
* function y() {
*     return randu();
* }
*
* var z = trythen( x, y );
* // returns <number>
*/

// MODULES //

var trythen = require( './try_then.js' );


// EXPORTS //

module.exports = trythen;
