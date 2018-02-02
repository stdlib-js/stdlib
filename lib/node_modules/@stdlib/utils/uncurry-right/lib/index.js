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
* Transform a curried function into a function invoked with multiple arguments.
*
* @module @stdlib/utils/uncurry-right
*
* @example
* var uncurryRight = require( '@stdlib/utils/uncurry-right' );
*
* function addX( x ) {
*     return function addY( y ) {
*         return x + y;
*     };
* }
*
* var add = uncurryRight( addX );
*
* var sum = add( 3, 2 );
* // returns 5
*/

// MODULES //

var uncurryRight = require( './uncurry_right.js' );


// EXPORTS //

module.exports = uncurryRight;
