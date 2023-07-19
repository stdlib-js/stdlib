/**
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

'use strict';

/**
* Return a function that applies a specified number arguments to a provided function.
*
* @module @stdlib/utils/nary-function
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
*
* function foo() {
*     var s;
*     var i;
*
*     s = 0;
*     for ( i = 0; i < arguments.length; i++ ) {
*         s += arguments[ i ];
*     }
*     return s;
* }
*
* var bar = naryFunction( foo, 2 );
*
* var out = bar( 1, 2, 3, 4, 5, 6 );
* // returns 3
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
