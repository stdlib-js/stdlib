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
* Wrap a function in a try/catch block.
*
* @module @stdlib/utils/try-function
*
* @example
* var wrap = require( '@stdlib/utils/try-function' );
*
* function fcn() {
*     throw new Error( 'beep boop' );
* }
*
* var f = wrap( fcn );
*
* var out = f();
* if ( out instanceof Error ) {
*     console.error( out.message );
*     // => 'beep boop'
* }
*/

// MODULES //

var wrap = require( './wrap.js' );


// EXPORTS //

module.exports = wrap;
